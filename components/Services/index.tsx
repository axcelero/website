"use client";
import React from "react";
import servicesData from "./servicesData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";

const Services = () => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="services" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "SERVICES WE OFFER",
              subtitle: "",
              description: `We build AI-powered services to make your business intelligent and effective.`,
            }}
          />
          {/* <!-- Section Title End --> */}

          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
            {/* <!-- Features item Start --> */}

            {servicesData.map((service, key) => (
              <SingleFeature service={service} key={key} />
            ))}
            {/* <!-- Features item End --> */}
          </div>
        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Services;
