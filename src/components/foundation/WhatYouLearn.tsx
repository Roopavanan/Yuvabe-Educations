"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MessageCircle, Laptop2, Lightbulb, Briefcase } from "lucide-react";

const pillars = [
  {
    icon: MessageCircle,
    title: "Confident Communication",
    description:
      "Reading, writing, listening, speaking and presentation skills.",
  },
  {
    icon: Laptop2,
    title: "Digital & Practical Skills",
    description: "Digital design basics and practical digital tools.",
  },
  {
    icon: Lightbulb,
    title: "Critical Thinking & Problem Solving",
    description: "Analytical thinking and practical problem solving.",
  },
  {
    icon: Briefcase,
    title: "Career Readiness",
    description:
      "Resume preparation, career planning and interview readiness.",
  },
];

export default function WhatYouLearn() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8 xl:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 items-center">
          {/* Image */}
          <motion.div
            className="relative rounded-3xl overflow-hidden aspect-4/5 border border-[#D9A404]/20 shadow-[0_16px_40px_rgba(0,0,0,0.08)]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/foundation/Foundation05.webp"
              alt="A Foundation Programme student confidently presenting to her class"
              fill
              unoptimized
              className="object-cover"
            />
          </motion.div>

          {/* Content */}
          <div>
            <motion.div
              className="flex flex-col gap-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <p className="font-secondary text-[12px] tracking-widest uppercase text-[#B8790A] font-semibold">
                What You&apos;ll Learn
              </p>
              <h2 className="font-primary text-[#1C1710] text-3xl md:text-4xl lg:text-[2.75rem] font-bold">
                Four pillars of the programme
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {pillars.map(({ icon: Icon, title, description }, index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl border border-[#D9A404]/20 shadow-[0_4px_18px_rgba(0,0,0,0.04)] p-6 flex flex-col gap-3"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#FDF1D2] flex items-center justify-center">
                    <Icon
                      className="w-5 h-5 text-[#B8790A]"
                      strokeWidth={2}
                    />
                  </div>
                  <h3 className="font-primary text-base font-semibold text-[#1C1710]">
                    {title}
                  </h3>
                  <p className="font-secondary text-sm text-[#5B5346] leading-relaxed">
                    {description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
