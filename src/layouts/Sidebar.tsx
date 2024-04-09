import {Menu, Upload, Bell, User, Mail, Github, Linkedin, Home, Network, Route, Presentation, Contact, Book } from "lucide-react"

import  Button  from "../components/Button"
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
 const SmallSidebarItem = ({Icon, title, url}: SmallSidebarItemProps) => {
  return <a href={url} className= {twMerge(buttonStyles({variant: "ghost"}), "py-4 px-1 flex flex-col item-center rounded-lg gap-1 ")}>
   <Icon className="w-6 h-6" />
   <div className="text-sm">{title}</div>
  </a>

 }
  
 return (
  <>
 <aside className="sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1 ">
  {/* lg:hidden */}
    <NavLink to={'/'} >
      <SmallSidebarItem Icon={Home} title="Home" url="/" />
    </NavLink>
    <NavLink to={'/skills'} >
   <SmallSidebarItem Icon={Network} title="Skills" url="/skills" />
   </NavLink>
   <SmallSidebarItem Icon={Route} title="My Journey" url="/Journey" />
   <SmallSidebarItem Icon={Presentation} title="Projects" url="/projects" />
   <SmallSidebarItem Icon={Book} title="Resume" url="/" />
   <SmallSidebarItem Icon={Contact} title="Contact Me" url="/contact" />
 </aside>
 <aside className="w-56 lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden pb-4 flex-col gap-2 px-2 flex"></aside>
 </>
 )
}

export default Sidebar