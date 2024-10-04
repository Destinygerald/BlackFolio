import './style.css'
import './style.mobile.css'
import logo from '/logo2.png'
import { IoLogoLinkedin } from 'react-icons/io'
import { FaTwitter } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'

function FooterContact () {
	return (
		<div classNames='footer-contact'>
			m
		</div>
	)
}

export function Footer () {
	return (
		<div className='footer'>
			<div className='footer-left'>
				<img className='footer-img' src={logo} />
				{/*<div> Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie. </div>*/}
				<div className='footer-logos'>
					<span> Follow Us </span>

					<div>
						<span> <IoLogoLinkedin /> </span>
						<span> <RiInstagramFill /> </span>
						<span> <FaTwitter /> </span>
					</div>
				</div>
			</div>

			<div className='footer-center'>
				<div>
				 	<span>Explore</span>

				 	<ul>
				 		<li> Home </li>
				 		<li> About </li>
				 		<li> Contact Us </li>
				 		<li> Projects </li>
				 	</ul>
				</div>
			</div>

			<FooterContact />
		</div>
	)
}