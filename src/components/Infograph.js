import { Doughnut, HorizontalBar } from 'react-chartjs-2';
import React from 'react';
import doughnutData from '../data/doughnut';
import horizontalData from '../data/horizontal';
import infographText from '../data/modals';

const Infograph = () => {
  return (
    <div>
      <h1 className="info-title tc f4">Wind Generation Capacity</h1>
      <p className="info-desc tc f6">
        Most wind energy is generated to the North of Britain, but most energy in consumed towards the South.
      </p>
      <h1 className="info-title tc f4">Windy places</h1>
      <Doughnut data={doughnutData} width={100} height={50} />
      <p className="info-desc tc f6">
        Wind generation is not constant over the year, but could cover the seasonal fluctuation in energy use for 215 days of the year.
      </p>
      <h1 className="info-title tc f4">Windy times</h1>
      <HorizontalBar data={horizontalData} />
    </div>
  );
};

export default Infograph;
