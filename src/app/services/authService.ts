import { API_URL } from "../utils/api";

export const signInService = async (email: string, password: string) => {
  // const url = "http://localhost:3010/api/signIn";
  const url = API_URL("signIp");
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || "Sign In failed");
  }

  return await response.json();
};

export const signUpService = async (
  email: string,
  password: string,
  confirmPassword: string
) => {
  const url = API_URL("signUp");
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, confirmPassword }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Sign Up failed");
  }

  return await response.json();
};
