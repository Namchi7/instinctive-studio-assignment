import React from "react";
import Image from "next/image";

import search from "@/assets/svg/search.svg";
import help from "@/assets/svg/help.svg";
import message from "@/assets/svg/message.svg";
import settings from "@/assets/svg/settings-2.svg";
import notification from "@/assets/svg/notification.svg";
import avatar from "@/assets/images/avatar.png";

const Header: React.FC = () => {
  return (
    <header className="shrink-0 w-full flex flex-row justify-between items-center gap-10">
      <div className="relative w-full max-w-[38.375rem] bg-white rounded-xl">
        <Image
          src={search}
          alt="Search"
          width={18}
          height={18}
          className="absolute left-5 top-1/2 -translate-y-1/2 size-[1.125rem] my-auto"
        />

        <input
          type="text"
          placeholder="Search your course"
          name="search"
          className="w-full bg-transparent text-sm text-[#0A0A0A] font-medium rounded-xl pl-12 pr-5 py-[0.875rem]"
        />
      </div>

      <div className="flex flex-row justify-start items-center gap-10">
        <div className="relative shrink-0 size-6 flex justify-center items-center hover:cursor-pointer">
          <Image
            src={help}
            alt="Help"
            width={24}
            height={24}
            className="size-full invert-[45%] hover:invert-0"
          />

          {false && (
            <div className="absolute -top-[0.125rem] right-0 size-[0.6875rem] bg-[#FF4949] rounded-full border border-white"></div>
          )}
        </div>

        <div className="relative shrink-0 size-6 flex justify-center items-center hover:cursor-pointer">
          <Image
            src={message}
            alt="Messages"
            width={24}
            height={24}
            className="size-full invert-[45%] hover:invert-0"
          />

          {true && (
            <div className="absolute -top-[0.125rem] right-0 size-[0.6875rem] bg-[#FF4949] rounded-full border border-white"></div>
          )}
        </div>

        <div className="relative shrink-0 size-6 flex justify-center items-center hover:cursor-pointer">
          <Image
            src={settings}
            alt="Settings"
            width={24}
            height={24}
            className="size-full invert-[45%] hover:invert-0"
          />

          {false && (
            <div className="absolute -top-[0.125rem] right-0 size-[0.6875rem] bg-[#FF4949] rounded-full border border-white"></div>
          )}
        </div>

        <div className="relative shrink-0 size-6 flex justify-center items-center hover:cursor-pointer">
          <Image
            src={notification}
            alt="Notification"
            width={24}
            height={24}
            className="size-full invert-[45%] hover:invert-0"
          />

          {true && (
            <div className="absolute -top-[0.125rem] right-0 size-[0.6875rem] bg-[#FF4949] rounded-full border border-white"></div>
          )}
        </div>

        <div className="shrink-0 flex flex-row justify-start items-center gap-5">
          <div className="size-10 bg-[#FFCD66] rounded-lg overflow-hidden">
            <Image
              src={avatar}
              alt="User"
              width={300}
              height={300}
              className="size-full"
            />
          </div>

          <p className="text-lg text-[#05162E] font-semibold">
            Adeline H. Dancy
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
