import Footer from "./_components/footer/Footer";
import Header from "./_components/header/Header";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="rtl" className="dark">
      <body className="min-h-screen grid grid-rows-[80px_1fr_auto] dark:bg-base-100 dark:text-base-content">
        <Header />
        <div className="flex-1 flex  justify-center items-center">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
