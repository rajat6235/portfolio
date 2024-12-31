import React from 'react';
import ScreenHeading from '../../utilities/ScreenHeadings/ScreenHeading.tsx';
import ScrollService from '../../utilities/ScrollService.ts';
import Animations from '../../utilities/Animations.ts';
import './AboutMe.css';
import Tech from '../TechIcons/Tech.tsx';

interface AboutMeProps {
	id: string;
}

const AboutMe: React.FC<AboutMeProps> = (props) => {
	const fadeInScreenHandler = (screen: { fadeInScreen: string }) => {
		if (screen.fadeInScreen !== props.id) return;
		Animations.animations.fadeInScreen(props.id);
	};

	const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

	React.useEffect(() => {
		return () => {
			fadeInSubscription.unsubscribe();
		};
	}, [fadeInSubscription]);

	const SCREEN_CONSTANTS = {
		description:
			'With a track record of successful projects, I bring a wealth of experience and reliability to the table. My commitment to excellence and attention to detail ensure that every application is built to the highest standards. I am dedicated to delivering solutions that are robust, scalable, and tailored to meet the unique needs of each client',
		highlights: {
			bullets: [
				'User Experience Focus',
				'Quality Assurance',
				'Continuous Learning',
				'Effective Client Communication',
				'Collaborative Spirit',
			],
			heading: 'Here are a Few Highlights:',
		},
	};

	const renderHighlight = () => {
		return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
			<div className='highlight' key={i}>
				<div className='highlight-blob'></div>
				<span>{value}</span>
			</div>
		));
	};

	return (
		<div className='about-me-container screen-container fade-in' id={props.id || ''}>
			<div className='about-me-parent'>
				<ScreenHeading title={'About Me'} subHeading={'Why Choose Me?'} />
				<div className='about-me-card'>
					<div className='about-me-details'>
						<span className='about-me-description'>{SCREEN_CONSTANTS.description}</span>
						<div className='about-me-highlights'>
							<div className='highlight-heading'>
								<span>{SCREEN_CONSTANTS.highlights.heading}</span>
							</div>
							{renderHighlight()}
						</div>
						<div className='about-me-options'>
							<button
								className='btn primary-btn'
								onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
								Hire Me
							</button>
							<a href='RajatGuptaResume2022.pdf' download='RajatGuptaResume2022.pdf'>
								<button className='btn highlighted-btn'>Download CV</button>
							</a>
						</div>
					</div>
					<Tech idName='about-me' />
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
