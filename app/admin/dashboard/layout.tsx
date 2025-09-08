import type { Metadata } from "next";
import { AppSidebar } from "@/components/admin/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";


export const metadata: Metadata = {
  title: {
    template: '%s | CCAO',
    default: 'Club Central Argentino Olímpico',
  },
  description: "Sitio Oficial",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
