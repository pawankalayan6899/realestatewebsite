import React from 'react';
import styles from './CurrentProjects.module.css';

const projects = [
  {
    id: 1,
    title: "Premium Villa Plots in DYULOKA",
    location: "DYULOKA",
    status: "Premium Plots Available",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
    description: "Exclusive villa plots in the prestigious DYULOKA development. Perfect for building your dream home in a prime location."
  },
  {
    id: 2,
    title: "Apartments in Radiant Jasmine Terrace",
    location: "Radiant Jasmine Terrace",
    status: "Under Construction",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
    description: "Modern apartments featuring contemporary design and premium amenities in the heart of Radiant Jasmine Terrace."
  },
  {
    id: 3,
    title: "Farm Lands in Siri Sowgandhika",
    location: "Siri Sowgandhika",
    status: "Plots Available",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
    description: "Invest in pristine farm lands at Siri Sowgandhika. Perfect for agriculture or long-term investment opportunities."
  }
];

const CurrentProjects = () => {
  return (
    <section className={styles.projectsSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Current Projects</h2>
        <p className={styles.sectionDescription}>
          Explore our wide range of real estate properties and connect with our dedicated agents at Thanvi Build Tech and Ventures for all your property needs.
        </p>
        
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.imageWrapper}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className={styles.projectImage}
                />
                <div className={styles.overlay}>
                  <div className={styles.status}>{project.status}</div>
                </div>
              </div>
              
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <div className={styles.projectLocation}>
                  <span className={styles.locationIcon}>📍</span>
                  {project.location}
                </div>
                <p className={styles.projectDescription}>{project.description}</p>
                <button className={styles.viewDetailsBtn}>
                  View Property Details
                  <span className={styles.btnArrow}>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentProjects;