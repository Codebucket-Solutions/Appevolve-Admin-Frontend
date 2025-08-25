import React, { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useSelector } from "react-redux"

import Sidebar from "@/components/layout/Sidebar"
import Header from "@/components/layout/Header"
import AccessibilityPanel from "@/components/layout/AccessibilityPanel"

import Dashboard from "@/pages/Dashboard"
import useAccessibility from "./hooks/useAccessibility"

export default function App() {
  const menu = useSelector((state) => state.menu)
  const { selectedModule } = useSelector((state) => state.modules)
  const [accessibilityOpen, setAccessibilityOpen] = useState(false)

  useAccessibility()

  return (
    <Router>
      <div className="flex h-screen w-full bg-gray-50 dark:bg-gray-900">

        <Sidebar
          className="h-full"
          style={{ width: "250px" }}
          menu={menu}
          selectedModule={selectedModule}
        />

        <div
          className={`flex flex-col transition-all duration-300 ${accessibilityOpen ? "flex-[0.75]" : "flex-1"
            } overflow-hidden`}
        >
          <Header
            selectedModule={selectedModule}
            onToggleAccessibility={() => setAccessibilityOpen(!accessibilityOpen)}
          />

          <main className="flex-1 overflow-y-auto p-4">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </main>
        </div>

        <AccessibilityPanel open={accessibilityOpen} setOpen={setAccessibilityOpen} />
      </div>

    </Router>
  )
}
