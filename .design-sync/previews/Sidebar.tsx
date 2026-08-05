import { SidebarProvider, Sidebar, SidebarHeader, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarMenuBadge } from 'app';

// Framed non-collapsing sidebar: cream rail, white + green active item.
export const CreamRail = () => (
  <div className="flex h-96 overflow-hidden border border-gray-200 bg-white">
    <SidebarProvider className="min-h-0 h-full w-auto">
      <Sidebar collapsible="none" className="h-full border-r border-gray-200">
        <SidebarHeader>
          <span className="px-2 pt-2 font-heading text-sm font-bold uppercase tracking-widest">Harvey's</span>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Store</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton isActive><span>Dashboard</span></SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton><span>Orders</span></SidebarMenuButton>
                  <SidebarMenuBadge>12</SidebarMenuBadge>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton><span>Settings</span></SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
    <div className="flex-1 p-6 text-sm text-gray-500">Content area</div>
  </div>
);
