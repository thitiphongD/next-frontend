"use client";
import React from "react";
import { withAuth } from "../components/withAuth";
import { useAuthContext } from "../contexts/AuthContext";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "antd/es/radio";

const ProfilePage = () => {
  const { user, signOut } = useAuthContext();
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut();
      router.push("/auth");
    } catch (error) {
      console.error("Sign out failed:", error);
    }
  };

  return (
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
  );
};

export default withAuth(ProfilePage);
