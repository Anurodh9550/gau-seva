import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Providers } from "../components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gausevasangh.org"),

  title: "Rashtriya Gau Seva Sangh | Gau Raksha & Gaushala Development",

  description:
    "Official website of Rashtriya Gau Seva Sangh. Dedicated to Gau Raksha, Gaushala development, cow welfare, donations, and social service initiatives across India.",

  keywords: [
    "Gau Seva",
    "Gaushala",
    "Cow Protection",
    "Gau Raksha",
    "Donations",
    "Rashtriya Gau Seva Sangh",
  ],

  icons: {
    icon: [
      { url: "/gulogo.png", sizes: "32x32", type: "image/png" },
      { url: "/gulogo.png", sizes: "192x192", type: "image/png" },
      { url: "/gulogo.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/gulogo.png",
  },

  openGraph: {
    title: "Rashtriya Gau Seva Sangh",
    description:
      "Official website of Rashtriya Gau Seva Sangh",

    url: "https://gausevasangh.org",

    siteName: "Rashtriya Gau Seva Sangh",

    images: [
      {
        url: "/gulogo.png",
        width: 1200,
        height: 630,
        alt: "Rashtriya Gau Seva Sangh Logo",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Rashtriya Gau Seva Sangh",
    description:
      "Official website of Rashtriya Gau Seva Sangh",
    images: ["/gulogo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Providers>
          <Header />
          <main className="flex-1 pt-[72px] md:pt-[126px]">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}