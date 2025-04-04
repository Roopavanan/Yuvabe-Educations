"use client";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import ImpactReport from "@/components/ImpactReport";
import Timeline from "@/components/Timeline";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const logos = [
  "/images/clientlogo/deep.webp",
  "/images/clientlogo/play.webp",
  "/images/clientlogo/agastya.webp",
  "/images/clientlogo/ness.webp"
];

const settings = {
  infinite: true,
  speed: 800,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 3 }
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 2 }
    },
    {
      breakpoint: 480,
      settings: { slidesToShow: 2 }
    }
  ]
};

const courses = [
  {
    title: "AI",
    status: "Up Coming",
    image: "/images/home/ai.svg",
    description:
      "Our AI First Full Stack Program is designed to provide hands-on experience. You won’t just learn the theory—you’ll apply it to real-world problems, gaining the kind of practical skills that make you stand out to employers.",
    tagColor: "bg-[#592ac7]",
    arrowColor: "bg-[#33BED4]"
  },
  {
    title: "Sustainability",
    status: "Up Coming",
    image: "/images/home/sus.svg",
    description:
      "Unlock a comprehensive understanding of sustainability with our 3- month, in-person ‘Corporate Sustainability’ course at Auroville, Tamil Nadu.",
    tagColor: "bg-[#33BED4]",
    arrowColor: "bg-[#91C644]"
  },
  {
    title: "Digital Marketing",
    status: "Active",
    image: "/images/home/dm.svg",
    description:
      "Yuvabe Education’s Digital Marketing Bridge Program is designed to provide an in-depth understanding of the digital marketing landscape. This 12-week, in-person classroom experience will help you build essential skills through practical training, real-world case studies, and industry mentorship.",
    tagColor: "bg-purple-600",
    arrowColor: "bg-yellow-500"
  },
  {
    title: "UI/UX Design",
    status: "Active",
    image: "/images/home/dm.svg",
    description:
      "Yuvabe Education’s Digital Marketing Bridge Program is designed to provide an in-depth understanding of the digital marketing landscape. This 12-week, in-person classroom experience will help you build essential skills through practical training, real-world case studies, and industry mentorship.",
    tagColor: "bg-purple-600",
    arrowColor: "bg-blue-500"
  }
];

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-col lg:flex-row items-center justify-between px-8 md:px-16 py-12 bg-[#FDF8EE] min-h-[800px]">
        {/* Right Side - Text (Appears First on Mobile, Second on Desktop) */}
        <motion.div
          className="w-full md:w-4/5 lg:w-1/2 text-center md:text-left order-1 md:order-1 lg:order-2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-[64px] font-semibold font-primary text-black leading-tight">
            Empowering Minds, <br />
            <span className="text-[#592AC7]">Bridging Futures</span>
          </h1>
          <p className="mt-4 text-gray-700 max-w-[90%] md:max-w-xl font-secondary text-lg md:text-xl">
            Empowering young adults with practical skills, hands-on experience,
            and a purpose-driven community to thrive in a dynamic world.
          </p>
          <motion.a
            href="/about-us"
            className="mt-6 inline-block px-6 py-3 text-white bg-[#592AC7] rounded-lg shadow-md hover:bg-white hover:text-[#592AC7] transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Know More
          </motion.a>
        </motion.div>

        {/* Left Side - Image (Appears Second on Mobile, First on Desktop) */}
        <motion.div
          className="relative w-full md:w-1/2 flex justify-center md:justify-start order-2 md:order-2 lg:order-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <motion.div
              className="absolute top-10 left-40 md:top-10 md:left-85 w-26 h-26 bg-[#91C644] rounded-full"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>

            <motion.div
              className="absolute bottom-5 left-40 md:bottom-20 md:left-100 w-0 h-0 
                border-l-[46px] border-r-[46px] 
                border-b-[82px] border-transparent 
              border-b-[#F8A91E] z-10"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>

            <Image
              src="/images/home/heroimg.webp"
              alt="Group working on laptop"
              width={550}
              height={400}
              className="relative mx-auto md:mx-0  w-full max-w-[550px] md:w-[750px] h-auto top-18 -left-18 md:top-18 md:-left-60 lg:top-32 lg:-left-18"
            />
          </div>
        </motion.div>
      </section>

      {/* Hero section End */}

      {/* Client Logo Slider */}

      <section className="bg-white py-10 shadow-lg backdrop-blur-lg flex justify-center items-center overflow-hidden">
        <div className="w-full max-w-screen-xl px-6 sm:px-8 md:px-10">
          <motion.div
            className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center items-center gap-4 sm:gap-12"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 }
              }
            }}
          >
            {logos.map((logo, index) => (
              <motion.div
                key={index}
                className="flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.1
                }}
              >
                <Image
                  src={logo}
                  alt={`Client logo ${index + 1}`}
                  width={150}
                  height={75}
                  className="w-[100px] sm:w-[140px] md:w-[160px] lg:w-[180px] object-contain transition duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* client logo slider End */}

      {/* Our story */}
      <section className="bg-white py-10 md:py-12 lg:py-16 shadow-md shadow-gray-300 overflow-hidden">
        <div className="container max-w-8xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
          {/* Centered Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-primary font-semibold text-gray-900 mb-6 sm:mb-8 md:mb-10"
          >
            Our Story
          </motion.h2>

          <div className="flex flex-col-reverse lg:flex-row items-center gap-6 sm:gap-8 lg:gap-10">
            {/* Left Side - Text */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 text-left mt-6 lg:mt-0 px-6"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
                Yuvabe Education: <br className="hidden sm:block" /> Unleashing
                Potential <br className="hidden sm:block" /> Through Holistic
                Growth
              </h3>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-3 sm:mb-4">
                At Yuvabe Education in Auroville, we believe in the immense
                potential innate in every individual, especially the youth. The
                challenge lies not in capability but in providing access to the
                right resources to unlock this potential. Our mission is to
                provide young adults, the future of our society, and lifelong
                learners with a transformative platform that fosters
                self-awareness, growth, and empowerment.
              </p>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg">
                Yuvabe Education was born out of a deep commitment to empowering
                individuals. We start with external growth areas like acquiring
                technical and career skills and evolve toward inward
                exploration, where true potential lies. Our holistic approach
                emphasizes not just professional success but also personal
                fulfillment and happiness.
              </p>
            </motion.div>

            {/* Right Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 flex justify-center"
            >
              <div className="relative w-full max-w-[320px] sm:max-w-[550px] md:max-w-[650px] lg:max-w-[700px] h-[220px] sm:h-[320px] md:h-[450px] lg:h-[600px]">
                <Image
                  src="/images/home/story.webp"
                  alt="Our Story"
                  width={1200}
                  height={900}
                  className="rounded-lg w-full h-full object-contain"
                />
                <motion.div
                  className="absolute bottom-0 left-50 md:bottom-15 md:left-80 lg:bottom-0 lg:left-90 w-10 h-10  md:w-26 md:h-26 sm:h-15 sm:w-15 bg-[#91C644] "
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* our story End */}

      {/* Through program */}
      <section className="bg-[#FFF9EA] py-12 overflow-hidden">
        <div className="container max-w-screen-xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative lg:w-1/2 flex justify-center items-center mb-10 lg:mb-0"
          >
            <motion.div
              className="absolute top-0 left-50 md:top-5 md:left-90 w-15 h-15 md:w-26 md:h-26 bg-[#33BED4] rounded-full"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>

            <Image
              src="/images/home/program.webp"
              alt="Children Learning"
              width={800}
              height={800}
              className="w-[280px] md:w-[480px] h-auto max-w-full"
            />
          </motion.div>

          {/* Right Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2 text-left lg:pl-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center md:text-start">
              Through programs like:
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-4 leading-7 md:leading-8">
              <li>
                <strong>The STEAM Program (ages 7-14):</strong> Building a
                strong foundation in Science, Technology, Engineering, Arts, and
                Math, inspiring curiosity and critical thinking in young minds.
              </li>
              <li>
                <strong>The Bridge Program (ages 20+):</strong> A launchpad for
                young adults, focused on skill-building, career readiness, and
                self-discovery.
              </li>
            </ul>
            <p className="text-gray-700 mt-6 text-base md:text-lg">
              We plant the seeds of growth at an early age and nurture them
              throughout life’s journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Join us  */}
      <section className="py-16 px-4 sm:px-6 lg:px-10">
        <div className="container max-w-screen-xl mx-auto flex flex-col md:flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-3/4 lg:w-1/2 space-y-4 text-left px-2 md:px-0"
          >
            <h2 className="text-[24px] sm:text-[28px] md:text-[36px] font-semibold text-black ">
              Join Us in This Mission
            </h2>
            <p className="text-gray-700 leading-7 text-balance text-sm sm:text-base ">
              For those who feel called to support this initiative, your love
              and blessings can make dreams come true for the talented youth of
              Auroville and its surrounding villages.
            </p>
            <p className="text-gray-700 leading-7 text-balance text-sm sm:text-base ">
              We've come this far thanks to the generosity of people like you.
              Together, we can continue to create opportunities and help young
              learners realize their true potential.
            </p>
            <p className="text-gray-700 leading-7 text-balance text-sm sm:text-base mb-6 md:mb-10 ">
              Click here to learn how you can contribute and join us on this
              journey.
            </p>

            {/* Button */}
            <motion.a
              href="#"
              className="mt-6 mx-auto block sm:inline-block px-6 py-3 text-white bg-[#592AC7] rounded-lg shadow-md hover:bg-white hover:text-[#592ac7] transition w-fit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Know More
            </motion.a>
          </motion.div>

          {/* Right: Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-3/4 lg:w-1/2 flex justify-center"
          >
            <div className="relative w-[90%] sm:w-[75%] md:w-3/4 lg:w-full">
              <Image
                src="/images/home/join.webp"
                alt="Join the mission"
                width={800}
                height={800}
                className="rounded-lg object-cover w-full"
              />

              {/* Floating Triangle Decoration */}
              <motion.div
                className="absolute bottom-5 left-5 md:bottom-50 md:left-10 w-0 h-0 rotate-10
            border-l-[30px] sm:border-l-[40px] md:border-l-[46px] 
            border-r-[30px] sm:border-r-[40px] md:border-r-[46px] 
            border-b-[60px] sm:border-b-[75px] md:border-b-[82px] border-transparent 
          border-b-[#F8A91E] z-10"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-[#592AC7] text-white py-16 px-4 sm:px-6 lg:px-12">
        <div className="container max-w-screen-xl mx-auto flex flex-col md:flex-col lg:flex-row items-start justify-between gap-6 md:gap-10">
          {/* Left: Vision & Mission Text */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-6 text-left"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Our Vision
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-7">
              To nurture a generation of self-aware, skilled, and purpose-driven
              individuals who contribute meaningfully to the world, guided by
              inner exploration and outward impact.
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Our Mission
            </h2>
            <p className="text-base sm:text-lg md:text-xl">
              Through Yuvabe Education, we aim to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg md:text-xl">
              <li>
                Equip individuals with futuristic skills for career success.
              </li>
              <li>
                Foster self-awareness and inner exploration to uncover true
                purpose.
              </li>
              <li>
                Support holistic development through our unique
                Work-Serve-Evolve model.
              </li>
              <li>
                Provide access to opportunities for lifelong learning,
                emphasizing that age is just a number when it comes to personal
                growth.
              </li>
            </ul>
          </motion.div>

          {/* Right: Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="relative w-full max-w-[90%] sm:max-w-[75%] md:max-w-[600px] lg:max-w-[800px]">
              <Image
                src="/images/home/mission.webp"
                alt="Vision Mission"
                layout="responsive"
                width={800}
                height={600}
                className="rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work, serve & evolve */}
      <section className="bg-white py-16 px-6 min-h-screen flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto text-center">
          <h2 className="text-4xl font-semibold font-primary text-[64px]">
            Our Motto
          </h2>

          {/* Zig-Zag Line SVG */}
          <div className="absolute left-1/2 -translate-x-[50%] lg:top-1000 md:top-1380 hidden md:block">
            <Image
              src="/images/home/plane2.gif"
              alt="Paper Plane"
              width={550}
              height={550}
            />
          </div>

          <div className="space-y-28 mt-16">
            {/* Work Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }} // Fades in from below
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col md:flex-row items-center gap-16"
            >
              <div className="md:w-3/4 space-y-4 text-left">
                <h3 className="text-[36px] font-semibold font-primary">Work</h3>
                <p className="text-gray-600 font-secondary text-[18px] mb-6">
                  To nurture a generation of self-aware, skilled, and
                  purpose-driven individuals who contribute meaningfully to the
                  world, guided by inner exploration and outward impact.
                </p>
                <Button href="#">Read more</Button>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <Image
                  src="/images/home/arjun.png"
                  alt="Work"
                  width={600}
                  height={600}
                />
              </div>
            </motion.div>

            {/* Serve Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }} // Fades in from below
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}
              className="flex flex-col md:flex-row-reverse items-center gap-18"
            >
              <div className="md:w-3/4 space-y-4 text-left">
                <h3 className="text-[36px] font-semibold font-primary">
                  Serve
                </h3>
                <p className="text-gray-600 font-secondary text-[18px] mb-6">
                  To nurture a generation of self-aware, skilled, and
                  purpose-driven individuals who contribute meaningfully to the
                  world, guided by inner exploration and outward impact.
                </p>
                <Button href="#">Read more</Button>
              </div>
              <div className="md:w-1/2 flex justify-center relative">
                <motion.div
                  className="absolute top-20 left-6 w-16 h-16 bg-green-400 rounded-full"
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                />
                <Image
                  src="/images/home/hema.png"
                  alt="Serve"
                  width={800}
                  height={800}
                />
              </div>
            </motion.div>

            {/* Evolve Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }} // Fades in from below
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 1.5 }}
              className="flex flex-col md:flex-row items-center gap-16"
            >
              <div className="md:w-1/2 space-y-4 text-left">
                <h3 className="text-[36px] font-semibold font-primary">
                  Evolve
                </h3>
                <p className="text-gray-600 font-secondary text-[18px] mb-6">
                  To nurture a generation of self-aware, skilled, and
                  purpose-driven individuals who contribute meaningfully to the
                  world, guided by inner exploration and outward impact.
                </p>
                <Button href="#">Read more</Button>
              </div>
              <div className="w-full md:w-1/2 flex justify-center relative">
                <div className="absolute -top-4 right-8 md:-top-4 md:-right-6 w-24 h-24 bg-orange-400 rotate-12"></div>
                <div className="relative w-full max-w-lg">
                  <Image
                    src="/images/home/priya.webp"
                    alt="Evolve"
                    width={800}
                    height={800}
                    className="w-full h-auto object-contain"
                    priority
                  />
                </div>
                <div className="absolute bottom-2 right-2 w-16 h-16 bg-blue-400 rounded-full"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Timeline />
      <ImpactReport />

      {/* course cards slider */}

      <section className="py-10 bg-[#FDF7E6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Section Title */}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Enroll On Our Latest Bridge Courses
          </motion.h2>

          {/* Swiper Carousel */}
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            autoplay={{ delay: 4000 }}
            className="w-full"
          >
            {courses.map((course, index) => (
              <SwiperSlide key={index}>
                {/* Course Card */}
                <motion.div
                  className={`shadow-lg rounded-[20px] overflow-hidden w-full sm:w-[350px] md:w-[370px] h-auto min-h-[500px] flex flex-col mb-8 border-2 ${
                    index % 2 === 0
                      ? "border-[#33BED4] bg-[#33BED4]-200"
                      : "border-[#91C644] bg-[#91C644]-100"
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  {/* Image Section */}
                  <div className="relative w-full h-[180px] sm:h-[200px]">
                    <Image
                      src={course.image}
                      alt={course.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-lg"
                    />
                    {/* Tag */}
                    <span
                      className={`absolute top-3 right-3 px-3 py-1 text-xs font-semibold rounded ${
                        course.status === "Active"
                          ? "bg-[#592ac7] text-white"
                          : "bg-blue-600 text-white"
                      }`}
                    >
                      {course.status}
                    </span>
                  </div>

                  {/* Text Section */}
                  <div className="p-5 flex flex-col flex-grow">
                    {/* Title */}
                    <h3 className="text-lg font-semibold">{course.title}</h3>
                    {/* Description */}
                    <p className="text-gray-700 text-sm mt-2 flex-grow">
                      {course.description}
                    </p>
                    {/* Navigation Icon */}
                    <div className="flex justify-end mt-4">
                      <Link
                        href={`/courses/${course.title
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="mt-4"
                      >
                        <div
                          className={`w-10 h-10 flex items-center justify-center rounded-full text-white ${course.arrowColor}`}
                        >
                          <FontAwesomeIcon icon={faArrowRight} />
                        </div>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* View More Button */}
          <div className="text-center mt-8">
            <Link href="/bridge/bridge-program" passHref>
              <motion.button
                className="px-6 py-3 bg-[#592Ac7] text-white rounded-lg font-semibold shadow-md hover:bg-violet-400 transition"
                whileHover={{ scale: 1.05 }}
              >
                View more
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action section */}
      <section className="flex justify-center items-center py-16 px-6">
        <motion.div
          className="bg-[#592AC7] text-white rounded-[30px] shadow-lg w-[960px] h-[340px] max-w-full p-8 text-center 
                   flex flex-col justify-center items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl lg:text-[64px] font-semibold font-primary">
            Let’s Grow Together
          </h2>
          <p className="text-sm lg:text-[18px] text-gray-200 mt-2">
            Sign Up for Newsletter
          </p>

          <div className="mt-6 flex justify-center items-center gap-6 ">
            <form action="https://api.web3forms.com/submit" method="POST" name="newsletter" className="mt-6 flex justify-center items-center gap-6">
              <input
                type="hidden"
                name="access_key"
                value="cac9472c-2296-4087-88a4-dc317c849d14"
              />

              <input
                type="email"
                name="email" required
                placeholder="Enter Your email"
                className="w-2/3 px-4 py-3 rounded-lg border border-gray-300 bg-[#FFFFFF] text-black focus:outline-none"
              />
              <button type="submit" className="bg-[#FFCA2D] hover:bg-yellow-600 text-black font-medium px-6 py-3 rounded-lg">
                Send
              </button>
            </form>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
