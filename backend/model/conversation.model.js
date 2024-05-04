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
      default: [],
    },
  },
  { timestamps: true }
);

const Conversation = mongoose.model("conversations", conversationSchema);

export default Conversation;
