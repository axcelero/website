"use client";
import Image from "next/image";

export const launchCalendlyPopup = () => {
  (window as any).Calendly?.initPopupWidget({ url: "https://calendly.com/ashan-enlear/30min" });
};

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center min-h-[75vh] bg-black text-center overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0 w-full h-full z-0 flex items-center justify-center pointer-events-none select-none">
        <Image
          src="/images/hero-brain-bg.png"
          alt="AI Brain Background"
          fill
          className="object-contain opacity-30 blur-sm md:opacity-40 md:blur-0 dark:opacity-20 transition-all duration-500"
          priority
        />
      </div>
      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-2xl px-4 pt-16 md:py-32">
        <h1 className="mb-6 text-4xl font-extrabold leading-tight text-black dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-white">Crafting AI Solutions</span>
        </h1>
        <p className="mb-10 text-lg text-white dark:text-gray-200 md:text-xl">
         That transforms businesses to be more productive and efficient. </p>
        <a
          href="mailto:hello@axcelero.com"
          className="inline-block rounded-full bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg transition-colors duration-300 hover:bg-primaryho focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default Hero;
