import "./globals.css";
import localFont from "next/font/local";

const pB = localFont({
  src: "../assets/fonts/Poppins-Bold.ttf",
  variable: "--pB",
});
const pBI = localFont({
  src: "../assets/fonts/Poppins-BoldItalic.ttf",
  variable: "--pBI",
});
const pEB = localFont({
  src: "../assets/fonts/Poppins-ExtraBold.ttf",
  variable: "--pEB",
});
const pEBI = localFont({
  src: "../assets/fonts/Poppins-ExtraBoldItalic.ttf",
  variable: "--pEBI",
});
const pI = localFont({
  src: "../assets/fonts/Poppins-Italic.ttf",
  variable: "--pI",
});
const pR = localFont({
  src: "../assets/fonts/Poppins-Regular.ttf",
  variable: "--pR",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${pB.variable} ${pBI.variable} ${pEB.variable} ${pEBI.variable} ${pI.variable} ${pR.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
