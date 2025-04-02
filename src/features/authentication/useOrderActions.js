import { useMutation } from "@tanstack/react-query";
import { apiCreateCheckoutSession } from "../../services/apiOrder";
import { useAuth0 } from "@auth0/auth0-react";
import { toast } from "sonner";

export const useCreateCheckoutSession = () => {
  const { getAccessTokenSilently, logout } = useAuth0();

  const {
    mutateAsync: createCheckoutSession,
    isPending,
    reset,
  } = useMutation({
    mutationFn: async (data) => {
      const accessToken = await getAccessTokenSilently();

      //   apiCreateCheckoutSession(user, plan, accessToken);
      const response = await apiCreateCheckoutSession(data, accessToken);

      // This is important - return the actual data
      return response.data;
    },
    onError: (err) => {
      if (err.error === "invalid_grant") {
        logout();
      } else {
        toast.error(err.toString());
        reset();
      }
    },
  });

  return { createCheckoutSession, isPending };
};
