"use client";

import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";

const Player = dynamic(() => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player), { ssr: false });


const initiatives = [
  {
    image: "/images/class.webp",
    title: "Educational Programs",
    description:
      "Bringing education to underprivileged communities through innovative learning methods."
  },
  {
    image: "/images/sarcon.webp",
    title: "Beach Cleanups",
    description:
      "Organizing cleanup drives to protect marine life and promote environmental sustainability."
  },
  {
    image: "/images/outdoor.webp",
    title: "Performing Arts",
    description:
      "Empowering youth through cultural performances and artistic expression."
  }
];

const blogPosts = [
  {
    image: "/images/journey.webp",
    title: "Navigating Transformation: My Yuvabe Journey",
    description:
      "A heartfelt account of a Yuvabe alumni where he talks about discovering his passion, overcoming adversity..."
  },
  {
    image: "/images/running.webp",
    title: "United by the Joy of Running",
    description:
      "Auroville Marathon reignites the spirit of teamwork, oneness and collaboration within the Yuvabe team..."
  },
  {
    image: "/images/world.webp",
    title: "Shaping lives and the future of the world",
    description:
      "Think back to your school days. Can you recall any teachers who left a lasting impression on you? Chances are, you..."
  }
];

const page = () => {
  return (
    <>
      <section className="relative bg-[#592AC7] text-white md:min-h-[720px] min-h-[600px] flex items-start md:items-start lg:items-center justify-center px-6 md:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 w-full relative">
          {/* Left Side - Text Content */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-[64px] font-primary font-semibold pt-[32px] md:pt-[18px] lg:pt-0">
              We Serve
            </h2>
            <p className="mt-4 text-base md:text-lg font-secondary max-w-lg mx-auto md:mx-0">
              We are committed to providing support to our community and
              engaging in opportunities where we can make a difference.
            </p>
          </div>

          {/* Right Side - Lottie Animation */}
          <div className="flex justify-center md:justify-end relative w-full">
            <Player
              autoplay
              keepLastFrame
              loop={false}
              src="/images/hema.json"
              className="w-[350px] h-[350px] max-w-xl sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[800px] lg:h-[800px]
        relative   top-20 lg:top-20 md:top-60"
            />
          </div>
        </div>
      </section>

      <section className="relative bg-white text-black py-16 px-6 md:px-12 lg:px-20">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold text-center mb-12"
        >
          Enabling Educational Empowerment
        </motion.h2>

        {/* Content Wrapper */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Image
              src="/images/ser-edu.webp" // Update with the correct path
              alt="Educational Empowerment"
              width={600}
              height={600}
              className="rounded-lg"
            />
          </motion.div>

          {/* Right Side - Text & Button */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-base md:text-lg mb-6">
              With the mission to enable educational empowerment among school
              children, we created a project-based, interdisciplinary curriculum
              that brings Science, Technology, Engineering, Art & Math together
              under one umbrella.
            </p>
            <p className="text-base md:text-lg mb-6">
              Each year culminates with the annual STEAM Fest where all the
              students present their projects to the community.{" "}
              <a href="#" className="text-[#592AC7] font-semibold underline">
                Read more about this one-of-a-kind educational fair!
              </a>
            </p>
            <p className="font-bold text-lg mb-6">
              Your support will help us take this unique educational offering to
              more schools in the region!
            </p>

            {/* Button */}
            <motion.a
              href="#"
              className="bg-[#592AC7] text-white font-semibold py-3 px-6 rounded-lg shadow-md inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Support Us
            </motion.a>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#FEF9EC] text-black py-16 px-6 md:px-12 lg:px-20">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold text-center mb-4"
        >
          Other Community Initiatives
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-base md:text-lg max-w-3xl mx-auto mb-12"
        >
          Apart from spreading educational empowerment, our team is also
          committed to being an active force for good in the community in many
          other ways. From beach cleanups to performing arts, we do it all!
        </motion.p>

        {/* Cards Container */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {initiatives.map((initiative, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden rounded-lg  cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Image - Always Visible */}
              <Image
                src={initiative.image}
                alt={initiative.title}
                width={400}
                height={300}
                className="w-full h-[250px] object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />

              {/* Hover Overlay - Light White (Opacity 10%) */}
              <div className="absolute inset-0 bg-white opacity-10 group-hover:opacity-50 transition-opacity duration-300"></div>

              {/* Hover Text - Fade In */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
                <h3 className="text-black text-xl font-bold">
                  {initiative.title}
                </h3>
                <p className="text-black text-sm mt-2 font-semibold">
                  {initiative.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="relative bg-[#5F2DC6] text-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
        {/* Background GIF */}
        <div className="absolute inset-0 flex justify-center items-center  ">
          <Image
            src="/images/planewhite.gif" // Change to your GIF file path
            alt="Animated Background"
            layout="fill"
            objectFit="contain"
            className="hidden md:block top-[-20px] md:top-[-50px] left-0 w-full"
            // Adjust opacity for better readability
          />
        </div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-semibold text-center relative z-10"
        >
          Read more about our community <br /> activities in and around
          Auroville
        </motion.h2>

        {/* Blog Cards */}
        <motion.div
          className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              className="bg-white text-black rounded-[20px] shadow-lg  overflow-hidden p-4 transition-transform duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Blog Image */}
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={250}
                className="w-full h-[200px] object-cover rounded-lg rounded-bl-[43px] rounded-tr-[43px] rounded-tl-[13px] rounded-br-[13px]"
              />

              {/* Blog Content */}
              <div className="mt-4">
                <h3 className="text-lg font-bold">{post.title}</h3>
                <p className="text-sm mt-2">{post.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="relative z-10 text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <a
            href="#"
            className="inline-block bg-white text-[#5F2DC6] font-bold py-3 px-6 rounded-full shadow-md hover:bg-gray-200 transition"
          >
            Visit our Blog
          </a>
        </motion.div>
      </section>
    </>
  );
};

export default page;
