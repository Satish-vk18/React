import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Students from './Components/students/studentsData'
import Staff from './Components/staff/staffData'
import Subjects from './Components/subject/subjectsData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Students/>
      <Staff />
      <Subjects/>
    </>
  )
}

export default App
