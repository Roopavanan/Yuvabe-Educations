"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const weeks = [
  {
    number: "01",
    title: "Orientation, Self-Awareness & Goal Setting",
    description: "Personal development foundations to kick off the journey.",
  },
  {
    number: "02",
    title: "Communication Essentials",
    description: "Reading, writing, listening & speaking skills.",
  },
  {
    number: "03",
    title: "Digital Skills",
    description: "Digital design basics & practical tools.",
  },
  {
    number: "04",
    title: "AI for Learning & Productivity",
    description: "Hands-on with AI tools & ChatGPT.",
  },
  {
    number: "05",
    title: "Time Management & Planning",
    description: "Time management, planning and communication activities.",
  },
  {
    number: "06",
    title: "Resume Prep & Graduation",
    description: "Career development, individual presentations and graduation.",
  },
];

export default function Curriculum() {
  return (
    <section
      id="curriculum"
      className="bg-[#FFF8E7] py-16 md:py-20 scroll-mt-20"
    >
      <div className="max-w-[1240px] mx-auto px-5 md:px-8 xl:px-0">
        <motion.div
          className="flex flex-col items-center text-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="font-secondary text-[12px] tracking-widest uppercase text-[#B8790A] font-semibold">
            6-Week Curriculum
          </p>
          <h2 className="font-primary text-[#1C1710] text-3xl md:text-4xl lg:text-[2.75rem] font-bold">
            One Saturday at a time
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 items-start">
          {/* Image */}
          <motion.div
            className="relative rounded-[24px] overflow-hidden aspect-4/5 lg:sticky lg:top-24 border border-[#D9A404]/20 shadow-[0_16px_40px_rgba(0,0,0,0.08)]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/foundation/Foundation02.webp"
              alt="Foundation Programme students in a classroom session"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Timeline */}
          <div className="flex flex-col">
            {weeks.map((week, index) => (
              <motion.div
                key={week.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="flex gap-5"
              >
                <div className="flex flex-col items-center">
                  <div className="w-11 h-11 shrink-0 rounded-full bg-[#F2B705] text-[#1C1710] font-primary font-bold text-sm flex items-center justify-center">
                    {week.number}
                  </div>
                  {index !== weeks.length - 1 && (
                    <div className="w-px flex-1 bg-[#D9A404]/30 my-1" />
                  )}
                </div>
                <div className="pb-9">
                  <p className="font-secondary text-[11px] tracking-widest uppercase text-[#8A7A52] font-semibold mb-1">
                    Week {index + 1}
                  </p>
                  <h3 className="font-primary text-lg font-semibold text-[#1C1710] mb-1">
                    {week.title}
                  </h3>
                  <p className="font-secondary text-sm text-[#5B5346] leading-relaxed">
                    {week.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
