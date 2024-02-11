import "./globals.css";
import { Inter } from "next/font/google";
import { layouts } from "./components";
import "aos/dist/aos.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <layouts.LayoutComponent>{children}</layouts.LayoutComponent>
      </body>
    </html>
  );
}
