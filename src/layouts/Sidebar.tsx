import {  Mail, Github, Linkedin, } from "lucide-react"


import { ElementType, useState } from "react"
import { twMerge } from "tailwind-merge"
import { buttonStyles } from "../components/Button"



const Sidebar = () => {
  type SmallSidebarItemProps = {
    Icon: ElementType
    title: string
    url?: string // Make url optional since we're not using it for LinkedIn and GitHub
  }

  const SmallSidebarItem = ({ Icon, title, url }: SmallSidebarItemProps) => {
    return (
      <a href={url ?? `mailto:mchavez76@yahoo.com`} className={twMerge(buttonStyles({ variant: "ghost" }), "py-4 px-1 flex flex-col items-center rounded-lg gap-1 ")}>
        <Icon className="w-6 h-6" />
        <div className="text-sm">{title}</div>
      </a>
    );
  };

  return (
    <aside className="sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1" style={{ width: '100px', maxHeight: 'calc(100vh - 64px)' }}>
      <SmallSidebarItem Icon={Mail} title="Email" />
      <SmallSidebarItem Icon={Github} title="GitHub" url="https://en.wikipedia.org/wiki/Recruitment" />
      <SmallSidebarItem Icon={Linkedin} title="LinkedIn" url="https://en.wikipedia.org/wiki/Software_development" />
    </aside>
  );
};

export default Sidebar;