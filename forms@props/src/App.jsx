import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StudentForm from './Components/StudentForm'
import StaffForm from './Components/StaffForm'
import SubjectForm from './Components/SubjectForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StudentForm/>
      <StaffForm/>
      <SubjectForm/>
    </>
  )
}

export default App
