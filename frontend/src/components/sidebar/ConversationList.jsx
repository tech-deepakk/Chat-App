import React from "react";
import Conversation from "./Conversation";
import useGetConversation from "../../hooks/useGetConversation";

function ConversationList() {
  const { loading, conversation } = useGetConversation([]);

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {loading ? (
        <span className="loading loading-spinner loading-md"></span>
      ) : (
        conversation.map((user, indx) => (
          <Conversation
            key={user._id}
            user={user}
            lastIndx={indx === conversation.length - 1}
          ></Conversation>
        ))
      )}
    </div>
  );
}

export default ConversationList;
