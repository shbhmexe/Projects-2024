"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

import ModalVideo from "react-modal-video";

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="hidden md:block h-[2px] w-full bg-transparent  mt-[-150px] overflow-hidden relative mb-10">
        <div className="h-full w-full animate-glowMedian mb-4"></div>
      </div>

      <div className="container mt-16">
        <SectionTitle

          title="We Are Here to Help You Succeed!"
          paragraph=""
          center
          mb="50px"

        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp mx-auto max-w-[770px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[77/40] items-center justify-center">

                <div className=" flex text-2xl ">
                  <p className="flex   text-body-color text-justify">Struggling to find quality study materials for your B.Tech courses? We’ve got you covered! Our platform offers well-structured handwritten notes, previous year question papers (PYQs), lab manuals, and EDG sheets—all tailored specifically for MDU & IITM students. Whether your preparing for exams or practicals, our syllabus-aligned resources ensure efficient learning and better grades. Study anytime, anywhere with instant digital access and stay ahead in your academic journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ModalVideo
        channel="/"
        autoplay={false}
        start={false}
        isOpen={false}
        videoId="/"
        onClose={() => setOpen(true)}
      />

      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full"></div>
    </section>
  );
};

export default Video;
