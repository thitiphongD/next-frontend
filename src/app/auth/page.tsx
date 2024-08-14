"use client";
import React, { useState } from "react";
import { AuthFormType } from "../types/auth";
import SignInForm from "../components/form/SignInForm";
import SignUpForm from "../components/form/SignUpForm";

const AuthenticationPage = () => {
  const [formType, setFormType] = useState<AuthFormType>(AuthFormType.SignIn);

  const handleForm = () => {
    setFormType((prevType) =>
      prevType === AuthFormType.SignIn
        ? AuthFormType.SignUp
        : AuthFormType.SignIn
    );
  };

  return (
    <div className="flex flex-col items-center justify-between py-24">
      {formType === AuthFormType.SignIn ? (
        <SignInForm />
      ) : (
        <SignUpForm onBack={handleForm} />
      )}

      <span
        className="text-blue-600 text-sm cursor-pointer"
        onClick={handleForm}
      >
        {formType === AuthFormType.SignIn
          ? "Create account."
          : "Already have an account?"}
      </span>
    </div>
  );
};

export default AuthenticationPage;
