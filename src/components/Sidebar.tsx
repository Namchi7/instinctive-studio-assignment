import React from "react";
import Image from "next/image";

import SidebarNavItem from "./SidebarNavItem";

import logo from "@/assets/images/logo.png";
import dashboard from "@/assets/svg/dashboard.svg";
import students from "@/assets/svg/students.svg";
import chapter from "@/assets/svg/chapter.svg";
import help from "@/assets/svg/help.svg";
import reports from "@/assets/svg/reports.svg";
import setting from "@/assets/svg/setting.svg";

const Sidebar: React.FC = () => {
  return (
    <aside className="shrink-0 h-full w-40 md:w-[15.5rem] lg:w-[17.2%] lg:min-w-[15.5rem] flex flex-col justify-start items-start gap-0 bg-white px-3 py-[1.875rem]">
      <div className="w-full">
        <Image
          src={logo}
          alt="Quyl"
          width={98}
          height={42}
          className="aspect-[98/42] h-[2.625rem]"
        />
      </div>

      <nav className="w-full mt-[1.875rem]">
        <ul className="w-full flex flex-col justify-start items-start gap-2">
          <li className="w-full">
            <SidebarNavItem icon={dashboard} title="Dashboard" onPath="" />
          </li>
          <li className="w-full">
            <SidebarNavItem
              icon={students}
              title="Students"
              onPath="students"
            />
          </li>
          <li className="w-full">
            <SidebarNavItem icon={chapter} title="Chapter" onPath="chapter" />
          </li>
          <li className="w-full">
            <SidebarNavItem icon={help} title="Help" onPath="help" />
          </li>
          <li className="w-full">
            <SidebarNavItem icon={reports} title="Reports" onPath="reports" />
          </li>
          <li className="w-full">
            <SidebarNavItem icon={setting} title="Settings" onPath="settings" />
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
