import React from 'react'

function Home() {
  return (
    <div className=''>
        <div className='flex flex-row text-white'>
            <div className='basis-9/12 pl-24'>
                <div className='mt-32 rotate-[9deg]'>
                    <h1 className='text-6xl font-semibold'>Hi,</h1>
                    <h2 className='text-4xl font-semibold mt-4'>I'm Tobi,</h2>
                    <h2 className='text-4xl font-semibold mt-4'>Web developer.</h2>
                    <button className='border rounded-lg p-2 w-36 bg-[#56F947] mt-14'>Let's Talk</button>
                </div>
            </div>
            <div className='basis-3/12 mt-5 rotate-[9deg]'>
                <button className='border-box border w-24 h-12 rounded-lg ml-32'>
                    Home
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home;