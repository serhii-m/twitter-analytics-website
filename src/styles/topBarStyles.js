import theme from './theme';

const topBarStyles = {
  root: {
    background: 'linear-gradient(0deg, rgba(0, 204, 102, 0.2), rgba(0, 204, 102, 0.2)), #121212',
    height: 75,
    '& button': {
      [theme.breakpoints.down('sm')]: {
        marginRight: 0,
      },
    }
  },
  list: {
    position: 'relative',
    top: 75,
    width: 254,
    height: 'calc(100% - 75px)',
    color: '#fff',
    background: 'linear-gradient(0deg, rgba(0, 204, 102, 0.2), rgba(0, 204, 102, 0.2)), #121212',
  },
  listItem: {
    paddingLeft: '3.5rem',
    '&:hover, &:focus': {
      fontWeight: 700,
      backgroundColor: '#00CC6666',
    },
  },
  listItemText: {
    fontSize: '1.5rem',
    lineHeight: '1.75rem',
  },
};

export default topBarStyles;