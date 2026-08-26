"use client";

import { motion } from "framer-motion";
import {
  Clock,
  CalendarDays,
  Sparkles,
  Utensils,
  Users,
  MapPin,
} from "lucide-react";

const highlights = [
  { icon: Clock, label: "Duration", value: "6 Weeks" },
  {
    icon: CalendarDays,
    label: "Schedule",
    value: "Every Saturday, 2 Sessions/Day",
  },
  { icon: Sparkles, label: "Tuition", value: "Free" },
  { icon: Utensils, label: "Meals", value: "Lunch Provided" },
  { icon: Users, label: "Cohort Size", value: "Limited to 20" },
  { icon: MapPin, label: "Venue", value: "SaraCon, Auroville" },
];

export default function Highlights() {
  return (
    <section className="bg-[#FFF8E7] py-14 md:py-16">
      <div className="max-w-310 mx-auto px-5 md:px-8 xl:px-0">
        <motion.div
          className="flex flex-col items-center text-center gap-3 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="font-secondary text-[12px] tracking-widest uppercase text-[#B8790A] font-semibold">
            Programme Highlights
          </p>
          <h2 className="font-primary text-[#1C1710] text-3xl md:text-4xl lg:text-[2.75rem] font-bold">
            Everything you need to know
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {highlights.map(({ icon: Icon, label, value }) => (
            <motion.div
              key={label}
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col items-center text-center gap-2 bg-white rounded-2xl border border-[#D9A404]/20 shadow-[0_4px_18px_rgba(0,0,0,0.04)] px-4 py-6"
            >
              <div className="w-11 h-11 rounded-full bg-[#FDF1D2] flex items-center justify-center">
                <Icon className="w-5 h-5 text-[#B8790A]" strokeWidth={2.25} />
              </div>
              <p className="font-secondary text-[10px] tracking-widest uppercase text-[#8A7A52] font-semibold">
                {label}
              </p>
              <p className="font-primary text-sm md:text-base font-semibold text-[#1C1710]">
                {value}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
