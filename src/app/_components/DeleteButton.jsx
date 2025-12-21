"use client";
import React from "react";
import { FiTrash2 } from "react-icons/fi";
import { deleteContactAction } from "../actions/contact";

const DeleteButton = ({ contact }) => {
  function handleDeleteBtn(e) {
    if (!confirm("Are you sure you want to delete this contact?")) {
      e.preventDefault();
    }
  }

  return (
    <form action={deleteContactAction} method="POST">
      <input type="hidden" name="contactId" value={contact.id} />
      <button
        type="submit"
        className="flex items-center text-red-600 gap-2 px-3 py-1 border border-red-200 hover:border-red-400 hover:bg-red-100 rounded-md"
        onClick={handleDeleteBtn}
      >
        <FiTrash2 className="text-red-500 text-lg" />
        Delete
      </button>
    </form>
  );
};

export default DeleteButton;
