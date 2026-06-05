import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import BackToTop from "@/components/BackToTop";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Zera Childcare Foundation | Every child deserves a chance to live",
  description: "Providing life-saving medical care, funding surgeries, and supporting vulnerable children in Lagos, Nigeria.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body 
        className="min-h-full flex flex-col bg-white text-black font-sans"
        suppressHydrationWarning
      >
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
