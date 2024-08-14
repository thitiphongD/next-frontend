"use client";

import Link from "next/link";

const AdminSidebar = () => {
  return (
    <nav>
      <Link href="/admin/dashboard">Admin Dashboard</Link>
      <Link href="/admin/users">Manage Users</Link>
      {/* เพิ่ม links อื่นๆ สำหรับ admin */}
    </nav>
  );
};

export default AdminSidebar;
