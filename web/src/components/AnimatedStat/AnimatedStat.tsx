import { useEffect } from 'react'

import { Box } from '@mui/material'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const AnimatedStat = ({ children }) => {
  const variants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
  }
  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      control.start('visible')
    } else {
      control.start('hidden')
    }
  }, [control, inView])

  return (
    <motion.div
      className="animatedStat"
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={control}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {children}
      </Box>
    </motion.div>
  )
}

export default AnimatedStat
