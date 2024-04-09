import {Menu, Upload, Bell, User, Mail, Github, Linkedin} from "lucide-react"

import  Button  from "../components/Button"
import { useState } from "react"

const PageHeader = () => {
  
  
 return (
  <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
   <div className="flex gap-4 items-center flex-shrink-0">
    {/* <Button variant="ghost" size="icon">
     <Menu />
    </Button> */}
      {/* react router link component */}
    <a href="/">
     Mike's Porfolio
    </a>
    </div>
   <div></div>
   <form className="flex gap-4 flex-grow justify-center">
    <div className="flex flex-grow max-w-[600px]">
    </div>
   </form>
   <div className="flex flex-shrink-0 md:gap-2">
   <Button
          size="icon"
          variant="ghost"
          title="Send an Email"
          onClick={() => window.open("mailto:youremail@example.com")}
          className="hover:text-blue-500"
        >
          <Mail />
        </Button>
        <a
          href="https://github.com/Mikechavo"
          target="_blank"
          rel="noopener noreferrer"
        >
        <Button
          size="icon"
          variant="ghost"
          title="Visit Github Profile"
          className="hover:text-blue-500"
        >
          <Github />
        </Button>
        </a>
        <a
          href="https://www.linkedin.com/in/michael-t-chavez/"
          target="_blank"
          rel="noopener noreferrer"
        >
        <Button
          size="icon"
          variant="ghost"
          title="Visit Linkedin Profile"
          className="hover:text-blue-500"
        >
          <Linkedin />
        </Button>
        </a>
   </div>
  </div>
 )
}

export default PageHeader