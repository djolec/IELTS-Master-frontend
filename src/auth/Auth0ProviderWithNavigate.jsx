import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router";

const Auth0ProviderWithNavigate = ({ children }) => {
  const navigate = useNavigate();
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;
  const audience = import.meta.env.VITE_AUTH0_AUDIENCE;

  if (!domain || !clientId || !redirectUri || !audience) {
    throw new Error("Unable to initialize auth");
  }

  const onRedirectCallback = (appState) => {
    navigate(
      `/auth-callback?returnTo=${encodeURIComponent(appState?.returnTo || "/")}`
    );
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      useRefreshTokens={true}
      cacheLocation="localstorage" // ✅ Persist refresh tokens across sessions
      authorizationParams={{
        redirect_uri: redirectUri,
        audience,
        scope: "profile email offline_access",
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};
export default Auth0ProviderWithNavigate;
