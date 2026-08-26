"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const outcomes = [
  "Communicate confidently.",
  "Use digital and AI tools effectively.",
  "Manage time efficiently.",
  "Create a professional resume.",
  "Present ideas with confidence.",
  "Build a strong foundation for future studies and careers.",
];

export default function LearningOutcomes() {
  return (
    <section className="bg-[#FFF8E7] py-16 md:py-20">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8 xl:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
          {/* Image */}
          <motion.div
            className="relative rounded-[24px] overflow-hidden aspect-4/5 border border-[#D9A404]/20 shadow-[0_16px_40px_rgba(0,0,0,0.08)]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/foundation/Foundation04.webp"
              alt="Bridge Program graduates holding their certificates of achievement at Auroville"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Outcomes */}
          <div>
            <motion.div
              className="flex flex-col gap-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <p className="font-secondary text-[12px] tracking-widest uppercase text-[#B8790A] font-semibold">
                Learning Outcomes
              </p>
              <h2 className="font-primary text-[#1C1710] text-3xl md:text-4xl lg:text-[2.75rem] font-bold">
                By graduation day, you&apos;ll
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
              {outcomes.map((outcome, index) => (
                <motion.div
                  key={outcome}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    className="w-5 h-5 text-[#B8790A] shrink-0 mt-0.5"
                    strokeWidth={2.25}
                  />
                  <span className="font-secondary text-sm md:text-base text-[#3A3225] leading-relaxed">
                    {outcome}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
