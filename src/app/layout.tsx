import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-black text-white">
        {/* 🔥 Render child components */}
        {children}
      </body>
    </html>
  );
}
