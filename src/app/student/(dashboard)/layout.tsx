"use client";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./student-sidebar";
import { useEffect } from "react";
import { getUserAndPost } from "@/lib/CreateTestUser";
import supabase from "@/utils/supabase";


export default function Layout({ children }: { children: React.ReactNode }) {

  useEffect(() => {
    console.log("🚀 StudentHomePage loaded");

    const fetchUser = async () => {
      const { data: { user }, error } = await supabase.auth.getUser();
      console.log(user);
    };

    fetchUser();

    getUserAndPost(`https://dojoback.onrender.com/api/v1/auth/testUser`, "student");
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
