import React, { useState } from "react";
import { MenuAlt1Icon } from "@heroicons/react/outline";
import {
  ProfileDropdown,
  ProfileSection,
  SearchBar,
  SideBar,
} from "../../components";
import SidebarMobile from "../../components/admin/sidebar-mobile/sidebar-mobile";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  console.log(sidebarOpen);

  return (
    <div className="min-h-full w-full lg:flex">
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

            <div className="flex-1 px-4 flex justify-between sm:px-6  lg:px-8">
              <SearchBar />
              <div className="ml-4 flex items-center md:ml-6">
                <ProfileDropdown />
              </div>
            </div>
          </div>
          <main className="flex-1 pb-8">
            <div className="bg-white shadow">
              <div className="px-4 sm:px-6 lg:max-w-6xl lg:px-8">
                <div className="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200">
                  <div className="flex-1 min-w-0">
                    <ProfileSection />
                  </div>
                </div>
              </div>
            </div>

            <div>{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
