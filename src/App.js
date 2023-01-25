import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About.js';
import Skill from './pages/Skill.js';
import Project from './pages/Project.js';
import Contact from './pages/Contact.js'
import Navbar from './components/navbar.js';
import Home from './pages/Home.js';
import Footer from './components/footer.js'

function App() {
    return (
      <>
      <div className='flex flex-row mx-5 h-screen'>
        <div className='basis-1/12'><Navbar /></div>
        <div className='basis-11/12 ml-6'>
          <div className='box-border border-4 border-[#333333] shadow-[4px_4px_4px_10px_rgba(0, 0, 0, 0.25)] h-3/5 w-11/12 mx-auto -rotate-[9deg] mt-36'>
            <Routes>
              <Route path='/' element = {<Home />} />
              <Route path='/About' element = {<About />} />
              <Route path='/Skill' element = {<Skill />} />
              <Route path='/Project' element = {<Project />} />
              <Route path='/Contact' element = {<Contact />} />
            </Routes>
          </div>
          <div className='fixed bottom-0  w-full h-10 text-center'>
        <Footer />
      </div>
        </div>
      </div>
      </>
    );
  }
  
  export default App;
  