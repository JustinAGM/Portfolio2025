import React from "react";
import MyContact from "./_components/MyContacts";
import SubmitForm from "./_components/SubmitForm";

function Contact() {
    return (
        <div className="bg-[url('/images/bg5.jpg')] bg-cover bg-center min-h-screen backdrop-blur-xs px-4 sm:px-6">
            <div className="absolute inset-0 bg-cyan-50/50 -z-10" />
            <div className="px-4 py-8">
                <h1 className="mt-8 text-3xl sm:text-4xl lg:text-5xl text-cyan-950 text-left text-shadow-lg text-shadow-cyan-500 mb-2">
                    Contact Me:
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 items-baseline-last">
                <div className="md:justify-end md:mt-10">
                    <MyContact />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-1 self-center md:mt-20 md:-ml-16">
                    <SubmitForm />
                </div>
            </div>
        </div>
    );
}

export default Contact;
