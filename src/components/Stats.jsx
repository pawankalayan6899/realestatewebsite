// components/Stats.jsx
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const Stats = () => {
  const growthData = {
    labels: ['2007', '2012', '2018', '2021', '2024'],
    datasets: [{
      label: 'Projects Completed',
      data: [5, 15, 25, 35, 45],
      borderColor: '#0d6efd',
      tension: 0.4
    }]
  };

  return (
    <section className="py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4" data-aos="fade-up">
            <div className="card text-center border-0 shadow">
              <div className="card-body">
                <h3 className="display-4 text-primary">4640+</h3>
                <p className="text-muted">Happy Customers</p>
              </div>
            </div>
          </div>

          <div className="col-md-8" data-aos="fade-left">
            <div className="card shadow">
              <div className="card-body">
                <h4 className="card-title mb-4">Company Growth</h4>
                <Line data={growthData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;