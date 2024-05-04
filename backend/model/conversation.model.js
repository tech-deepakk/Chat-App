import mongoose from "mongoose";
const conversationSchema = new mongoose.Schema(
  {
    participants: {
      type: Array,
      ref: "User",
    },

    messages: {
      type: Array,
      require: true,
      ref: "messages",
      default: [],
    },
  },
  { timestamps: true }
);

const Conversation = mongoose.model("conversations", conversationSchema);

export default Conversation;
