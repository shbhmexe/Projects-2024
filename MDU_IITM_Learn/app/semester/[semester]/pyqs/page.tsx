"use client";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";

const subjectsBySemester: Record<number, { name: string; link: string }[]> = {
  1: [
    { name: "Mathematics - 1", link: "https://drive.google.com/drive/folders/1jPBob5pCBv9Ddh7PcU5iMdPJF1KDu4rE?usp=sharing" },
    { name: "Semiconductor Physics", link: "https://drive.google.com/drive/folders/1PmR4R3zxFnWyUq9IHxgrlsx5PQuQTZVL?usp=drive_link" },
    { name: "English", link: "https://drive.google.com/drive/folders/1DkizK3aTQ5wTLuqhwCtooTtZfzuNLJXj?usp=sharing" },
    { name: "Basic Electrical Engineering", link: "https://drive.google.com/drive/folders/1fpYPmC3qPJH_DqeG9E5kvBzIYu8vETSG?usp=drive_link" },
  ],
  2: [
    { name: "Mathematics-II", link: "https://drive.google.com/your_math2_pyq_link" },
    { name: "Chemistry-I", link: "https://drive.google.com/your_chemistry_pyq_link" },
    { name: "Programming For Problem Solving", link: "https://drive.google.com/your_pfps_pyq_link" },
    { name: "Workshop Technology", link: "https://drive.google.com/your_workshop_pyq_link" },
    { name: "Chemistry Lab-1", link: "https://drive.google.com/your_chemistry_lab_pyq_link" },
    { name: "Programming in C Lab", link: "https://drive.google.com/your_c_lab_pyq_link" },
    { name: "Language Lab", link: "https://drive.google.com/your_language_lab_pyq_link" },
  ],
  // Add more semesters and subjects...
};

export default function PYQSubjectsPage() {
  const { semester } = useParams();
  const semesterNum = Number(semester);

  // Handle invalid semester
  if (isNaN(semesterNum) || !subjectsBySemester[semesterNum]) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-gray-900 dark:text-white">
        <h1 className="text-2xl font-bold">Invalid Semester</h1>
        <p className="text-lg">Please go back and select a valid semester or Not available right now.</p>
      </div>
    );
  }

  const subjects = subjectsBySemester[semesterNum];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col items-center justify-center px-4 py-10 md:py-20 transition-all duration-300 
      bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-950 dark:to-black 
      text-black dark:text-white"
    >
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-3xl md:text-4xl font-extrabold mb-6 md:mb-10 text-center"
      >
        📜 Select Subject for PYQs{" "}
        <span className="text-blue-500 dark:text-cyan-400">Semester {semesterNum}</span>
      </motion.h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 w-full max-w-md sm:max-w-xl md:max-w-2xl">
        {subjects.map((subject, index) => (
          <motion.div
            key={subject.name}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <a
              href={subject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 sm:px-6 sm:py-4 text-md sm:text-lg font-semibold text-white 
              bg-gradient-to-r from-blue-600 to-blue-800 dark:from-cyan-500 dark:to-cyan-700 
              hover:from-blue-700 hover:to-blue-900 dark:hover:from-cyan-600 dark:hover:to-cyan-800 
              rounded-lg shadow-md transition-all duration-300 flex items-center justify-center"
            >
              <motion.span whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                {subject.name}
              </motion.span>
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
