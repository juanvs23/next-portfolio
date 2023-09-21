import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { layouts } from "./components";
import "aos/dist/aos.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Juan C. Avila | Portfolio",
  description: "This is my portfolio website created with Next.js",
  icons: {
    icon: [{ url: "/img/email-icon.png", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        />
      </head>
      <body className={inter.className}>
        <layouts.LayoutComponent>{children}</layouts.LayoutComponent>
      </body>
    </html>
  );
}
