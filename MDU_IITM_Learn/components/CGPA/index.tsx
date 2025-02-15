"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import UseNowButton from "@/components/UseNowButton";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle title="CGPA Calculator" paragraph="" center width="665px" />

        <div className="max-w-3xl mx-auto text-center px-4">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 dark:text-white leading-relaxed">
            The <span className="text-blue-400 font-bold">CGPA Calculator</span> on{" "}
            <span className="text-blue-400 font-bold">MDU IITM Notes</span> for BTech is a user-friendly tool designed to help students easily calculate their{" "}
            <span className="text-blue-400 font-bold">cumulative grade point average</span>. By inputting their{" "}
            <span className="text-blue-400 font-bold">grades and credits</span> for each subject, students can quickly get an accurate CGPA result.
          </h1>

          <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg mt-4 leading-relaxed">
            This feature simplifies academic tracking and helps students monitor their performance throughout their BTech journey, ensuring they stay on top of their goals and progress.
          </p>

          <div className="mt-6 flex justify-center">
            <UseNowButton />
          </div>
        </div>
      </div>
    </section>


  );
};

export default Pricing;
