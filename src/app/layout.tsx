
import "./globals.css";

export const metadata = {
  title: "Landing Page Clear Eats",
  description: "Generasted by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
