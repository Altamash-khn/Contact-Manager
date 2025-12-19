"use client";
import React from "react";
import { loginAction } from "../actions/auth";

const LoginForm = () => {
  return (
    <form action={loginAction}>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-red-500 sm:text-sm p-2 outline-none"
        />
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          required
          className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-red-500 sm:text-sm p-2 outline-none"
        />
      </div>

      <button type="submit" className="w-full flex justify-center mt-6 bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
