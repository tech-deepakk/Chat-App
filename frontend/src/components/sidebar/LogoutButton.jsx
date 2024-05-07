import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";
function LogoutButton() {
  const { loading, logout } = useLogout();
  const handleOnLogout = () => {
    logout();
  };
  return (
    <div className="mt-auto">
      {loading ? (
        <span>loading spinner</span>
      ) : (
        <BiLogOut
          className="w-6 h-6 text-white cursor-pointer"
          onClick={handleOnLogout}
        />
      )}
    </div>
  );
}

export default LogoutButton;
