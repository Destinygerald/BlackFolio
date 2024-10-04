import './style.css'
import './style.mobile.css'

import img1 from '/images/Tesla2.jpg'
import img2 from '/images/apple2.jpg'
import img3 from '/images/Arch.jpg'
import img4 from '/images/Mastify.jpg'

const ProjectsArray = [
	{
		imgSrc: img1,
		name: 'Tesla',
		url: '',
		content: ''
	},
	{
		imgSrc: img2,
		name: 'Apple',
		url: '',
		content: ''
	},
	{
		imgSrc: img3,
		name: 'Arch',
		url: '',
		content: ''
	},
	{
		imgSrc: img4,
		name: 'Mastify',
		url: '',
		content: ''
	}
]


function ProjectsCard ({ imgSrc, name, content }) {


	return (
		<div>
			<img src={imgSrc} />

			<div className='project-info'>
				<div className='project-info-cnt'>
					<span> {name} </span>
					{/*<div> { content ? (content?.slice(0, 12) + '.....') : '---' } </div>*/}
					<button> Explore </button>
				</div>
			</div>
		</div>
	)
}


export function Projects () {
	return (
		<div className='our-projects'>
			{
				ProjectsArray.map((project, i) => (
					<ProjectsCard key={'project ' + i } imgSrc={project.imgSrc} name={project.name}  />
				))
			}
		</div>
	)
}