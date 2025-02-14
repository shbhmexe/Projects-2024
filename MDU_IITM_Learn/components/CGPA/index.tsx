"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import UseNowButton from "@/components/UseNowButton";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="CGPA Calculator"
          paragraph=""
          center
          width="665px"
        />
        <h1 className="text-2xl mt-[-50px] ml-10 text-body-color">The CGPA Calculator on MDU IITM Notes for BTech is a user-friendly tool designed to help students easily calculate their cumulative grade point average. By inputting their grades and credits for each subject, students can quickly get an accurate CGPA result. This feature simplifies academic tracking and helps students monitor their performance throughout their BTech journey, ensuring they stay on top of their goals and progress.</h1>
          <p className="flex justify-self-center text-center  mb-10   text-white-500 px-4 py-2 transition duration-100 ease-in-out  mt-[69px]   ">
            
          <UseNowButton />
          </p>

      </div>


    </section>
  );
};

export default Pricing;
