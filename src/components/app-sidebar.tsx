"use client";
import * as React from "react";
import { useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,

  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { IoCalendarOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { GrCycle } from "react-icons/gr";
import { MdOutlineAssignment } from "react-icons/md";
import { PiGraph } from "react-icons/pi";
import { LuStethoscope } from "react-icons/lu";
import { IoIosLogOut } from "react-icons/io";
import { useIsMobile } from "@/hooks/use-mobile";
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [activeTab, setActiveTab] = useState<string>(""); // Guarda a aba ativa

  // Função para definir a aba ativa ao clicar
  const handleMenuClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  const isMobile = useIsMobile()

  return (
    <Sidebar collapsible={isMobile ? "offcanvas" : "none"} variant="inset" {...props} className="border-r md:min-h-screen border-[#EBEBEC]">
      <h1 className="text-2xl text-black p-4">VeloraMed</h1>
      <SidebarContent>
        <SidebarSeparator />
        <SidebarGroup className="px-4">
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className={`data-[active=true]:text-[#2955D9] data-[active=true]:border-[#2955D9] data-[active=true]:border`}
                  isActive={activeTab == "integração" ? true : false}
                  onClick={() => handleMenuClick("integração")}
                >
                  <Link className="h-full w-full" href={"/integration"}>
                    <FaWhatsapp size={20} /> Integração
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className={`data-[active=true]:text-[#2955D9] data-[active=true]:border-[#2955D9] data-[active=true]:border`}
                  isActive={activeTab == "agenda" ? true : false}
                  onClick={() => handleMenuClick("agenda")}
                >
                  <Link className="h-full w-full" href={"/agenda"}>
                  <IoCalendarOutline size={20}/>Agenda
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className={`data-[active=true]:text-[#2955D9] data-[active=true]:border-[#2955D9] data-[active=true]:border`}
                  isActive={activeTab == "pacientes" ? true : false}
                  onClick={() => handleMenuClick("pacientes")}
                >
                  <Link className="h-full w-full" href={"/patients"}>
                    <FaRegCircleUser size={20}/> Pacientes
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className={`data-[active=true]:text-[#2955D9] data-[active=true]:border-[#2955D9] data-[active=true]:border`}
                  isActive={activeTab == "remarketing" ? true : false}
                  onClick={() => handleMenuClick("remarketing")}
                >
                  <Link className="h-full w-full" href={"/remarketing"}>
                    <GrCycle size={20}/>Remarketing
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className={`data-[active=true]:text-[#2955D9] data-[active=true]:border-[#2955D9] data-[active=true]:border`}
                  isActive={activeTab == "documentacao" ? true : false}
                  onClick={() => handleMenuClick("documentacao")}
                >
                  <Link className="h-full w-full" href={"/documentation"}>
                    <MdOutlineAssignment size={20}/>Documentação da Pietra
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator className="my-4"/>

        <h1 className="text-sm px-4">Módulos</h1>
        <SidebarGroup className="px-4">
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className={`data-[active=true]:text-[#2955D9] data-[active=true]:border-[#2955D9] data-[active=true]:border`}
                  isActive={activeTab == "business" ? true : false}
                  onClick={() => handleMenuClick("business")}
                >
                  <Link className="h-full w-full" href={"#"}>
                    <PiGraph color="#2955D9"/> Business Connect
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className={`data-[active=true]:text-[#2955D9] data-[active=true]:border-[#2955D9] data-[active=true]:border`}
                  isActive={activeTab == "medAssist" ? true : false}
                  onClick={() => handleMenuClick("medAssist")}
                >
                  <Link className="h-full w-full" href={"#"}>
                  <LuStethoscope color="#F4AD27" size={20}/>Med Assist
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className={`data-[active=true]:text-[#F23E2E] data-[active=true]:bg-[#FFEAE7]`}
                  isActive={true}
                  onClick={() => handleMenuClick("engageMed")}
                >
                  <Link className="h-full w-full " href={"#"} >
                    <IoCalendarOutline size={20} color="#F23E2E"/> Engage Med
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                >
                  <Link className="h-full w-full" href={"/"}>
                    <IoIosLogOut size={20}/> Sair
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
