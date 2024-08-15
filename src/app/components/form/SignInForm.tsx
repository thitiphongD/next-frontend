"use client";

import React from "react";
import { SignInType } from "@/app/types/auth";
import { Button, Form, Input } from "antd";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const SignInForm: React.FC = () => {
  const router = useRouter();

  const onFinish = async (values: SignInType) => {
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email: values.email,
        password: values.password,
      });

      if (result?.ok) {
        router.push("/profile");
      } else {
        console.error("Sign in failed", result?.error);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <Form name="basic" onFinish={onFinish} layout="vertical">
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignInForm;
