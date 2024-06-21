import React,{useState} from 'react'
import './Project.css'
import a from './j.webp'
import b from './Group 1.png'
import c from './Group 2.png'
import d from '../../src/Project/j.webp'
import data from './Data.js';
import projectsData from './Data.js'; // Import your data.js file



function Project() {
  const totalPages = projectsData.length;

  const [currentPage, setCurrentPage] = useState(1);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Optional: Adds smooth scrolling animation
    });
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage % totalPages) + 1);
    scrollToTop();
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 2 + totalPages) % totalPages + 1);
    scrollToTop();

  };

  const project = projectsData[currentPage - 1];
  return (
    <div className="projects">
      <h1 className='h1'>Main Projects</h1>
      <div className="container">
        <div className="img">
        {console.log(project.imageSrc)}
        <img src={project.imageSrc} alt={project.title} />
        </div>
        <div className="descriptions">
          <div className="tittle">
            <h1 className='kk'>{project.title}</h1>
          </div>
          <div className="description">
            <p>{project.description}</p>
          </div>
          <div className="links">
            <div className="link">
              <a href={project.githubLink}><span>GITHUB</span></a>
            </div>
            <div className="link">
            <a href={project.liveLink}><span>LIVE</span></a>
            </div>
          </div>
        </div>
      </div>
      <div className="down">
        <img src={b} alt="" onClick={handlePrevPage} />
        <img src={c} alt="" onClick={handleNextPage}/>
      </div>
      
      {/* <span className='ss'>Others can be referred in my github profile</span> */}
    </div>
  )
}

export default Project


{/* <div className="carousel-container">
      <div className="carousel">
        <div className="boxs">
          <div className="imga">
            <img src={project.imageSrc} alt={project.title} />
          </div>
          <div className="type">
            {Object.keys(project).map((key) => (
              <div key={key}>
                <h2>{key === 'title' ? project[key] : null}</h2>
                <p>{key === 'description' ? project[key] : null}</p>
                <div className="but">
                  {(key === 'githubLink' || key === 'liveLink') && (
                    <button className={key === 'githubLink' ? 'on' : ''} onClick={() => window.open(project[key])}>
                      {key === 'githubLink' ? 'Github' : 'Live'}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="navigation">
        <button onClick={handlePrevPage}>&lt; Prev</button>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <button onClick={handleNextPage}>Next &gt;</button>
      </div>
    </div> */}



