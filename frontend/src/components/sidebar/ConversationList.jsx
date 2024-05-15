import React from "react";
import Conversation from "./Conversation";
import useGetConversation from "../../hooks/useGetConversation";

function ConversationList() {
  const { loading, conversation } = useGetConversation([]);
  console.log(conversation);
  return (
    <div className="py-2 flex flex-col overflow-auto">
      <Conversation></Conversation>
      <Conversation></Conversation>
      <Conversation></Conversation>

      <Conversation></Conversation>
      <Conversation></Conversation>
      <Conversation></Conversation>
    </div>
  );
}

export default ConversationList;
