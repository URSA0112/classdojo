import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./components/app-sidebar";
import { Header } from "./components/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <Header />
      <main className="w-screen h-screen bg-gray-200">
       
        {children}
      </main>
    </SidebarProvider>
  );
}
