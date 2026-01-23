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
            /* Force position - override all widget defaults */
            .gtranslate_wrapper,
            body .gtranslate_wrapper,
            html body .gtranslate_wrapper {
              position: fixed !important;
              bottom: 0 !important;
              left: 0 !important;
              right: auto !important;
              top: auto !important;
              z-index: 9999 !important;
              margin: 0 !important;
              padding: 0 !important;
            }
            
            /* Force widget container position */
            #gt-float-switcher,
            body #gt-float-switcher,
            .gtranslate_wrapper #gt-float-switcher {
              position: fixed !important;
              bottom: 0 !important;
              left: 0 !important;
              right: auto !important;
              top: auto !important;
              margin: 0 !important;
              background: #000000 !important;
              border-radius: 0 8px 0 0 !important;
              box-shadow: none !important;
              border: none !important;
              padding: 4px 8px !important;
            }
            
            /* Style the dropdown button */
            #gt-float-switcher .gt-selected,
            body #gt-float-switcher .gt-selected {
              background: #000000 !important;
              border: none !important;
              border-radius: 4px !important;
              padding: 4px 6px !important;
              font-size: 10px !important;
              color: #ffffff !important;
              line-height: 1 !important;
            }
            
            /* Force smaller flag size */
            #gt-float-switcher img,
            body #gt-float-switcher img,
            #gt-float-switcher .gt-selected img {
              width: 14px !important;
              height: 10px !important;
              max-width: 14px !important;
              max-height: 10px !important;
              border-radius: 2px !important;
            }
            
            /* Text styling */
            #gt-float-switcher .gt-selected span,
            #gt-float-switcher .gt-current-lang {
              color: #ffffff !important;
              font-size: 10px !important;
            }
            
            #gt-float-switcher .gt-selected:hover {
              background: #222222 !important;
            }
            
            /* Style the language list dropdown */
            #gt-float-switcher .gt-lang-list,
            body #gt-float-switcher .gt-lang-list {
              background: #000000 !important;
              border: 1px solid #333333 !important;
              border-radius: 8px !important;
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3) !important;
              max-height: 300px !important;
              overflow-y: auto !important;
              bottom: 100% !important;
              left: 0 !important;
            }
            
            #gt-float-switcher .gt-lang-list a {
              padding: 6px 10px !important;
              color: #ffffff !important;
              font-size: 11px !important;
            }
            
            #gt-float-switcher .gt-lang-list a:hover {
              background-color: #333333 !important;
            }
            
            /* Mobile - even smaller */
            @media (max-width: 640px) {
              #gt-float-switcher .gt-selected,
              body #gt-float-switcher .gt-selected {
                font-size: 9px !important;
                padding: 3px 5px !important;
              }
              
              #gt-float-switcher img,
              body #gt-float-switcher img {
                width: 12px !important;
                height: 9px !important;
                max-width: 12px !important;
                max-height: 9px !important;
              }
              
              #gt-float-switcher .gt-lang-list {
                max-height: 300px !important;
              }
            }
            
            /* Scrollbar styling for language list */
            #gt-float-switcher .gt-lang-list::-webkit-scrollbar {
              width: 4px;
            }
            
            #gt-float-switcher .gt-lang-list::-webkit-scrollbar-track {
              background: #111111;
              border-radius: 10px;
            }
            
            #gt-float-switcher .gt-lang-list::-webkit-scrollbar-thumb {
              background: #444444;
              border-radius: 10px;
            }
            
            #gt-float-switcher .gt-lang-list::-webkit-scrollbar-thumb:hover {
              background: #666666;
            }
          `
        }} />
      </body>
    </html>
  );
}
