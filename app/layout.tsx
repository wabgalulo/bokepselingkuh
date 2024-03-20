import "./globals.css";

import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { SITENAME } from "@/lib/constants";
import { ThemeProvider } from "@/components/theme-provider";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: `${SITENAME} Video Bokep Indo Jepang Barat Viral Terbaru`,
    description: `${SITENAME} Video bokep indo jepang indonesia barat terbaru viral korea simontok china tante live sma paksa ngentot abg jilbab cewek bocil smp pijat pelajar.`,
    metadataBase: new URL("https://bokepsiswi.pages.dev"),
    alternates: {
        canonical: `/`,
    },
    openGraph: {
        title: `${SITENAME} Video Bokep Indo Jepang Barat Viral Terbaru`,
        description: `${SITENAME} Video bokep indo jepang indonesia barat terbaru viral korea simontok china tante live sma paksa ngentot abg jilbab cewek bocil smp pijat pelajar.`,
        url: `/`,
        type: `website`,
    },
    verification: {
        google: 'EIYH7BiM_m-45stMPo8X3sHMAmCEb7ml9Pn-2qQd1Ww',
        yandex: '087e206c6f46aa7b',
    },
};

export const runtime = "edge";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={font.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
