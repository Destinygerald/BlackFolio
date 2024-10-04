import './style.css'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

function Page () {

	const targetRef = useRef(null)

	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ['start start', 'end start']
	})

	const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])

	return (
		<div className='about'>
			<div className='test' ref={targetRef}>
				<div className='test-cnt'>
					<motion.div className='vnt' style={{ transform: `rotateY(${rotate}deg)` }}/>
					<div />
				</div>
			</div>
		</div>
	)
}

export default Page