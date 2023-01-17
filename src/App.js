import React from 'react'
import "./App.css"
import About from './components/container/About/About'
import Contact from './components/container/Contact/Contact'
import Footer from './components/container/Footer/Footer'
import Home from './components/container/Home/Home'
import Portfolio from './components/container/Portfolio/Portfolio'
import Skills from './components/container/Skills/Skills'
import Navbar from './components/Navbar/Navbar'
import { Typewriter } from 'react-simple-typewriter'


const App = () => {

  const [loading, setLoading] = React.useState(false)
  React.useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 8000)
  }, [])


  return (
    <div>
    {
      loading ?
      <div className='application'>
          <h1 className='h1'>
          I code for{' '}
          <span className='typewriter'>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={['<Money/>', '<Fun/>', '<Serotonin/>', '<Endorphins/>']}
              loop={5}
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
          </h1>
      </div>
      :
      <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </>
    }
    </div>
    
  )
}

export default App
