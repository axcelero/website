import { FeatureTab } from "@/types/featureTab";

const featuresTabData: FeatureTab[] = [
  {
    id: "tabOne",
    title: "Data Security",
    desc1: `We are fully compliant with the highest standards of data security. Even though we have global teams, all sensitive data always resides within the EU region. Offshore development teams only have access to test data (never real production data). Our local teams in Europe, particularly in Norway, take over for local and production support, ensuring your data is handled with the utmost safety and compliance.`,
    desc2: `This approach gives you the peace of mind that your data is protected, compliant with EU regulations, and never leaves the region for production use.`,
    image: "/images/features/features-light-01.png",
    imageDark: "/images/features/features-dark-01.svg",
  },
  {
    id: "tabTwo",
    title: "AI Innovation and Safety",
    desc1: `We leverage AI wherever possible to drive efficiency and deliver exceptional digital experiences. Our developers use AI to boost productivity and minimize errors, but they are also highly skilled professionals who understand the depth of software engineering and ethical AI practices.`,
    desc2: `We strictly follow ethical AI guidelines, prioritizing privacy and confidentiality in line with EU AI safety regulations. The AI tools we use are governed by strict policies to keep your data private within Europe and never expose it for external AI training.`,
    image: "/images/features/features-light-01.png",
    imageDark: "/images/features/features-dark-01.svg",
  },
  {
    id: "tabThree",
    title: "Integrations",
    desc1: `We believe integration is the key to building efficient digital experiences. Our team has deep expertise in integrating a wide range of digital systems using APIs, ETL processes, Data Lakes, and more.`,
    desc2: `Whether you need to connect cloud platforms, legacy systems, or modern SaaS tools, we ensure seamless, secure, and scalable integrations to power your business.`,
    image: "/images/features/features-light-01.png",
    imageDark: "/images/features/features-dark-01.svg",
  },
];

export default featuresTabData;
