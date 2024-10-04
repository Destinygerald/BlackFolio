import './style.css'
import './style.mobile.css'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

import img01 from '/images/img1_2.jpg'
import img02 from '/images/img2.jpeg'
import img03 from '/images/img3.jpeg'
import img04 from '/images/img4.jpeg'
import img05 from '/images/img5.jpeg'
import img06 from '/images/img6.jpeg'

import img1_1 from '/images/images (47).jpeg'

import { Projects } from './Projects.jsx'
// import { Services } from './Services.jsx'
import { Marquee } from './Marquee.jsx'
import { WhatWeDo } from './WhatWeDo.jsx'
import { Footer } from './Footer.jsx'


function ImageGrid () {

	const target = useRef(null)

	const { scrollYProgress } = useScroll({
		target: target,
		offset: ['start start', 'end start']
	})

	const translate1 = useTransform(scrollYProgress, [0, 1], [0, 180])
	const translate2 = useTransform(scrollYProgress, [0, 1], [0, -120])
	
	const scale1 = useTransform(scrollYProgress, [0, 1], [1, 1.8])
	const scale2 = useTransform(scrollYProgress, [0, 1], [1, 1.6])

	// console.log(scrollYProgress.current)

	return (
		<div className='img-grid' ref={target}>
			<div className='img-grid-cnt'>
				<motion.div style={{ scale: scale1, y: translate1 }}>
					<motion.div className='grid-img'> <img src={img01}/> </motion.div>
					<motion.div className='grid-img'> <img src={img02}/> </motion.div>
					<motion.div className='grid-img'> <img src={img03}/> </motion.div>
					<motion.div >
						Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie. 
					</motion.div>
				</motion.div>

				<motion.div style={{ scale: scale2, y: translate2 }}>
					<motion.div>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie. 
					</motion.div>

					<motion.div className='grid-img'> <img src={img04}/> </motion.div>

					<motion.div className='grid-img'> <img src={img05}/> </motion.div>

					<motion.div className='grid-img'> <img src={img06}/> </motion.div>
				</motion.div>

				<div className='page-info'>
					<div>Designing your Vision - Delivering Perfection</div>
					<button> Get in Touch </button>
				</div>

				<div className='grid-text'>BlACKFOLIO</div>
			</div>

			{/*<div className='sinker'></div>*/}
		</div>
	)
}


function Info () {
	return (
		<div className='info'>
			<div className='info-img'>
				<img src={img1_1} />
			</div>

			<div className='info-cnt'>
				<div> BlackFolio </div>

				<div>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie. 

					Sed velit lectus, porttitor eu convallis sit amet, semper eget mauris. Integer in pulvinar mauris. Donec facilisis placerat magna sed cursus. Mauris vel tristique arcu. Duis congue orci id libero dictum sollicitudin. Curabitur dapibus arcu leo, condimentum tempus augue condimentum sed. Aliquam sed auctor ex. Nunc quis neque non eros dictum scelerisque ut ac urna. Etiam vel felis molestie, malesuada neque tempus, bibendum mauris. Nullam sit amet rhoncus nisl. Quisque non vehicula dui. Vestibulum neque tortor, placerat sit amet condimentum euismod, suscipit lobortis diam. Sed varius elit non erat dignissim vulputate.

				</div>
			</div>
		</div>
	)
}



function Page () {

	return (
		<div className='home-page'>
			<ImageGrid />

			<Info />

			<Projects />

			<Marquee />

			{/*<Services />*/}

			<WhatWeDo />

			<Footer />
		</div>
	)
}

export default Page