"use client";

import Link from "next/link";

const MemberNavbar = () => {
  return (
    <nav>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/profile">Profile</Link>
      {/* เพิ่ม links อื่นๆ สำหรับ member */}
    </nav>
  );
};

export default MemberNavbar;
