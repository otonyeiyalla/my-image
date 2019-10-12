import React, { Component } from 'react';
import ImageCard from './ImageCard';
import './componentStyles/ImageList.css'
import PropTypes from 'prop-types';

class ImageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        const imageData = this.props.images;
        return (
        <div className="grid-container" aria-label="Images in grid form">
            {imageData !== undefined ?
                imageData.map(data => (
                    ((data.height < data.width) ?
                        <div key={data.id} className="grid-item-landscape">
                            < ImageCard key={data.id}
                                image={data.urls.small}
                                name={data.user.name}
                                description={data.description}
                                alt_description={data.alt_description}
                                ig={data.user.instagram_username}
                                total={data.user.total_photos}
                                
                            />
                        </div>

                        : <div key={data.id} className="grid-item">
                            < ImageCard key={data.id}
                                image={data.urls.small}
                                name={data.user.name}
                                description={data.description}
                                alt_description={data.alt_description}
                                ig={data.user.instagram_username}
                                total={data.user.total_photos}
                            />
                        </div>)
                ))
                : ""}
        </div>);
    }
}
ImageList.propTypes = {
    
    imageData: PropTypes.arrayOf(
        PropTypes.object  
    )
}
export default ImageList;