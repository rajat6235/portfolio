import React, { useEffect, useRef , useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ScrollDown from '../../utilities/ScrollDown/ScrollDown.tsx';
import './carousal.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import slide1 from '../../assets/carousal/slide1.webp';
import slide2 from '../../assets/carousal/slide2.webp';
import slide3 from '../../assets/carousal/slide3.webp';

// Import images
const slides = [
	{
		src: slide1,
		alt: 'First slide',
	},
	{
		src: slide2,
		alt: 'Second slide',
	},
	{
		src: slide3,
		alt: 'Third slide',
	},
];

interface CustomCarouselProps {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const CustomCarousel: React.FC<CustomCarouselProps> = ({ loading, setLoading }) => {
	const loadedImagesRef = useRef<number>(0);
	const [isVisible, setIsVisible] = useState(true);
	const handleScroll = () => {
		const scrollPosition = window.scrollY;
		if (scrollPosition > 100) {
			setIsVisible(false);
		} else {
			setIsVisible(true);
		}
	};
	useEffect(() => {
		const startTime = Date.now();
		slides.forEach((slide) => {
			const img = new Image();
			img.src = slide.src;
			img.onload = () => {
				(loadedImagesRef.current as number) += 1;

				if ((loadedImagesRef.current as number) === slides.length) {
					const elapsedTime = Date.now() - startTime;
					const delay = Math.max(0, 250 - elapsedTime); // Calculate remaining time to reach 0.25 seconds

					setTimeout(() => {
						setLoading(false);
					}, delay);
				}
			};
		});
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [setLoading]);

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
				style={{ visibility: loading ? 'hidden' : 'visible' , position: 'fixed',height: '100vh' ,width: '100vw'}}>
				{slides.map((slide, index) => (
					<Carousel.Item key={index}>
						<img className='d-block custom-img' src={slide.src} alt={slide.alt} loading='lazy' />
					</Carousel.Item>
				))}
			</Carousel>

			{isVisible && <ScrollDown />}
		</div>
	);
};

export default CustomCarousel;