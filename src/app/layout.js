import Navbar from "./_components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Contact Management",
  description: "A Simple Contact Management App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <main className="container px-4 mx-auto py-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
