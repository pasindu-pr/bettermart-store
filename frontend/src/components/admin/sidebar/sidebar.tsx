import React from "react";
import {
  ClockIcon,
  CreditCardIcon,
  HomeIcon,
  ScaleIcon,
} from "@heroicons/react/outline";

const navigation = [
  { name: "Home", href: "#", icon: HomeIcon, current: true },
  { name: "Products", href: "#", icon: ClockIcon, current: false },
  { name: "Orders", href: "#", icon: ScaleIcon, current: false },
  { name: "Payments", href: "#", icon: CreditCardIcon, current: false },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const Sidebar = () => {
  return (
    <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
      <div className="flex flex-col flex-grow bg-cyan-700 pt-5 pb-4 overflow-y-auto">
        <div className="flex items-center flex-shrink-0 px-4">
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/easywire-logo-cyan-300-mark-white-text.svg"
            alt="Easywire logo"
          />
        </div>
        <nav
          className="mt-5 flex-1 flex flex-col divide-y divide-cyan-800 overflow-y-auto"
          aria-label="Sidebar"
        >
          <div className="px-2 space-y-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? "bg-cyan-800 text-white"
                    : "text-cyan-100 hover:text-white hover:bg-cyan-600",
                  "group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                <item.icon
                  className="mr-4 flex-shrink-0 h-6 w-6 text-cyan-200"
                  aria-hidden="true"
                />
                {item.name}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
