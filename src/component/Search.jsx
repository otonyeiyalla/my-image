import React, { Component } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { Input, InputAdornment } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import './componentStyles/Search.css';
import PropTypes from 'prop-types';

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
        }    
    }
    render() {
        const onChange = this.props.handleChange;
        
        return (
            <div className="the-search" aria-label = "Search for Wallpaper">
                
                        Hi ! <br /> Search for your next Wallpaper
                        
                    <Divider />

                    <Input
                        className='search-line'
                        id="search-all"
                        label="Search"
                        aria-label="Search dialog box"
                        //value={searchvalue}
                        onChange={onChange}
                        startAdornment={
                        <InputAdornment position="start" 
                        className="the-search"><SearchIcon />
                        </InputAdornment>}
                    />
                </div>
         );
    }
}

Search.propTypes = {
    onChange: PropTypes.func
}
export default Search;