import { Inter } from "next/font/google";
// import "./globals.css";//TODO

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  manifest: "/manifest.json",
  title: "FindIt",    
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{backgroundColor:"#dbdbd9"}}>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        {children}
      </body>
    </html>
  );
}
