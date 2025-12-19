import { cookies } from "next/headers";

// Create Session cookie
export const createSession = async (user) => {
//   await (cookies())().set("session", JSON.stringify(user), {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === "production",
//     maxAge: 60 * 60 * 24 * 7, // 1 week
//     path: "/",
//   });

const cookieStore = await cookies(); // ✅ Promise unwrap

  cookieStore.set("session", JSON.stringify(user), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: "/",
  });
};


// Get Session cookie
export const getSession = async () => {
  const session = await cookies().get("session")?.value;
  return session ? JSON.parse(session) : null;
};

// Delete Session cookie
export const deleteSession = async () => {
  const cookieStore = await cookies();
  cookieStore.delete("session");
};
