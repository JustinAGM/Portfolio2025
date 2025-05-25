import React from "react";
import Projects from "./_components/Projects";

function Work() {
    return (
        <div className="relative min-h-screen p-4 md:p-6">
            <div
                className="absolute inset-0 bg-cover bg-center brightness-60 md:brightness-50 filter blur-[2px] md:blur-sm "
                style={{ backgroundImage: "url('/images/working2.jpg')" }}
                aria-hidden="true"
            />

            <div className="relative z-10 text-white mt-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center drop-shadow-md text-shadow-lg">
                    My Work
                </h2>
                <Projects />
            </div>
        </div>
    );
}

export default Work;
