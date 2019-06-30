import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Drawer, AppBar, Toolbar, List, CssBaseline, Grid } from '@material-ui/core';
import { Typography, Divider, IconButton, ListItem, ListItemIcon } from '@material-ui/core';
import { ListItemText, Input, InputAdornment } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SearchIcon from '@material-ui/icons/Search';
import ImageCard from './ImageCard';
//import Dashboard from './Dashboard';
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        //display: 'flex',
        flexGrow: 1,
    },
    item: {
        width: '50%',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        alignItems: 'center',


    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

export default function Welcome({ onChange, theImage }) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    function handleDrawerOpen() {
        setOpen(true);
    }

    function handleDrawerClose() {
        setOpen(false);
    }

    if ((theImage.length !== 0 && theImage.constructor !== Object)) {
        console.log('the ', theImage[0].height)
        var img = theImage

        /* var img = theImage[0].urls.regular
        var des = theImage[0].description
        var name = theImage[0].user.name
        var alt_description = theImage[0].alt_description
        var ig = theImage[0].user.instagram_username
        var total = theImage[0].user.total_photos */
    }

    return (
       
            <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography align="center" variant="h4" >
                        The Wallpaper Guru
          </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
                open={open}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>

                    <ListItem button >
                        <ListItemIcon >
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary='Dashboard' />
                    </ListItem>

                </List>
                <Divider />
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <div>
                    <Typography variant="overline">
                        Hi ! <br /> Search for your next Wallpaper
                        </Typography>
                    <Divider />




                    <Input
                        id="search-all"
                        label="Search"
                        //value={searchvalue}
                        onChange={onChange}
                        startAdornment={<InputAdornment position="start"><SearchIcon /></InputAdornment>}
                    />


                </div>
                <br/>
                <div>
                    <Grid container className={classes.root} spacing={2}>
                        {img !== undefined ?
                            img.map(data => (

                                ((data.height < data.width) ?
                                    <Grid className={classes.item} key={data.id} item>

                                        < ImageCard key={data.id}
                                            image={data.urls.regular}
                                            name={data.user.name}
                                            description={data.description}
                                            alt_description={data.alt_description}
                                            ig={data.user.instagram_username}
                                            total={data.user.total_photos}
                                        />
                                    </Grid> : '')




                            ))

                            : ""}
                    </Grid>
                </div>
                {/* <Route path="/dashboard" component={Dashboard} /> */}
            </main>
        </div>
       
        
    );
}