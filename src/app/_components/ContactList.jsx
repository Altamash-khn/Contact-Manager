import { FiEdit } from "react-icons/fi";
import Link from "next/link";
import React from "react";
import DeleteButton from "./DeleteButton";

const ContactList = ({ contacts }) => {
  return (
    <div className="space-y-4">
      {contacts.map((contact) => {
        return (
          <div key={contact.id} className="p-4 border rounded-lg">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-lg font-semibold">{contact.name}</h2>
                <p>{contact.email}</p>
              </div>
              <div className="flex items-center self-center gap-3">
                <Link
                  href={`/contact/edit/${contact.id}`}
                  className="flex items-center border-blue-200 border text-blue-600 gap-2 px-3 py-1 hover:border-blue-400 hover:bg-blue-100 rounded-md"
                >
                  <FiEdit className="text-blue-600" />
                  Edit
                </Link>
                <DeleteButton contact={contact} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContactList;
