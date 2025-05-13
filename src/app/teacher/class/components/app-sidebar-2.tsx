import {
  ChartLine,
  ContactRound,
  ContactRoundIcon,
  NotebookPen,
  PanelLeftOpen,
  Search,
  UserCheck,
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
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

const items = [
  {
    title: "Сурагчид",
    url: "/teacher/class/students",
    icon: ContactRoundIcon,
  },
  {
    title: "Ирц",
    url: "/teacher/class/attandance",
    icon: UserCheck,
  },
  {
    title: "Дүн",
    url: "/teacher/class/score",
    icon: ChartLine,
  },
  {
    title: "Шалгалт",
    url: "/teacher/class/exam",
    icon: NotebookPen,
  },
];

export function AppSidebar2() {
  return (
    <Sidebar className="">
      <SidebarContent>
        <SidebarGroup className="px-2 py-9 flex flex-col gap-4">
          <SidebarGroupLabel>
            <Link href={"/teacher"}>
              {" "}
              <Image
                src={"/logo-back.svg"}
                alt="logo"
                width={150}
                height={50}
              />
            </Link>
          </SidebarGroupLabel>
          <SidebarGroupContent className="">
            <SidebarMenu>
              <SidebarMenuItem>
                <div className="flex flex-col gap-5 my-5">
                  {/* <div className="flex gap-3 items-center justify-center pl-2  ">
                    <Search/>
                    <Input/>
                  </div> */}
                    
                  <Select >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Анги бүлэг" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="11a">11a</SelectItem>
                      <SelectItem value="11b">11b</SelectItem>
                      <SelectItem value="10g">10g</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </SidebarMenuItem>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex justify-between">
                      <span>{item.title}</span> <item.icon />
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
