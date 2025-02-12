import React, { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import styles from './CompanyGrowth.module.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const CompanyGrowth = () => {
  const chartRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animate);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => {
      if (chartRef.current) {
        observer.unobserve(chartRef.current);
      }
    };
  }, []);

  const data = {
    labels: ['2007', '2012', '2018', '2021', '2024'],
    datasets: [
      {
        label: 'Projects Completed',
        data: [5, 12, 15, 18, 21],
        fill: true,
        backgroundColor: 'rgba(255, 0, 0, 0.1)',
        borderColor: 'rgb(255, 0, 0)',
        borderWidth: 3,
        tension: 0.4,
        pointBackgroundColor: 'rgb(255, 0, 0)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 10,
        pointHoverBackgroundColor: 'rgb(255, 0, 0)',
        pointHoverBorderColor: '#fff',
        pointHoverBorderWidth: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    animation: {
      duration: 2500,
      easing: 'easeInOutQuart',
      delay: (context) => {
        const delay = context.dataIndex * 300;
        return delay;
      },
    },
    interaction: {
      mode: 'nearest',
      intersect: false,
      axis: 'x',
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
          drawBorder: false,
        },
        ticks: {
          color: '#333',
          font: {
            size: 14,
            weight: 'bold',
          },
          callback: (value) => `${value} Projects`,
        },
        title: {
          display: true,
          text: 'PROJECTS',
          color: '#333',
          font: {
            size: 16,
            weight: 'bold',
          },
          padding: { bottom: 20 },
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#333',
          font: {
            size: 14,
            weight: 'bold',
          },
        },
        title: {
          display: true,
          text: 'YEAR',
          color: '#333',
          font: {
            size: 16,
            weight: 'bold',
          },
          padding: { top: 20 },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'GRAPH OF PROJECTS COMPLETED BY US',
        color: '#333',
        font: {
          size: 24,
          weight: 'bold',
        },
        padding: { bottom: 30 },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleFont: {
          size: 16,
          weight: 'bold',
        },
        bodyFont: {
          size: 14,
        },
        padding: 12,
        displayColors: false,
        callbacks: {
          label: (context) => `Projects Completed: ${context.parsed.y}`,
        },
      },
    },
  };

  return (
    <div className={styles.growthContainer}>
      <div className={styles.graphWrapper} ref={chartRef}>
        <Line ref={canvasRef} data={data} options={options} />
      </div>
    </div>
  );
};

export default CompanyGrowth;
