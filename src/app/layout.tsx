import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amirul | DevHQ",
  description:
    "Personal Portfolio of Amirul Ibrahim, a Bachelor of IT (Software Development) student. Explore my projects, experience, and skills.",
  keywords: ["Amirul Ibrahim", "Software Developer", "Portfolio", "Full Stack", "Malaysia"],
  authors: [{ name: "Amirul Ibrahim" }],
  creator: "Amirul Ibrahim",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Amirul | DevHQ",
    description: "Explore my projects, work experience, and technical skills.",
    siteName: "Amirul Ibrahim Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amirul | DevHQ",
    description: "Full-stack developer crafting impactful digital products.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* VALORANT font — used for purple accent text across the site */}
        <link
          href="https://fonts.cdnfonts.com/css/valorant"
          rel="stylesheet"
        />
        {/* Devicon for skill icons */}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
        {/* Font Awesome for misc icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body style={{ fontFamily: "'Inter', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
