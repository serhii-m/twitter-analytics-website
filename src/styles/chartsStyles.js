import theme from './theme';

const chartsStyles = {
  root: {
    display: 'flex',
    marginBottom: '1.25rem',
    minHeight: '28.625rem',
    padding: '1.75rem 1.75rem 0.75rem 1.75rem',
    border: '0.125rem solid #013220',
    borderRadius: '1.25rem',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '1rem 0.5rem'
    },
  },
  chartContainer: {
    width: '34.2rem',
    height: '26.125rem',
    marginRight: '3.9rem',
    [theme.breakpoints.down('sm')]: {
      width: '18.125rem',
      margin: 0,
    },
  },
  doughnutContainer: {
    width: '34.2rem',
    minHeight: '23.125rem',
    [theme.breakpoints.down('sm')]: {
      width: '18.125rem',
    },
  },
  title: {
    fontWeight: 700,
    marginBottom: '1rem',
    textTransform: 'uppercase',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
    },
  },
  doughnutTitle: {
    fontWeight: 700,
    marginBottom: '2rem',
    textTransform: 'uppercase',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
    },
  },
  lineChart: {
    position: 'relative',
    width: '34.2rem',
    height: '22rem',
    [theme.breakpoints.down('sm')]: {
      width: '18.125rem',
    },
  },
  doughnutChart: {
    position: 'relative',
    width: '19.0625rem',
    height: '19.0625rem',
    marginRight: '0.5rem',
    [theme.breakpoints.down('sm')]: {
      width: '18.125rem',
      margin: 0,
    },
  },
  industry: {
    fontSize: '1.125rem',
    lineHeight: '1.125rem',
    marginBottom: '1.25rem',
  }
};

export default chartsStyles;