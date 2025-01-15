import React from 'react';
import Typewriter from 'typewriter-effect';
import './TitleMessage.css';
import ScrollService from '../../utilities/ScrollService.ts';

const TitleMessage: React.FC = () => (
	<div className='title-message'>
		<div
			className='profile-details'
			style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
			<div className='colz'>
				<div className='colz-icon'>
					<a href='https://www.linkedin.com/in/rajat6235/'>
						<i title='Linkedin' className='fa fa-linkedin'></i>
					</a>
					<a href='https://github.com/rajat6235'>
						<i title='Github' className='fa fa-github'></i>
					</a>
					<a href='tel:7837733549'>
						<i title='Phone' className='fa fa-phone'></i>
					</a>
				</div>
			</div>
			<div className='profile-details-name'>
				<span className='primary-text'>
					Hello, I'm <span className='highlighted-text'>Rajat Gupta</span>
				</span>
			</div>
			<div className='profile-details-role'>
				<span className='primary-text'>
					<h1>
						<Typewriter
							options={{
								strings: ['UI/UX Specialist', 'Front End Pro ➬ ', 'React Developer', 'Tech Savvy'],
								autoStart: true,
								loop: true,
								delay: 50,
							}}
						/>
					</h1>
					<div className='profile-role-tagline'>
						Experienced in creating elegant and efficient frontend solutions with enhanced
						functionality for better user interaction.
					</div>
				</span>
			</div>
			<div className='profile-options'>
				<div className='hire-btn' onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
					<svg>
						<rect x='5' y='5' rx='25' fill='#1f2235' stroke='#FFF' width='150' height='50'></rect>
            <text className='default-text' x='50%' y='50%' dominantBaseline='middle' textAnchor='middle'>
							Hire Me
						</text>
						<text className='hover-text' x='50%' y='50%' dominantBaseline='middle' textAnchor='middle'>
							Let's Connect
						</text>
					</svg>
				</div>
				<a
					href='RajatGupta_FrontEnd_Developer_Resume.pdf'
					download='RajatGupta_FrontEnd_Developer_Resume.pdf'
					className='buttons-container'>
					<button className=' button-arounder'>Download CV</button>
				</a>
			</div>
		</div>
	</div>
);

export default TitleMessage;
