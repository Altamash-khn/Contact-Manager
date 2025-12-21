"use server";
import { deleteContact } from "../api/contact";
import { revalidatePath } from "next/cache";

export const deleteContactAction = async (formData) => {
  const contactId = formData.get("contactId");

  try {
    await deleteContact(contactId);
    revalidatePath("/contact");
    return { success: true };
  } catch (error) {
    console.error("Error deleting contact:", error);
    return { error: "Failed to delete contact" };
  }
};
