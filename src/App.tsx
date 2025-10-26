import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import RotatingText from './components/rotating_text'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=''>
        <Navbar></Navbar>
        <div>
          <div
            className="hero min-h-screen">
            {/*
            style={{
              backgroundImage:
                "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
            }}
            */}

            <div className="hero-overlay"></div>
            <div className="hero min-h-screen flex flex-col items-center justify-center text-center">
              {/* Title block */}
              <div className="flex flex-col items-center justify-center leading-none mb-16 w-full">
                <div className="flex justify-start w-1/2 text-primary font-jersey">
                  <span className="text-[10vw] font-extrabold">
                    Music
                  </span>
                </div>
                <div className="font-jersey flex justify-end w-1/2 -mt-[2vw] text-secondary">
                  <span className="font-jersey text-[10vw] font-extrabold">
                    Versus
                  </span>
                </div>
              </div>

              {/* Subtitle + Rotating text */}
              <div className="max-w-md w-max items-center" >
                <p className="text-5xl font-bold mx-auto w-max">
                  Find out your favorite
                </p>
                <p className="mb-5 text-5xl font-bold min-w-[400px] mx-auto text-primary">
                  <RotatingText
                    keywords={["Songs", "Albums", "Artists"]}
                    intervalMs={5000}
                  />
                </p>
                <button className="btn btn-primary text-xl px-8 py-3">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
