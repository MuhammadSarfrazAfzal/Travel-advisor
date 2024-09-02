import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme();
const useStyles = makeStyles((theme) => ({
    box:{
      position:'absolute',
      left:770
    },
    search:{
      margin:8,
      padding:3,
      display:'flex',
      width:200,
      height:30,
      background:'silver',
      borderRadius:30
    },
    toolbar:{
      position:"sticky"
    }
  }));
export default useStyles