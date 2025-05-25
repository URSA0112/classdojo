'use client';

import ChatContainer from "@/components/Chat/ChatContainer";
import TeacherHome from "./home/page";
import supabase from "@/utils/supabase";



export default function TeacherMainPage() {
  return (
    <div className="p-10 bg-gradient-to-br from-blue-50 to-white min-h-screen space-y-8">
      <TeacherHome></TeacherHome>
      <ChatContainer messages={[]}></ChatContainer>
    </div>
  );
}