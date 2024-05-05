import ConversationList from "./ConversationList";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

function Sidebar() {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <SearchInput></SearchInput>
      <div className="divider px-3"></div>
      <ConversationList></ConversationList>
      <LogoutButton></LogoutButton>
    </div>
  );
}

export default Sidebar;
