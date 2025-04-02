import { serverAxios } from "./axios";

export const apiCreateUser = async (user, token) => {
  return serverAxios.post("api/user", user, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
