"use client";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./student-sidebar";
import { useEffect } from "react";
import { getUserAndPost } from "@/lib/CreateTestUser";


export default function Layout({ children }: { children: React.ReactNode }) {

  useEffect(() => {
    console.log("🚀 StudentHomePage loaded");
    getUserAndPost(`https://dojoback.onrender.com/api/v1/auth/testUser`, " student")
  }, [])

  return (
    <SidebarProvider>
      <AppSidebar />

      <main className="w-screen h-screen bg-gray-200">

        {children}
      </main>
    </SidebarProvider>
  );
}
