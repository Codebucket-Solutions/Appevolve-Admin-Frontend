import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useSelector } from "react-redux"


import Sidebar from "@/components/layout/Sidebar"
import Header from "@/components/layout/Header"
import AccessibilityPanel from "@/components/layout/AccessibilityPanel"

import Dashboard from "@/pages/Dashboard"


export default function App() {

  const menu = useSelector((state) => state.menu)
  const { selectedModule } = useSelector((state) => state.modules)

  return (
    <Router>
      <div className="flex h-screen w-full bg-gray-50 dark:bg-gray-900">
        <Sidebar
          className="h-full"
          style={{ width: "250px" }}
          menu={menu}
          selectedModule={selectedModule}
        />


        <div className="flex flex-col flex-1 overflow-hidden">
          <Header selectedModule={selectedModule} />

          <main className="flex-1 overflow-y-auto p-4">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              {/* <Route path="/questions" element={<Questions />} />
              <Route path="/applications" element={<Applications />} />
              <Route path="/profiles" element={<Profiles />} /> */}
            </Routes>
          </main>
        </div>

        <AccessibilityPanel />
      </div>
    </Router>
  )
}
