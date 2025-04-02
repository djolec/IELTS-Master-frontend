import { useAuth0 } from "@auth0/auth0-react";
import { useCreateUser } from "../features/authentication/useUserActions";
import { useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router";

const AuthCallbackPage = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth0();
  const { createUser } = useCreateUser();
  const [searchParams] = useSearchParams();

  const returnTo = searchParams.get("returnTo") || "/";

  const hasCreatedUser = useRef(false);

  useEffect(() => {
    if (user?.sub && user?.email && !hasCreatedUser.current) {
      createUser({ auth0Id: user.sub, email: user.email });
      hasCreatedUser.current = true;
    }

    navigate(returnTo);
  }, [createUser, logout, navigate, returnTo, user]);

  return <>Loading...</>;
};
export default AuthCallbackPage;
