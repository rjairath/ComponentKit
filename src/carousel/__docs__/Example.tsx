import React from 'react';
import Carousel, { CarouselProps } from '../Carousel';


const Example: React.FC<CarouselProps> = ({
    imageList,
    height,
    width,
    autoPlay,
    transitionDuration
}) => {
    return (
        <div>
            <Carousel 
                imageList={imageList}
                height={height}
                width={width}
                autoPlay={autoPlay}
                transitionDuration={transitionDuration}
            />
        </div>
    )
}

export default Example