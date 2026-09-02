import { Metadata } from "next";
import Hero from "@/components/foundation/Hero";
import Highlights from "@/components/foundation/Highlights";
import WhatYouLearn from "@/components/foundation/WhatYouLearn";
import Curriculum from "@/components/foundation/Curriculum";
import WhoCanJoin from "@/components/foundation/WhoCanJoin";
import LearningOutcomes from "@/components/foundation/LearningOutcomes";
import ApplyCTA from "@/components/foundation/ApplyCTA";

export const metadata: Metadata = {
  title: "Foundation Programme | Yuvabe Education",
  description:
    "A free 6-week learning journey helping young adults build essential life, communication, digital, and career skills. Every Saturday at SaraCon, Auroville. Starts 10 October 2026.",
};

export default function FoundationProgramme() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Highlights />
      <WhatYouLearn />
      <Curriculum />
      <WhoCanJoin />
      <LearningOutcomes />
      <ApplyCTA />
    </main>
  );
}
