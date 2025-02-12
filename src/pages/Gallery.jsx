import React from 'react';
import styles from './Gallery.module.css';
import { FaSearchPlus } from 'react-icons/fa';

// Import project images
import image1 from '../assets/images/Modern Urban Development.jpg';
import image2 from '../assets/images/Sustainable Living Spaces.jpg';
import image3 from '../assets/images/Commercial Landmark.jpg';
import image4 from '../assets/images/Luxury Residential Tower.jpg';
import image5 from '../assets/images/Industrial Park.webp';
import image6 from '../assets/images/Urban Redevelopment.jpg';
import image7 from '../assets/images/about-1.jpg';
import image8 from '../assets/images/Sustainable Campus.jpg';

const GalleryItem = ({ image, title, description }) => {
  return (
    <div className={styles.galleryItem} data-aos="fade-up">
      <div className={styles.imageContainer}>
        <img 
          src={image} 
          alt={title} 
          className={styles.galleryImage} 
        />
        <div className={styles.imageOverlay}>
          <h3 className={styles.imageTitle}>{title}</h3>
          <p className={styles.imageDescription}>{description}</p>
          <FaSearchPlus style={{ color: 'white', fontSize: '1.5rem', marginTop: '0.5rem' }} />
        </div>
      </div>
    </div>
  );
};

const Gallery = () => {
  const galleryData = [
    {
      image: image1,
      title: 'Modern Urban Development',
      description: 'Innovative architectural design in the heart of the city'
    },
    {
      image: image2,
      title: 'Sustainable Living Spaces',
      description: 'Eco-friendly residential complex with green technologies'
    },
    {
      image: image3,
      title: 'Commercial Landmark',
      description: 'State-of-the-art business center with cutting-edge infrastructure'
    },
    {
      image: image4,
      title: 'Luxury Residential Tower',
      description: 'Premium living spaces with panoramic city views'
    },
    {
      image: image5,
      title: 'Industrial Park',
      description: 'Advanced manufacturing and logistics hub'
    },
    {
      image: image6,
      title: 'Urban Redevelopment',
      description: 'Transforming cityscapes with modern architectural solutions'
    },
    {
      image: image7,
      title: 'Architectural Innovation',
      description: 'Blending traditional design with modern construction techniques'
    },
    {
      image: image8,
      title: 'Sustainable Campus',
      description: 'Integrated living and working environment'
    }
  ];

  return (
    <div className={styles.gallerySection}>
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2>Our Project Gallery</h2>
          <p className={styles.sectionSubtitle}>
            Explore our diverse portfolio showcasing architectural excellence, 
            innovative design, and transformative urban development.
          </p>
        </div>
        <div className={styles.galleryGrid}>
          {galleryData.map((item, index) => (
            <GalleryItem 
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;