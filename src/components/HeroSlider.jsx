import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './HeroSlider.module.css';

// Optimize image imports with lazy loading
const slides = [
  {
    image: () => import('../assets/images/home.1.png'),
    title: "Building Dreams",
    subtitle: "Creating Lasting Impressions",
    description: "Experience luxury living with our premium residential projects",
    ctaText: "View Projects",
    ctaLink: "/projects"
  },
  {
    image: () => import('../assets/images/home.2.png'),
    title: "Quality Construction",
    subtitle: "Excellence in Every Detail",
    description: "Setting new standards in construction with innovative technology",
    ctaText: "Our Process",
    ctaLink: "/about"
  },
  {
    image: () => import('../assets/images/home.3.png'),
    title: "Modern Design",
    subtitle: "Contemporary Living Spaces",
    description: "Thoughtfully designed spaces that blend aesthetics with functionality",
    ctaText: "Explore Designs",
    ctaLink: "/gallery"
  },
  {
    image: () => import('../assets/images/home.4.png'),
    title: "Luxury Living",
    subtitle: "Experience the Difference",
    description: "Premium amenities and world-class facilities in every project",
    ctaText: "Learn More",
    ctaLink: "/projects"
  },
  {
    image: () => import('../assets/images/home.5.png'),
    title: "Premium Projects",
    subtitle: "Setting New Standards",
    description: "Redefining luxury with attention to every detail",
    ctaText: "View Gallery",
    ctaLink: "/gallery"
  },
  {
    image: () => import('../assets/images/home.6.png'),
    title: "Your Future Home",
    subtitle: "Where Dreams Come True",
    description: "Find your perfect home in our exclusive residential projects",
    ctaText: "Contact Us",
    ctaLink: "/contact"
  }
];

const HeroSlider = React.memo(() => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loadedImages, setLoadedImages] = useState({});
  const [isTransitioning, setIsTransitioning] = useState(false);
  const slideTimerRef = useRef(null);
  const backgroundRef = useRef(null);

  // Preload images for better performance
  useEffect(() => {
    const imagePromises = slides.map((slide, index) => 
      slide.image().then(imageModule => ({
        index,
        src: imageModule.default
      }))
    );

    Promise.all(imagePromises).then(loadedImageData => {
      const imageMap = loadedImageData.reduce((acc, { index, src }) => {
        acc[index] = src;
        return acc;
      }, {});
      setLoadedImages(imageMap);
    });
  }, []);

  // Slide transition logic
  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 3000);
  }, [isTransitioning]);

  // Auto-slide timer
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000); 
    return () => clearInterval(timer);
  }, [nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide]);

  // Render background slides
  const renderBackgroundSlides = useMemo(() => {
    return slides.map((slide, index) => {
      const imageUrl = loadedImages[index] || '';
      const isActive = index === currentSlide;

      return (
        <motion.div
          key={index}
          className={`${styles.backgroundSlide} ${isActive ? styles.active : ''}`}
          style={{ backgroundImage: `url(${imageUrl})` }}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ 
            opacity: isActive ? 1 : 0,
            scale: isActive ? 1.2 : 1,
            transition: { 
              duration: 3, 
              ease: 'easeInOut' 
            }
          }}
          exit={{ opacity: 0 }}
        />
      );
    });
  }, [currentSlide, loadedImages]);

  // Render content slides
  const renderContentSlides = useMemo(() => {
    const currentSlideData = slides[currentSlide];
    
    return (
      <motion.div 
        key={currentSlide}
        className={styles.content}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.textContent}>
          <motion.h1 
            className={styles.title}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {currentSlideData.title}
          </motion.h1>
          <motion.h2 
            className={styles.subtitle}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {currentSlideData.subtitle}
          </motion.h2>
          <motion.p 
            className={styles.description}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {currentSlideData.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Link 
              to={currentSlideData.ctaLink} 
              className={styles.cta}
              aria-label={`${currentSlideData.ctaText} - ${currentSlideData.title}`}
            >
              {currentSlideData.ctaText}
              <span className={styles.ctaArrow} aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    );
  }, [currentSlide]);

  // Dot navigation
  const renderDots = useMemo(() => {
    return slides.map((_, index) => (
      <button
        key={index}
        className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ''}`}
        onClick={() => setCurrentSlide(index)}
        aria-label={`Go to slide ${index + 1}`}
      />
    ));
  }, [currentSlide]);

  return (
    <div className={styles.heroSlider}>
      <div className={styles.backgroundContainer} ref={backgroundRef}>
        <AnimatePresence mode="wait">
          {renderBackgroundSlides}
        </AnimatePresence>
      </div>
      <div className={styles.overlay}></div>
      <AnimatePresence mode="wait">
        {renderContentSlides}
      </AnimatePresence>
      <div className={styles.dots}>
        {renderDots}
      </div>
    </div>
  );
});

export default HeroSlider;
