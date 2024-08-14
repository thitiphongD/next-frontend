"use client";

import { useEffect } from "react";
import { useAuthContext } from "../contexts/AuthContext";
import { useRouter } from "next/navigation";

export function withAuth<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  return function WithAuth(props: P) {
    const { isAuthenticated } = useAuthContext();
    const router = useRouter();

    useEffect(() => {
      if (!isAuthenticated) {
        router.push("/auth");
      }
    }, [isAuthenticated, router]);

    if (!isAuthenticated) {
      return null; // หรือแสดง loading component
    }

    return <WrappedComponent {...props} />;
  };
}
