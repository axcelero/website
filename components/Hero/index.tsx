"use client";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center min-h-[70vh] bg-gradient-to-b from-[#f5f8ff] to-white text-center overflow-hidden">
      {/* Optional: Decorative background shapes can be added here if desired */}
      <div className="mx-auto max-w-2xl px-4 py-24 md:py-32">
        <h1 className="mb-6 text-4xl font-extrabold leading-tight text-black dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-black">Software Studio</span> Crafting Intelligent Digital Solutions
        </h1>
        <p className="mb-10 text-lg text-gray-700 dark:text-gray-200 md:text-xl">
          We build AI-powered software that transforms businesses. Partner with us to create intelligent, scalable, and future-ready digital products.
        </p>
        <a
          href="/contact" // Change this to your scheduling link (e.g., Calendly)
          className="inline-block rounded-full bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg transition-colors duration-300 hover:bg-primaryho focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Schedule a Call
        </a>
      </div>
    </section>
  );
};

export default Hero;
