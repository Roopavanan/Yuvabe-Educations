"use client";

import { motion, AnimatePresence } from "framer-motion";
import FaqItem from "@/components/Faqitem";

const faqs = [
  {
    question: "What is the course about?",
    answer:
      "This is a free, online course that helps you gain hands-on knowledge in corporate sustainability. </br></br>Our comprehensive program covers: <ul style='list-style-type: disc; margin-left: 1rem;'><li>Sustainability fundamentals</li><li>GHG accounting & carbon management</li><li>CSR & corporate responsibility</li><li>ESG frameworks & reporting</li><li>Social impact & SROI</li><li>Climate risk assessment</li></ul>Moving from concepts to practice through data, frameworks, analysis, and communication.",
  },
  {
    question: "Who is this course designed for? (Target Audience)",
    answer:
      "The course is suitable for <ul style='list-style-type: disc; margin-left: 1rem;'><li>students,</li><li>graduates,</li><li>and early-career professionals</li></ul>from Environmental Science, Ecology, Environmental Engineering, or related disciplines.",
  },
  {
    question: "What are the key topics covered in this course?",
    answer:
      "<ul style='list-style-type: disc; margin-left: 1rem;'><li>Sustainability fundamentals</li><li>GHG accounting and carbon management</li><li>CSR and corporate responsibility</li><li>ESG frameworks and reporting</li><li>Social impact and SROI</li><li>Climate risk assessment</li></ul>",
  },
  {
    question: "Is there a fee to join?",
    answer:
      "No, the course is completely free. There is no fee and no deposit required to register.",
  },
  {
    question: "Is prior experience required?",
    answer:
      "No, this course is beginner-friendly and builds foundational knowledge.",
  },
  {
    question: "Is this course suitable for beginners?",
    answer:
      "Yes, the course is made for beginners and starts with basic topics, slowly moving to more advanced ones. ",
  },
  {
    question: "When does the course start, and how long does it run?",
    answer: "The course starts on 11 September 2026 and runs for 6 weeks.",
  },
  {
    question: "What is the schedule?",
    answer:
      "Live sessions are held every Friday and Saturday, 4:00 – 5:30 PM.",
  },
  {
    question: "Is the course online or in-person?",
    answer:
      "The course is fully online, so you can join from anywhere with an internet connection.",
  },
  {
    question: "How will I receive the certificate (digital, or printed)?",
    answer: "Printed",
  },
  {
    question: "Are there any exams or assessments for certification?",
    answer:
      "Yes. You will have an end-of-course assessment and presentation of the capstone project.",
  },
  {
    question: "Do I need any special software or hardware to take the course?",
    answer:
      "You will need a laptop or computer with a stable internet connection to join the live online sessions.",
  },
  {
    question:
      "Does the course provide any career support or job placement assistance?",
    answer:
      "The course enhances employability through practical skills and industry insights but does not offer direct placement services.",
  },
  {
    question: "What qualifications or experience do the instructors have?",
    answer:
      "The instructors have backgrounds in environmental engineering and management, sustainability, climate change, and carbon markets.",
  },
  {
    question: "Will I gain access to a network of professionals or alumni?",
    answer: "You will be part of the Yuvabe Alumni group.",
  },
  {
    question: "How do I apply?",
    answer:
      "Applications are accepted online. Complete the application form before 11 September 2026, and shortlisted candidates will be invited for an online interview and aptitude test.",
  },
];

export default function FaqSection() {
  return (
    <section className="py-16 px-6 bg-white text-center">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="text-3xl md:text-4xl font-bold text-[#7CB518]"
      >
        Interactive FAQs
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
        className="text-gray-600 mt-2"
      >
        Click each question to reveal the answer
      </motion.p>

      {/* FAQ Items */}
      <div className="mt-8 max-w-4xl mx-auto space-y-4">
        <AnimatePresence>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                delay: index * 0.1,
              }}
            >
              <FaqItem question={faq.question} answer={faq.answer} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
