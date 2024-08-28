import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme();
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: "2px", minWidth: 120, marginBottom: '30px',
  },
  selectEmpty: {
    marginTop: "1px",
  },
  loading: {
    height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center',
  },
  container: {
    padding: '10px',
  },
  marginBottom: {
    marginBottom: '30px',
  },
  list: {
    height: '75vh', overflow: 'auto',
  }
  }));
export default useStyles