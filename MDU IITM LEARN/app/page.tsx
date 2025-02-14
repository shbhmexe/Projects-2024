import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/CGPA";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MDU IITM Notes & PYQs – Learn Smarter, Not Harder",
  description: "Access MDU IITM notes, PYQs, syllabus, study resources, EDGE sheets, and practical files in one place!",
  keywords: "MDU, IITM, Notes, PYQs, Syllabus, Study Material, EDGE Sheets, Practical Files",
  authors: [{ name: "Shubham Shukla", url: "https://yourdomain.com" }],
  openGraph: {
    title: "MDU IITM Notes & PYQs – Learn Smarter, Not Harder",
    description: "Get semester-wise study resources, previous year questions, and notes in one place.",
    url: "https://yourdomain.com",
    siteName: "MDU IITM Learn",
    images: [
      {
        url: "/logo/brand.png", // Ensure this image is in `public/images`
        width: 1200,
        height: 630,
        alt: "MDU IITM Study Resources",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MDU IITM Notes & PYQs – Learn Smarter, Not Harder",
    description: "Access MDU IITM notes, PYQs, syllabus, study resources, EDGE sheets, and practical files in one place!",
    images: ["/images/seo-image.png"],
  },
  robots: "index, follow",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
    </>
  );
}
