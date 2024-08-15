"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button, Modal } from "antd";

const ProfilePage = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const onOk = async () => {
    setOpen(false);
    router.push("/auth");
  };

  const onCancel = async () => {
    setOpen(false);
  };

  const handleSignOut = async () => {
    try {
      showModal();
    } catch (error) {
      console.error("Sign out failed:", error);
    }
  };

  return (
    <>
      <Modal
        title="Are you sure to sign out?"
        open={open}
        onOk={onOk}
        onCancel={onCancel}
        okText="Confirm"
        cancelText="Cancel"
        width={300}
      ></Modal>

      <div>
        <h1>Profile Page</h1>

        <Button onClick={handleSignOut}>Sign Out</Button>
      </div>
    </>
  );
};

export default ProfilePage;
