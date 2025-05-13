import { SidebarProvider } from "@/components/ui/sidebar";
import { Header } from "./components/Header";
import { AppSidebar } from "./components/app-sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <Header />
      <main className="flex flex-col h-screen bg-gray-200 w-full">
        {children}
      </main>
    </SidebarProvider>
  );
}
