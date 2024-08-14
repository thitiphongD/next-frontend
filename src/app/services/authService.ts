import { SignInResponse } from "../types/auth";
import { API_URL } from "../utils/api";

export const signInService = async (email: string, password: string) => {
  const url = API_URL("signIn");
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Login failed");
  }

  return await response.json();
};
