"use client";
import React, { useState } from "react";
import { withAuth } from "../components/withAuth";
import { useAuthContext } from "../contexts/AuthContext";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button, Modal } from "antd";

const ProfilePage = () => {
  const { user, signOut } = useAuthContext();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const onOk = async () => {
    await signOut();
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
        {user && (
          <div>
            <p>Welcome, {user.name}</p>
            <p>Email: {user.email}</p>
            {user.profileImage && (
              <Image
                src={user.profileImage}
                alt="Profile"
                width={300}
                height={300}
              />
            )}
          </div>
        )}
        <Button onClick={handleSignOut}>Sign Out</Button>
      </div>
    </>
  );
};

export default withAuth(ProfilePage);
