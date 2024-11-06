import React, { useEffect, useRef, useState } from 'react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    placeholder: string;
    root?: Element | null;
    rootMargin?: string;
    imageStyles?: {[key: string]: string | number};
}

const LazyImage: React.FC<LazyImageProps> = ({
    src,
    placeholder,
    root,
    rootMargin = "0px",
    alt = "",
    imageStyles = {},
    ...props
}) => {
    const [inView, setInView] = useState(false);
    const imgRef = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					setInView(true);
					observer.disconnect();
				}
			},
			{
				root,
				rootMargin
			}
		);

		if (imgRef.current) {
			observer.observe(imgRef.current);
		}

		return () => observer.disconnect();
	}, [root]);

    return (
        <img
            ref={imgRef}
            src={inView ? src : placeholder}
            alt={alt}
            style={imageStyles}
            {...props}
        />
    )
}

export default LazyImage