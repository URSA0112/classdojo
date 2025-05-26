'use client'
import {
  Backpack,
  BookCheck,
  Home,
  LayoutDashboard,
  PanelTop,
  ScanEye,
  User,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogOut } from "lucide-react"
import { signOut } from "@/lib/SignOutUser";


interface MenuItem {
  title: string;
  url: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  children?: MenuItem[];
}

interface MenuGroup {
  group: string;
  links: MenuItem[];
}

const items: MenuGroup[] = [
  {
    group: "Профайл",
    links: [
      { title: "Нүүр хуудас", url: "/student", icon: Home },
      { title: "Миний мэдээлэл", url: "/student/accountProfile", icon: User },
    ],
  },
  {
    group: "Анги ба хичээл",
    links: [
      { title: "Дүн", url: "/student/assessment", icon: BookCheck },
      { title: "Хичээлүүд", url: "/student/subjects", icon: Backpack },
      { title: "Багш", url: "/student/teacher", icon: LayoutDashboard },
      { title: "Ирц", url: "/student/attendance", icon: ScanEye },
      { title: "Broadcast", url: "/student/broadcast", icon: BookCheck },
      { title: "Ангийн сурагчид", url: "/student/studentlist", icon: BookCheck },
    ],
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="bg-white border-r w-64 shadow-md min-h-screen">
      <SidebarContent>
        <SidebarGroup className="px-4 py-6">
          <SidebarGroupLabel className="mb-6 flex justify-center">
            <Link href="/student">
              <Image src="/logo-back.svg" alt="logo" width={120} height={40} />
            </Link>
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu className="space-y-6">
              {items.map((group) => (
                <div key={group.group}>
                  <div className="text-xs font-bold text-gray-400 uppercase px-3 mb-2 tracking-wide">
                    {group.group}
                  </div>

                  {group.links.map((link) => (
                    <div key={link.title}>
                      <SidebarMenuItem>
                        <Link href={link.url}>
                          <SidebarMenuButton
                            className={`flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 transition ${pathname === link.url ? "bg-gray-100 font-semibold text-primary" : ""
                              }`}
                          >
                            <link.icon className="w-5 h-5" />
                            <span>{link.title}</span>
                          </SidebarMenuButton>
                        </Link>
                      </SidebarMenuItem>

                      {/* Children */}
                      {link.children?.map((child) => (
                        <SidebarMenuItem key={child.title} className="ml-6">
                          <Link href={child.url}>
                            <SidebarMenuButton
                              className={`flex items-center gap-2 px-3 py-1.5 rounded hover:bg-gray-50 transition ${pathname === child.url ? "text-primary font-medium" : "text-gray-600"
                                }`}
                            >
                              <child.icon className="w-4 h-4" />
                              <span className="text-sm">{child.title}</span>
                            </SidebarMenuButton>
                          </Link>
                        </SidebarMenuItem>

                      ))}
                    </div>
                  ))}
                </div>
              ))}
              <SidebarMenuItem className="mt-10 px-4">
                <button
                  onClick={signOut}
                  className="w-full flex items-center gap-3 text-sm px-4 py-2 rounded-lg bg-red-50 text-red-500 hover:bg-red-100 transition font-medium"
                >
                  <LogOut className="w-5 h-5" />
                  <span>Системээс гарах</span>
                </button>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}