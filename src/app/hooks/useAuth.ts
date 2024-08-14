import { useState, useEffect } from "react";
import { User } from "../types/auth";
import { signInService } from "../services/authService";

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser: User = JSON.parse(storedUser);
        setUser(parsedUser);
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Failed to parse user from localStorage:", error);
        localStorage.removeItem("user");
      }
    }
  }, []);

  const signIn = async (email: string, password: string): Promise<void> => {
    try {
      const data = await signInService(email, password);
      if (data.code === 200) {
        const userData: User = {
          email: data.email,
          name: data.name,
          profileImage: data.profileImage,
          role: data.role,
          token: data.token,
        };
        localStorage.setItem("user", JSON.stringify(userData));
        setUser(userData);
        setIsAuthenticated(true);
      } else {
        throw new Error(data.message || "Login failed");
      }
    } catch (error) {
      console.error("SignIn error:", error);
      throw error;
    }
  };

  const signOut = async (): Promise<void> => {
    localStorage.removeItem("user");
    setUser(null);
    setIsAuthenticated(false);
  };

  return { user, isAuthenticated, signIn, signOut };
};
