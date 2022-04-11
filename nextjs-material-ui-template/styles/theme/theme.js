import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#525771',
    },
    secondary: {
      main: '#E57373',
    },
  },
  typography: {
    tab: {
      fontFamily: 'Raleway',
      textTransform: 'none',
      color: 'white',
    
    },
    h3: {
      fontWeight: 600,
    },
  },
});

export default lightTheme;
