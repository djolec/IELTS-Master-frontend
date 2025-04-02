import { Link } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";
import UsernameMenu from "./UsernameMenu";

const MainNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <nav className="hidden md:flex gap-4 sm:gap-6 items-center">
      <Link className="text-base font-medium hover:text-blue-600">
        Features
      </Link>

      <Link
        to={"/reading-test"}
        className="text-base font-medium hover:text-blue-600"
      >
        Practice Tests
      </Link>

      <Link
        to={"/pricing"}
        className="text-base font-medium hover:text-blue-600"
      >
        Pricing
      </Link>

      {isAuthenticated ? (
        <UsernameMenu />
      ) : (
        <div className="md:flex gap-4 sm:gap-6 items-center">
          <button
            className="text-base font-medium hover:text-blue-600 cursor-pointer"
            onClick={async () => await loginWithRedirect()}
          >
            Sign In
          </button>

          <button
            onClick={async () =>
              await loginWithRedirect({
                authorizationParams: {
                  screen_hint: "signup",
                },
              })
            }
            className="hidden md:inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-base font-medium text-white transition-colors hover:bg-blue-600/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 cursor-pointer"
          >
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};
export default MainNav;
