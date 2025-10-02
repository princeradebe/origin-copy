"use client";

import * as React from "react";

import { SearchForm } from "@/components/search-form";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Shield, TriangleAlert as AlertTriangle, FileCheck, Users, Settings, ChartBar as BarChart3, FileText, ClipboardCheck, Activity, Lock, Eye, TrendingUp, LogOut, Building2, Briefcase } from "lucide-react";

// GRC System Navigation Data
const data = {
  teams: [
    {
      name: "GRC Enterprise",
      logo: "https://res.cloudinary.com/dlzlfasou/image/upload/v1741345507/logo-01_kp2j8x.png",
    },
    {
      name: "Compliance Division",
      logo: "https://res.cloudinary.com/dlzlfasou/image/upload/v1741345507/logo-01_kp2j8x.png",
    },
    {
      name: "Risk Management",
      logo: "https://res.cloudinary.com/dlzlfasou/image/upload/v1741345507/logo-01_kp2j8x.png",
    },
  ],
  navMain: [
    {
      title: "Core Modules",
      url: "#",
      items: [
        {
          title: "Dashboard",
          url: "/",
          icon: BarChart3,
          isActive: true,
        },
        {
          title: "Executive Summary",
          url: "/executive-summary",
          icon: Briefcase,
          isActive: false,
        },
        {
          title: "Risk Management",
          url: "/risk-management",
          icon: AlertTriangle,
          isActive: false,
        },
        {
          title: "Compliance",
          url: "#",
          icon: FileCheck,
        },
        {
          title: "Governance",
          url: "#",
          icon: Building2,
        },
        {
          title: "Audit Management",
          url: "#",
          icon: ClipboardCheck,
        },
        {
          title: "Policy Management",
          url: "#",
          icon: FileText,
        },
        {
          title: "Incident Reporting",
          url: "#",
          icon: Activity,
        },
      ],
    },
    {
      title: "Administration",
      url: "#",
      items: [
        {
          title: "User Management",
          url: "#",
          icon: Users,
        },
        {
          title: "Security Center",
          url: "#",
          icon: Lock,
        },
        {
          title: "Monitoring",
          url: "#",
          icon: Eye,
        },
        {
          title: "Analytics",
          url: "#",
          icon: TrendingUp,
        },
        {
          title: "System Settings",
          url: "#",
          icon: Settings,
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
        <hr className="border-border mx-2 -mt-px border-t" />
        <SearchForm className="mt-3" />
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel className="text-muted-foreground/60 uppercase">
              {item.title}
            </SidebarGroupLabel>
            <SidebarGroupContent className="px-2">
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className="group/menu-button hover:from-sidebar-accent hover:to-sidebar-accent/40 data-[active=true]:from-primary/20 data-[active=true]:to-primary/5 h-9 gap-3 rounded-md bg-gradient-to-r font-medium hover:bg-transparent [&>svg]:size-auto"
                      isActive={item.isActive}
                    >
                      <a href={item.url}>
                        {item.icon && (
                          <item.icon
                            className="text-muted-foreground/60 group-data-[active=true]/menu-button:text-primary"
                            size={22}
                            aria-hidden="true"
                          />
                        )}
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <hr className="border-border mx-2 -mt-px border-t" />
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="hover:from-sidebar-accent hover:to-sidebar-accent/40 data-[active=true]:from-primary/20 data-[active=true]:to-primary/5 h-9 gap-3 rounded-md bg-gradient-to-r font-medium hover:bg-transparent [&>svg]:size-auto">
              <LogOut
                className="text-muted-foreground/60 group-data-[active=true]/menu-button:text-primary"
                size={22}
                aria-hidden="true"
              />
              <span>Sign Out</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}