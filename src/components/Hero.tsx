"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import { TypeAnimation } from "react-type-animation";
import { fadeIn } from "@/lib/variants";
import { PiMicrophoneStageFill } from "react-icons/pi";

const songSequence = ["Biri-Biri, Yoasobi", 3000, "Moonlight Sunrise, Twice", 3000, "Dash, NMIXX", 3000];

const Hero = () => {
  return (
    <section className="w-full h-[75vh]">
      <div className="h-full grid grid-cols-4 gap-5">
        {/* Text */}
        <div className="col-span-4 xl:col-span-2">
          <div className="flex flex-col items-center justify-center h-full">
            <div className="flex flex-col items-start justify-start space-y-4">
              <MouseParallaxContainer
                globalFactorX={0.1}
                globalFactorY={0.2}
                resetOnLeave
                className="relative flex items-center justify-center h-[160px] w-[300px] md:h-[180px] md:w-[420px]"
              >
                <MouseParallaxChild factorX={0.2} factorY={0.4} className="relative">
                  <motion.div
                    variants={fadeIn("up", 0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.4 }}
                    className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tighter"
                  >
                    RendezVibes
                  </motion.div>
                </MouseParallaxChild>
                <MouseParallaxChild factorX={0.9} factorY={0.9} className="absolute z-10 inset-0">
                  <motion.div
                    variants={fadeIn("up", 0.7)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.3 }}
                    className="flex items-center justify-center h-full text-base md:text-xl font-semibold text-center text-white pt-2 md:pt-5"
                  >
                    Where Music Unites Hearts and Beats.
                  </motion.div>
                </MouseParallaxChild>
              </MouseParallaxContainer>
              <div>
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">
                    <PiMicrophoneStageFill />
                  </span>
                  <TypeAnimation sequence={songSequence} wrapper="div" speed={10} deletionSpeed={10} repeat={Infinity} cursor={false} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* img */}
        <div className="hidden xl:block col-span-2">
          <motion.div
            variants={fadeIn("left", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="relative flex items-center justify-center h-full"
          >
            <div className="relative max-w-sm w-full aspect-square rounded-3xl overflow-hidden shadow-xl">
              <Image src={"/images/yoasobi/yoasobi_cover_square.jpg"} fill className="object-cover object-center" quality={100} priority alt="hero img" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
