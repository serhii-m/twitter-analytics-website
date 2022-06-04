import { COLORS } from '../data/consts';

export const generateLineChartData = (codes = [], data = [], dates = []) => {
  const handledData = data.map(item => item.reduce((res, elem, idx) => {
    data[0].flat().includes(elem[0]) && item.flat().includes(data[0]?.[idx]?.[0])
      ?
      res[elem[0]] = elem[1] : data[0].flat().includes(elem[0]) && !(item.flat().includes(data[0][idx][0]))
        ?
        (res[elem[0]] = elem[1],
          res[data[0][idx][0]] = null)
        :
        res[data[0][idx][0]] = null;

    return res;
  }, {}));

  const discussCounts = handledData.map(item => Object.values(item));


  return {
    labels: dates,
    datasets: codes.map((code, idx) => {
      return {
        label: code,
        data: discussCounts[idx],
        borderColor: COLORS[idx],
        backgroundColor: COLORS[idx],
        pointRadius: 0,
        hoverPointRadius: 2,
      };
    })
  };
};


export const generateDoughnutData = (data = {}) => {
  return {
    labels: Object.keys(data),
    datasets: [
      {
        data: Object.values(data),
        backgroundColor: COLORS,
        borderColor: Array(5).fill('#121212'),
        borderWidth: 1,
      },
    ],
  };
};
