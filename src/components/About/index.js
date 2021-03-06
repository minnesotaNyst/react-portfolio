import React from 'react';
import coverImage from '../../assets/cover/jakeNystromHeadshot.png';
function About() {
	return (
		<section className='my-5 '>
			{/* <h1 id='about' className='text-center'>Who am I?</h1> */}
			<img
				src={coverImage}
				className='my-2 mx-auto d-block'
				style={{ width: '25%' }}
				alt='Jake Nystrom headshot...'
			/>
      <br></br>
			<div className='my-2'>
				<p>
					I love to create positive experiences for customers through
					streamlined processes and effective communication. To accomplish this,
					I leverage the strengths of my team and focus on one goal; to deliver
					results. From my first job as a front end developer, to being embedded
					with the Los Angeles Fire Department (LAFD), and to currently
					providing remote project management for the Western half of the United
					States, service delivery has driven my work.<br></br>
					<br></br> As a project manager, I work with a team to deliver software
					services for EMS agencies across my region. As an embedded Project
					Manager with LAFD, I developed skills in technical account management,
					business analysis, technical support, and implementation management.
					This experience allowed me to transition into a role where I plan and
					lead regional software consulting initiatives and success milestones
					with existing clients.<br></br>
					<br></br>
					Today, as a motivated and goal oriented individual I embrace
					challenges, strive to help others learn and develop, work
					collaboratively with teams, and push myself to further develop my
					current skill set with an expectation to succeed. I thrive in high
					paced environments where teams are setup for success.<br></br>
					<br></br> Professional Skills<br></br> Strategic Planning | Leadership
					| Process Development | Customer Retention Strategy | SaaS | Customer
					Service | Software Documentation | Healthcare | Professional Services
					Consulting | Program Management
				</p>
			</div>
		</section>
	);
}

export default About;
