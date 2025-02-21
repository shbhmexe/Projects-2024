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
      <div className="grid grid-cols-2 gap-6 mt-20">
        {Object.keys(syllabusData).map((semester) => {
          const isAvailable = semester === "semester1" || semester === "semester2";

          return (
            <button
              key={semester}
              onClick={() => isAvailable && setSelectedSemester(semester)}
              disabled={!isAvailable}
            >
              <motion.div
                whileHover={isAvailable ? { scale: 1.05, boxShadow: "0px 5px 15px rgba(0, 102, 255, 0.3)" } : {}}
                whileTap={isAvailable ? { scale: 0.97 } : {}}
                className={`p-4 rounded-lg transition-all text-lg font-semibold text-center
                  ${
                    isAvailable
                      ? "bg-gradient-to-r from-blue-700 to-purple-700 text-white hover:from-blue-800 hover:to-purple-800"
                      : "bg-gradient-to-r from-gray-700 to-gray-900 text-gray-300 cursor-not-allowed"
                  }`}
              >
                {semester.replace("semester", "Semester ")}{" "}
                {!isAvailable && "(Not Available)"}
              </motion.div>
            </button>
          );
        })}
      </div>

      {/* Subject Selection */}
      {selectedSemester && (
        <div className="mt-8">
          <h2 className="text-5xl font-bold mb-6">
            Subjects in {selectedSemester.replace("semester", "Semester ")} (Syllabus) :
          </h2>

          <div className="grid grid-cols-2 gap-4">
            {Object.entries(syllabusData[selectedSemester]).map(([subject, link]) => (
              <motion.button
                key={subject}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 5px 15px rgba(128, 0, 128, 0.3)", // Soft shadow
                }}
                whileTap={{ scale: 0.97 }}
                className="p-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg hover:from-pink-700 hover:to-purple-700 transition-all"
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
