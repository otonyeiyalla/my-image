import React, { Component } from 'react';

import { CardContent } from '@material-ui/core';
import { Menu, Grid, Typography } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import MenuItem from '@material-ui/core/MenuItem';

class ImageDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <React.Fragment>

                <CardContent>

                    <div>
                        <Tooltip title="options">
                            <IconButton aria-label="Settings"
                                aria-controls="long-menu"
                                aria-haspopup="true"
                                onClick={this.props.onClick}
                            >
                                <MoreVertIcon />


                            </IconButton>
                        </Tooltip>
                        <Menu
                            id="long-menu"
                            anchorEl={this.props.anchorEl}
                            keepMounted
                            open={this.props.open}
                            onClose={this.props.Close}

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
                            <MenuItem onClick={() => this.props.onToggle(true)}>Expand</MenuItem>
                            <MenuItem onClick={() => this.props.onToggle(false)}>Remove</MenuItem>
                        </Menu>
                    </div>


                    <br />
                    <Grid item md={"auto"}>
                        {this.props.isPickerVisible ?

                            <div>
                                <span>The Photographer: {this.props.name.toUpperCase()}</span><br />
                                <span>Instagram: {this.props.ig}</span><br />
                                <span>Total Number of Photos by Photographer: {this.props.total}</span>
                            </div>
                            :
                            <Typography variant="body2" component="div">
                                {((this.props.description === null) ? 
                                ((this.props.alt_description !== null) ?
                                this.props.alt_description.toUpperCase() :
                                "") 
                                : this.props.description.toUpperCase())}

                            </Typography>

                        }
                    </Grid>


                </CardContent>
            </React.Fragment>
        );
    }
}

export default ImageDetail;