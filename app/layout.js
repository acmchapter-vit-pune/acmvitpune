import "./globals.css";
import Navbar from "@/Components/Navbar";

export const metadata = {
  title: "VIT ACM CHAPTER",
  description: "Welcome to ACM VIT",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className=""
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
