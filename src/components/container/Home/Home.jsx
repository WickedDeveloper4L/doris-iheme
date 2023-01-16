import React from 'react'
import "./Home.scss"
import { motion } from 'framer-motion'


const Home = () => {
  const moveVariants = {
    animation: {
      y: [0, -10],
      transition: {
        yoyo: Infinity,
        duration: 4,
        delay: 2,
        repeat: Infinity
      }

    }
  }


  return (
    <motion.div className="container " id='home'
      initial={{ y: -15, opacity: 0 }}
      viewport={{ once: true }}
      animate={{ y: 0, opacity: 1 }}
      transition={
        {
          duration: 2,
          delay: 0.5
        }
      }
    >
     
      <div className="profile_text">
        <h3 className='name'>Hello, I'm  <span>Chris kleine</span> </h3>
        <span className='job'>Web Developer based in Lagos, Nigeria.</span>
        <span className='text'>I Make Ideas<br /> come 
        <motion.span
              initial={{opacity: 0.1}}
              animate= {{opacity: 1.0}}
              transition={{duration:4, repeat: Infinity}}
              className='alive'
             >
             alive 
            </motion.span>
         on the <br />  internet.</span>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.1 }}
          variants={moveVariants}
          animate="animation"
        >
          Let's connect</motion.a>
      </div>
    </motion.div>
  )
}

export default Home