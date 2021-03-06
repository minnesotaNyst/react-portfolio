import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Resume from './components/Resume';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';

function App() {
	const [categories] = useState([
		{
			name: 'portfolio',
			description: 'This is a display of my current projects'
		},
		{ name: 'resume', description: 'Downloadable resume for Jake Nystrom' }
	]);

	const [currentCategory, setCurrentCategory] = useState(categories[0]);

	const [contactSelected, setContactSelected] = useState(false);

	const [resumeSelected, setResumeSelected] = useState(false);

	return (
		<div>
			<Nav
				categories={categories}
				setCurrentCategory={setCurrentCategory}
				currentCategory={currentCategory}
				contactSelected={contactSelected}
				setContactSelected={setContactSelected}
				resumeSelected={resumeSelected}
				setResumeSelected={setResumeSelected}
			></Nav>
			<main>
				{!contactSelected ? (
					<>
						<Gallery currentCategory={currentCategory}></Gallery>
						<About></About>
					</>
				) : contactSelected ? (
          <>
					<ContactForm></ContactForm>
          </>
				) : resumeSelected ? (
          <>
          <Resume></Resume>
          </>
        )}
			</main>
		</div>
	);
}

export default App;
