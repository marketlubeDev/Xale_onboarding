import localFont from "next/font/local";
import "./globals.css";
import "../../sass/main.scss";

export const metadata = {
  title: "Xale",
  description: "Xale is a CRM platform for businesses to manage their customers and sales.",
};
const helveticaNeue = localFont({
  src: [
    {
      path: "../../public/Fonts/HelveticaNeue-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/Fonts/HelveticaNeue-ThinItalic.woff2",
      weight: "100",
      style: "italic",
    },
    {
      path: "../../public/Fonts/HelveticaNeue-UltraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/Fonts/HelveticaNeue-UltraLightItalic.woff2",
      weight: "200",
      style: "italic",
    },
    {
      path: "../../public/Fonts/HelveticaNeue-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/Fonts/HelveticaNeue-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/Fonts/HelveticaNeue.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/Fonts/HelveticaNeue-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/Fonts/HelveticaNeue-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/Fonts/HelveticaNeue-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/Fonts/HelveticaNeue-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/Fonts/HelveticaNeue-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/Fonts/HelveticaNeue-CondensedBold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/Fonts/HelveticaNeue-CondensedBlack.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-helvetica-neue",
  display: "swap",
  fallback: [],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={helveticaNeue.variable}>
      <body className={helveticaNeue.className}>{children}</body>
    </html>
  );
}
