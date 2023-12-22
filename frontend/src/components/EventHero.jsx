import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUsersStore } from '../stores/useUsersStore'
import Alert from './modals/Alert'
import { motion } from 'framer-motion'

const fadeInAnimationVariants1 = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { type: 'spring', duration: 3, delay: 0.5 } },
}

function EventHero() {

  const navigate = useNavigate()
  const { user, loginError } = useUsersStore()
  const [alert, setAlert] = useState(false)

  return (
    <motion.div
      variants={fadeInAnimationVariants1}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      id='sectionEvent1' className="w-full h-[40vh] md:h-[80vh] bg-[url('/event.webp')] bg-center bg-cover bg-no-repeat flex justify-center items-center">
      <div
        className="w-2/3 h-2/3 bg-black bg-opacity-70">
        <h1 className='text-white font-medium md:text-5xl text-center tracking-wider pt-7 uppercase'>FROM IDEA TO <br /> ENTERPRISE</h1>
        <div className='w-11/12 md:w-2/3 h-1/6 mt-7 bg-tertiary mx-auto text-primary md:text-2xl font-medium flex justify-center items-center'> February 22, 10:00 - 14:00</div>
        <h1 className='text-2xl md:text-7xl text-white font-bold text-center mt-7'>2024</h1>
      </div>
      {alert && <Alert message={loginError} setAlert={setAlert} />}
    </motion.div>
  )
}

export default EventHero