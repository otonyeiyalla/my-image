import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia } from '@material-ui/core';
import './componentStyles/ImageCard.css';
import ImageDetail from './ImageDetails';

const useStyles = makeStyles({
    card: {
        //minWidth: 175,
        //maxWidth: "100%",
        overflow: 'hidden',
        height: 'fit-content',
        paddingBottom: 'inherit'
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
        //height: '56.25%',
        height: 'auto',
        width: 'auto'
        //paddingTop: '56.25%', // 16:9
        //objectFit: "none"
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
                //className={classes.media}
                className="card-layout"
                component="img"
                image={image}
                title={alt_description}
            />
            <ImageDetail
            onToggle = {handleToggle}
            onClose = {handleClose}
            onClick = {handleClick}
            anchorEl = {anchorEl}
            open ={open}
            isPickerVisible={isPickerVisible}
            description={description}
            alt_description={alt_description}
            name={name}
            ig={ig}
            total={total}
            />

        </Card>
    );

}