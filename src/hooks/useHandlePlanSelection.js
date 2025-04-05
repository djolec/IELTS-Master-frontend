import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router";

const useHandlePlanSelection = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const navigate = useNavigate();

  const handlePlanSelection = (plan) => {
    // Store the selection in localStorage before redirecting
    localStorage.setItem("selectedPlan", JSON.stringify({ plan }));

    if (isAuthenticated) {
      // If already authenticated, redirect to subscription page
      navigate(`/subscribe?plan=${plan}`);
    } else {
      // If not authenticated, redirect to Auth0 login with return URL
      loginWithRedirect({
        // This ensures they come back to the subscription page after auth
        appState: {
          returnTo: `/subscribe?plan=${plan}`,
        },
      });
    }
  };

  return handlePlanSelection;
};
export default useHandlePlanSelection;
