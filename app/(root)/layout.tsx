import { ThemeProvider } from "@/components/base/theme-provider";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../globals.css";
import Footer from "@/components/landing/Footer";
import Navbar from "@/components/navbar/Navbar";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hamed Namazi Portfolio",
  description:
    "A personal website and portfolio built with Next.js, Tailwind CSS, and TypeScript. The website features a dark mode, responsive design, and a simple blog section.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.variable} antialiased mt-15 md:mt-20`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
