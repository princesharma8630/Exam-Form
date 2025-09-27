import { StrictMode } from 'react'
import './App.css'
import Navbar from './component/navbar/navbar'
import { Route, Routes } from 'react-router-dom'
import MainRouter from './Router/MainRouter'

function App() {

  return (
    <>
      <MainRouter/>
     </>
  )
}

export default App
