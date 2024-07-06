import React, { useEffect, useState } from 'react';
import ChartComponent from './ChartComponent';
import amplitude from 'amplitude-js';


const getEventData = async (eventType) => {
//   const response = await amplitude.getInstance().fetchEvents({
//     event_type: eventType,
//     start: '2023-01-01', // Replace with your desired start date
//     end: '2023-12-31',   // Replace with your desired end date
//   });

const response= await amplitude.getInstance().logEvent('Video Played')



  return response;
};


const MyAnalyticsPage = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    // Fetch data from the Amplitude API and set it to the state
    const fetchData = async () => {
      try {
        const eventData = await getEventData('Form Submitted');
        setChartData({
          labels: eventData.data.map(item => item.time),
          datasets: [{
            label: 'Event Count',
            data: eventData.data.map(item => item.event_count),
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
          }],
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Amplitude Analytics Chart</h2>
      {Object.keys(chartData).length > 0 && <ChartComponent data={chartData} />}
    </div>
  );
};

export default MyAnalyticsPage;