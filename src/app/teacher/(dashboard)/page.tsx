'use client';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SectionHeader from "./TeacherMainPageComponents/section-header";
import SectionInfo from "./TeacherMainPageComponents/section-info";
import SectionTool from "./TeacherMainPageComponents/section-tool";

export default function TeacherMainPage() {
  return (
    <div className="p-10 bg-gradient-to-br from-blue-50 to-white min-h-screen space-y-8">
      <SectionHeader></SectionHeader>
      <SectionInfo></SectionInfo>
      <SectionTool></SectionTool>

    </div>
  );
}