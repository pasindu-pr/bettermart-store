import React from "react";
import { uuid } from "../../../libs";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const SidebarNavItem = ({
  name,
  link,
  current,
}: {
  name: string;
  link: string;
  current: boolean;
}) => {
  return (
    <a
      key={uuid()}
      href={link}
      className={classNames(
        current
          ? "bg-cyan-800 text-white"
          : "text-cyan-100 hover:text-white hover:bg-cyan-600",
        "group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md"
      )}
      aria-current={current ? "page" : undefined}
    >
      {name}
    </a>
  );
};

export default SidebarNavItem;
