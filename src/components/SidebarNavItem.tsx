"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarNavItem: React.FC<{
  icon: string;
  title: string;
  onPath: string;
}> = ({ icon, title, onPath }) => {
  const pathname: string = usePathname();

  const path: string = pathname.split("/")[1];

  return (
    <Link
      href={`/${onPath}`}
      className="w-full flex justify-start items-center gap-3 bg-transparent hover:bg-[#EEEEEE] hover:cursor-pointer rounded-md overflow-hidden p-3 group"
    >
      <Image
        src={icon}
        alt={title}
        width={24}
        height={24}
        className={`aspect-square w-6 ${
          onPath === path ? "invert-0" : "invert-[60%]"
        } group-hover:invert-0`}
      />

      <p
        className={`text-base ${
          onPath === path ? "text-[#0A0A0A]" : "text-[#6F767E]"
        } group-hover:text-[#0A0A0A] font-bold`}
      >
        {title}
      </p>
    </Link>
  );
};

export default SidebarNavItem;
