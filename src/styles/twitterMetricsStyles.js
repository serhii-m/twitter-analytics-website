import theme from './theme';

const twitterMetricsStyles = {
  root: {
    marginBottom: '1.25rem',
    padding: '3.125rem 3rem 2rem',
    border: '0.125rem solid #013220',
    borderRadius: '1.25rem',
    [theme.breakpoints.down('md')]: {
      padding: '1rem',
      '& h5': {
        fontSize: '1.25rem',
      },
    },
  },
  title: {
    fontWeight: 700,
    marginBottom: '1rem',
    textTransform: 'uppercase',
  },
  description: {
    marginBottom: '1rem',
  },
  stack: {
    width: '46.5rem',
    justifyContent: 'space-between',
    marginBottom: '1.25rem',
  },
  btn: {
    margin: "0!important",
    padding: "0!important",
    textTransform: "uppercase",
    display: "flex!important",
    height: "40px!important",

    "&:not(:last-child)": {
      marginRight: "2rem!important",
      [theme.breakpoints.down('sm')]: {
        margin: "0 0 1rem 0 !important",
      },
    },
    "& span": {
      height: "40px!important",
      lineHeight: "1.172!important",
      fontSize: "1.5rem!important",
      fontWeight: "700!important",
      color: "#ffffff4d",
      padding: "5px 1rem !important",
      border: "0.125rem solid #013220 !important",
      borderRadius: "1.25rem",
      transition: "all 250ms ease-in-out",
      [theme.breakpoints.down('md')]: {
        height: '34px !important',
        fontSize: '1.25rem !important',
      },
    },
    "&:hover span": {
      backgroundColor: "#90caf914 !important",
    },
    "&:focus span": {
      backgroundColor: "#90caf914 !important",
    },
  },
  radioGroup: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  radio: {
    display: "none",
    "&.Mui-checked + span": {
      color: "#FFF !important",
      backgroundColor: "#00CC6666!important",
      padding: "5px 1rem!important",
      height: "40px!important",
      fontSize: "1.5rem!important",
      lineHeight: "1.172!important",
      border: "2px solid #013220 !important",
      borderRadius: "1.25rem",
      [theme.breakpoints.down('md')]: {
        height: '34px !important',
        fontSize: '1.25rem !important',
      },
    },
  },
  author: {
    marginBottom: '1.25rem',
    borderBottom: '2px solid #013220',
  },
  metricsStack: {
    justifyContent: 'space-between',
    paddingRight: '2rem',
    marginBottom: '0.75rem',
    [theme.breakpoints.down('sm')]: {
      paddingRight: '0.5rem'
    },
  },
  avatarBox: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 0,
  },
  reply: {
    width: 46,
    height: 45,
    paddingRight: '0.25rem',
    [theme.breakpoints.down('sm')]: {
      width: 36,
      height: 36,
    },
  },
  retweet: {
    width: 60,
    height: 58,
    paddingRight: '0.25rem',
    [theme.breakpoints.down('sm')]: {
      width: 42,
      height: 42,
    },
  },
  like: {
    width: 53,
    height: 51,
    paddingRight: '0.25rem',
    [theme.breakpoints.down('sm')]: {
      width: 44,
      height: 38,
    },
  },
  count: {
    textAlign: 'center',
    paddingY: 'auto',
    fontWeight: 700,
    margin: 0,
  }
};

export default twitterMetricsStyles;