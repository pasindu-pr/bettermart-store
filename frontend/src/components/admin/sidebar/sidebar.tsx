import React from "react";
import {
  ClockIcon,
  CreditCardIcon,
  HomeIcon,
  ScaleIcon,
} from "@heroicons/react/outline";
import SidebarNavItem from "../sidebar-nav-item/sidebar-nav-item";
import { uuid } from "../../../libs";
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter();

  const navigation = [
    {
      name: "Home",
      href: "/admin",
      icon: HomeIcon,
      current: router.pathname === "/admin",
    },
    {
      name: "Products",
      href: "/admin/products",
      icon: ClockIcon,
      current: router.pathname === "/admin/products",
    },
    { name: "Orders", href: "#", icon: ScaleIcon, current: false },
    { name: "Payments", href: "#", icon: CreditCardIcon, current: false },
  ];

  return (
    <div className="hidden lg:flex lg:w-64 lg:flex-col lg:min-h-screen lg:inset-y-0">
      <div className="flex flex-col flex-grow bg-cyan-700 pt-5 pb-4 overflow-y-auto">
        <nav
          className="mt-5 flex-1 flex flex-col divide-y divide-cyan-800 overflow-y-auto"
          aria-label="Sidebar"
        >
          <div className="px-2 space-y-1">
            {navigation.map((item) => (
              <SidebarNavItem
                name={item.name}
                current={item.current}
                link={item.href}
                key={uuid()}
              />
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
