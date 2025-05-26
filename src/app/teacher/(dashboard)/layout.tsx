
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "./teacher-sidebar"


export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <SidebarProvider>
      <AppSidebar />

      <main className="flex flex-col h-screen bg-gray-200 w-full" >

        {children}
      </main>
    </SidebarProvider>
  )
}
