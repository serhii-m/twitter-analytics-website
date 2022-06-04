import theme from './theme';

const timeFrameStyles = {
  root: {
    marginBottom: "1.25rem",
    padding: "2rem",
    mx: "auto",
    maxWidth: "40rem",
    minHeight: "10.5rem",
    border: "0.25rem solid #013220",
    borderRadius: "1.25rem",
    [theme.breakpoints.down('sm')]: {
      padding: '1rem',
    },
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
  question: {
    marginBottom: "1.5rem",
    fontWeight: 700,
    textAlign: "center",
    textTransform: "uppercase",
    [theme.breakpoints.down('md')]: {
      fontSize: '1.25rem',
    },
  },
  stack: {
    display: "flex",
    justifyContent: "space-evenly !important",
  },
  radioGroup: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  radio: {
    display: "none",
    "&.Mui-checked + span": {
      color: "#FFF !important",
      backgroundColor: "#00CC6666 !important",
      padding: "5px 1rem !important",
      height: "40px !important",
      fontSize: "1.5rem !important",
      lineHeight: "1.172 !important",
      border: "2px solid #013220 !important",
      borderRadius: "1.25rem",
      [theme.breakpoints.down('md')]: {
        height: '34px !important',
        fontSize: '1.25rem !important',
      },
    },
  },
};

export default timeFrameStyles;
