import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    mode: 'dark',
    text: {
      primary: '#fff',
    },
    background: {
      default: '#121212',
      paper: '#121212',
    }
  },
  typography: {
    h5: {
      lineHeight: 1.1667,
    }
  },
  zIndex: {
    appBar: 1300,
  },
});

export default theme;