import { useAuthContext } from "@/app/contexts/AuthContext";
import { SignInType } from "@/app/types/auth";
import { Button, Form, Input } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

const SignInForm = () => {
  const router = useRouter();
  const { signIn } = useAuthContext();

  const onFinish = async (values: SignInType) => {
    await signIn(values.email, values.password);
    router.push("/profile");
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
