import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia } from '@material-ui/core';
import { Menu, Grid, Typography } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles({
    card: {
        minWidth: 175,
        //maxWidth: "100%",
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    colorBox: {
        padding: 10,
        textAlign: "center",
        color: "white"
    },
    media: {
        height: '56.25%'
        //paddingTop: '56.25%', // 16:9
    },
});

export default function ImageCard({ image, description, alt_description, name, ig, total }) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [isPickerVisible, setToggleState] = React.useState(false);

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        //const selected = (("Expand" === options[index]) ? "Expand" : ("Remove" === options[index]) ? "Remove" : "");
        //console.log("The value ", selected);

        setAnchorEl(null);
    }



    function handleToggle(isPickerVisibleValue) {
        setToggleState(isPickerVisibleValue)
        setAnchorEl(null);
    }
    //console.log("the url ", raw)
    return (

        <Card className={classes.card}>

            <CardMedia
                className={classes.media}
                component="img"
                image={image}
                title={alt_description}
            />
            <CardContent>

                <div>
                    <Tooltip title="options">
                        <IconButton aria-label="Settings"
                            aria-controls="long-menu"
                            aria-haspopup="true"
                            onClick={handleClick}
                        >
                            <MoreVertIcon />


                        </IconButton>
                    </Tooltip>
                    <Menu
                        id="long-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={open}
                        onClose={handleClose}

                        getContentAnchorEl={null}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                    >
                        <MenuItem onClick={() => handleToggle(true)}>Expand</MenuItem>
                        <MenuItem onClick={() => handleToggle(false)}>Remove</MenuItem>
                    </Menu>
                </div>


                <br />
                <Grid item md={"auto"}>
                    {isPickerVisible ?

                        <div>
                            <span>The Photographer: {name.toUpperCase()}</span><br />
                            <span>Instagram: {ig}</span><br />
                            <span>Total Number of Photos by Photographer: {total}</span>
                        </div>
                        :
                        <Typography variant="body2" component="div">
                            {((description === null)? "": description.toUpperCase())}

                        </Typography>

                    }
                </Grid>


            </CardContent>
        </Card>
    );

}