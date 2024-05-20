import mongoose from "mongoose";
import Conversation from "../model/conversation.model.js";
import Message from "../model/message.model.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const receiverId = new mongoose.Types.ObjectId(req.params.id);
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: {
        $all: [senderId, receiverId],
      },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }
    // Socket Io will introduce here
    // this will run in paraller
    await Promise.all([conversation.save(), newMessage.save()]);
    res.status(201).json(newMessage);
  } catch (error) {
    console.log("error in send message", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export const getMessage = async (req, res) => {
  try {
    const userToChat = new mongoose.Types.ObjectId(req.params.id);
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: {
        $all: [senderId, userToChat],
      },
    }).populate("messages"); //It gives actual message not the ref

    if (!conversation) {
      return res.status(200).json([]);
    }
    
    const messages = conversation.messages;
    res.status(201).json(messages);
  } catch (error) {
    console.log("error in get message", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
