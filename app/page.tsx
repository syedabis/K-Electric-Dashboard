"use client";

import * as React from "react"
import {
  Zap,
  ChevronsUpDown,
  Diamond,
  Circle,
  Home,
  Coins,
  Calculator,
  Database,
  Bolt,
  Check
} from "lucide-react";
import { SiEthereum } from "react-icons/si";
import { FaHillAvalanche } from "react-icons/fa6";
import { SiSolana } from "react-icons/si";
import { SiPolygon } from "react-icons/si";
import { SidebarProvider, Sidebar, SidebarContent, SidebarHeader, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarMenuBadge, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import Header from "@/components/layout/Header";
import Main from "@/components/Main";
import { useSidebar } from "@/components/ui/sidebar";

const organizations = [
  {
    value: "stakent-inc",
    label: "Stakent Inc",
    description: "Enterprise",
    icon: Diamond,
  },
  {
    value: "crypto-ventures",
    label: "Crypto Ventures",
    description: "Pro",
    icon: Circle,
  },
  {
    value: "blockchain-labs",
    label: "Blockchain Labs",
    description: "Team",
    icon: Bolt,
  },
  {
    value: "defi-solutions",
    label: "DeFi Solutions",
    description: "Enterprise",
    icon: Database,
  },
]

function DashboardContent() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("stakent-inc")
  const { state, toggleSidebar } = useSidebar()

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <div className="flex">
        {/* Left Sidebar */}
        <Sidebar
          collapsible="icon"
          onMouseEnter={() => state === 'collapsed' && toggleSidebar()}
          onMouseLeave={() => state === 'expanded' && toggleSidebar()}
        >
          <SidebarHeader className={`border-b border-border ${state === 'collapsed' ? ' my-4' : 'my-3'}`}>
            {/* Organization Combobox */}
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  role="combobox"
                  aria-expanded={open}
                  className="w-full justify-between px-2 py-2 h-auto group-data-[collapsible=icon]:w-10 group-data-[collapsible=icon]:justify-center"
                >
                  <div className="flex items-center gap-3 group-data-[collapsible=icon]:gap-0">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                      {React.createElement(organizations.find((org) => org.value === value)?.icon || Diamond, {
                        className: "w-5 h-5 text-primary-foreground"
                      })}
                    </div>
                    <div className="flex-1 min-w-0 group-data-[collapsible=icon]:hidden text-left">
                      <div className="font-semibold text-sm truncate">
                        {organizations.find((org) => org.value === value)?.label}
                      </div>
                      <div className="text-xs text-muted-foreground truncate">
                        {organizations.find((org) => org.value === value)?.description}
                      </div>
                    </div>
                  </div>
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50 group-data-[collapsible=icon]:hidden" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[280px] p-0" side="right" align="start">
                <Command>
                  <CommandInput placeholder="Search organizations..." className="h-9" />
                  <CommandList>
                    <CommandEmpty>No organization found.</CommandEmpty>
                    <CommandGroup>
                      {organizations.map((organization) => (
                        <CommandItem
                          key={organization.value}
                          value={organization.value}
                          onSelect={(currentValue) => {
                            setValue(currentValue === value ? "" : currentValue)
                            setOpen(false)
                          }}
                          className="flex items-center gap-3"
                        >
                          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                            {React.createElement(organization.icon, {
                              className: "w-5 h-5 text-primary-foreground"
                            })}
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-sm">{organization.label}</div>
                            <div className="text-xs text-muted-foreground">{organization.description}</div>
                          </div>
                          <Check
                            className={cn(
                              "ml-auto h-4 w-4",
                              value === organization.value ? "opacity-100" : "opacity-0"
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </SidebarHeader>

          <SidebarContent>
            <Tabs defaultValue="staking" className="w-full group-data-[collapsible=icon]:hidden">
              <TabsList className="grid w-full grid-cols-2 bg-muted/50 p-1">
                <TabsTrigger value="staking" className="data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm border-none">Staking</TabsTrigger>
                <TabsTrigger value="stablecoin" className="data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm border-none">Stablecoin</TabsTrigger>
              </TabsList>
            </Tabs>

            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton isActive tooltip="Dashboard">
                      <Home className="w-4 h-4" />
                      <span>Dashboard</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Assets">
                      <Coins className="w-4 h-4" />
                      <span>Assets</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Staking Providers">
                      <Circle className="w-4 h-4" />
                      <span>Staking Providers</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Staking Calculator">
                      <Calculator className="w-4 h-4" />
                      <span>Staking Calculator</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Data API">
                      <Database className="w-4 h-4" />
                      <span>Data API</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Liquid Staking">
                      <Bolt className="w-4 h-4" />
                      <span>Liquid Staking</span>
                      <SidebarMenuBadge>
                        <Badge variant="secondary" className="text-xs">Beta</Badge>
                      </SidebarMenuBadge>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel>
                Active Staking
                <SidebarMenuBadge>
                  <Badge variant="default">6</Badge>
                </SidebarMenuBadge>
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Ethereum - $7,699.00">
                      <SiEthereum className="w-4 h-4" />
                      <span className="text-sm">Ethereum</span>
                      <span className="text-sm font-medium ml-auto">$7,699.00</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Avalanche - $1,340.00">
                      <FaHillAvalanche className="w-4 h-4" />
                      <span className="text-sm">Avalanche</span>
                      <span className="text-sm font-medium ml-auto">$1,340.00</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Polygon - $640.00">
                      <SiPolygon className="w-4 h-4" />
                      <span className="text-sm">Polygon</span>
                      <span className="text-sm font-medium ml-auto">$640.00</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Solana - $980.00">
                      <SiSolana className="w-4 h-4" />
                      <span className="text-sm">Solana</span>
                      <span className="text-sm font-medium ml-auto">$980.00</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Activate Super - Unlock all features on Stakent">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="font-medium">Activate Super</span>
                  <p className="text-sm text-muted-foreground">Unlock all features on Stakent</p>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>

        {/* Main Content */}
        <SidebarInset>
          {/* Sidebar Toggle Button - Fixed to viewport */}
          <div
            className="fixed top-1/2 -translate-y-1/2 z-50 transition-all duration-200 md:hidden"
            style={{
              left: state === 'collapsed' ? 'calc(4rem - 18px)' : 'calc(16rem - 12px)'
            }}
          >
            <Button
              variant="outline"
              size="icon"
              className="h-6 w-6 rounded-none bg-background shadow-lg hover:bg-muted"
              onClick={toggleSidebar}
            >
              <SidebarTrigger />
            </Button>
          </div>

          {/* Top Header */}
          <Header />

          <Main />
        </SidebarInset>
      </div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <SidebarProvider defaultOpen={false}>
      <DashboardContent />
    </SidebarProvider>
  );
}
