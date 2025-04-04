"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";

// Lazy load Lottie Player
const LottiePlayer = dynamic(() => import("@lottiefiles/react-lottie-player").then(mod => mod.Player), { ssr: false });

const FullYearProgram = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Prevents hydration mismatch

  return (
    <>
      <section className="py-12 px-6 md:px-16 lg:px-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.3 } }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-6xl font-semibold font-primary text-[#592AC7] pt-18">
            Deepanam School
          </h2>
          <h3 className="text-xl md:text-3xl font-semibold font-primary mt-4">
            Full Year Program
          </h3>
          <p className="text-[#000000] mt-4 max-w-6xl mx-auto text-start text-[18px] font-secondary leading-[30px]">
            Learning isn’t just about sitting in a classroom—it’s about experimenting, building, and bringing ideas to life.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto"
          initial="hidden"
          animate="visible"
        >
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <motion.div key={num} initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.6 } }}>
              <Image
                src={`/images/deepanam/image${num}.png`}
                alt={`Image ${num}`}
                width={400}
                height={300}
                className="w-full h-auto rounded-lg object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="py-16 text-center bg-[#fef9f3]">
        <h2 className="text-3xl md:text-6xl font-semibold font-primary text-black mb-8">
          Students Testimonial
        </h2>

        {/* Prevents pre-rendering issues with Lottie */}
        {isMounted && (
          <div className="relative justify-center items-center">
            <LottiePlayer autoplay loop keepLastFrame src="/images/deepanam/testimonial.json" className="relative w-full" />
          </div>
        )}
      </section>
    </>
  );
};

export default FullYearProgram;
