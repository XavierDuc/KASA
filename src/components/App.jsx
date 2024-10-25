import { useState } from 'react'
import '../sass/_App.scss'
import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import Header from './header';
import Footer from './Footer';
import Gallery from './gallery';
import Card from './Cards';
import Banner from './Banner';


const App = () => {
  return (
    <div className='app'>
      
     <Header/>
     <Banner/>
     {/* <Card/> */}
     <Gallery/>
     <Footer/>
     

    </div>
  )
}
export default App
