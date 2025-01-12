import {
	troveImages,
	ektamartImages,
	jayTvImages,
	taskManagementImages,
	smartleadImages,
} from '../../assets/projects';
import { ProjectData } from '../../utilities/interfaces';
export const projectData: ProjectData = {
  smartlead: {
		title: 'SmartLead',
		images: [
			smartleadImages.smartlead1,
			smartleadImages.smartlead2,
			smartleadImages.smartlead3,
			smartleadImages.smartlead4,
			smartleadImages.smartlead5,
		],
		description:
			'Smartlead is a cold email outreach platform that enhances email deliverability and automates marketing campaigns. It offers features like unlimited mailboxes, email warmups, a unified inbox, and APIs for multi-channel outreach. The platform also provides free tools for email verification, deliverability checks (SPF, DKIM, DMARC ,etc), and content enhancement to improve inbox placement and engagement.',
		responsibilities: [
			{
				title: 'Development of Free Tools',
				description:
					'Single-handedly created essential free tools for Smartlead, including DKIM, SPF,DMARC verification, etc as well as email content enhancements like grammar and subject line generators, using Nuxt.js and Vue3.',
			},
			{
				title: 'Email Deliverability',
				description:
					'Worked on a new email deliverability tool front end, now used by thousands of customers. The tool tests campaign inbox placement, provides actionable insights, and helps users improve deliverability, optimize campaigns, and avoid spam filters, leading to better performance',
			},
			{
				title: 'Proactive Communication',
				description:
					"As a full-time remote team member, I maintained regular communication with colleagues across different time zones. I actively participated in team discussions, provided updates, addressed concerns, and ensured alignment on goals to drive the success of the SaaS app.",
			},
			{
				title: 'Maintenance & Improvements',
				description:
					'Addressed bug fixes, implemented client requirements, and enhanced features for email verification and deliverability tools, ensuring compliance with industry standards and optimal performance.',
			},
		],
	},
	task: {
		title: 'Task Management App',
		images: [
			taskManagementImages.task1,
			taskManagementImages.task2,
			taskManagementImages.task3,
			taskManagementImages.task4,
			taskManagementImages.task5,
		],
		description:
			'The Task Management application streamlines task distribution. Admins create, assign, update, and delete tasks, tracking employee completion times through a time tracker. Employees submit files, and admins manage employee details. Intake team members assign tasks and monitor completion times for efficient coordination.',
		responsibilities: [
			{
				title: 'Full Stack Development',
				description:
					'Developed the entire application, managing both the React.js frontend and backend using Firebase Cloud. Utilized Node.js for Firebase Admin, ensuring a seamless and integrated system.',
			},
			{
				title: 'System Architecture',
				description:
					'Architected the system design, implementing best practices for scalability, performance, and security, resulting in a robust application infrastructure.',
			},
			{
				title: 'Client Interaction and Requirement Analysis',
				description:
					'Personally engaged with the client to understand their needs and conducted a comprehensive analysis, translating requirements into a user-friendly application with intuitive features and functionalities.',
			},
			{
				title: 'Quality Assurance',
				description:
					'Conducted thorough testing and debugging to ensure a high-quality, error-free application, providing a seamless experience for users.',
			},
			{
				title: 'Deployment and Maintenance',
				description:
					'Led the deployment process on the Ubuntu server, ensuring a smooth transition to production. Additionally, actively handled ongoing maintenance tasks for optimal system performance.',
			},
		],
	},
	jayTv: {
		title: 'JayTv Admin Panel',
		images: [
			jayTvImages.jayTv1,
			jayTvImages.jayTv2,
			jayTvImages.jayTv3,
			jayTvImages.jayTv4,
			jayTvImages.jayTv5,
		],
		description:
			'JayTV, strategically broadcasted across store outlets on Android TVs, required an efficient admin solution. The intuitive admin panel serves as a hub for administrators to access crucial information about diverse locations, allowing seamless monitoring of videos, content uploads, playback control, and location history review.',
		responsibilities: [
			{
				title: 'Online History Feature',
				description:
					'Implemented functionality for users to view the online history of a location. Created backend APIs and developed a frontend graph to visualize online history.',
			},
			{
				title: 'Playlist Management',
				description:
					'Implemented functionality for playing playlists at multiple locations, creating default playlists, uploading advertisement videos, and uploading exclusive videos. Executed backend API changes and corresponding frontend modifications.',
			},
			{
				title: 'API Alignment',
				description:
					'Made changes in the API structure to meet the requirements of the Android TV frontend.',
			},
			{
				title: 'Deployment',
				description:
					'Managed the deployment of the project on an Ubuntu server, including regular updates and changes.',
			},
			{
				title: 'Bug Fixes and Code Refactoring',
				description:
					'Effectively addressed bugs and conducted strategic code refactoring to optimize system efficiency and maintainability.',
			},
		],
	},
  ektaMart: {
		title: 'EktaMart',
		images: [
			ektamartImages.ektaMart1,
			ektamartImages.ektaMart2,
			ektamartImages.ektaMart3,
			ektamartImages.ektaMart4,
			ektamartImages.ektaMart5,
		],
		description:
			'EktaMart is an e-commerce platform wherein vendors can list their products through a dedicated vendor portal. The administrative portal oversees the management and regulation of all participating vendors.',
		responsibilities: [
			{
				title: 'Codebase Migration',
				description:
					'Successfully migrated the client portal code from React to Next.js 13.5 using the app router.',
			},
			{
				title: 'Feature Enhancement',
				description:
					'Implemented new features and functionalities to align with client requirements.',
			},
			{
				title: 'UI Implementation',
				description: 'Executed UI changes to enhance the overall user experience.',
			},
			{
				title: 'Bug Fixes and Code Refactoring',
				description:
					'Effectively addressed bugs and conducted strategic code refactoring to optimize system efficiency and maintainability.',
			},
			{
				title: 'Deployment and Client Interaction',
				description:
					'Spearheaded the deployment process, ensuring a seamless transition of the application, while actively interacting with clients to understand their needs and align with project goals.',
			},
		],
	},
	trove: {
		title: 'Tr0ve',
		images: [
			troveImages.img1,
			troveImages.img2,
			troveImages.img3,
			troveImages.img4,
			troveImages.img5,
			troveImages.img6,
			troveImages.img7,
		],
		description:
			'The NFT Portfolio and Search project encompassed the creation of a comprehensive web application designed to empower users in managing their NFT investments across diverse blockchain platforms.',
		responsibilities: [
			{
				title: 'Portfolio section',
				description:
					'Developed a pivotal dynamic portfolio displaying NFT asset values across blockchains, aligning UI closely with client designs using React and Recharts.',
			},
			{
				title: 'Search Page Development',
				description:
					'Executed search page development per new designs, optimizing performance for efficient asset searches and enhancing overall system responsiveness.',
			},
			{
				title: 'UI and Functional Overhaul',
				description: 'Revamped sections for a cohesive and streamlined user experience.',
			},
			{
				title: 'Blockchain Integration',
				description:
					'Integrated technologies like Solana and VeVe, broadening platform compatibility.',
			},
			{
				title: 'Bug Fixes, Code Refactoring, Deployment, and Client Interaction',
				description:
					'Addressed bugs, conducted code refactoring to enhance system efficiency and maintainability, spearheaded the deployment process, and actively interacted with clients for a comprehensive understanding of their needs and project alignment.',
			},
		],
	},

};
