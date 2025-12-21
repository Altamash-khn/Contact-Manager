"use server";

import { redirect } from "next/navigation";
import axios from "axios";
import { deleteSession, createSession } from "../_lib/session";

const API_URL = "http://localhost:3001";

export const loginAction = async (form) => {
  const res = await axios.get(
    `${API_URL}/users?email=${form.get("email")}&password=${form.get(
      "password"
    )}`
  );
  const user = res.data[0];
  if (!user) throw new Error("Invalid credentials");

  // Set cookie or session here as needed
  await createSession({ id: user.id, name: user.name, email: user.email });
  redirect("/contact");
};

export const logoutAction = async () => {
  await deleteSession();
  // redirect("/login");
};
