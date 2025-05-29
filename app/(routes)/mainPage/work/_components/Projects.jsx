'use client';

import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

const Projects = () => {
    const [popupData, setPopupData] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const containerRef = useRef(null);
    const mixerRef = useRef(null);
    const popupRef = useRef(null);
    const [activeFilter, setActiveFilter] = useState('all');

    const projects = [
        {
            id: 1,
            title: '💻 Login-Sign-up & Website',
            category: 'JavaScript',
            description: 'A simple Login and SignUp System with User Authentication with a home page design by yours truly.',
            tech: 'Node Js, Express Js & MongoDB',
            date: 'May 2025',
            view: 'https://winmobile.onrender.com',
            image: '/images/winmobile.jpg',
        },
        {
            id: 2,
            title: '📃 To do List App',
            category: 'Python',
            description: 'A simple To do list using Python as its back-end code and Flask to integrate front end features.',
            tech: 'HTML, CSS, Python, & Flask',
            date: 'May 2025',
            view: 'https://tasklistpy-production.up.railway.app/home',
            image: '/images/Todo.jpg',
        },
        {
            id: 3,
            title: '🧮 Calculator App',
            category: 'JavaScript',
            description: 'Another JS project that is just a simple calculator.',
            tech: 'HTML, CSS & JavaScript',
            date: 'May 2025',
            view: 'https://justinagm.github.io/Calculator/calculator.html',
            image: '/images/calculator.jpg',
        },
        {
            id: 4,
            title: '💭 Wordle Game (Python) ',
            category: 'Python',
            description: 'A wordle game that is usually created and play on terminals but change into a website view with Flask.',
            tech: 'HTML, CSS, Python, & Flask',
            date: 'May 2025',
            view: 'https://thecuisinewordle-production.up.railway.app/',
            image: '/images/cuisine.jpg',
        },
        {
            id: 5,
            title: '💬 Real-Time Chat App',
            category: 'JavaScript',
            description: 'A Real-time Chat app that stores user data, chat data and even pictures sent on the chat.',
            tech: 'React, Firebase, Cloudinary, and Zustand',
            date: 'May 2025',
            view: 'https://commschat.netlify.app',
            image: '/images/comms.jpg',
        },
        {
            id: 6,
            title: '💲 Finance Tracker',
            category: 'JavaScript',
            description: 'A Finance tracker that has a lot a features for user experience.',
            tech: 'React, Next.js, Tailwind CSS, Drizzle ORM, and Clerk',
            date: 'May 2025',
            view: 'https://finance-tracker-git-master-justin-alexis-machicas-projects.vercel.app/',
            image: '/images/FT.jpg',
        },
        {
            id: 7,
            title: '🏫 Web Design',
            category: 'Other',
            description: 'One of the requirements to finish my Bachelors degree and my role here was the UI/UX Designer.',
            tech: 'Google Website',
            date: 'June 2021',
            view: 'https://sites.google.com/view/thecache/home',
            image: '/images/cache.jpg',
        },
        {
            id: 8,
            title: '🎒 Online Course Application',
            category: 'Other',
            description: 'Also, one of the requirements to finish my Bachelors degree and my role here was the Content Manager.',
            tech: 'Ed App',
            date: 'September 2021',
            view: 'https://sites.google.com/view/thecache/home',
            image: '/images/EdApp.jpg',
        },
    ];

    useEffect(() => {
        const loadMixitup = async () => {
            const mixitup = (await import('mixitup')).default;
            if (containerRef.current) {
                const mixer = mixitup(containerRef.current, {
                    selectors: { target: '.mix' },
                    animation: { duration: 300 },
                });
                mixerRef.current = mixer;
            }
        };

        loadMixitup();

        return () => {
            if (mixerRef.current?.destroy) {
                mixerRef.current.destroy();
            }
        };
    }, []);

    useEffect(() => {
        // Lock body scroll when popup open
        if (isPopupOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        // Close popup on ESC key
        const handleEsc = (e) => {
            if (e.key === 'Escape') {
                setIsPopupOpen(false);
            }
        };

        if (isPopupOpen) {
            window.addEventListener('keydown', handleEsc);
        } else {
            window.removeEventListener('keydown', handleEsc);
        }

        return () => {
            window.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = '';
        };
    }, [isPopupOpen]);

    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
        if (mixerRef.current) {
            mixerRef.current.filter(filter === 'all' ? 'all' : `.${filter}`);
        }
    };

    const onOverlayClick = (e) => {
        if (popupRef.current && !popupRef.current.contains(e.target)) {
            setIsPopupOpen(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto w-full px-2 sm:px-4 mb-50">
            <div className="text-2xl p-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl text-slate-50 text-center text-shadow-lg p-2">
                    Personal Projects
                </h1>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6">
                {['all', 'JavaScript', 'Python', 'Other'].map((filter) => (
                    <button
                        key={filter}
                        onClick={() => handleFilterClick(filter)}
                        className={`cursor-pointer px-4 py-2 rounded text-sm sm:text-base ${activeFilter === filter
                            ? 'bg-cyan-950 text-slate-50'
                            : 'bg-cyan-100 text-black'
                            }`}
                    >
                        {filter.toUpperCase()}
                    </button>
                ))}
            </div>

            {/* Project Cards */}
            <div
                className="mix-container flex flex-wrap gap-4 justify-center"
                ref={containerRef}
            >
                {projects.map((proj) => (
                    <div
                        key={proj.id}
                        className={`mix ${proj.category} p-4 text-base sm:text-lg bg-cyan-200 text-slate-900 rounded shadow w-full max-w-[16rem] text-center cursor-pointer`}
                        onClick={() => {
                            setPopupData(proj);
                            setIsPopupOpen(true);
                        }}
                    >
                        {proj.image ? (
                            <img
                                src={proj.image}
                                alt={proj.title}
                                className="w-full h-40 sm:h-48 object-cover mb-2 rounded"
                            />
                        ) : (
                            <div className="w-full h-40 bg-gray-600 mb-2 rounded flex items-center justify-center text-gray-300">
                                No Image
                            </div>
                        )}
                        <h3>{proj.title}</h3>
                    </div>
                ))}
            </div>

            {/* Popup with React Portal */}
            {isPopupOpen && popupData && ReactDOM.createPortal(
                <div
                    className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[9999] px-4"
                    role="dialog"
                    aria-modal="true"
                    onClick={onOverlayClick}
                >
                    <div
                        ref={popupRef}
                        className="bg-slate-100 text-cyan-950 p-6 rounded shadow-lg w-full max-w-md max-h-screen overflow-y-auto"
                        onClick={(e) => e.stopPropagation()} // Prevent closing on clicking inside popup
                    >
                        {popupData.image && (
                            <img
                                src={popupData.image}
                                alt={popupData.title}
                                className="w-full h-48 object-cover rounded mb-4"
                            />
                        )}
                        <h2 className="text-lg sm:text-xl font-bold mb-2">✨{popupData.title}</h2>
                        <p className="text-sm text-cyan-700 font-bold md:mb-5 indent-8">🗓 {popupData.date}</p>
                        <p className="text-sm sm:text-base">▶{popupData.description}</p>
                        <p className="mt-2 text-sm text-gray-600">📖{popupData.tech}</p>
                        <a
                            href={popupData.view}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyan-800 underline block mt-4 hover:text-cyan-200 hover:bg-cyan-950 w-fit rounded-2xl p-2"
                        >
                            🔍Check out Project
                        </a>
                        <button
                            onClick={() => setIsPopupOpen(false)}
                            className="mt-4 px-4 py-2 bg-red-200 text-black rounded cursor-pointer hover:bg-red-500 hover:text-slate-100 w-full"
                        >
                            Close
                        </button>
                    </div>
                </div>,
                document.body
            )}
        </div>
    );
};

export default Projects;
