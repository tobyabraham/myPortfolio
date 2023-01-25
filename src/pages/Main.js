import React from 'react';
import Navbar from '../components/navbar.js';
import About from '../pages/About.js';
import Contact from '../pages/Contact.js';
import Project from '../pages/Project.js';
import Skill from '../pages/Skill.js';
import Home from '../pages/Home.js';
import Footer from '../components/footer.js'


function Main() {
  return (
    <>
    <div className='flex flex-col bg-slate-100'>
      <div className='basis-11/12'>
        <div className='flex flex-row mx-5'>
          <div className='basis-1/12'><Navbar /></div>
            <div className='basis-11/12 ml-6'>
              <div className='box-border border-4 border-[#333333] shadow-[4px_4px_4px_10px_rgba(0, 0, 0, 0.25)] h-3/5 w-11/12 mx-auto -rotate-[9deg] mt-36'>
                  <Home />
                  <About />
                  <Skill />
                  <Project />
                  <Contact />
              </div>
          </div>
        </div>
      </div>
      <div className='basis-1/12 bg-orange-400'>
        <Footer />
      </div>
    </div>
    </>
  )
}

export default Main