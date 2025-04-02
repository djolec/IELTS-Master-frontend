import { useMutation } from "@tanstack/react-query";
import { apiCreateUser } from "../../services/apiUser";
import { useAuth0 } from "@auth0/auth0-react";

export const useCreateUser = () => {
  const { getAccessTokenSilently } = useAuth0();

  const {
    mutate: createUser,
    isPending,
    isError,
  } = useMutation({
    mutationFn: async (user) => {
      const accessToken = await getAccessTokenSilently();
      apiCreateUser(user, accessToken);
    },
  });

  return { createUser, isPending, isError };
};
