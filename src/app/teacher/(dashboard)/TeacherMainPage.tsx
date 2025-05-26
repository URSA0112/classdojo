'use client'
import ChatContainer from "@/components/Chat/ChatContainer";
import TeacherHome from "./home/page";
import { getUserAndPost } from "@/lib/CreateTestUser"

import { useEffect } from "react";
import { useSearchParams } from 'next/navigation'

export default function TeacherMainPage() {
    const searchParams = useSearchParams()
    const role = searchParams.get("role") || "teacher"


    useEffect(() => {
        getUserAndPost(`http://localhost:8000/api/v1/auth/testUser`, role)
        console.log(role);
    }, [role])


    return (
        <div className="p-10 bg-gradient-to-br from-blue-50 to-white min-h-screen space-y-8">
            <TeacherHome></TeacherHome>
            <ChatContainer messages={[]}></ChatContainer>
        </div>
    );
}