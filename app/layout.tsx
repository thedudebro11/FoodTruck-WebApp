import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Truckspot — Find Food Trucks Live",
  description:
    "Real-time food truck discovery. See what's serving now near you.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-surface-bg text-white font-body">
        {children}
      </body>
    </html>
  );
}
