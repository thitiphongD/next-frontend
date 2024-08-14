"use client";

import { useAuthContext } from "../contexts/AuthContext";
import AdminSidebar from "./AdminSidebar";
import MemberNavbar from "./MemberNavbar";

const Navbar = () => {
  const { user } = useAuthContext();

  if (!user) return null;

  return user.role === "admin" ? <MemberNavbar /> : <AdminSidebar />;
};

export default Navbar;
