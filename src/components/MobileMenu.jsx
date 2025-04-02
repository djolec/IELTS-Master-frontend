import { useAuth0 } from "@auth0/auth0-react";
import { LogOut, User, X } from "lucide-react";
import { Link } from "react-router";

const MobileMenu = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div
      className={`fixed top-0 right-0 h-full w-[300px] bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-4">
          <span className="text-lg font-bold">Menu</span>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Close menu</span>
          </button>
        </div>

        {isAuthenticated && (
          <div className="p-4 border-b">
            <p className="font-medium truncate bg-blue-600 px-4 py-2 text-white rounded-md w-full text-center">
              {user?.email}
            </p>
          </div>
        )}

        <nav className="">
          <div className="flex flex-col p-4 space-y-4">
            <Link
              className="text-lg font-medium hover:text-blue-600"
              href="#features"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              to={"/reading-test"}
              className="text-lg font-medium hover:text-blue-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Practice Tests
            </Link>
            <Link
              className="text-lg font-medium hover:text-blue-600"
              to={"/pricing"}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>
          </div>

          {isAuthenticated ? (
            <div className="p-4 border-t space-y-4">
              <Link
                className="flex items-center gap-2 text-lg font-medium hover:text-blue-600"
                href="/profile"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <User className="h-5 w-5" />
                User Profile
              </Link>

              <button
                className="flex items-center gap-2 text-lg font-medium text-red-600 hover:text-red-700 w-full text-left"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  logout({ returnTo: window.location.origin });
                }}
              >
                <LogOut className="h-5 w-5" />
                Log Out
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-4 px-4">
              <button
                className="text-lg font-medium hover:text-blue-600 text-left"
                href="/signin"
                onClick={async () => await loginWithRedirect()}
              >
                Sign In
              </button>

              <button
                href="/register"
                onClick={async () =>
                  loginWithRedirect({
                    authorizationParams: {
                      screen_hint: "signup",
                    },
                  })
                }
                className="inline-flex h-12 items-center justify-center rounded-md bg-blue-600 px-6 text-base font-medium text-white transition-colors hover:bg-blue-600/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                Get Started
              </button>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};
export default MobileMenu;
