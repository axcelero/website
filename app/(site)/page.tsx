import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Services from "@/components/Services";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import OurTeam from "@/components/OurTeam";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "Next.js Starter Template for SaaS Startups - Solid SaaS Boilerplate",

  // other metadata
  description: "This is Home for Solid Pro"
};

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <Brands /> */}
      <Services />
      <OurTeam />
      <CTA />
      <Testimonial />
      {/* <Pricing /> */}
      <FAQ />
      <Contact />
      <Blog />
    </main>
  );
}
