import { createMuiTheme } from '@material-ui/core/styles';
import {grey, amber} from '@material-ui/core/colors';


export const Primarytheme = createMuiTheme({
  palette: {
    type:"light",
    primary: amber,
    secondary:  grey,
  },
});
export const Secondarytheme = createMuiTheme({
    palette: {
      type:"dark",
      primary: grey,
      secondary: amber,
    },
  });