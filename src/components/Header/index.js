import React from 'react';
import Nav from '../Nav';

function Header(props) {
	const {
		aboutSelected,
		setAboutSelected,
		portfolioSelected,
		setPortfolioSelected,
		contactSelected,
		setContactSelected,
		resumeSelected,
		setResumeSelected
	} = props;

	return (
		<header id='header' className='navbar navbar-expand-lg'>
			<h1 id='brand' className='navbar-brand'>
				Jake Nystrom
			</h1>
			<button
				id='toggle'
				className='navbar-toggler'
				type='button'
				data-toggle='collapse'
				data-target='#navbarNav'
				aria-controls='navbarNav'
				aria-expanded='false'
				aria-label='Toggle navigation'
			>
				<span className='fas fa-bars'></span>
			</button>
			<Nav
				aboutSelected={aboutSelected}
				setAboutSelected={setAboutSelected}
				portfolioSelected={portfolioSelected}
				setPortfolioSelected={setPortfolioSelected}
				contactSelected={contactSelected}
				setContactSelected={setContactSelected}
				resumeSelected={resumeSelected}
				setResumeSelected={setResumeSelected}
			></Nav>
		</header>
	);
}

export default Header;
