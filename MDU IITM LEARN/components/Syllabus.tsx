"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { syllabusData } from "@/app/Syllabus/syllabusData";

export default function Syllabus() {
  const [selectedSemester, setSelectedSemester] = useState<string | null>(null);

  return (
    <div className="p-6 text-center mb-12">
      <h1 className="text-4xl sm:text-5xl md:text-6xl text-center px-4 mt-32 sm:mt-40 md:mt-52">
        For All Branch
      </h1>
      <br /> 
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center px-4 mb-4">
        Select a Semester (Syllabus) :
      </h1>


      {/* Semester Selection */}
      <div className="grid grid-cols-2 gap-4 mt-20 ">
        {Object.keys(syllabusData).map((semester) => (
          <button
            key={semester}
            onClick={() => setSelectedSemester(semester)}
          >
            <motion.div
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 15px rgba(0, 102, 255, 0.6)", // Blue glow
              }}
              whileTap={{ scale: 0.95 }}
              className="p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
            >
              {semester.replace("semester", "Semester ")}
            </motion.div>
          </button>))}

      </div>

      {/* Subject Selection */}
      {selectedSemester && (
        <div className="mt-6">
          <h2 className="text-5xl font-bold mb-4">
            Subjects in {selectedSemester.replace("semester", "Semester ")} (Syllabus) :
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(syllabusData[selectedSemester]).map(([subject, link]) => (
              <motion.button
                key={subject}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 0px 15px rgba(128, 0, 128, 0.6)", // Purple shadow
                }}
                whileTap={{ scale: 0.95 }}
                className="p-4 bg-purple-500 text-white rounded-lg hover:bg-purple-400 transition-all"
                onClick={() => window.open(link, "_blank")}
              >
                {subject}
              </motion.button>

            ))}
          </div>
        </div>
      )}
    </div>
  );
}
