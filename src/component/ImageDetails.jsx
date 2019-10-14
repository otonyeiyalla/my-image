import React, { Component } from 'react';

import { CardContent } from '@material-ui/core';
import { Menu } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import './componentStyles/ImageDetails.css';
import Chart from './Chart';

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
            isPickerVisible, likes,
            collections
        } = this.props;
        return (
            <div data-test="ImgDetailComponent">
                <CardContent className="detailContainer">
                    <div>
                        <Tooltip title="options">
                            <IconButton aria-label="button"
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
                            role="button"

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
                    
                    <div>
                        {isPickerVisible ?

                            <Chart collections={collections}
                                    likes={likes}
                                    total={total}
                            />
                            
                            :
                            <div>
                                <span aria-label = "The Photographer name"><b>
                                    The Photographer:</b> {name.toUpperCase()}
                                </span><br/>
                                <span aria-label = "Instagram handle"><b>
                                    Instagram:</b> {ig}
                                </span><br/>
                                <span aria-label = "Total number of photos by photographer"><b>
                                    Total Number of Photos by Photographer:</b> {total}
                                </span><br/>
                                <span aria-label = "Description"><b>Description:</b>
                                {((description === null) ? 
                                ((alt_description !== null) ?
                                alt_description.toUpperCase() :
                                "") 
                                : description.toUpperCase())}
                                </span>
                            </div>
                        }
                    </div>


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