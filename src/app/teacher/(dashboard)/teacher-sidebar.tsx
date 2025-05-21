'use client'
import {
  Activity,
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
      { title: "Нүүр хуудас", url: "/teacher", icon: Home },
      { title: "Миний мэдээлэл", url: "/teacher/accountsettings", icon: User },
    ],
  },
  {
    group: "Анги ба хичээл",
    links: [
      { title: "Даасан анги", url: "/teacher/myClass", icon: PanelTop },
      { title: "Сурагчдын мэдээлэл", url: "/teacher/myStudents", icon: Backpack },
      { title: "Хичээлийн анги", url: "/teacher/class", icon: LayoutDashboard },
      { title: "Ирц бүртгэл", url: "/teacher/attendance", icon: ScanEye },
      { title: "Шалгалт", url: "/teacher/exam", icon: BookCheck },
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
            <Link href="/teacher">
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
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}