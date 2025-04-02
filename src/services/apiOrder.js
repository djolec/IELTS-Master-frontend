import { serverAxios } from "./axios";

export const apiCreateCheckoutSession = async (data, token) => {
  return serverAxios.post("/api/order/checkout/create-checkout-session", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
