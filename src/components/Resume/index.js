import React from 'react';

function Resume() {
	return (
		<div className='d-flex justify-content-center'>
			<div id='resume-container' className='font-color m-3 p-2'>
				<h2 className='font-color text-center pt-2'>My Resume</h2>
				<h3 className='font-color text-center m-4 p-2'>
					Download my{' '}
					<span>
						{' '}
						<a
							className='card-text'
							href='jn_resume.pdf'
							download='jn_resume.pdf'
						>
							resume.
						</a>
					</span>
				</h3>
			</div>
		</div>
	);
}

export default Resume;
