import axios from 'axios';

import dateStringCompare from '../helpers/dateStringCompare';
import { TIME_FRAMES, DISCUSS_DATA_URL } from '../data/consts';

export const getDiscussData = async (args = [], timeInterval = '') => {
  const sliceEnd = timeInterval === 'week' ? TIME_FRAMES.week : TIME_FRAMES.month;

  const url = DISCUSS_DATA_URL;
  const chartData = [];

  try {
    for (let i = 0; i < args.length; i++) {
      const res = await axios.get(url + args[i]);
      chartData.push(Object.entries(res?.data.body)
        .sort((a, b) => dateStringCompare(a[0], b[0]))
        .slice(0, sliceEnd).reverse());
    }
  } catch (err) {
    console.log(err.message);
  }

  const dates = chartData.slice(0, 1).flat().map(elem => elem[0].slice(5));
  const formattedDates = dates.map(item => item.split('-').reverse().join('/'));

  return { chartData, formattedDates };
};
