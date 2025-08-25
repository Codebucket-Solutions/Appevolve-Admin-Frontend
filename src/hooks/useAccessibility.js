import { useEffect } from "react"
import { useSelector } from "react-redux"

export default function useAccessibility() {
  const a11y = useSelector((state) => state.accessibility)

  useEffect(() => {
    const html = document.documentElement
    const body = document.body

    const sizes = [100, 120, 140, 160]
    html.style.fontSize = `${sizes[a11y.textSize - 1]}%`

    const spacing = ["normal", "0.05em", "0.1em", "0.2em"]
    body.style.letterSpacing = spacing[a11y.textSpacing - 1]

    const heights = ["1.4", "1.6", "1.8", "2"]
    body.style.lineHeight = heights[a11y.lineHeight - 1]

    const saturation = ["100%", "150%", "200%", "250%"]
    body.style.filter = `saturate(${saturation[a11y.saturation - 1]})`


    body.style.fontFamily = a11y.dyslexiaFriendly
      ? "'OpenDyslexic', Arial, sans-serif"
      : ""

    if (a11y.adhdMode) body.classList.add("adhd-mode")
    else body.classList.remove("adhd-mode")


    if (a11y.darkMode) body.classList.add("dark")
    else body.classList.remove("dark")


    if (a11y.invertColors) body.style.filter += " invert(100%)"


    document.querySelectorAll("a").forEach((link) => {
      if (a11y.highlightLinks) {
        link.style.textDecoration = "underline"
        link.style.backgroundColor = "yellow"
      } else {
        link.style.textDecoration = ""
        link.style.backgroundColor = ""
      }
    })


    if (a11y.textToSpeech) {
      const selection = window.getSelection().toString()
      if (selection) {
        const utterance = new SpeechSynthesisUtterance(selection)
        window.speechSynthesis.speak(utterance)
      }
    }


    body.style.cursor = a11y.cursor
      ? "url('https://cur.cursors-4u.net/cursors/cur-2/cur116.cur'), auto"
      : "auto"


    if (a11y.pauseAnimation) body.classList.add("pause-animations")
    else body.classList.remove("pause-animations")


    document.querySelectorAll("img").forEach((img) => {
      img.style.display = a11y.hideImages ? "none" : ""
    })
  }, [a11y])
}
