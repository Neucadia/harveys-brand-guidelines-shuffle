import React from "react";
import {
  ChevronDown,
  ClipboardList,
  Home,
  Map,
  Search,
  Settings,
  ShoppingCart,
  Sprout,
  Wheat,
} from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "./ui/command";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "./ui/sidebar";

export default function CatalogueNavigation() {
  return (
    <React.Fragment>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-6">
            <div className="bg-yellow-100 py-1 px-2 font-bold inline-block">
              Component Catalogue
            </div>
          </div>
          <h2 className="font-heading text-center text-3xl lg:text-4xl font-bold max-w-2xl mx-auto mb-4 uppercase tracking-widest">
            Navigation
          </h2>
          <p className="text-gray-600 text-center max-w-xl mx-auto mb-12">
            Wayfinding stays quiet: green for the current trail, gray for the
            rest.
          </p>
          <div className="flex flex-wrap -m-4 mb-8">
            <div id="c-breadcrumb" className="w-full lg:w-1/2 p-4">
              <div className="bg-gray-50 p-12 h-full">
                <div className="px-2 py-1 mb-4 font-bold inline-block bg-orange-500 text-white">
                  Breadcrumb
                </div>
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="#">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink href="#">Seed</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Forage Oats</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            </div>
            <div id="c-pagination" className="w-full lg:w-1/2 p-4">
              <div className="bg-gray-50 p-12 h-full">
                <div className="px-2 py-1 mb-4 font-bold inline-block bg-orange-500 text-white">
                  Pagination
                </div>
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>
                        2
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -m-4 mb-8">
            <div id="c-dropdown-menu" className="w-full lg:w-1/2 p-4">
              <div className="bg-gray-50 p-12 h-full">
                <div className="px-2 py-1 mb-4 font-bold inline-block bg-orange-500 text-white">
                  Dropdown Menu
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                      My account
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      Orders
                      <DropdownMenuShortcut>⌘O</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      Delivery addresses
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      Settings
                      <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-orange-700 focus:text-orange-700">
                      Sign out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <div id="c-command" className="w-full lg:w-1/2 p-4">
              <div className="bg-gray-50 p-12 h-full">
                <div className="px-2 py-1 mb-4 font-bold inline-block bg-orange-500 text-white">
                  Command
                </div>
                <Command className="max-w-md border border-gray-200">
                  <CommandInput placeholder="Search products and tools…" />
                  <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Tools">
                      <CommandItem>
                        <Map className="h-4 w-4 text-green-500" />
                        <span>Plot Finder</span>
                        <CommandShortcut>⌘P</CommandShortcut>
                      </CommandItem>
                      <CommandItem>
                        <ClipboardList className="h-4 w-4 text-green-500" />
                        <span>Feed calculator</span>
                      </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Divisions">
                      <CommandItem>
                        <Sprout className="h-4 w-4 text-green-500" />
                        <span>Seed</span>
                      </CommandItem>
                      <CommandItem>
                        <Wheat className="h-4 w-4 text-green-500" />
                        <span>Feed</span>
                      </CommandItem>
                      <CommandItem>
                        <ShoppingCart className="h-4 w-4 text-green-500" />
                        <span>Retail</span>
                      </CommandItem>
                    </CommandGroup>
                  </CommandList>
                </Command>
              </div>
            </div>
          </div>
          <div id="c-sidebar" className="bg-gray-50 p-12">
            <div className="px-2 py-1 mb-4 font-bold inline-block bg-orange-500 text-white">
              Sidebar
            </div>
            <p className="text-gray-500 mb-6 max-w-md">
              Cream rail, hairline edge, white + green for the active item.
              Framed here; in an app it docks to the viewport.
            </p>
            <div className="h-96 overflow-hidden border border-gray-200 bg-white flex">
              <SidebarProvider className="min-h-0 h-full w-auto">
                <Sidebar collapsible="none" className="h-full border-r border-gray-200">
                  <SidebarHeader>
                    <span className="px-2 pt-2 font-heading text-sm font-bold uppercase tracking-widest">
                      Harvey's
                    </span>
                  </SidebarHeader>
                  <SidebarContent>
                    <SidebarGroup>
                      <SidebarGroupLabel>Store</SidebarGroupLabel>
                      <SidebarGroupContent>
                        <SidebarMenu>
                          <SidebarMenuItem>
                            <SidebarMenuButton isActive>
                              <Home />
                              <span>Dashboard</span>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                          <SidebarMenuItem>
                            <SidebarMenuButton>
                              <ShoppingCart />
                              <span>Orders</span>
                            </SidebarMenuButton>
                            <SidebarMenuBadge>12</SidebarMenuBadge>
                          </SidebarMenuItem>
                          <SidebarMenuItem>
                            <SidebarMenuButton>
                              <Search />
                              <span>Search</span>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                          <SidebarMenuItem>
                            <SidebarMenuButton>
                              <Settings />
                              <span>Settings</span>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        </SidebarMenu>
                      </SidebarGroupContent>
                    </SidebarGroup>
                  </SidebarContent>
                </Sidebar>
              </SidebarProvider>
              <div className="flex-1 p-6 text-sm text-gray-500">
                Content area
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
