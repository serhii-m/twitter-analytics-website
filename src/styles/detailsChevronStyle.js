import theme from './theme';

const detailsChevronStyle = {
  width: '4rem',
  height: '2.63rem',
  border: '0.125rem solid #013220',
  borderRadius: '1.25rem',
  '&:hover': {
    border: '0.125rem solid #013220 !important',
  },
  '&:focus': {
    color: '#fff !important',
    border: '0.125rem solid transparent !important',
    backgroundColor: '#00CC6666',
  },
  [theme.breakpoints.down('sm')]: {
    height: '2.25rem',
  },
};

export default detailsChevronStyle;