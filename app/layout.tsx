import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const COMPANY_NAME = process.env.NEXT_PUBLIC_COMPANY_NAME || "Courier Express";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  title: `${COMPANY_NAME} - Global Shipping & Logistics Solutions`,
  description: `${COMPANY_NAME} provides reliable international and domestic shipping services. Track shipments, get instant quotes, and manage logistics with our advanced platform. Fast delivery to 190+ countries.`,
  keywords: [
    "shipping",
    "logistics",
    "freight forwarding",
    "package tracking",
    "international shipping",
    "courier service",
    "express delivery",
    "cargo transport",
    COMPANY_NAME,
  ],
  authors: [{ name: COMPANY_NAME }],
  creator: COMPANY_NAME,
  publisher: COMPANY_NAME,
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
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: COMPANY_NAME,
    title: `${COMPANY_NAME} - Global Shipping & Logistics Solutions`,
    description: `${COMPANY_NAME} provides reliable international and domestic shipping services. Track shipments, get instant quotes, and manage logistics with our advanced platform.`,
    images: [
      {
        url: "/logo.PNG",
        width: 1200,
        height: 630,
        alt: `${COMPANY_NAME} Logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY_NAME} - Global Shipping & Logistics Solutions`,
    description: `${COMPANY_NAME} provides reliable international and domestic shipping services. Track shipments, get instant quotes, and manage logistics.`,
    images: ["/logo.PNG"],
    creator: `@${COMPANY_NAME.toLowerCase().replace(/\s+/g, "")}`,
  },
  verification: {
    google: "google-site-verification-code",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* GTranslate.io Widget */}
        <Script
          id="gtranslate-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.gtranslateSettings = {
                "default_language": "en",
                "detect_browser_language": true,
                "languages": ["en","es","fr","de","it","pt","zh-CN","zh-TW","ja","ko","ar","ru","hi","bn","pa","te","mr","ta","ur","tr","pl","nl","sv","no","da","fi","cs","el","he","id","ms","th","vi","ro","hu","uk","bg","hr","sk","sl","lt","lv","et"],
                "wrapper_selector": ".gtranslate_wrapper",
                "float_switcher_open_direction": "top",
                "alt_flags": {"en":"usa","pt":"brazil"},
                "flag_style": "3d",
                "flag_size": 16,
                "switcher_horizontal_position": "left",
                "switcher_vertical_position": "bottom"
              };
            `,
          }}
        />
        <Script
          src="https://cdn.gtranslate.net/widgets/latest/float.js"
          strategy="afterInteractive"
          defer
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased overflow-x-hidden`}>
        <Providers>{children}</Providers>
        
        {/* JivoChat Widget */}
        <Script
          src="//code.jivosite.com/widget/8nibvpnBFn"
          strategy="afterInteractive"
          async
        />
        
        {/* GTranslate Widget Container */}
        <div className="gtranslate_wrapper" />
        
        {/* Custom styles for GTranslate widget */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Position GTranslate widget */
            .gtranslate_wrapper {
              position: fixed;
              bottom: 0;
              left: 0;
              right: auto;
              z-index: 9999;
            }
            
            /* On larger screens, move to right */
            @media (min-width: 768px) {
              .gtranslate_wrapper {
                left: auto;
                right: 0;
              }
            }
            
            /* Style the floating widget */
            #gt-float-switcher {
              background: #000000 !important;
              border-radius: 8px !important;
              box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.3) !important;
              border: 1px solid #333333 !important;
              padding: 3px !important;
              transform: scale(0.75) !important;
              transform-origin: bottom left !important;
            }
            
            @media (min-width: 768px) {
              #gt-float-switcher {
                transform-origin: bottom right !important;
              }
            }
            
            /* Style the dropdown */
            #gt-float-switcher .gt-selected {
              background: #000000 !important;
              border: 1px solid #444444 !important;
              border-radius: 6px !important;
              padding: 3px 6px !important;
              transition: all 0.2s ease !important;
              font-size: 11px !important;
              color: #ffffff !important;
            }
            
            /* Flag size */
            #gt-float-switcher img {
              width: 16px !important;
              height: 12px !important;
            }
            
            #gt-float-switcher .gt-selected:hover {
              border-color: #f97316 !important;
              box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.1) !important;
            }
            
            /* Style the language list */
            #gt-float-switcher .gt-lang-list {
              background: white !important;
              border: 1px solid #e5e7eb !important;
              border-radius: 12px !important;
              box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05) !important;
              max-height: 400px !important;
              overflow-y: auto !important;
            }
            
            #gt-float-switcher .gt-lang-list a {
              padding: 8px 12px !important;
              transition: background-color 0.2s ease !important;
            }
            
            #gt-float-switcher .gt-lang-list a:hover {
              background-color: #fef3e2 !important;
            }
            
            /* Flag styling */
            #gt-float-switcher img {
              border-radius: 4px !important;
            }
            
            /* Mobile responsive */
            @media (max-width: 640px) {
              .gtranslate_wrapper {
                bottom: 0 !important;
                left: 0 !important;
                right: auto !important;
              }
              
              #gt-float-switcher {
                padding: 3px !important;
              }
              
              #gt-float-switcher .gt-selected {
                padding: 3px 6px !important;
              }
              
              #gt-float-switcher .gt-lang-list {
                max-height: 300px !important;
              }
            }
            
            /* Scrollbar styling for language list */
            #gt-float-switcher .gt-lang-list::-webkit-scrollbar {
              width: 6px;
            }
            
            #gt-float-switcher .gt-lang-list::-webkit-scrollbar-track {
              background: #f1f1f1;
              border-radius: 10px;
            }
            
            #gt-float-switcher .gt-lang-list::-webkit-scrollbar-thumb {
              background: #d1d5db;
              border-radius: 10px;
            }
            
            #gt-float-switcher .gt-lang-list::-webkit-scrollbar-thumb:hover {
              background: #9ca3af;
            }
          `
        }} />
      </body>
    </html>
  );
}
