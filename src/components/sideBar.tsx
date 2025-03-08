"use client"
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import Link from "next/link"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { usePathname } from "next/navigation"

// Menu items.
const items = [
    {
        title: "Profile",
        url: "/profile",
        icon: Home,
      },
  {
    title: "Groups",
    url: "/groups",
    icon: Calendar,
  },
  {
    title: "Tasks",
    url: "/tasks",
    icon: Inbox,
  },
 
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
]

export default function AppSidebar() {
  const path = usePathname();
  // console.log(router);
  // let defaultIndex = 0;
  // if (path === "/profile") {
  //   defaultIndex=0;
  // }
  // else if(path === "/groups"){
  //   defaultIndex=1;
  // }
  // const [isActive, setIsActive] = useState(0);
  // const handleClick = (event: React.MouseEvent<HTMLButtonElement>, index:number) => {
  //   setIsActive(index);
  // }

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item, index) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={path === item.url}> 
                    <Link href={item.url} >
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
