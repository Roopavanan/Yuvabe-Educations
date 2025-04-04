"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";

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

const FullYearProgram = () => {
  return (
    <>
      {/* STEAM Fest Section */}
      <section className="py-12 px-6 md:px-16 lg:px-24 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <motion.h2 className="text-3xl md:text-6xl font-semibold font-primary text-[#592AC7]">
            STEAM Fest
          </motion.h2>
          <motion.h3 className="text-xl md:text-2xl font-semibold font-primary mt-4">
            Annual Fest
          </motion.h3>
          <motion.p className="text-gray-600 mt-4 max-w-6xl mx-auto text-start text-[18px] leading-[30px]">
            STEAM Fest is a dynamic celebration of innovation, creativity, and learning, where
            students showcase their exciting projects and explore new ideas in science,
            technology, engineering, arts, and math. Join us for a day filled with discovery,
            fun, and endless possibilities!
          </motion.p>
        </motion.div>

        {/* Image Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <motion.div key={num} variants={imageVariants} className="overflow-hidden rounded-lg">
              <Image
                src={`/images/steam/image${num}.png`}
                alt={`STEAM Fest Image ${num}`}
                width={400}
                height={300}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 text-center bg-[#fef9f3]">
        <h2 className="text-3xl md:text-6xl font-semibold font-primary text-black mb-8">
          Student Testimonials
        </h2>

        <motion.div whileInView={{ opacity: 1, y: 0 }} className="relative justify-center items-center">
          <Player
            autoplay
            loop={false}
            keepLastFrame
            src="/images/steam/testimonial3.json"
            className="w-full max-w-2xl mx-auto"
          />
        </motion.div>
      </section>
    </>
  );
};

export default FullYearProgram;