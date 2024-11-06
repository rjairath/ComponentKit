import { useEffect, useState } from 'react'

// Just manipulate the current index and return it
// This is the controller and model as well, will add the autoPlay functionality later
export const useCarousel = (imageList: string[], autoPlay?: boolean, transitionDuration?: number) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if(!autoPlay) return;

        let intervalId = setInterval(() => {
            nextImage();
        }, transitionDuration);

        return () => {
            clearInterval(intervalId);
        }
    }, [autoPlay, transitionDuration]);

    const nextImage = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);
	};

	const prevImage = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? imageList.length - 1 : prevIndex - 1
		);
	};

    const showImage = (index: number) => {
        setCurrentIndex(index);
    }

    return {
        currentIndex,
        nextImage,
        prevImage,
        showImage
    }
};