import './style.css'
import img1 from '/images/image_1.jpg'

function ServiceCard ({ service, servicecnt }) {
	return (
		<div className='service-card'>
			<span> ⁂ </span>

			<div className='service-card-cnt'>
				<span> {service} </span>
				<div> {servicecnt} </div>
			</div>
		</div>
	)
}

export function Services () {
	return (
		<div className='services'>

			<div className='services-cnt'>
				<span> Our Services </span>

				<div className='services-info'>
					<ServiceCard service='Graphic-Design' servicecnt='Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie.' />
					<ServiceCard service='Content-writing' servicecnt='Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie.' />
					<ServiceCard service='Motion-Design' servicecnt='Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie.' />
				</div>
			</div>

			<div className='services-img'>
				<img src={img1} />
			</div>
		</div>
	)
}