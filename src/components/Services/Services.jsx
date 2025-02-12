import React from 'react';
import { FaBuilding, FaCity, FaLeaf } from 'react-icons/fa';
import { GiCrane, GiFactory, GiGreenhouse } from 'react-icons/gi';
import styles from './Services.module.css';

const SERVICES = [
  {
    title: 'Residential Properties',
    description: 'Luxurious apartments, villas, and premium housing solutions designed for modern living.',
    icon: FaBuilding,
    animationIcon: GiCrane
  },
  {
    title: 'Commercial Properties',
    description: 'State-of-the-art office spaces, retail outlets, and commercial complexes.',
    icon: FaCity,
    animationIcon: GiFactory
  },
  {
    title: 'Eco-Friendly Projects',
    description: 'Sustainable development with focus on environmental conservation and green building practices.',
    icon: FaLeaf,
    animationIcon: GiGreenhouse
  }
];

const Services = () => {
  return (
    <div className={styles.servicesGrid}>
      {SERVICES.map((service, index) => (
        <div 
          key={service.title}
          className={styles.serviceCard}
          data-aos="fade-up"
          data-aos-delay={200 * (index + 1)}
        >
          <div className={styles.iconContainer}>
            <service.icon className={styles.mainIcon} />
            <div className={styles.animationContainer}>
              <service.animationIcon className={styles.animationIcon} />
            </div>
          </div>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <div className={styles.constructionElements}>
            <div className={styles.beam}></div>
            <div className={styles.pillar}></div>
            <div className={styles.pillar}></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
