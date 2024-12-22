import { useState } from 'react'
import Taskboard from './components/Taskboard'
import MainContent from './components/MainContent'
import './App.css'

function App() {

  return (
    <>
      <div className="total-sec">
        <Taskboard/>
        <MainContent/>
      </div>
    </>
  )
}

export default App
