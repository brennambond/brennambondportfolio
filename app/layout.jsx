import { Source_Code_Pro } from "next/font/google";
import "./globals.css";

const inter = Source_Code_Pro({ subsets: ["latin"] });

export const metadata = {
  title: "Brennam Bond - Portfolio",
  description: "The Developer Portfolio for Brennam Bond",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
