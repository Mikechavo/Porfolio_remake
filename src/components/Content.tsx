import React from "react"
import { Routes, Route } from "react-router-dom"
import HomePage from "./HomePage"
import Skills from "./Skills"

type ContentProps = {
 id: string
 title: string
}
const Content = ({id, title}: ContentProps) => {

 return(
  <div className="overflow-y-auto flex-grow">
   <main>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </div>
      </main>
  </div>
 )
}

export default Content