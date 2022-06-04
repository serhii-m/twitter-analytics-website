const lineOptions = {
  maintainAspectRatio: false,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  scales: {
    x: {
      grid: {
        borderColor: '#fff',
        drawTicks: true,
        tickColor: '#fff',
        tickBorderDash: [10, 4],
        tickBorderDashOffset: -4,
      },
      ticks: {
        padding: 4,
        color: '#fff',
        font: {
          size: 12,
        },
      },
    },
    y: {
      grace: '1%',
      display: false,
      beginAtZero: true,
      ticks: {
        reverse: false,
        stepSize: 1,
      },
    },
  },
  plugins: {
    legend: {
      position: 'top',
      align: 'start',
      labels: {
        boxWidth: 20,
        boxHeight: 1,
        padding: 24,
        color: '#fff',
        font: {
          size: 12,
        },
      },
    },
    distance: {
      padding: 50
    },
  },
};

const plugins = [{
  id: 'distance',
  beforeInit (chart, args, opts) {
    const originalFit = chart.legend.fit;
    chart.legend.fit = function fit () {
      originalFit.bind(chart.legend)();
      this.height += opts.padding || 0;
    };
  }
}];

const doughnutOptions = {
  maintainAspectRatio: false,
  responsive: true,
  aspectRatio: 1,
  plugins: {
    legend: {
      display: false,
      position: 'right',
      align: 'start',
      labels: {
        boxWidth: 0,
        color: '#fff',
        font: {
          size: 18,
        },
      },
    },
  },
};

export {
  lineOptions,
  plugins,
  doughnutOptions,
};
