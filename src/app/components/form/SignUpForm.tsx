import { signUpService } from "@/app/services/authService";
import { SignUpType } from "@/app/types/auth";
import { Button, Form, Input, Modal } from "antd";
import React from "react";

interface Props {
  onBack: () => void;
}

const SignUpForm: React.FC<Props> = ({ onBack }) => {
  const SignUpSuccess = () => {
    Modal.success({
      content: "Sign up Success!!",
      onOk() {
        onBack();
      },
    });
  };

  const onFinish = async (values: SignUpType): Promise<void> => {
    try {
      console.log("Received values of form:", values);
      const data = await signUpService(
        values.email,
        values.password,
        values.confirmPassword
      );
      if (data.code === 201) {
        SignUpSuccess();
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
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

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignUpForm;
