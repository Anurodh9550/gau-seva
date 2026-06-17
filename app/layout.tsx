import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { Providers } from "../components/Providers";
import { SITE_URL } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Rashtriya Gau Seva Sangh",
    template: "%s | Rashtriya Gau Seva Sangh",
  },

  applicationName: "Rashtriya Gau Seva Sangh",

  description:
    "Official website of Rashtriya Gau Seva Sangh. Dedicated to Gau Raksha, Gaushala development, cow welfare, donations, and social service initiatives across India.",

  keywords: [
    "Gau Seva",
    "Gaushala",
    "Cow Protection",
    "Gau Raksha",
    "Donations",
    "Rashtriya Gau Seva Sangh",
    "Cow Welfare",
    "Animal Welfare",
    "Gauseva",
  ],

  authors: [
    {
      name: "Rashtriya Gau Seva Sangh",
      url: SITE_URL,
    },
  ],

  creator: "Rashtriya Gau Seva Sangh",

  publisher: "Rashtriya Gau Seva Sangh",

  alternates: {
    canonical: SITE_URL,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      {
        url: "/gulogo.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/gulogo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/gulogo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],

    apple: [
      {
        url: "/gulogo.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],

    shortcut: "/gulogo.png",
  },

  openGraph: {
    title: "Rashtriya Gau Seva Sangh",

    description:
      "Official website of Rashtriya Gau Seva Sangh dedicated to Gau Raksha, Gaushala development, cow welfare, and social service initiatives.",

    url: SITE_URL,

    siteName: "Rashtriya Gau Seva Sangh",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/gulogo.png",
        width: 1200,
        height: 630,
        alt: "Rashtriya Gau Seva Sangh Logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Rashtriya Gau Seva Sangh",

    description:
      "Official website of Rashtriya Gau Seva Sangh",

    images: ["/gulogo.png"],
  },

  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
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
        {/* Structured Data for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Rashtriya Gau Seva Sangh",
              url: SITE_URL,
              logo: `${SITE_URL}/gulogo.png`,
              sameAs: [
                "https://facebook.com/",
                "https://instagram.com/",
                "https://youtube.com/",
              ],
            }),
          }}
        />

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