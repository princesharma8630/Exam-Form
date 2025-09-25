import { StrictMode } from 'react'
import './App.css'
import Navbar from './component/navbar/navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/about'
import Footer from './component/Footer/Footer'
import ExamForm from './pages/ExamForm/ExamForm'
import Features from './pages/Features/Features'

function App() {

  return (
    <>
      <Navbar/> 
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/About" element={<About/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path="/ExamForm" element={<ExamForm/>}/>
        <Route path="/Features" element={<Features/>}/>  
        </Routes>
         <Footer/>
     </>
  )
}

export default App
