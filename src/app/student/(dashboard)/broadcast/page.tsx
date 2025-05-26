'use client'
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Session } from '@supabase/supabase-js'
import BroadcastRoom from "@/components/Chat/ BroadcastRoom";
import Image from "next/image";
import supabase from "@/utils/supabase";
import { useState } from "react";

export default function Page() {
  const [session, setSession] = useState<Session | null>(null)
  const fetchSession = async () => {
    const { data } = await supabase.auth.getSession()
    setSession(data.session)
  }

  fetchSession()
  return (
    <div className="flex w-full h-screen items-center justify-center">

      <div className="flex flex-col items-center justify-center w-full max-w-3xl m-20">
        {session && <BroadcastRoom />}
      </div>

    </div>
  );
}
