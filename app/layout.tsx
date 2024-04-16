import type { Metadata } from "next";
import "./globals.css";
import Nav from "./components/Nav";
import { poppins } from "./ui/lib/fonts";
import { inter } from "./ui/lib/fonts";

export const metadata: Metadata = {
  title: "Perplexity Clone",
  description: "Designed by Amil Jabarli",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    // <div className={inter.className}>
    //   <div className="layout">
    //     <Nav />
    //     <div className="children-content">
    //       {children}
    //     </div>
    //   </div>
    // </div>
    <html className={inter.className}>
      <body>
        <div className="layout">
          <Nav/>
          <div className="children-content">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}