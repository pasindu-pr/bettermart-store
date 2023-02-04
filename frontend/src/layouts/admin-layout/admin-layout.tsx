import React, { useState } from "react";
import { MenuAlt1Icon } from "@heroicons/react/outline";
import { SideBar } from "../../components";
import SidebarMobile from "../../components/admin/sidebar-mobile/sidebar-mobile";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-full w-full lg:flex h-screen overflow-y-hidden">
      <div>
        <SidebarMobile />
        <SideBar />
      </div>

      <div className="flex-1">
        <div className="lg:pl-64 flex flex-col flex-1">
          <div className="relative z-10 flex-shrink-0 flex h-16  border-gray-200 lg:border-none">
            <button
              type="button"
              className="px-4 border-r border-gray-200 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuAlt1Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <main className="flex-1 pb-8">
            <div>{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
