"use client";
import React from "react";
import { deleteSession } from "../_lib/session";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();
  async function handleLogout() {
    try {
      await deleteSession();
      router.push("/login");
    } catch (error) {
      console.log("error", error);
    }
  }
  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 bg-red-500 hover:bg-red-600 transition-colors text-white cursor-pointer"
    >
      logout
    </button>
  );
};

export default LogoutButton;
