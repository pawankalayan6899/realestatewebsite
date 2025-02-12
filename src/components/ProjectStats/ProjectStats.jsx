import React, { useEffect, useRef } from 'react';
import styles from './ProjectStats.module.css';

const cities = [
  {
    name: "BANGALORE",
    image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
    description: "Silicon Valley of India"
  },
  {
    name: "HYDERABAD",
    image: "https://images.pexels.com/photos/11321242/pexels-photo-11321242.jpeg?auto=compress&cs=tinysrgb&w=1400", // HD Charminar
    description: "City of Pearls"
  },
  {
    name: "VIZAG",
    image: "https://images.pexels.com/photos/4319865/pexels-photo-4319865.jpeg?auto=compress&cs=tinysrgb&w=1400", // Vizag Beach Sunrise
    description: "The Jewel of the East Coast"
  }
];

const stats = [
  { value: 15000, label: "HAPPY CUSTOMERS", suffix: "+", icon: "" },
  { value: 30, label: "PROJECTS DONE", suffix: "+", icon: "" },
  { value: 23, label: "YEARS OF SERVICE", suffix: "+", icon: "" }
];

const ProjectStats = () => {
  const statsRef = useRef(null);
  const counters = useRef([]);
  const cityRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === statsRef.current) {
              animateStats();
            } else {
              entry.target.classList.add(styles.animate);
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    cityRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const animateStats = () => {
    stats.forEach((stat, index) => {
      const counter = { value: 0 };
      const target = stat.value;
      const steps = 60;
      const increment = target / steps;
      let currentStep = 0;

      const updateCounter = () => {
        currentStep++;
        counter.value = Math.min(Math.round(increment * currentStep), target);
        if (counters.current[index]) {
          counters.current[index].textContent = counter.value.toLocaleString() + stat.suffix;
        }
        if (currentStep < steps) {
          requestAnimationFrame(updateCounter);
        }
      };

      requestAnimationFrame(updateCounter);
    });
  };

  return (
    <section className={styles.statsSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>OUR PROJECTS</h2>
        <p className={styles.sectionDescription}>
          SERVICES OFFERED BY THANVI BUILD TECH AND VENTURES FOR YOUR REAL ESTATE AND CONSTRUCTION NEEDS.
        </p>

        <div className={styles.citiesGrid}>
          {cities.map((city, index) => (
            <div 
              key={index} 
              className={styles.cityCard}
              ref={el => cityRefs.current[index] = el}
            >
              <div className={styles.cityImageWrapper}>
                <img src={city.image} alt={city.name} className={styles.cityImage} />
                <div className={styles.cityOverlay}>
                  <div className={styles.cityContent}>
                    <h3 className={styles.cityName}>{city.name}</h3>
                    <p className={styles.cityDescription}>{city.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.statsGrid} ref={statsRef}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <div className={styles.statIcon}>{stat.icon}</div>
              <div className={styles.statValue}>
                <span ref={el => counters.current[index] = el}>0{stat.suffix}</span>
              </div>
              <div className={styles.statLabel}>{stat.label}</div>
              <div className={styles.statBackground}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectStats;
