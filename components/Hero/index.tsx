"use client";
import Image from "next/image";

export const launchCalendlyPopup = () => {
  (window as any).Calendly?.initPopupWidget({ url: "https://calendly.com/ashan-enlear/30min" });
};

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center min-h-[50vh] bg-gradient-to-b from-[#f5f8ff] to-white text-center overflow-hidden">
      {/* Optional: Decorative background shapes can be added here if desired */}
      <div className="mx-auto max-w-2xl px-4 pt-15">
        <h1 className="mb-6 text-4xl font-extrabold leading-tight text-black dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-black">Crafting AI Solutions</span>
        </h1>
        <p className="mb-10 text-lg text-gray-700 dark:text-gray-200 md:text-xl">
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
