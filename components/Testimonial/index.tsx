"use client";
import Image from "next/image";

const testimonials = [
  {
    name: "Jason Keys",
    title: "CEO & Founder @ Dreampeet.",
    image: "/images/testimonials/jason-keys.jpg",
    text: "I believe in lifelong learning and Learn. is a great place to learn from experts. I've learned a lot and recommend it to all my friends and familys.",
  },
  {
    name: "Mariya Merry",
    title: "CEO & Founder @ Betex.",
    image: "/images/testimonials/mariya-merry.jpg",
    text: "I believe in lifelong learning and Learn. is a great place to learn from experts. I've learned a lot and recommend it to all my friends and familys.",
  },
  {
    name: "Andria Jolly",
    title: "CEO & Founder @ CryptoX.",
    image: "/images/testimonials/andria-jolly.jpg",
    text: "I believe in lifelong learning and Learn. is a great place to learn from experts. I've learned a lot and recommend it to all my friends and familys.",
  },
  {
    name: "Devid Willium",
    title: "CEO & Founder @ Coinbase.",
    image: "/images/testimonials/devid-willium.jpg",
    text: "I believe in lifelong learning and Learn. is a great place to learn from experts. I've learned a lot and recommend it to all my friends and familys.",
  },
];

const Testimonials = () => (
  <section className="bg-[#f8f9ff] py-20 px-4 md:px-8">
    <div className="max-w-4xl mx-auto text-center mb-12">
      <span className="block text-primary font-semibold uppercase mb-2">Testimonials</span>
      <h2 className="text-4xl font-bold mb-4">What Our Client Say's</h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, In et dignissim quam condimentum vel.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {testimonials.map((t, idx) => (
        <div key={idx} className="bg-white rounded-xl shadow p-8 flex flex-col md:flex-row items-start gap-6">
          <Image
            src={t.image}
            alt={t.name}
            width={64}
            height={64}
            className="rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-lg text-black">{t.name}</h3>
            <p className="text-gray-500 text-sm mb-2">{t.title}</p>
            <p className="text-gray-700 text-base">“{t.text}”</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
