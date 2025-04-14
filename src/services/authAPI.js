import authInstance from "../axios/axiosInstance";

export const signIn = async (data) => {
  console.log("data received at signin", data);
  return await authInstance.post("/sign-in", data);
};
