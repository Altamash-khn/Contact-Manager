import ContactForm from "@/app/_components/ContactForm";
import { createContactAction } from "@/app/actions/contact";
import { getSession } from "@/app/_lib/session";

const NewContactPage = async () => {
  const user = await getSession();

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Create New Contact</h1>
      <ContactForm action={createContactAction} userId={user.id} />
    </div>
  );
};

export default NewContactPage;
