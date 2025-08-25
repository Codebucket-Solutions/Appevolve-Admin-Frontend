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

  console.log(a11y)

  const tools = [
    { icon: <Type />, label: "Bigger Text", onClick: () => dispatch(increaseTextSize()), level: a11y.textSize },
    { icon: <Minus />, label: "Smaller Text", onClick: () => dispatch(decreaseTextSize()), level: a11y.textSize },
    { icon: <MoveHorizontal />, label: "Text Spacing", onClick: () => dispatch(cycleTextSpacing()), level: a11y.textSpacing },
    { icon: <AlignJustify />, label: "Line Height", onClick: () => dispatch(cycleLineHeight()), level: a11y.lineHeight },
    { icon: <BookText />, label: "Dyslexia Friendly", onClick: () => dispatch(toggleDyslexiaFriendly()), active: a11y.dyslexiaFriendly },
    { icon: <Brain />, label: "ADHD Mode", onClick: () => dispatch(toggleAdhdMode()), active: a11y.adhdMode },
    { icon: <Droplet />, label: "Saturation", onClick: () => dispatch(cycleSaturation()), level: a11y.saturation },
    { icon: <Moon />, label: "Light-Dark", onClick: () => dispatch(toggleDarkMode()), active: a11y.darkMode },
    { icon: <EyeOff />, label: "Invert Colors", onClick: () => dispatch(toggleInvertColors()), active: a11y.invertColors },
    { icon: <Link />, label: "Highlight Links", onClick: () => dispatch(toggleHighlightLinks()), active: a11y.highlightLinks },
    { icon: <Volume2 />, label: "Text To Speech", onClick: () => dispatch(toggleTextToSpeech()), active: a11y.textToSpeech },
    { icon: <MousePointer />, label: "Cursor", onClick: () => dispatch(toggleCursor()), active: a11y.cursor },
    { icon: <Pause />, label: "Pause Animation", onClick: () => dispatch(togglePauseAnimation()), active: a11y.pauseAnimation },
    { icon: <ImageIcon />, label: "Hide Images", onClick: () => dispatch(toggleHideImages()), active: a11y.hideImages },
  ]

  return (
    <div
      className={`fixed top-0 right-0 h-screen bg-[#f3c6a6] transition-all duration-300 ease-in-out z-50
        ${open ? "w-80 p-4" : "w-0 overflow-hidden"}`}
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-neutral-900">Accessibility</h2>
        <button onClick={() => setOpen(false)} className="p-1 rounded hover:bg-neutral-300">✕</button>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {tools.map((t, i) => (
          <button
            key={i}
            onClick={t.onClick}
            className={`flex flex-col items-center justify-center p-4 rounded-lg shadow transition-colors
              ${t.active ? "bg-[#e59a6d]" : "bg-[#f2b988] hover:bg-[#f0a868]"}`}
          >
            {t.icon}

            {/* Sensitivity bars */}
            {t.level && (
              <div className="flex gap-1 mt-2">
                {[...Array(4)].map((_, idx) => (
                  <span
                    key={idx}
                    className={`w-2 h-1 rounded ${
                      idx < t.level ? "bg-black/80" : "bg-black/20"
                    }`}
                  />
                ))}
              </div>
            )}

            <span className="text-xs mt-2 font-medium text-center">{t.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default AccessibilityPanel
