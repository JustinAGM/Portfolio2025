"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUp, BookUser } from "lucide-react";
import About from "./about/page";
import Skills from "./skills/page";
import Work from "./work/page";
import Services from "./services/page";
import Contact from "./contact/page";

function MainPage() {
    const aboutRef = useRef(null);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowTopBtn(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <main className="scroll-smooth">
            <section
                id="home"
                className="bg-[url('/images/laptop.jpg')] bg-cover bg-center grid grid-cols-1 md:grid-cols-4 p-4 md:p-6 gap-4 min-h-screen"
            >
                {/* Left: Image */}
                <div className="flex justify-center md:justify-end mt-6 md:mt-50 md:ml-10">
                    <div className="">
                        <div className="bg-cyan-950 p-3 sm:p-4 rounded-tl-xl rounded-br-xl">
                            <Image
                                src="/images/home-selfimg.jpg"
                                alt="Portrait of Me"
                                width={300}
                                height={200}
                                className="rounded-tl-xl rounded-br-xl object-cover max-w-full hover:animate-pulse"
                            />
                        </div>
                    </div>
                </div>

                {/* Right: Text */}
                <div className="md:col-span-2 flex flex-col justify-center md:ml-10 md:mt-[50px]">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-50 p-2 text-center md:text-left drop-shadow-md text-shadow-lg">
                        Justin Alexis Machica
                    </h1>

                    <h3 className="text-lg sm:text-xl p-2 text-cyan-300 flex items-center bg-slate-800 rounded-t-2xl w-fit mx-auto md:mx-0">
                        Web Developer
                    </h3>

                    <div className="bg-slate-200 rounded-b-2xl p-4 rounded-tr-2xl">
                        <p className="text-base sm:text-lg indent-5 text-justify text-slate-800">
                            I'm a dedicated and detail-oriented professional transitioning from customer service to web development. With a strong foundation in HTML, CSS, JavaScript, and modern frameworks like React and Next.js, I combine technical skills with excellent communication and problem-solving abilities.
                        </p>
                    </div>

                    <div className="mt-4 cursor-pointer bg-cyan-950 text-white hover:bg-cyan-400 rounded-2xl w-fit px-4 py-3 mx-auto md:mx-0 hover:translate-x-4 transition-transform duration-300">
                        <button
                            onClick={() =>
                                aboutRef.current?.scrollIntoView({ behavior: "smooth" })
                            }
                            className=" cursor-pointer flex items-center gap-2"
                        >
                            <BookUser className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer" />
                            <span>More about me</span>
                        </button>
                    </div>
                </div>
            </section>

            <section id="about" ref={aboutRef}>
                <About />
            </section>

            <section id="skills" className="mt-4">
                <Skills />
            </section>

            <section id="work" className="mt-4">
                <Work />
            </section>
            <section id="services" className="mt-4">
                <Services />
            </section>
            <section id="contact" className="">
                <Contact />
            </section>
            <footer className="bg-cyan-700 px-4 py-10">
                <div className="fixed bottom-6 left-6 z-50">
                    <button
                        onClick={scrollToTop}
                        className="bg-cyan-600 hover:bg-cyan-500 text-white p-3 rounded-full shadow-lg transition-all duration-300"
                        aria-label="Back to top"
                    >
                        <ArrowUp className="w-5 h-5" />
                    </button>
                </div>
                <div className="text-center text-sm text-cyan-100 border-t border-cyan-500 pt-6">
                    <p>&copy; Justin Alexis Machica {new Date().getFullYear()}. All rights reserved.</p>
                    <p className="mt-1">Built with ❤️ using Next.js and Tailwind CSS</p>
                </div>
            </footer>

        </main>

    );
}

export default MainPage;
