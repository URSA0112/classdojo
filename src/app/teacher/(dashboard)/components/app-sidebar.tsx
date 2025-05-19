import {
  BookCheck,
  Calendar,
  CalendarRange,
  Dock,
  GalleryHorizontal,
  GalleryHorizontalEnd,
  Home,
  Inbox,
  LayoutDashboard,
  LayoutGrid,
  LayoutList,
  NotebookTabs,
  PanelTop,
  ScanEye,
  Search,
  Settings,
  TrendingUp,
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
import Layout from "../layout";
import Image from "next/image";

interface MenuItem {
  group: string;
  links: MenuItemLink[];
}

interface MenuItemLink {
  title: string;
  url: string;
  icon: React.ComponentType;
}

const items = [
  {
    group: "Профайл",
    links: [
      { title: "Home", url: "/teacher", icon: Home },
      {
        title: "Профайл тохиргоо",
        url: "/teacher/accountsettings",
        icon: User,
      },
      { title: "Ирц", url: "/teacher/attendance", icon: ScanEye },
      {
        title: "Багшийн үнэлгээ",
        url: "/teacher/assessment",
        icon: TrendingUp,
      },
    ],
  },
  {
    group: "Анги",
    links: [
      { title: "Даасан анги", url: "/teacher/myclass", icon: PanelTop },
      {
        title: "Хичээлийн анги",
        url: "/teacher/class",
        icon: LayoutDashboard,
      },
    ],
  },
  {
    group: "Хичээл",
    links: [
      {
        title: "Хичээлийн хөтөлбөр",
        url: "/teacher/plan",
        icon: CalendarRange,
      },
      {
        title: "Шалгалт",
        url: "/teacher/exam",
        icon: BookCheck,
      },
    ],
  },
  {
    group: "Сургууль",
    links: [
      { title: "Home", url: "/teacher/school", icon: Home },
      {
        title: "Багш нарын мэдээлэл",
        url: "/teacher/teacherlist",
        icon: LayoutList,
      },
      { title: "Холбоо барих", url: "/teacher/contact", icon: NotebookTabs },
    ],
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="z-30 ">
      <SidebarContent>
        <SidebarGroup className="px-6 py-9 flex flex-col gap-4 ">
          <SidebarGroupLabel className="mt-15 flex justify-center flex-col gap-1">
            <h1 className="text-2xl font-bold leading-8 text-black ">Багш</h1>
            <div className="w-fit h-fit ">
              <Image src="/avatar.png" alt="logo" width={150} height={450} />
            </div>
          </SidebarGroupLabel>
          <SidebarGroupContent className="mt-10">
            <SidebarMenu className="pt-10">
              {items.map((item: MenuItem) => (
                <div key={item.group}>
                  <div className="text-gray-400 ">{item.group}</div>
                  {item.links.map((link: MenuItemLink) => (
                    <SidebarMenuItem key={link.title}>
                      <SidebarMenuButton className="h-15">
                        <div className="flex items-center gap-4 pt-4 pb-3 pl-3">
                          <a
                            href={link.url}
                            className="flex items-center gap-3"
                          >
                            <link.icon />
                            <span className="leading-4">{link.title}</span>
                          </a>
                        </div>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
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
