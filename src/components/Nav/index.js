import React from 'react';
// import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const {
    aboutSelected,
    setAboutSelected,
    portfolioSelected,
    setPortfolioSelected,
    contactSelected,
    setContactSelected,
    resumeSelected,
    setResumeSelected,
  } = props;

	return (
    <nav className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li
          className="nav-item mx-4 my-1 py-1"
          onClick={() => {
            setAboutSelected(true);
            setPortfolioSelected(false);
            setContactSelected(false);
            setResumeSelected(false);
          }}
        >
          <button className={`nav-btn ${aboutSelected && "navActive"}`}>
            About Me
          </button>
        </li>
        <li
          className="nav-item mx-4 my-1 py-1"
          onClick={() => {
            setAboutSelected(false);
            setPortfolioSelected(true);
            setContactSelected(false);
            setResumeSelected(false);
          }}
        >
          <button className={`nav-btn ${portfolioSelected && "navActive"}`}>
            Portfolio
          </button>
        </li>
        <li
          className="nav-item mx-4 my-1 py-1"
          onClick={() => {
            setAboutSelected(false);
            setPortfolioSelected(false);
            setContactSelected(true);
            setResumeSelected(false);
          }}
        >
          <button className={`nav-btn ${contactSelected && "navActive"}`}>
            Contact Me
          </button>
        </li>
        <li
          className="nav-item mx-4 my-1 py-1"
          onClick={() => {
            setAboutSelected(false);
            setPortfolioSelected(false);
            setContactSelected(false);
            setResumeSelected(true);
          }}
        >
          <button className={`nav-btn ${resumeSelected && "navActive"}`}>
            Resume
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
