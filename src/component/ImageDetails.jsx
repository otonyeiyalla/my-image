import React, { Component } from 'react';

import { CardContent } from '@material-ui/core';
import { Menu, Grid, Typography } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';

class ImageDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const {
            name, description, 
            alt_description, ig, 
            total, onClick, anchorEl, 
            onToggle, open, onClose, 
            isPickerVisible } = this.props;
        return (
            <div data-test="ImgDetailComponent">
                <CardContent>
                    <div>
                        <Tooltip title="options">
                            <IconButton aria-label="Settings"
                                aria-controls="long-menu"
                                aria-haspopup="true"
                                onClick={onClick}
                            >
                                <MoreVertIcon />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            id="long-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={open}
                            onClose={onClose}

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
                            <MenuItem onClick={() => onToggle(true)}>Expand</MenuItem>
                            <MenuItem onClick={() => onToggle(false)}>Remove</MenuItem>
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
                                {((description === null) ? 
                                ((alt_description !== null) ?
                                alt_description.toUpperCase() :
                                "") 
                                : description.toUpperCase())}
                            </Typography>
                        }
                    </Grid>


                </CardContent>
            </div>
        );
    }
}

export default ImageDetail;

ImageDetail.propTypes = {
    description: PropTypes.string,
    alt_description: PropTypes.string,
    name: PropTypes.string,
    ig: PropTypes.string,
    total: PropTypes.number,
    anchorEl: PropTypes.any,
    onToggle: PropTypes.func,
    open: PropTypes.bool,
    onClose: PropTypes.func,
    isPickerVisible: PropTypes.bool
}