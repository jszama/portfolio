import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio - Jakub Szamotulski",
  description: "Portfolio of Jakub Szamotulski, showcasing projects, skills, and experience in Software Engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
      </head>
      <body
        className={`antialiased max-w-screen h-full overflow-y-scroll overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
