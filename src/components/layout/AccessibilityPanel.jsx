import React from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  increaseTextSize, decreaseTextSize,
  cycleTextSpacing, cycleLineHeight, cycleSaturation,
  toggleDyslexiaFriendly, toggleAdhdMode, toggleDarkMode, toggleInvertColors,
  toggleHighlightLinks, toggleTextToSpeech, toggleCursor,
  togglePauseAnimation, toggleHideImages,
} from "@/store/accessibilitySlice"

import {
  Type, Minus, MoveHorizontal, AlignJustify, BookText, Brain, Droplet, Moon,
  EyeOff, Link, Volume2, MousePointer, Pause, Image as ImageIcon
} from "lucide-react"

const AccessibilityPanel = ({ open, setOpen }) => {
  const dispatch = useDispatch()
  const a11y = useSelector((state) => state.accessibility)

  const sections = {
    "Content": [
      { icon: <Type size={20} />, label: "Bigger Text", onClick: () => dispatch(increaseTextSize()), level: a11y.textSize },
      { icon: <Minus size={20} />, label: "Smaller Text", onClick: () => dispatch(decreaseTextSize()), level: a11y.textSize },
      { icon: <MoveHorizontal size={20} />, label: "Text Spacing", onClick: () => dispatch(cycleTextSpacing()), level: a11y.textSpacing },
      { icon: <AlignJustify size={20} />, label: "Line Height", onClick: () => dispatch(cycleLineHeight()), level: a11y.lineHeight },
      { icon: <BookText size={20} />, label: "Dyslexia Friendly", onClick: () => dispatch(toggleDyslexiaFriendly()), active: a11y.dyslexiaFriendly },
      { icon: <Brain size={20} />, label: "ADHD Mode", onClick: () => dispatch(toggleAdhdMode()), active: a11y.adhdMode },
    ],
    "Colors": [
      { icon: <Droplet size={20} />, label: "Saturation", onClick: () => dispatch(cycleSaturation()), level: a11y.saturation },
      { icon: <Moon size={20} />, label: "Light / Dark", onClick: () => dispatch(toggleDarkMode()), active: a11y.darkMode },
      { icon: <EyeOff size={20} />, label: "Invert Colors", onClick: () => dispatch(toggleInvertColors()), active: a11y.invertColors },
    ],
    "Navigation": [
      { icon: <Link size={20} />, label: "Highlight Links", onClick: () => dispatch(toggleHighlightLinks()), active: a11y.highlightLinks },
      { icon: <Volume2 size={20} />, label: "Text To Speech", onClick: () => dispatch(toggleTextToSpeech()), active: a11y.textToSpeech },
      { icon: <MousePointer size={20} />, label: "Cursor", onClick: () => dispatch(toggleCursor()), active: a11y.cursor },
      { icon: <Pause size={20} />, label: "Pause Animation", onClick: () => dispatch(togglePauseAnimation()), active: a11y.pauseAnimation },
      { icon: <ImageIcon size={20} />, label: "Hide Images", onClick: () => dispatch(toggleHideImages()), active: a11y.hideImages },
    ]
  }

  return (
    <div
      className={`fixed top-0 right-0 h-screen transition-all duration-300 ease-in-out z-50
        ${open ? "w-[24vw] min-w-[350px] p-6" : "w-0 overflow-hidden"}`}
      style={{ backgroundColor: "var(--background)" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">Accessibility</h2>
        <button
          onClick={() => setOpen(false)}
          className="p-2 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300"
        >
          ✕
        </button>
      </div>

      {/* Sections */}
      <div className="flex flex-col gap-8">
        {Object.entries(sections).map(([section, tools]) => (
          <div key={section}>
            <h3 className="text-sm font-semibold text-neutral-600 dark:text-neutral-400 mb-4 tracking-wide">
              {section}
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {tools.map((t, i) => (
                <button
                  key={i}
                  onClick={t.onClick}
                  className={`flex flex-col items-center justify-center p-4 rounded-xl shadow-sm border transition-all
                    ${t.active
                      ? "bg-blue-600 text-white border-blue-500"
                      : "bg-white hover:bg-neutral-100 text-neutral-800 border-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:border-neutral-700"
                    }`}
                >
                  <div className="mb-2">{t.icon}</div>

                  {/* Sensitivity bars */}
                  {t.level && (
                    <div className="flex gap-1 mb-2">
                      {[...Array(4)].map((_, idx) => (
                        <span
                          key={idx}
                          className={`w-2 h-1 rounded ${idx < t.level
                            ? "bg-neutral-900 dark:bg-neutral-100"
                            : "bg-neutral-400/30 dark:bg-neutral-500/30"
                            }`}
                        />
                      ))}
                    </div>
                  )}

                  <span className="text-xs font-medium text-center">{t.label}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex justify-end gap-3 mt-10">
        <button
          onClick={() => setOpen(false)}
          className="px-4 py-2 rounded-lg bg-neutral-300 hover:bg-neutral-400 dark:bg-neutral-700 dark:hover:bg-neutral-600 text-black dark:text-white"
        >
          Cancel
        </button>
        <button
          className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow"
        >
          Submit
        </button>
      </div>
    </div>
  )
}

export default AccessibilityPanel
