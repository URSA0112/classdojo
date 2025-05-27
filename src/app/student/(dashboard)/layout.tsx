"use client";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./student-sidebar";
import { useEffect } from "react";
import { getUserAndPost } from "@/lib/CreateTestUser";
import supabase from "@/utils/supabase";
import { LOCAL_BASE_URL } from "@/constants/baseurl";
import { BASE_URL } from "@/constants/baseurl";


export default function Layout({ children }: { children: React.ReactNode }) {

  useEffect(() => {
    console.log("🚀 StudentHomePage loaded");

    const fetchUser = async () => {
      const { data: { user }, error } = await supabase.auth.getUser();
      console.log(user);
    };

    fetchUser();

    getUserAndPost(`${BASE_URL}auth/testUser`, "student");
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
