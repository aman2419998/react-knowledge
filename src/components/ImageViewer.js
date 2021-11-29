import React from 'react';
import ImageCard from './ImageCard';
import './ImageViewer.css';

const ImageViewer = ( props ) => {

    const { images } = props;

    const view = images.map( ( imageData ) => <ImageCard key={ imageData.id } { ...imageData } /> )

    return (
        <div className="image-viewer">
            { view }
        </div>
    )
}

export default ImageViewer
