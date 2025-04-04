"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState } from "react";

// Dynamically Import Lottie Player to prevent SSR errors
const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);
const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.3 },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

const testimonials = [
  {
    text: "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    author: "Moni",
    bgColor: "bg-green-400",
    rotate: 10,
    icon: "✨",
  },
  {
    text: "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    author: "Moni",
    bgColor: "bg-yellow-400",
    rotate: -8,
    icon: "🌼",
  },
  {
    text: "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    author: "Moni",
    bgColor: "bg-blue-400",
    rotate: 8,
    icon: "⭐",
  },
];

const FullYearProgram = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {/* ========== Full Year Program Section ========== */}
      <section className="py-12 px-6 md:px-16 lg:px-24 text-center">
        {/* Heading Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <motion.h2 className="text-3xl md:text-6xl font-semibold font-primary text-[#592AC7] pt-18">
            NESS School
          </motion.h2>
          <motion.h3 className="text-xl md:text-3xl font-semibold font-primary mt-4">
            Full Year Program
          </motion.h3>
          <motion.p className="text-[#000000] mt-4 max-w-6xl mx-auto text-start text-[18px] leading-[30px] font-secondary">
            <p className="mb-[10px]">
              We believe learning should be a thrilling journey, not just a task. Our STEAM calendar
              brings science, technology, engineering, arts, and math to life in fun, hands-on ways
              that encourage curiosity and creativity. From building cool gadgets to exploring new
              forms of art, every day is a chance to think, create, and discover something exciting.
            </p>
            With Yuvabe’s youth volunteers joining in, students get fresh perspectives, mentorship,
            and interactive experiences that spark curiosity and confidence. If you love sharing
            knowledge, exploring new ideas, or just being part of something inspiring, come
            collaborate with us! Let’s create, learn, and grow together.
          </motion.p>
        </motion.div>

        {/* ========== Image Grid Section ========== */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <motion.div key={num} variants={imageVariants} className="grid gap-4">
              <Image
                src={`/images/ness/image${num}.png`}
                alt={`NESS Image ${num}`}
                width={500}
                height={500}
                className="w-full h-auto rounded-lg object-cover"
                priority
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ========== Students Testimonial Section ========== */}
      <section className="py-16 text-center bg-[#fef9f3]">
        {/* Heading */}
        <h2 className="text-3xl md:text-6xl font-semibold font-primary text-black mb-8">
          Students Testimonial
        </h2>

        {/* Lottie Animation */}
        {isClient && (
          <div className="relative flex justify-center items-center">
            <Player autoplay loop src="/images/ness/testimonial2.json" className="w-full max-w-4xl" />
          </div>
        )}

        {/* Testimonial Cards */}
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              className={`p-6 w-[260px] shadow-lg rounded-lg ${item.bgColor} relative`}
              initial={{ opacity: 0, y: 30, rotate: 0 }}
              animate={{ opacity: 1, y: 0, rotate: item.rotate }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <span className="absolute top-2 right-4 text-xl">{item.icon}</span>
              <p className="text-black italic">{item.text}</p>
              <p className="text-black font-bold text-right mt-4">- {item.author}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default FullYearProgram;
