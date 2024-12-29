// ImageModal.tsx
import React from 'react';
import Modal from 'react-modal';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageModal.css';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

interface ArrowProps {
	className?: string;
	style?: React.CSSProperties;
	onClick?: () => void;
}

function NextArrow(props: ArrowProps) {
	const { className, style, onClick } = props;
	return (
		<MdKeyboardArrowRight
			className={className}
			style={{ ...style, display: 'block', color: 'white' }}
			onClick={onClick}
		/>
	);
}

function PrevArrow(props: ArrowProps) {
	const { className, style, onClick } = props;
	return (
		<MdKeyboardArrowLeft
			className={className}
			style={{ ...style, display: 'block', color: 'white' }}
			onClick={onClick}
		/>
	);
}

interface ImageModalProps {
	isOpen: boolean;
	onRequestClose: () => void;
	images: string[];
	initialSlide: number;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onRequestClose, images, initialSlide }) => {
	const settings: Settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		adaptiveHeight: true,
	};

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			contentLabel='Modal'
			className={{
				base: 'modal-base',
				afterOpen: 'modal-base_after-open',
				beforeClose: 'modal-base_before-close',
			}}
			overlayClassName={{
				base: 'overlay-base',
				afterOpen: 'overlay-base_after-open',
				beforeClose: 'overlay-base_before-close',
			}}
			shouldCloseOnOverlayClick={false}
			// closeTimeoutMS={2000}
		>
			<div>
				<button className='closeButton' onClick={onRequestClose}>
					&times;
				</button>
			</div>
			<Slider {...settings} initialSlide={initialSlide}>
				{images.map((image, index) => (
					<div key={index} className='modal-image'>
						<img src={image} alt={`Project ${index + 1}`} className='images' />
					</div>
				))}
			</Slider>
		</Modal>
	);
};

export default ImageModal;