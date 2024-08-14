import { SignUpType } from "@/app/types/auth";
import { Button, Form, FormProps, Input } from "antd";
import React from "react";

type Props = {
  onBack: () => void;
};

const SignUpForm = (props: Props) => {
  const onFinish: FormProps<SignUpType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  return (
    <Form name="basic" onFinish={onFinish}>
      <Form.Item<SignUpType>
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<SignUpType>
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item<SignUpType>
        label="Confirm Password"
        name="confirmPassword"
        rules={[
          { required: true, message: "Please input your confirm password!" },
        ]}
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

export default SignUpForm;
