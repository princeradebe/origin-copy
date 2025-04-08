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
import {
  RiScanLine,
  RiBardLine,
  RiUserFollowLine,
  RiCodeSSlashLine,
  RiLoginCircleLine,
  RiLayoutLeftLine,
  RiSettings3Line,
  RiLeafLine,
  RiLogoutBoxLine,
} from "@remixicon/react";

// This is sample data.
const data = {
  teams: [
    {
      name: "InnovaCraft",
      logo: "https://res.cloudinary.com/dlzlfasou/image/upload/v1741345507/logo-01_kp2j8x.png",
    },
    {
      name: "Acme Corp.",
      logo: "https://res.cloudinary.com/dlzlfasou/image/upload/v1741345507/logo-01_kp2j8x.png",
    },
    {
      name: "Evil Corp.",
      logo: "https://res.cloudinary.com/dlzlfasou/image/upload/v1741345507/logo-01_kp2j8x.png",
    },
  ],
  navMain: [
    {
      title: "Sections",
      url: "#",
      items: [
        {
          title: "Dashboard",
          url: "#",
          icon: RiScanLine,
        },
        {
          title: "Insights",
          url: "#",
          icon: RiBardLine,
        },
        {
          title: "Contacts",
          url: "#",
          icon: RiUserFollowLine,
          isActive: true,
        },
        {
          title: "Tools",
          url: "#",
          icon: RiCodeSSlashLine,
        },
        {
          title: "Integration",
          url: "#",
          icon: RiLoginCircleLine,
        },
        {
          title: "Layouts",
          url: "#",
          icon: RiLayoutLeftLine,
        },
        {
          title: "Reports",
          url: "#",
          icon: RiLeafLine,
        },
      ],
    },
    {
      title: "Other",
      url: "#",
      items: [
        {
          title: "Settings",
          url: "#",
          icon: RiSettings3Line,
        },
        {
          title: "Help Center",
          url: "#",
          icon: RiLeafLine,
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
              <RiLogoutBoxLine
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
