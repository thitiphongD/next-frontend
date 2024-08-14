export enum AuthFormType {
  SignIn = 1,
  SignUp,
}

export type SignInType = {
  email: string;
  password: string;
};

export type SignUpType = {
  email: string;
  password: string;
  confirmPassword: string;
};

export interface User {
  email: string;
  name: string | null;
  profileImage: string | null;
  role: string;
  token: string;
}

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

export interface SignInResponse {
  code: number;
  email: string;
  name: string | null;
  profileImage: string | null;
  token: string;
  message?: string;
}
