"use client";
import React from "react";

const ContactForm = ({ action, contact, userId }) => {
  return (
    <form action={action} className="space-y-4">
      {contact?.id && (
        <input type="hidden" name="contactId" value={contact.id} />
      )}

      {!contact?.id && <input type="hidden" name="userId" value={userId} />}

      <div>
        <label className="block text-sm font-medium">Name</label>
        <input
          name="name"
          defaultValue={contact?.name || ""}
          required
          className="w-full border px-3 py-2 rounded"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          name="email"
          type="email"
          defaultValue={contact?.email || ""}
          required
          className="w-full border px-3 py-2 rounded"
        />
      </div>

      <button
        type="submit"
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
      >
        {contact ? "Update Contact" : "Create Contact"}
      </button>
    </form>
  );
};

export default ContactForm;
