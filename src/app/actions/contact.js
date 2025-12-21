"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createContact, updateContact, deleteContact } from "../api/contact";

export const createContactAction = async (formData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const userId = formData.get("userId");

  await createContact({ name, email, userId });

  revalidatePath("/contact");
  redirect("/contact");
};

export const updateContactAction = async (formData) => {
  const id = formData.get("contactId");
  const name = formData.get("name");
  const email = formData.get("email");

  await updateContact(id, { name, email });

  revalidatePath("/contact");
  redirect("/contact");
};

export const deleteContactAction = async (formData) => {
  const contactId = formData.get("contactId");

  await deleteContact(contactId);

  revalidatePath("/contact");
  redirect("/contact");
};
