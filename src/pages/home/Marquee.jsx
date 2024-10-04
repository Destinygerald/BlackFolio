import './style.css'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const Blackfolio = Array.from('BLACKFOLIOBLACKFOLIO')

export function Marquee () {

	const ref = useRef(null)

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'end start']
	})

	const x = useTransform(scrollYProgress, [0, 1], [0, -400])

	return (
		<div className='marquee' ref={ref}>
			<motion.div className='marquee-cnt' style={{ x }}>
			{
				Blackfolio.map((itm, i) => (
					<div key={i} className='marquee-item'>
						{itm}
					</div>
				))
			}
			</motion.div>
		</div>
	)
}