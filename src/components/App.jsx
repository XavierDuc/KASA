import { useState } from 'react'
import '../sass/App.scss'
import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import Header from './header';
import Footer from './Footer';


const App = () => {
  return (
    <div className='app'>
      <Header/>
     <Footer/>

    </div>
  )
}
export default App
