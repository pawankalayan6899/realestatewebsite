import React from 'react';
import styles from './Projects.module.css';
import { FaArrowRight } from 'react-icons/fa';

// Import project images
import dyulokaImage from '../assets/images/DYULOKA.webp';
import radiantJasmineImage from '../assets/images/Premium Commercial Complex in Hyderabad.webp';
import siriSowgandhikaImage from '../assets/images/Scenic Agricultural Land Developments in Vizag.webp';

const ProjectCard = ({ image, title, description, link }) => {
  return (
    <div className={styles.projectCard} data-aos="fade-up">
      <div className={styles.projectImageContainer}>
        <img 
          src={image} 
          alt={title} 
          className={styles.projectImage} 
        />
        <div className={styles.projectOverlay}></div>
      </div>
      <div className={styles.projectContent}>
        <h3 className={styles.projectTitle}>{title}</h3>
        <p className={styles.projectDescription}>{description}</p>
        <a href={link} className={styles.learnMoreButton}>
          Learn More <FaArrowRight style={{ marginLeft: '0.5rem' }} />
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  const projectData = [
    {
      image: dyulokaImage,
      title: 'DYULOKA',
      description: 'Modern Residential Project in Bangalore',
      link: '/projects/dyuloka'
    },
    {
      image: radiantJasmineImage,
      title: 'RADIANT JASMINE TERRACE',
      description: 'Premium Commercial Complex in Hyderabad',
      link: '/projects/radiant-jasmine-terrace'
    },
    {
      image: siriSowgandhikaImage,
      title: 'SIRI SOWGANDHIKA FARM LANDS',
      description: 'Scenic Agricultural Land Developments in Vizag',
      link: '/projects/siri-sowgandhika-farm-lands'
    }
  ];

  return (
    <div className={styles.projectsSection}>
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2>Our Signature Projects</h2>
          <p className={styles.sectionSubtitle}>
            Transforming landscapes and creating sustainable living spaces that 
            blend innovation, comfort, and architectural excellence.
          </p>
        </div>
        <div className={styles.projectGrid}>
          {projectData.map((project, index) => (
            <ProjectCard 
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;