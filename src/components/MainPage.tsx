"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
export const MainPage = () => {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    setScrolled(window.scrollY > 40);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`${
        scrolled
          ? "h-screen w-screen  bg-blue-400 pt-25 flex items-center justify-center transition-all duration-400"
          : "h-screen w-screen bg-teal-400  pt-25 flex items-center justify-center transition-all duration-400"
      }`}
    >
      <div className="flex flex-row gap-50 justify-center items-center ">
        <motion.div className="flex flex-col gap-4">
          <h1 className="text-[44px] w-[500px] text-white font-medium leading-extra">
            EDULAB боловсролын нэгдсэн платформ
          </h1>
          <p className="text-xl w-[560px] text-white font-serif">
            Сургуулийн өдөр тутмын бүхий л үйл ажиллагааг автоматжуулж, хялбар
            хэрэглээ бүхий технологийн дэвшилтэт шийдлээр дамжуулан багш, эцэг
            эх, сурагчдыг холбох гүүр болсон цогц систем юм.
          </p>
        </motion.div>
        <motion.div
          className={`${
            scrolled
              ? "bg-teal-400 rounded-full transition-all duration-400"
              : "bg-blue-400 rounded-full transition-all duration-400"
          }`}
        >
          {" "}
          <Image
            alt="home"
            src={"/homepageIMG.png"}
            width={400}
            height={500}
            className="rounded-full"
          />
        </motion.div>
      </div>
    </div>
  );
};
