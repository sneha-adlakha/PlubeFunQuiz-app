import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
export const navigationStyle = makeStyles((theme: Theme) =>
    createStyles({
        navContainer: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        }
    })
);
