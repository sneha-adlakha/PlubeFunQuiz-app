import {makeStyles,createStyles,Theme} from "@material-ui/core";

export const homepageStyle=makeStyles((theme:Theme)=>
    createStyles({
        homecontainer:{
            padding:theme.spacing(2),
        },
    
        herocontainer:{
            marginTop:theme.spacing(4),
            position:"relative",

        },
        heroText:{
            fontSize:"5vw",
            top:"1.5vw",
            left:"10vw",
            width:"30%",
            textAlign:"center",
            fontWeight:theme.typography.fontWeightBold,
            color:theme.palette.type==="light"?"black":"orange",
            position:"absolute"
        },
        image:{
            width:"100%",
           
            
        },
        card:{
            maxwidth:"100%",

        }
    })
    );