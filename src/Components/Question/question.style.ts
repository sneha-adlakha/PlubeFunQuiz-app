import {makeStyles,createStyles,Theme} from "@material-ui/core";
export const useStyles=makeStyles((theme:Theme)=>
    createStyles({
        question:{
            marginTop:theme.spacing(1),
        },

    })
);
