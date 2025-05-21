'use client';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TeacherHome from "./home/page";


export default function TeacherMainPage() {
  return (
    <div className="p-10 bg-gradient-to-br from-blue-50 to-white min-h-screen space-y-8">
      <TeacherHome></TeacherHome>
    </div>
  );
}