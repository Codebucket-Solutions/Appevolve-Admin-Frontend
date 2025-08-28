import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useSelector } from "react-redux"

import Sidebar from "@/components/layout/Sidebar"
import Header from "@/components/layout/Header"
import AccessibilityPanel from "@/components/layout/AccessibilityPanel"

import Dashboard from "@/pages/Dashboard"
import useAccessibility from "./hooks/useAccessibility"
import Login from "./container/authContainer/login"
import ModuleChooseContainer from "./container/moduleContainer/ModuleChoose"
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
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => JSON.parse(localStorage.getItem("isLoggedIn")) || false
  )
  const [localModule, setLocalModule] = useState(
    () => localStorage.getItem("selectedModule") || null
  )
  const [configOpen, setConfigOpen] = useState(false)
  const [config, setConfig] = useState(configJson)

  useAccessibility()

  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn))
  }, [isLoggedIn])

  useEffect(() => {
    if (localModule) localStorage.setItem("selectedModule", localModule)
  }, [localModule])

  const handleModuleChoose = (module) => {
    setLocalModule(module)
  }

  const handleLogin = (e) => {
    e.preventDefault()
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setLocalModule(null)
    localStorage.removeItem("isLoggedIn")
    localStorage.removeItem("selectedModule")
  }

  return (
    <Router>
      {!isLoggedIn ? (
        <div className="flex h-screen w-full bg-gray-50 dark:bg-gray-900">
          <Login onLogin={handleLogin} />
        </div>
      ) : !localModule ? (
        <div className="flex h-screen w-full bg-gray-50 dark:bg-gray-900">
          <ModuleChooseContainer onClickModule={handleModuleChoose} />
        </div>
      ) : (
        <div className="flex h-screen w-full bg-gray-50 dark:bg-gray-900">
          <Sidebar
            className="h-full"
            style={{ width: "250px" }}
            menu={menu}
            selectedModule={localModule}
          />
          <div
            className={`flex flex-col transition-all duration-300 ${accessibilityOpen ? "flex-[75vw]" : configOpen ? "flex-[75vw]" : "flex-1"
              } overflow-hidden`}
          >
            <Header
              selectedModule={localModule}
              onToggleAccessibility={() => setAccessibilityOpen(!accessibilityOpen)}
              onLogout={handleLogout}
            />
            <main className="flex-1 overflow-y-auto dark:bg-[#0c1117]">
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/questions" element={<Questions />} />
                <Route path="/applications" element={<Applications />} />
                <Route path="/assessments" element={<AssessmentProfiles />} />
                <Route path="/clients" element={<Clients />} />
                <Route path="/users" element={<Users />} />
                <Route
                  path="/insight"
                  element={
                    <Insights
                      open={configOpen}
                      setOpen={setConfigOpen}
                      config={config}
                      setConfig={setConfig}
                    />
                  }
                />
              </Routes>
            </main>
          </div>
          <AccessibilityPanel
            open={accessibilityOpen}
            setOpen={setAccessibilityOpen}
          />
        </div>
      )}
    </Router>
  )
}
