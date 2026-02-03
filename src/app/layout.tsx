import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AROSAL Software Solutions - Digital Innovation & Excellence",
  description: "Transform your business with cutting-edge AI automation, custom software development, and modern web solutions. 60+ projects delivered, 100+ happy clients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer
          companyName="AROSAL Software Solutions"
          socialLinks={[
            { platform: "twitter" as const, url: "https://twitter.com" },
            { platform: "linkedin" as const, url: "https://linkedin.com" },
            { platform: "github" as const, url: "https://github.com" },
          ]}
          contactInfo={{
            email: "arosal1925@gmail.com",
            phone: "+91 8693852452 / +91 8591545882",
            address: "India",
          }}
        />
      </body>
    </html>
  );
}
