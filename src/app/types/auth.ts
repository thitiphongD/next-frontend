export enum AuthFormType {
  SignIn = 1,
  SignUp,
}

export type SignInType = {
  email?: string;
  password?: string;
};

export type SignUpType = {
  email?: string;
  password?: string;
  confirmPassword?: string;
};
