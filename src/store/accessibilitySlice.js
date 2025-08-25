import { createSlice } from "@reduxjs/toolkit"

const initialState = {

  textSize: 1,      
  textSpacing: 1,      
  lineHeight: 1,       
  saturation: 1,       

  dyslexiaFriendly: false,
  adhdMode: false,
  darkMode: false,
  invertColors: false,
  highlightLinks: false,
  textToSpeech: false,
  cursor: false,
  pauseAnimation: false,
  hideImages: false,
}

const accessibilitySlice = createSlice({
  name: "accessibility",
  initialState,
  reducers: {

    increaseTextSize: (state) => { if (state.textSize < 4) state.textSize++ },
    decreaseTextSize: (state) => { if (state.textSize > 1) state.textSize-- },
    cycleTextSpacing: (state) => { state.textSpacing = state.textSpacing % 4 + 1 },
    cycleLineHeight: (state) => { state.lineHeight = state.lineHeight % 4 + 1 },
    cycleSaturation: (state) => { state.saturation = state.saturation % 4 + 1 },


    toggleDyslexiaFriendly: (state) => { state.dyslexiaFriendly = !state.dyslexiaFriendly },
    toggleAdhdMode: (state) => { state.adhdMode = !state.adhdMode },
    toggleDarkMode: (state) => { state.darkMode = !state.darkMode },
    toggleInvertColors: (state) => { state.invertColors = !state.invertColors },
    toggleHighlightLinks: (state) => { state.highlightLinks = !state.highlightLinks },
    toggleTextToSpeech: (state) => { state.textToSpeech = !state.textToSpeech },
    toggleCursor: (state) => { state.cursor = !state.cursor },
    togglePauseAnimation: (state) => { state.pauseAnimation = !state.pauseAnimation },
    toggleHideImages: (state) => { state.hideImages = !state.hideImages },
  },
})

export const {
  increaseTextSize, decreaseTextSize,
  cycleTextSpacing, cycleLineHeight, cycleSaturation,
  toggleDyslexiaFriendly, toggleAdhdMode, toggleDarkMode, toggleInvertColors,
  toggleHighlightLinks, toggleTextToSpeech, toggleCursor,
  togglePauseAnimation, toggleHideImages,
} = accessibilitySlice.actions

export default accessibilitySlice.reducer
