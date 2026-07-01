export const projects = [
	{
		id: 1,
		name: "Verifish",
		slug: "verifish",
		image: "/images/verifish.png",
		description:
			"VeriFish is a mobile application that leverages computer vision to identify fish species commonly sold in Filipino wet markets and estimate their market price based on weight. Built with Flutter and Firebase, the application integrates a custom-trained YOLOv8 segmentation model through a Flask API to deliver accurate, real-time predictions while providing an intuitive user experience for fish vendors and consumers.",
		short_description:
			"An AI-powered Flutter application that identifies fish species and estimates their market price using a custom YOLOv8 segmentation model.",
		technologies: ["Flutter", "Dart", "Flask", "Python", "Firebase"],
		type: "Mobile Application",
		period: "May 2025 - Apr 2026",
		year: 2026,
		role: "Full-Stack Developer/Lead Developer",
		role_description:
			"Served as the lead developer, overseeing technical planning, system architecture, and technology selection throughout the project. Developed the Flutter application, integrated Firebase services, deployed the YOLOv8 model through a Flask API, and connected the AI inference pipeline with the mobile application.",
		project_type: "Group Project",
		sourcecode: [
			{
				id: 1,
				name: "Download APK",
				url: "https://drive.google.com/file/d/1CeIO-xfmzIql-EwAtaskDHSUjpktADpF/view?usp=sharing",
			},
		],
		featured_reverse: false,
		featured_project: true,
	},
	{
		id: 2,
		name: "EmeraldBank",
		slug: "emeraldbank",
		image: "/images/emeraldbank.png",
		description:
			"EmeraldBank is a mobile banking application simulation designed to demonstrate modern digital banking features through a secure and intuitive user experience. Built with Flutter and Firebase, the application includes user authentication, account management, transaction history, money transfers, and other core banking functionalities while following industry-inspired UI/UX and software development practices.",
		short_description:
			"A mobile banking application simulation built with Flutter and Firebase, showcasing modern digital banking features.",
		technologies: ["Flutter", "Dart", "Firebase"],
		type: "Mobile Banking Application",
		period: "Mar 2025 - May 2025",
		year: 2025,
		role: "Full-Stack Developer/Team Lead",
		role_description:
			"Served as the team lead and developer, overseeing project planning, sprint management, and technical decision-making throughout development. Designed the application's UI/UX and implemented core features including authentication, account management, and transaction workflows while collaborating with a five-member development team.",
		project_type: "Group Project",
		sourcecode: [
			{
				id: 1,
				name: "GitHub",
				url: "https://github.com/juicethyn/emeraldbank",
			},
		],
		featured_reverse: true,
		featured_project: true,
	},
	{
		id: 3,
		name: "TollTrack",
		slug: "tolltrack",
		image: "/images/no_preview.png",
		description:
			"TollTrack is a computer vision system developed to automate vehicle classification for toll gate analytics using real-time object detection. The project leverages YOLO and OpenCV to classify vehicles into Philippine toll categories, providing accurate traffic data that can support operational insights and future toll automation systems.",
		short_description:
			"A computer vision system that classifies vehicles in real time for toll gate analytics using YOLO and OpenCV.",
		technologies: ["Python", "OpenCV", "YOLOv8", "Roboflow"],
		type: "Computer Vision System",
		period: "Nov 2024 - Jan 2025",
		year: 2025,
		role: "Team Lead/Developer",
		role_description:
			"Served as the team lead and developer, overseeing project planning, model development, and technical implementation. Collected and labeled the training dataset, trained and evaluated the YOLO model, and integrated OpenCV to enable real-time vehicle detection and classification.",
		project_type: "Group Project",
		sourcecode: [
			{
				id: 1,
				name: "GitHub",
				url: "https://github.com/juicethyn/tolltrack",
			},
		],
		featured_reverse: true,
		featured_project: false,
	},
	{
		id: 4,
		name: "Internet Management System",
		slug: "ims",
		image: "/images/internet_management_system.png",
		description:
			"An Internet Cafe Management System developed with PHP and MySQL to streamline customer management, computer monitoring, and administrative operations. The project also served as a cybersecurity case study, providing a platform to explore SQL injection vulnerabilities, secure coding practices, and database security concepts.",
		short_description:
			"A PHP and MySQL Internet Cafe Management System developed to demonstrate business operations alongside cybersecurity concepts and secure database practices.",
		technologies: ["PHP", "MySQL"],
		type: "Web Application",
		period: "Mar 2025 - May 2025",
		year: 2025,
		role: "Backend Developer",
		role_description:
			"Primarily handled the backend development and database design, implementing the application's core business logic and data management. Collaborated with the team to integrate system features while supporting the project's cybersecurity objectives through secure backend and database implementation.",
		project_type: "Group Project",
		sourcecode: [
			{
				id: 1,
				name: "Unavailable",
				url: "",
			},
		],
		featured_reverse: false,
		featured_project: false,
	},
	{
		id: 5,
		name: "Grieybot",
		slug: "grieybot",
		image: "/images/no_preview.png",
		description:
			"GrieyBot is a personalized chatbot developed to assist high school alumni by providing localized and context-aware responses to school-related inquiries. The project focuses on improving information accessibility through an interactive conversational interface tailored to the school's community.",
		short_description:
			"A personalized chatbot that delivers localized responses to school-related inquiries for high school alumni.",
		technologies: ["Flask", "Python", "Ollama", "AI Studio"],
		type: "Chatbot Application",
		period: "Jan 2025 - Mar 2025",
		year: 2025,
		role: "Lead Developer",
		role_description:
			"Designed and developed the project independently, handling the chatbot's architecture, response logic, and user experience. Configured and optimized the chatbot to deliver accurate, context-aware responses for school-related questions.",
		project_type: "Solo Project",
		sourcecode: [
			{
				id: 1,
				name: "GitHub",
				url: "",
			},
		],
		featured_reverse: false,
		featured_project: false,
	},
	{
		id: 6,
		name: "ATM Simulation",
		slug: "atm-simulation",
		image: "/images/no_preview.png",
		description:
			"An ATM simulation built in C++ that replicates core banking operations such as user authentication, balance inquiry, deposits, withdrawals, and transaction management. The project uses a USB flash drive to emulate an ATM card by storing user account information, providing a practical demonstration of file handling, data structures, and system logic.",
		short_description:
			"A C++ ATM simulation that uses a USB flash drive as an ATM card to manage user accounts and banking transactions.",
		technologies: ["C++", "File Handling", "Data Structures", "Algorithms"],
		type: "ATM Simulation",
		period: "Dec 2023 - Jan 2024",
		year: 2024,
		role: "Solo Developer",
		role_description:
			"Designed and developed the project independently, implementing the ATM workflow, transaction logic, and file-based data management in C++. Built the system to simulate ATM card functionality using a USB flash drive while applying data structures, algorithms, and object-oriented programming principles.",
		project_type: "Solo Project",
		sourcecode: [
			{
				id: 1,
				name: "GitHub",
				url: "https://github.com/juicethyn/ATM-Simulation-Project",
			},
		],
		featured_reverse: false,
		featured_project: false,
	},
	{
		id: 7,
		name: "Juan the Man",
		slug: "juan-the-man",
		image: "/images/juan_the_man.png",
		description:
			"Juan-the-Man is a high-fidelity mobile application prototype designed to simplify the process of hiring trusted home repair and maintenance professionals. Created in Figma, the project focuses on delivering an intuitive user experience that enables users to browse services, connect with qualified workers, and manage service requests through a modern and accessible interface.",
		short_description:
			"A high-fidelity Figma prototype that streamlines the process of hiring home repair and maintenance professionals.",
		technologies: ["Figma", "UI/UX Design", "Prototyping"],
		type: "Mobile Application Prototype",
		period: "Jan 2024 - Jun 2024",
		year: 2024,
		role: "UI/UX Designer",
		role_description:
			"Contributed to the UI/UX design and prototyping process, creating user-centered interfaces and interactive user flows in Figma. Collaborated with the team to refine the application's visual design, usability, and overall user experience.",
		project_type: "Group Project",
		sourcecode: [
			{
				id: 1,
				name: "Figma",
				url: "https://www.figma.com/proto/xE3tedbGCrCQMFbxno5Epy/-Main--Juan-the-Man?node-id=338-1026&p=f&t=Spx9Yn0WfLDffoWH-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=338%3A1026&show-proto-sidebar=1",
			},
		],
		featured_reverse: false,
		featured_project: true,
	},
	{
		id: 8,
		name: "Huffman",
		slug: "huffman",
		image: "/images/no_preview.png",
		description:
			"A file compression and decompression application built in C++ that implements the Huffman Coding algorithm to reduce file size through lossless data compression. The project demonstrates the practical application of binary trees, priority queues, and file handling while preserving the original data during decompression.",
		short_description:
			"A C++ application that performs lossless file compression and decompression using the Huffman Coding algorithm.",
		technologies: ["C++"],
		type: "Huffman Compression/Decompression",
		period: "Jan 2024 - Mar 2024",
		year: 2024,
		role: "Solo Developer",
		role_description:
			"Designed and developed the project independently, implementing the Huffman Coding algorithm, binary tree construction, and file compression and decompression logic. Applied data structures and algorithms principles to create an efficient lossless compression system with accurate data reconstruction.",
		project_type: "Solo Project",
		sourcecode: [
			{
				id: 1,
				name: "GitHub",
				url: "https://github.com/juicethyn/Huffman-Compression-and-Decompression",
			},
		],
		featured_reverse: false,
		featured_project: false,
	},
	{
		id: 9,
		name: "Minesweeper",
		slug: "minesweeper",
		image: "/images/no_preview.png",
		description:
			"A console-based implementation of the classic Minesweeper game developed in C. The project recreates the core gameplay mechanics, including mine generation, tile revealing, adjacent mine detection, and win/loss conditions while reinforcing problem-solving and algorithmic thinking.",
		short_description:
			"A console-based Minesweeper game built in C that recreates the classic gameplay experience.",
		technologies: ["C"],
		type: "Mini Game",
		period: "Nov 2023 - Dec 2023",
		year: 2023,
		role: "Solo Developer",
		role_description:
			"Designed and developed the project independently, implementing the game logic, board generation, user input handling, and win/loss detection. Applied fundamental programming concepts, control structures, and algorithmic problem-solving to recreate the classic game.",
		project_type: "Solo Project",
		sourcecode: [
			{
				id: 1,
				name: "GitHub",
				url: "https://github.com/juicethyn/Minesweeper",
			},
		],
		featured_reverse: false,
		featured_project: false,
	},
];

export default function getProjects() {
	return projects;
}

export async function getProjectBySlug(slug: string) {
	return projects.find((project) => project.slug === slug);
}

export async function getProjectNavigation(slug: string) {
	const projects = await getProjects();

	const index = projects.findIndex((project) => project.slug === slug);

	if (index === -1) {
		return null;
	}

	return {
		prev: projects[index - 1] || null,
		next: projects[index + 1] || null,
	};
}
