import "./globals.css"

// LAzy Load images for future optimization
// lazy load images
import Image from "next/image"
import logo from "../assets/brand-logos/favicon-light.png"
import defaultLayoutBg from "../assets/images/Frame.png"
import loader from "../assets/brand-logos/loaderSpinner.png"
//hero images
import Dashboard from "../assets/images/Dashboard.png"
import bgImage from "../assets/images/Frame.png"
import arrow from "../assets/svgs/landingpage/arrow.svg"
import header from "../assets/svgs/landingpage/clear-eats header.svg"
import cutArrow from "../assets/svgs/landingpage/cutarrow.svg"
import leftVector1 from "../assets/svgs/landingpage/left-vector1.svg"
import leftVector2 from "../assets/svgs/landingpage/left-vector2.svg"
import lines from "../assets/svgs/landingpage/lines.svg"
import rightVector from "../assets/svgs/landingpage/right-vector.svg"

export const metadata = {
  title: "Clear Eats",
  description: "Generasted by Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth text-base">
      <body>{children}</body>
    </html>
  )
}
