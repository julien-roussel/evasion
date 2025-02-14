import { useState } from 'react'
import { Routes, Route } from 'react-router'
import { HelmetProvider } from 'react-helmet-async'
import GoogleFonts from 'react-google-fonts';

// CSS
import './App.css'
import './scss/custom.scss'

// Component
import Layout from './components/Layout';

// Pages
import Home from './pages/Home';
import Nothing from './pages/Nothing';
import Shop from './pages/shop/Shop';
import NosGammes from './pages/nos-gammes/NosGammes';
import HuilesEssentielles from './pages/huiles-essentielles/HuilesEssentielles';
import Actualite from './pages/actualite/Actualite';
import Article from './pages/actualite/Article';
import Contact from './pages/contact/Contact';
import PostItem from './pages/shop/PostItem';


const helmetContext = {};


function App() {

  return (
    <>
      <HelmetProvider context={helmetContext}>
        <GoogleFonts font='Alef'/>
        <GoogleFonts font='Kalnia'/>
        <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>} />  
              <Route path="/shop" element={<Shop/>} /> 
              <Route path='/shop/item:id' element={<PostItem/>} /> 
              <Route path="/nos-gammes" element={<NosGammes/>} />
              <Route path="/huiles-essentielles" element={<HuilesEssentielles/>} /> 
              <Route path="/actualite" element={<Actualite/>} />
              <Route path='/actualite/article:id' element={<Article/>} /> 
              <Route path="/contact" element={<Contact/>} />   
            </Route>      
            <Route path='*' element={<Nothing/>} />
        </Routes>
      </HelmetProvider>
    </>
  )
}

export default App
