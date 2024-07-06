import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

const ChartComponent = ({ data }) => {
  return (
    <Line data={data} />
  );
};

export default ChartComponent;