import theme from './theme';

const tableTwitterStyles = {
  root: {
    marginBottom: '1.5625rem',
    padding: '1.875rem 3rem 2.25rem',
    border: '0.125rem solid #013220',
    borderRadius: '1.25rem',
    [theme.breakpoints.down('sm')]: {
      padding: '1rem',
    },
  },
  container: {
    paddingTop: '1.875rem',
    background: '#121212',
  },
  description: {
    margin: 0,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.25rem',
    },
  },
  tCell: {
    fontSize: '1.5rem',
    fontWeight: 700,
    lineHeight: '1.75rem',
    textAlign: 'center',
    textTransform: 'uppercase',
    border: 0,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
      fontWeight: 500,
      padding: '0.5rem 0.5rem 0.5rem 0',
      lineHeight: '1.125',
    },
  },
  tCellRight: {
    paddingRight: '2rem',
    fontSize: '1.5rem',
    fontWeight: 700,
    lineHeight: '1.75rem',
    textAlign: 'right',
    textTransform: 'uppercase',
    border: 0,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
      padding: '0.5rem 0',
    },
  },
  linksWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'bottom',
    },
  },
  tcCollapse: {
    padding: 0,
    borderBottom: '0.125rem solid #013220',
  },
  collapse: {
    padding: '1.5625rem 1.25rem 2.125rem 0.375rem',
    [theme.breakpoints.down('sm')]: {
      padding: 0,
    },
    '& h5': {
      [theme.breakpoints.down('md')]: {
        fontSize: 20,
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: 16,
      },
    },
  },
  title: {
    marginBottom: '1.5rem',
    fontWeight: 700,
    textTransform: 'uppercase',
  },
  financialDataWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '1.375rem',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  stockWidgetWrapper: {
    width: 530,
    height: 290,
    mr: 2,
    [theme.breakpoints.down('lg')]: {
      width: 400,
      height: 250,
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
      height: 200,
      mb: 2,
      mr: 0,
    },
    [theme.breakpoints.down('sm')]: {
      width: 290,
      height: 200,
    },
  },
  fundamentalDataWrapper: {
    width: 447,
    height: 434,
    [theme.breakpoints.down('lg')]: {
      width: 380,
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
    [theme.breakpoints.down('sm')]: {
      width: 290,
    },
  },
  pagesBox: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '19.4rem',
    marginBottom: '1rem',
    [theme.breakpoints.down('sm')]: {
      width: '18.125rem',
    },
  },
  linksBox: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '21.7rem',
    marginBottom: '1rem',
    [theme.breakpoints.down('sm')]: {
      width: '18.125rem',
    },
  },
  theadRow: {
    borderBottom: '2px solid #013220',
  },
};

export default tableTwitterStyles;