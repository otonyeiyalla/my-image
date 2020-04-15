import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Search from './Search';
import ImageList from './ImageList';
import './componentStyles/Header.css'
class Header extends Component {
    constructor(props) {
        super(props)
        this.state ={}  
    }
    render() { 
        const {onChange, theImage} = this.props
        //const theImage = this.props.theImage || []
        if ((theImage.length !== 0 && theImage.constructor !== Object)) {
            var img = theImage
        }
        return (
            <div data-test="headerComponent">
                <div className ="subheader">
                    <div className="Header">
                        <h1>Welcome to the Wallpaper Gurus</h1>
                    </div>
                    <Search handleChange={onChange} />
                </div>
                
                
                <br />
                <ImageList images={img}
                 />
            
            </div>
        );
    }
}
Header.propTypes = {
    onChange: PropTypes.func,
    theImage: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ])
}
export default Header;
