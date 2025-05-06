"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Kjetil Odin Johnsen",
    role: "Chief Executive Officer",
    country: "Norway",
    image: "/images/team/kjetil.jpg",
    socials: [
      { icon: "fa-facebook", url: "#" },
      { icon: "fa-twitter", url: "#" },
      { icon: "fa-linkedin", url: "#" },
      { icon: "fa-youtube", url: "#" },
    ],
  },
  {
    name: "Ståle B. Olsen",
    role: "Chief Operating Officer",
    country: "Norway",
    image: "/images/team/stale.jpg",
    socials: [
      { icon: "fa-facebook", url: "#" },
      { icon: "fa-twitter", url: "#" },
      { icon: "fa-linkedin", url: "#" },
      { icon: "fa-youtube", url: "#" },
    ],
  },
  {
    name: "Ashan Fernando",
    role: "Chief Technology Officer",
    country: "Sri Lanka",
    image: "/images/team/ashan.jpg",
    socials: [
      { icon: "fa-facebook", url: "#" },
      { icon: "fa-twitter", url: "#" },
      { icon: "fa-linkedin", url: "#" },
      { icon: "fa-youtube", url: "#" },
    ],
  },
  {
    name: "Eden Ella",
    role: "Chief AI Officer",
    country: "Israel",
    image: "/images/team/eden.jpg",
    socials: [
      { icon: "fa-facebook", url: "#" },
      { icon: "fa-twitter", url: "#" },
      { icon: "fa-linkedin", url: "#" },
      { icon: "fa-youtube", url: "#" },
    ],
  },
  {
    name: "Manoj Fernando",
    role: "Chief Architect",
    country: "Sri Lanka",
    image: "/images/team/manoj.jpg",
    socials: [
      { icon: "fa-facebook", url: "#" },
      { icon: "fa-twitter", url: "#" },
      { icon: "fa-linkedin", url: "#" },
      { icon: "fa-youtube", url: "#" },
    ],
  },
  {
    name: "Amir Shalev",
    role: "Chief UI/UX Officer",
    country: "Germany",
    image: "/images/team/chameera.jpg",
    socials: [
      { icon: "fa-facebook", url: "#" },
      { icon: "fa-twitter", url: "#" },
      { icon: "fa-linkedin", url: "#" },
      { icon: "fa-youtube", url: "#" },
    ],
  },
  {
    name: "Chameera Dulanga",
    role: "Head of Engineering",
    country: "Sri Lanka",
    image: "/images/team/chameera.jpg",
    socials: [
      { icon: "fa-facebook", url: "#" },
      { icon: "fa-twitter", url: "#" },
      { icon: "fa-linkedin", url: "#" },
      { icon: "fa-youtube", url: "#" },
    ],
  },
  {
    name: "Nipuni Arunodi",
    role: "Head of Finance",
    country: "Sri Lanka",
    image: "/images/team/nipuni.jpg",
    socials: [
      { icon: "fa-facebook", url: "#" },
      { icon: "fa-twitter", url: "#" },
      { icon: "fa-linkedin", url: "#" },
      { icon: "fa-youtube", url: "#" },
    ],
  },
];

const OurTeam = () => {
  return (
    <>
      {/* <!-- ===== Funfact Start ===== --> */}
      <section className="px-4 py-20 md:px-8 lg:py-22.5 2xl:px-0">
        <div className="relative z-1 mx-auto max-w-c-1390 rounded-lg bg-gradient-to-t from-secondary to-white py-22.5 dark:bg-blacksection dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:stroke-strokedark xl:py-27.5">
          <Image
            fill
            src="/images/shape/shape-dotted-light-02.svg"
            alt="Dotted"
            className="absolute left-0 top-0 -z-1 dark:hidden"
          />
          <Image
            fill
            src="/images/shape/shape-dotted-dark-02.svg"
            alt="Dotted"
            className="absolute left-0 top-0 -z-1 hidden dark:block"
          />

          <div className="mx-auto mb-12.5 px-4 text-center md:w-4/5 md:px-0 lg:mb-17.5 lg:w-2/3 xl:w-1/2">
            <span className="block text-primary font-semibold uppercase mb-2">Meet Our Leadership</span>
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
              The People Behind Our Success
            </h2>
            <p className="mx-auto lg:w-11/12">
              We are a diverse group of professionals with expertise in AI, cloud, UI&UX design, marketing, and more. Get to know the people who drive our innovation and success.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 px-4 md:px-8">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="bg-white dark:bg-blacksection rounded-lg p-6 text-center shadow-md">
                <div className="flex justify-center mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={180}
                    height={180}
                    className="rounded-lg object-cover h-44 w-44 mx-4"
                  />
                </div>
                <h3 className="text-xl font-semibold text-black dark:text-white mb-1">{member.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">{member.role}</p>
                <p className="text-gray-500 text-sm mb-2">{member.country}</p>
                <div className="flex justify-center gap-3">
                  {member.socials.map((social, i) => (
                    <a key={i} href={social.url} className="text-gray-400 hover:text-primary" target="_blank" rel="noopener noreferrer">
                      <i className={`fab ${social.icon} text-lg`}></i>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Funfact End ===== --> */}
    </>
  );
};

export default OurTeam;
