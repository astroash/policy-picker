import { Doughnut, HorizontalBar } from 'react-chartjs-2';
import React from 'react';
import doughnutData from '../data/doughnut';
import horizontalData from '../data/horizontal';

const Infograph = () => {
  return (
    <div>
      <h1 className="info-title tc f4">Introduction</h1>
      <p className="info-desc tc f6">
        More info on this piece of info will go here.
      </p>
      <h1 className="info-title tc f4">Graph 1</h1>
      <Doughnut data={doughnutData} width={100} height={50} />
      <p className="info-desc tc f6">
        More info on this piece of info will go here. More info on this piece of
        info will go here. More info on this piece of info will go here.
      </p>
      <h1 className="info-title tc f4">Graph 2</h1>
      <HorizontalBar data={horizontalData} />
    </div>
  );
};

export default Infograph;
