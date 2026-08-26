"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GraduationCap, FileText, Search, UserCheck } from "lucide-react";

const audience = [
  { icon: GraduationCap, label: "Students" },
  { icon: FileText, label: "Fresh Graduates" },
  { icon: Search, label: "Job Seekers" },
  { icon: UserCheck, label: "Young Professionals" },
];

export default function WhoCanJoin() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8 xl:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
          {/* Image with age badge */}
          <motion.div
            className="relative rounded-[24px] overflow-hidden aspect-4/5 border border-[#D9A404]/20 shadow-[0_16px_40px_rgba(0,0,0,0.08)]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/foundation/Foundation03.webp"
              alt="Foundation Programme students working together during a class session"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1710]/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="font-primary text-white text-3xl md:text-4xl font-bold">
                18&ndash;35
              </p>
              <p className="font-secondary text-white/80 text-sm">
                years old &mdash; that&apos;s the only age requirement
              </p>
            </div>
          </motion.div>

          {/* Audience */}
          <div>
            <motion.div
              className="flex flex-col gap-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <p className="font-secondary text-[12px] tracking-widest uppercase text-[#B8790A] font-semibold">
                Who Can Join?
              </p>
              <h2 className="font-primary text-[#1C1710] text-3xl md:text-4xl lg:text-[2.75rem] font-bold">
                Built for anyone ready to grow
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {audience.map(({ icon: Icon, label }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 bg-white rounded-2xl border border-[#D9A404]/20 shadow-[0_4px_18px_rgba(0,0,0,0.04)] px-5 py-4"
                >
                  <div className="w-10 h-10 shrink-0 rounded-full bg-[#FDF1D2] flex items-center justify-center">
                    <Icon
                      className="w-5 h-5 text-[#B8790A]"
                      strokeWidth={2.25}
                    />
                  </div>
                  <span className="font-primary text-[#1C1710] font-semibold text-sm md:text-base">
                    {label}
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
