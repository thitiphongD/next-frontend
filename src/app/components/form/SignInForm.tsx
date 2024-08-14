import { SignInType } from "@/app/types/auth";
import { Button, Form, FormProps, Input } from "antd";
import React from "react";

const SignInForm = () => {
  const onFinish: FormProps<SignInType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  return (
    <Form name="basic" onFinish={onFinish}>
      <Form.Item<SignInType>
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<SignInType>
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignInForm;
