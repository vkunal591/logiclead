import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import AuthLayout from "@/components/layouts/AuthLayout";

// Font
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// ✅ Add PWA metadata
export const metadata = {
  title: "FASTTAG Wallet - Manage Your FASTTAGs Seamlessly",
  description: "A modern PWA app using Next.js",
  themeColor: "#198754",
  icons: {
    icon: "/icons/icon-192x192.png",
    apple: "/icons/icon-192x192.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <div className="fixed inset-0 -z-10 bg-black/50" />
        <div className="relative z-10">
          <main className="flex-grow">
            <AuthProvider>
              <AuthLayout>
                {children}
              </AuthLayout>
            </AuthProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
