"use client";
import Image from "next/image";
import featuresTabData from "./featuresTabData";
import { motion } from "framer-motion";

const labelColors = ["bg-primary", "bg-primary", "bg-primary"]; // use theme color for all
const labelTexts = ["DATA SECURITY", "ARTIFICIAL INTELLIGENCE", "API INTEGRATIONS"];

const FeaturesTab = () => {
  return (
    <section className="relative mb-20 pb-20 lg:pb-5">
      <div className="relative mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="absolute -top-16 -z-1 mx-auto h-[350px] w-[90%]">
          <Image
            fill
            className="dark:hidden"
            src="/images/shape/shape-dotted-light.svg"
            alt="Dotted Shape"
          />
          <Image
            fill
            className="hidden dark:block"
            src="/images/shape/shape-dotted-dark.svg"
            alt="Dotted Shape"
          />
        </div>
        <div className="flex flex-col gap-24 xl:gap-32">
          {featuresTabData.map((feature, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={feature.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.7, delay: 0.1 * idx }}
                viewport={{ once: true }}
                className={`flex flex-col-reverse md:flex-row ${isEven ? '' : 'md:flex-row-reverse'} items-center gap-10 md:gap-20`}
              >
                {/* Text Side */}
                <div className="w-full md:w-1/2">
                  <div className="flex items-center mb-3">
                    <span className={`inline-block w-3 h-3 rounded-sm mr-2 ${labelColors[idx]}`}></span>
                    <span className="uppercase text-xs font-semibold tracking-wider text-primary">{labelTexts[idx]}</span>
                  </div>
                  <h2 className="mb-6 text-4xl font-extrabold text-black dark:text-white leading-tight">
                    {feature.title}
                  </h2>
                  <p className="mb-4 text-lg text-body dark:text-bodydark">{feature.desc1}</p>
                  {feature.bullets && (
                    <ul className="mb-4 ml-4 list-disc text-lg text-body dark:text-bodydark">
                      {feature.bullets.map((bullet, i) => (
                        <li key={i} className="mb-1">{bullet}</li>
                      ))}
                    </ul>
                  )}
                  {feature.sections && feature.sections.map((section, sidx) => (
                    <div key={sidx} className="mb-6">
                      <h3 className="font-bold text-lg mb-2 text-black dark:text-white">{section.subtitle}</h3>
                      <p className="mb-2 text-body dark:text-bodydark">{section.text}</p>
                      <ul className="ml-4 list-disc text-lg text-body dark:text-bodydark">
                        {section.bullets.map((bullet, i) => (
                          <li key={i} className="mb-1">{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <p className="text-lg text-body dark:text-bodydark">{feature.desc2}</p>
                </div>
                {/* Image Side */}
                <div className="relative w-full md:w-1/2 flex justify-center">
                  <div className="aspect-[562/366] w-full max-w-[750px]">
                    <Image src={feature.image} alt={feature.title} fill className="dark:hidden object-contain" />
                    <Image src={feature.imageDark} alt={feature.title} fill className="hidden dark:block object-contain" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesTab;
