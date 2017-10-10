import { Doughnut } from 'react-chartjs-2';
import { HorizontalBar } from 'react-chartjs-2';
import React from 'react';

const doughnutData = {
  labels: ['Red', 'Green', 'Yellow'],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }
  ]
};

const horizontalData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

const Infograph = () => {
  return (
    <div>
      <h1 className="info-title tc f4">First section</h1>
      <p className="info-desc tc f6">
        More info on this piece of info will go here. More info on this piece of
        info will go here. More info on this piece of info will go here.
      </p>
      <h1 className="info-title tc f4">Second section</h1>
      <Doughnut data={doughnutData} width={100} height={50} />
      <h1 className="info-title tc f4">Third section</h1>
      <p className="info-desc tc f6">
        More info on this piece of info will go here. More info on this piece of
        info will go here. More info on this piece of info will go here.
      </p>
      <h1 className="info-title tc f4">Fourth section</h1>
      <HorizontalBar data={horizontalData} />
    </div>
  );
};

export default Infograph;
