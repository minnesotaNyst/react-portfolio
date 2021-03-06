import React, { useState } from 'react';

function Project() {
	const [projects] = useState([
		{
			image: 'horiseon.png',
			title: 'Horiseon Social',
			link: 'https://minnesotanyst.github.io/horiseon-socal-solution/',
			repo: 'https://github.com/minnesotaNyst/horiseon-socal-solution'
		},
		{
			image: 'run-buddy.png',
			title: 'Run Buddy',
			link: 'https://minnesotanyst.github.io/run-buddy/',
			repo: 'https://github.com/minnesotaNyst/run-buddy'
		},
		{
			image: 'password-gen.png',
			title: 'Password Generator',
			link: 'https://minnesotanyst.github.io/pwd-generator/',
			repo: 'https://github.com/minnesotaNyst/pwd-generator'
		}
	]);
	return (
		<div id='project-container' className='m-3'>
			{projects.map(project => (
				<div id='project' className='card p-3 m-3' key={project.title}>
					<div className='card-img-top'>
						<img
							id='project-img'
							className='img-fluid rounded mx-auto'
							alt={project.title}
							src={require(`../../assets/projects/${project.image}`).default}
						/>
					</div>
					<h2 className='text-center'>
						<a href={project.link} target='blank' className='card-text'>
							{project.title}
						</a>
					</h2>
					<p className='text-center'>
						<a href={project.repo} target='blank'>
							<span className='card-text fab fa-github text-center display-4'></span>
						</a>
					</p>
				</div>
			))}
		</div>
	);
}

export default Project;
