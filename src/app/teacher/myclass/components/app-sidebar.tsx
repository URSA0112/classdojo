import {
  Activity,
  House,
  Info,
  LayoutList,
  PanelLeftOpen,
  PersonStanding,
  Settings,
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
    group: "Анги",
    links: [
      { title: "Home", url: "/teacher/myclass", icon: House },
      {
        title: "Ангийн үйл ажиллагаа",
        url: "/teacher/myclass/activity",
        icon: Activity,
      },
      {
        title: "Эцэг эхийн мэдээлэл",
        url: "/teacher/myclass/parents",
        icon: Info,
      },
      { title: "Тохиргоо", url: "/teacher/myclass/settings", icon: Settings },
    ],
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup className="px-2 py-9 flex flex-col gap-4">
          <SidebarGroupLabel>
            <Link href="/teacher">
              <Image
                src={"/logo-back.svg"}
                alt="logo"
                width={150}
                height={50}
              />
            </Link>
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item: MenuItem) => (
                <div key={item.group}>
                  <div className="font-semibold text-2xl mb-5 ml-5 ">
                    {item.group}
                  </div>
                  <div>
                    {item.links.map((link: MenuItemLink) => (
                      <SidebarMenuItem key={link.title}>
                        <SidebarMenuButton className="flex justify-between items-center ">
                          <a
                            href={link.url}
                            className="flex justify-between items-center w-full "
                          >
                            <span>{link.title}</span> <link.icon />
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </div>
                </div>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
