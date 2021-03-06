import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Resume(props) {
	const { currentCategory } = props;
	return (
		<section>
			<h1 data-testid='h1tag'>{capitalizeFirstLetter(currentCategory.name)}</h1>
			<p>{currentCategory.description}</p>
			<iframe
				className='iframe'
				src='/src/assets/resume/jn_resume.pdf'
				width='100%'
				height='500px'
				title='Jake Nystrom Resume'
			></iframe>
		</section>
	);
}

export default Resume;
