import React from 'react';
import '../css/Style.css';

const project = [
  {
    id: 1,
    subtitle: 'SEO Optimization',
    title: 'Designing a better cinema experience',
    imgSrc: './assets/images/project-1.jpg',
    imgAlt: 'Designing a better cinema experience',
  },
  {
    id: 2,
    subtitle: 'Digital Marketing',
    title: 'Building design process within teams',
    imgSrc: './assets/images/project-2.jpg',
    imgAlt: 'Building design process within teams',
  },
  {
    id: 3,
    subtitle: 'Keyword Targeting',
    title: 'How intercom brings play into their design process',
    imgSrc: './assets/images/project-3.jpg',
    imgAlt: 'How intercom brings play into their design process',
  },
  {
    id: 4,
    subtitle: 'Email Marketing',
    title: 'Stuck with to-do list, I created a new app for',
    imgSrc: './assets/images/project-4.jpg',
    imgAlt: 'Stuck with to-do list, I created a new app for',
  },
  {
    id: 5,
    subtitle: 'Marketing & Reporting',
    title: 'Examples of different types of sprints',
    imgSrc: './assets/images/project-5.jpg',
    imgAlt: 'Examples of different types of sprints',
  },
  {
    id: 6,
    subtitle: 'Development',
    title: 'Redesigning the New York times app',
    imgSrc: './assets/images/project-6.jpg',
    imgAlt: 'Redesigning the New York times app',
  },
];

const Project = () => {
  return (
    <section className="section project" id="project" aria-label="project">
      <div className="container">
        <h2 className="h2 section-title">Our Recent Projects</h2>
        <p className="section-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <ul className="grid-list">
          {project.map((project) => (
            <li key={project.id}>
              <div className="project-card">
                <figure className="card-banner img-holder" style={{ '--width': 510, '--height': 700 }}>
                  <img
                    src={project.imgSrc}
                    width="510"
                    height="700"
                    loading="lazy"
                    alt={project.imgAlt}
                    className="img-cover"
                  />
                </figure>
                <div className="card-content">
                  <p className="card-subtitle">{project.subtitle}</p>
                  <h3 className="h3">
                    <a href="#" className="card-title">{project.title}</a>
                  </h3>
                  <a href="#" className="btn btn-primary">View Details</a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Project;
