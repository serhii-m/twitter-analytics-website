import React, { useEffect, useState } from 'react';
import { Box, Typography, Skeleton } from '@mui/material';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line, Doughnut } from 'react-chartjs-2';

import { lineOptions, plugins, doughnutOptions } from '../data/chartsOptions';

import { useTwitterDataContextState } from '../contexts/TwitterDataContext';
import getComputedData from '../helpers/getComputedData';
import { generateLineChartData, generateDoughnutData } from '../helpers/generateChartsData';

import chartsStyles from '../styles/chartsStyles';
import { getDiscussData } from '../services/getDiscussData';
import { ARRAY_LENGTH, TIME_FRAMES } from '../data/consts';
import theme from '../styles/theme';

ChartJS.register(CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ArcElement,
  Legend
);


const Charts = () => {
  const [lineData, setLineData] = useState({});
  const [doughnutData, setDoughnutData] = useState({});
  const [hasChartsData, setHasChartsData] = useState(false);

  const { data, loading, err, timeInterval } = useTwitterDataContextState();
  const { asx_codes, doughnutWeights } = !loading && !err && getComputedData(data);

  useEffect(() => {
    const getChartsData = async () => {
      const { chartData, formattedDates } = await getDiscussData(asx_codes, timeInterval);

      timeInterval !== TIME_FRAMES.day && setLineData(generateLineChartData(asx_codes, chartData, formattedDates));
      setDoughnutData(generateDoughnutData(doughnutWeights));

      chartData?.length > 0 ? setHasChartsData(true) : setHasChartsData(false);
    };

    getChartsData();
  }, [timeInterval]);

  const skeletonComponents = Array.from({ length: ARRAY_LENGTH }).map((_, idx) => (
    <Skeleton key={idx} variant="rectangular" animation="wave" width={120} height={50} />
  ));


  return (
    <Box sx={chartsStyles.root}>
      {timeInterval !== 'day' &&
      <Box sx={chartsStyles.chartContainer}>
        <Typography variant="h5" sx={chartsStyles.title}>
          {!hasChartsData ? <Skeleton animation="wave"/> : `top 5 companies over a ${timeInterval}`}
        </Typography>
        <Box sx={chartsStyles.lineChart}>
          {!hasChartsData ? (<Skeleton variant="rectangular"
                                width="100%" height="352px"
                                animation="wave"
                                sx={{ borderRadius: '0.25rem' }}
            />) :
            (<Line data={lineData} options={lineOptions} plugins={plugins}/>)
          }
        </Box>
      </Box>
      }
      <Box sx={chartsStyles.doughnutContainer}>
        <Typography variant="h5" sx={chartsStyles.doughnutTitle}>
          {!hasChartsData ? <Skeleton animation="wave"/> : `top sectors over a ${timeInterval}`}
        </Typography>
        <Box sx={{ display: 'flex', [theme.breakpoints.down('lg')]: {
            flexDirection: 'column-reverse',
          }, }}>
          <Box sx={chartsStyles.doughnutChart}>
            {!hasChartsData ? (<Skeleton variant="rectangular"
                                  width={300} height={300}
                                  animation="wave"
                                  sx={{ borderRadius: '0.25rem' }}
              />) :
              <Doughnut data={doughnutData} options={doughnutOptions}/>
            }
          </Box>
          <Box>
            {!hasChartsData && skeletonComponents}
            {doughnutData?.labels && doughnutData?.labels.map(industry => (
              <Typography key={industry} variant="body1" sx={chartsStyles.industry}>
                {industry}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Charts;