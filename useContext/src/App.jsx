import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GrandParent from './GrandParent'

const ThemeColor = "dark"
const arr = [1,2,3,4]
export const ThemeContext = createContext("default")
function UseContext() {
  // console.log(context.Provider)
  // console.log(context.Consumer)
  return (
    <>
      <h2>App </h2>
      <ThemeContext.Provider value={{ThemeColor,arr}}>
          <GrandParent/>
      </ThemeContext.Provider>
    </>
  )
}

export default UseContext;




