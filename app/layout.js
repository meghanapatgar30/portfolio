import "./globals.css";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";

const head = Space_Grotesk({ subsets: ["latin"], variable: "--f-head" });
const body = Inter({ subsets: ["latin"], variable: "--f-body" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--f-mono" });

const title = "Meghana Mohan Patgar | Developer Portfolio";
const description = "Personal portfolio of Meghana Mohan Patgar — Information Science Engineering student, developer, problem solver, and lifelong learner exploring web development and AI.";
export const metadata = { title, description, openGraph: { title, description, type: "website" } };

const themeScript = `try{var t=localStorage.getItem("theme");if(t)document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning className={`${head.variable} ${body.variable} ${mono.variable}`}>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body>
        <div className="bg" aria-hidden="true"><div className="blob" /><div className="blob b2" /><div className="stars" /></div>
        {children}
      </body>
    </html>
  );
}
