'use client'
import React, { useEffect, useRef, useState } from "react";

function Cards() {
    const [popupData, setPopupData] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const containerRef = useRef(null);
    const mixerRef = useRef(null);

    const projects = [
        {
            id: 1,
            category: "development",
            title: '✨ Website Development',
            description: 'Create a Full-Stack Website.',
            tech: 'NEXT JS, Tailwind CSS, VITE, Material UI & TypeScript',
            image: '/images/winmobile.jpg',
            price: 'Can be Negotiated',
            view: 'mailto:justin.a.g.machica@gmail.com'
        },
        {
            id: 2,
            category: "design",
            title: '✨ Web Design',
            description: 'Design Websites or add creativity and responsiveness to existing projects.',
            tech: 'Figma, CSS, Canva, Photoshop & Sketch',
            image: '/images/FT.jpg',
            price: 'Can be Negotiated',
            view: 'mailto:justin.a.g.machica@gmail.com'
        },
        {
            id: 3,
            category: "support",
            title: '✨ Maintenance & Support',
            description: 'Fix Bugs, Technical Support and Website Updates ',
            tech: 'Jira, VS code, SSH & Lighthouse',
            image: '/images/working2.jpg',
            price: 'Can be Negotiated',
            view: 'mailto:justin.a.g.machica@gmail.com'
        },
        {
            id: 4,
            category: "education",
            title: '✨ Teaching',
            description: 'Create and Teach Web Development.',
            tech: 'HTML, CSS & JavaScript',
            image: '/images/cache.jpg',
            price: 'Standard Teaching Price',
            view: 'mailto:justin.a.g.machica@gmail.com'
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

    // Close popup on ESC key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                setIsPopupOpen(false);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Prevent scrolling when popup is open
    useEffect(() => {
        if (isPopupOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isPopupOpen]);

    return (
        <div className="flex flex-col relative md:mb-10 md:mt-8">
            <div className="absolute inset-0 bg-cyan-50" />

            <main className="flex-grow relative z-10 flex flex-col p-4 sm:p-6 gap-6">
                <div className="max-w-4xl mx-auto w-full px-2 sm:px-4">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl text-cyan-950 text-left font-bold p-4 text-shadow-lg mb-10">
                        What I can Offer:
                    </h1>

                    <div
                        className="mix-container flex flex-wrap gap-4 justify-center"
                        ref={containerRef}
                    >
                        {projects.map((proj) => (
                            <div
                                key={proj.id}
                                className={`mix ${proj.category} p-4 text-sm sm:text-base bg-cyan-950 text-slate-50 rounded-lg shadow-md w-full max-w-[16rem] text-center cursor-pointer hover:shadow-xl transition`}
                                onClick={() => {
                                    setPopupData(proj);
                                    setIsPopupOpen(true);
                                }}
                            >
                                {proj.image ? (
                                    <img
                                        src={proj.image}
                                        alt={proj.title}
                                        className="w-full h-40 sm:h-48 object-cover mb-2 rounded-md"
                                    />
                                ) : (
                                    <div className="w-full h-40 bg-gray-600 mb-2 rounded flex items-center justify-center text-gray-300">
                                        No Image
                                    </div>
                                )}
                                <h3 className="font-semibold">{proj.title}</h3>
                            </div>
                        ))}
                    </div>

                    {/* Popup Modal */}
                    {isPopupOpen && popupData && (
                        <div
                            className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-[9999] p-4"
                            role="dialog"
                            aria-modal="true"
                        >
                            <div className="bg-white text-cyan-950 p-6 rounded-lg shadow-xl w-full max-w-sm max-h-[90vh] overflow-y-auto">
                                {popupData.image && (
                                    <img
                                        src={popupData.image}
                                        alt={popupData.title}
                                        className="w-full h-48 object-cover rounded mb-4"
                                    />
                                )}
                                <h2 className="text-xl font-bold mb-2">{popupData.title}</h2>
                                <p className="text-sm font-semibold text-cyan-700 mb-3 indent-8">💲 {popupData.price}</p>
                                <p className="text-sm mb-2">▶ {popupData.description}</p>
                                <p className="text-xs text-gray-600 mb-3">📖 {popupData.tech}</p>
                                <a
                                    href={popupData.view}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block text-sm text-white bg-cyan-700 hover:bg-cyan-900 px-4 py-2 rounded-full transition"
                                >
                                    💌 Email me now
                                </a>
                                <button
                                    onClick={() => setIsPopupOpen(false)}
                                    className=" cursor-pointer mt-4 w-full text-sm px-4 py-2 bg-red-200 text-black rounded hover:bg-red-600 hover:text-white transition"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}

export default Cards;
