import { useAuth0 } from "@auth0/auth0-react";
import { LogOut, User } from "lucide-react";
import { useState, useRef } from "react";
import { Link } from "react-router";
import useClickOutside from "../hooks/useClickOutside";

const UsernameMenu = () => {
  const { user, logout } = useAuth0();
  const [isUserOpen, setIsUserOpen] = useState(false);
  const ref = useRef(null);

  useClickOutside(ref, setIsUserOpen);

  const handleLogout = () => {
    console.log(window.location.origin);
    setIsUserOpen(false);
    // logout({ returnTo: window.location.origin });
    logout({ logoutParams: { returnTo: window.location.origin } });
  };

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setIsUserOpen((prev) => !prev)}
        className="bg-blue-600 px-4 py-2 text-base font-medium text-white transition-colors hover:bg-blue-600/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 cursor-pointer flex gap-1 items-center justify-center rounded-md"
      >
        {user?.email}
      </button>

      {isUserOpen && (
        <div className="absolute right-0 origin-top-right mt-2 z-10 rounded-md bg-white flex flex-col w-full shadow-md overflow-hidden border border-gray-200">
          <Link
            onClick={() => setIsUserOpen(false)}
            className="text-center font-medium transition-colors hover:bg-gray-100 py-2 flex items-center justify-start gap-1 px-4"
          >
            <User className="h-5 w-5" />
            User Profile
          </Link>

          <button
            className="cursor-pointer font-medium transition-colors hover:bg-gray-100 py-2 flex items-center justify-start gap-1 px-4 text-red-600 hover:text-red-700"
            onClick={handleLogout}
          >
            <LogOut className="h-5 w-5" />
            Log Out
          </button>
        </div>
      )}
    </div>
  );
};
export default UsernameMenu;
