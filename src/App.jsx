import React, { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useSelector } from "react-redux"

import Sidebar from "@/components/layout/Sidebar"
import Header from "@/components/layout/Header"
import AccessibilityPanel from "@/components/layout/AccessibilityPanel"

import Dashboard from "@/pages/Dashboard"
import useAccessibility from "./hooks/useAccessibility"
import Login from "./container/authContainer/login"
import ModuleChooseContainer from "./container/moduleContainer/ModuleChoose"
import SidebarConfig from "./components/dashboard/SidebarConfig"
import configJson from "@/config/dashboardConfig.json"
import Questions from "./pages/Questions"
import Applications from "./pages/Applications"
import AssessmentProfiles from "./pages/AssessmentProfiles"
import Clients from "./pages/Clients"
import Users from "./pages/Users"
import Insights from "./pages/Insights"
export default function App() {
  const menu = useSelector((state) => state.menu)
  const { selectedModule } = useSelector((state) => state.modules)
  const [accessibilityOpen, setAccessibilityOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [configOpen, setConfigOpen] = useState(false)
  const [config, setConfig] = useState(configJson)
  useAccessibility()

  return (
    <Router>

      {isLoggedIn ? (
        <div className="flex h-screen w-full bg-gray-50 dark:bg-gray-900">

          <Sidebar
            className="h-full"
            style={{ width: "250px" }}
            menu={menu}
            selectedModule={selectedModule}
          />

          <div
            className={`flex flex-col transition-all duration-300 ${accessibilityOpen ? "flex-[75vw]" : configOpen ? "flex-[75vw]" : "flex-1"
              } overflow-hidden`}
          >
            <Header
              selectedModule={selectedModule}
              onToggleAccessibility={() => setAccessibilityOpen(!accessibilityOpen)}
            />

            <main className="flex-1 overflow-y-auto dark:bg-[#0c1117]">
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/questions" element={<Questions />} />
                <Route path="/applications" element={<Applications />} />
                <Route path="/assessments" element={<AssessmentProfiles />} />
                <Route path="/clients" element={<Clients />} />
                <Route path="/users" element={<Users />} />
                <Route path="/insight" element={<Insights open={configOpen} setOpen={setConfigOpen} config={config} setConfig={setConfig} />} />

                {/* <Route path="/login" element={<Login />} /> */}
              </Routes>
            </main>
          </div>

          <AccessibilityPanel open={accessibilityOpen} setOpen={setAccessibilityOpen} />
          {/* <SidebarConfig
            open={configOpen}
            setOpen={setConfigOpen}
            config={config}
            setConfig={setConfig}
          /> */}
        </div>) : (
        <div className="flex h-screen w-full bg-gray-50 dark:bg-gray-900">
          {/* <Login /> */}
          <ModuleChooseContainer onClickModule={() => setIsLoggedIn(true)} />
        </div>
      )}

    </Router>
  )
}
