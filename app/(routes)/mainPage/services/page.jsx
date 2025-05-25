import React from "react";
import Cards from "./_components/Cards";
import Testimonials from "./_components/Testimonials";

function Services() {
    return (
        <div className="relative min-h-screen flex flex-col overflow-hidden">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat z-[-2]"
                style={{ backgroundImage: "url('/images/bg3.jpg')" }}
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black opacity-50 z-[-1]" />

            {/* Content */}
            <section>
                <Cards />
            </section>

            <section className="w-full max-w-full px-4 sm:max-w-5xl md:max-w-7xl mx-auto py-8">
                <Testimonials />
            </section>
        </div>
    );
}

export default Services;
