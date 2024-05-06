import MessageContainer from "../message/MessageContainer";
import Sidebar from "../sidebar/Sidebar";

function Home() {
  return (
    <div
      className="flex sm:h-[450px] md:h-[550px] rounded-lg 
      overflow-hidden shadow-md  bg-clip-padding backdrop-filter backdrop-blur-lg
    "
    >
      <Sidebar></Sidebar>
      <MessageContainer></MessageContainer>
    </div>
  );
}

export default Home;
