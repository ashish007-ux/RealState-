import React from 'react'
import Header from '../Common/Header/Header'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
import Home from '../home/Home'
import Footer from '../Common/footer/Footer'
import About from '../about/About'

export default function Pages() {
  return (
    <div>
      <Router> 
        <Header />
        
        <Routes>
          <Route exact path='/' element={<Home/>}/>      
         
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}
