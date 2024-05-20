import { useRef } from "react";
import { IoMdSearch } from "react-icons/io";
import useConversation from "../zustand/useConversation";
import useGetConversation from "../../hooks/useGetConversation";
import toast from "react-hot-toast";
function SearchInput() {
  const searchName = useRef("");
  const { setSelectedConversation } = useConversation();
  const { conversation } = useGetConversation();

  const handleOnSearch = (event) => {
    event.preventDefault();
    const searchInput = searchName.current.value;
    if (!searchInput) return;
    if (searchInput.length < 3) {
      return toast.error("Search must be greater than 3 character");
    }
    const filterConversation = conversation.find((c) =>
      c.userName.toLowerCase().includes(searchInput.toLowerCase())
    );

    if (filterConversation) {
      setSelectedConversation(filterConversation);
      searchName.current.value = "";
    } else {
      toast.error("No Such User Found!");
    }
  };
  return (
    <form className="flex items-center gap-2" onSubmit={handleOnSearch}>
      <input
        ref={searchName}
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full"
      />
      <button type="submit" className="btn btn-circle bg-pink-300 text-white">
        <IoMdSearch className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
}

export default SearchInput;
