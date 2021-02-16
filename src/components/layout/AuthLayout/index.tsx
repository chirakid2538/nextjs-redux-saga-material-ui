import React, { ReactChild } from 'react';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column'
    },
    container: {
        height: '100%',
        flexGrow: 1
    },
    image: {
        backgroundImage: `url(https://images.unsplash.com/photo-1508424757105-b6d5ad9329d0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1275&q=80)`,
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    logo: {
        margin: theme.spacing(1),
        width: '100%',
        maxWidth: '300px'
    }
}));


interface Props {
    children: ReactChild
}

const AuthLayout = ({ children }: Props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container className={classes.container}>
                <Hidden xsDown>
                    <Grid container item xs={false} sm={4} md={7} className={classes.image} />
                </Hidden>
                <Grid
                    container
                    item
                    xs={12}
                    sm={8}
                    md={5}
                    component={Paper}
                    elevation={6}
                    square
                    justify="center"
                    alignItems="center">
                    <div className={classes.paper}>{children}</div>
                </Grid>
            </Grid>
        </div>
    );
};
export default AuthLayout;
