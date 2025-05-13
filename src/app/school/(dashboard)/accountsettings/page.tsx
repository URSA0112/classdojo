"use client";
import { PersonalInfo } from "./components/PersonalInfo";
import { EduInfo } from "./components/EduInfo";
import { ExperienceInfo } from "./components/ExperienceInfo";

export default function ResumePage() {
  return (
    <div className="px-10 pt-30 pb-10 flex flex-col gap-10 bg-gray-200">
      <PersonalInfo />
      <div className="grid grid-cols-2 gap-10">
      <EduInfo />
      <ExperienceInfo />
      </div>
    </div>
  );
}

