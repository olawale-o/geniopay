export const options = {
  responsive: true,
  elements: {
    line: {
      tension: 0.3,
    },
  },
  plugins: {
    tooltips: {
      mode: 'index',
      intersect: false,
    },
    hover: {
      mode: 'index',
    },
  },
  scales: {
    y: {
      min: 1,
      max: 4.2,
      ticks: {
        callback: function(value, index, values) {
          return `$${value}k`;
        },
      }
    },
  },
  borderColor: "#008AA8",
  borderWidth: 5,
  pointBorderColor: "#fff",
  pointRadius: 5,
  spanGaps: false,
};
