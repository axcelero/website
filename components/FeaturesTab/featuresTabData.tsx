import { FeatureTab } from "@/types/featureTab";

const featuresTabData: FeatureTab[] = [
  {
    id: "tabOne",
    title: "Data Security and Compliance",
    desc1: `We keep your data secure and fully compliant with EU regulations. All sensitive data is stored in the EU, and only local teams—especially in Norway—handle production systems.`,
    desc2: "",
    bullets: [
      "All sensitive data stays within the EU",
      "Offshore teams only access test data",
      "Local Norwegian teams manage production and support",
      "Complies fully with EU data protection laws",
      "Your data never leaves the region",
    ],
    image: "/images/features/5.svg",
    imageDark: "/images/features/5.svg",
  },
  {
    id: "tabTwo",
    title: "AI and Innovation",
    desc1: `We use Artificial Intelligence not just to enhance how we work, but to build smarter solutions that create real value. Our approach is rooted in safety, privacy, and practical impact.`,
    desc2: "",
    sections: [
      {
        subtitle: "AI in Products and Solutions",
        text: "We design and build intelligent, AI-powered solutions that solve real business problems. From automation to personalization, we apply AI in ways that drive measurable outcomes for our clients.",
        bullets: [
          "Proven track record of building smart, AI-driven products",
          "AI is used to automate processes, personalize experiences, and optimize decision-making",
          "Solutions are built for real-world value—not just experimentation",
          "Follows strict ethical guidelines and EU AI regulations",
        ],
      },
      {
        subtitle: "AI in Development",
        text: "We use AI internally to boost productivity, improve software quality, and deliver faster.",
        bullets: [
          "Faster coding, smarter testing, fewer errors",
          "Development uses privacy-safe, simulated data—never real production data",
        ],
      },
    ],
    image: "/images/features/6.svg",
    imageDark: "/images/features/6.svg",
  },
  {
    id: "tabThree",
    title: "API and Integrations",
    desc1: `We connect your digital systems to work better together—securely and at scale.`,
    desc2: "",
    bullets: [
      "Expertise in APIs, ETL, and data lakes",
      "Connect cloud platforms, legacy software, and SaaS tools",
      "Fast, stable, and secure system integration",
      "Scalable solutions tailored to your needs",
      "Built to improve digital workflows end-to-end",
    ],
    image: "/images/features/7.svg",
    imageDark: "/images/features/7.svg",
  },
];

export default featuresTabData;
