import { Menu, Upload, Bell, User, Mail, Github, Linkedin, Home, Network, Route, Presentation, Contact, Book, PocketKnife, SquareDashedBottomCode } from "lucide-react"

import Button from "../components/Button"
import { ElementType, useState } from "react"
import { twMerge } from "tailwind-merge"
import { buttonStyles } from "../components/Button"
import { NavLink } from 'react-router-dom';


const Sidebar = () => {

  type SmallSidebarItemProps = {
    Icon: ElementType
    title: string
    url: string
  }
  const SmallSidebarItem = ({ Icon, title, url }: SmallSidebarItemProps) => {
    return <a href={url} className={twMerge(buttonStyles({ variant: "ghost" }), "py-4 px-1 flex flex-col item-center rounded-lg gap-1 ")}>
      <Icon className="w-6 h-6" />
      <div className="text-sm">{title}</div>
    </a>

  }

  return (
    <>
      <aside className="sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1 ">
        {/* lg:hidden */}
        <SmallSidebarItem Icon={PocketKnife} title="Army Vet" url="https://www.army.mil/" />
        <SmallSidebarItem Icon={Network} title="Recruiter" url="https://en.wikipedia.org/wiki/Recruitment" />
        <SmallSidebarItem Icon={SquareDashedBottomCode} title="Developer" url="https://en.wikipedia.org/wiki/Software_development" />
      </aside>
      <aside className="w-56 lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden pb-4 flex-col gap-2 px-2 flex"></aside>
    </>
  )
}

export default Sidebar