import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import AppSidebar  from "@/components/sideBar"
// import { createContext } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  // const SidebarContext = createContext();
  
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex flex-col w-full h-screen overflow-hidden">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}
