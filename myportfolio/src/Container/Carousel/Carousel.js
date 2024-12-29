import React, { useEffect, useRef } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ScrollDown from '../../utilities/ScrollDown/ScrollDown.tsx';
import './carousal.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import images
const slides = [
	{
		src: require('../../assets/carousal/slide1.webp'),
		alt: 'First slide',
	},
	{
		src: require('../../assets/carousal/slide2.webp'),
		alt: 'Second slide',
	},
	{
		src: require('../../assets/carousal/slide3.webp'),
		alt: 'Third slide',
	},
];

const CustomCarousel = ({ loading, setLoading }) => {
	const loadedImagesRef = useRef(0);
	useEffect(() => {
		const startTime = Date.now();
		slides.forEach((slide) => {
			const img = new Image();
			img.src = slide.src;
			img.onload = () => {
				loadedImagesRef.current += 1;

				if (loadedImagesRef.current === slides.length) {
					const elapsedTime = Date.now() - startTime;
					const delay = Math.max(0, 250 - elapsedTime); // Calculate remaining time to reach 0.5 seconds

					setTimeout(() => {
						setLoading(false);
					}, delay);
				}
			};
		});
	}, []);

	return (
		<div id='home' className='carousel-container'>
			{loading && (
				<div className='loader-container'>
					<div className='loader'>
						<span>{`{`}</span>
						<span> {`}`}</span>
						<div className="loader-text">Loading...</div> 
					</div>
				</div>
			)}

			<Carousel
				controls={false}
				indicators
				interval={2500}
				pause={false}
				fade
				style={{ visibility: loading ? 'hidden' : 'visible' }}>
				{slides.map((slide, index) => (
					<Carousel.Item key={index}>
						<img className='d-block custom-img' src={slide.src} alt={slide.alt} loading='lazy' />
					</Carousel.Item>
				))}
			</Carousel>

			<ScrollDown />
		</div>
	);
};

export default CustomCarousel;
