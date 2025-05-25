'use client'
import { Award, BriefcaseBusiness, GraduationCap, Mailbox, MailPlus, MessageCircleMore, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function About() {
    const menuList = [
        { id: 1, name: "Messenger:", icons: MessageCircleMore, path: "https://m.me/justin.machics", pathName: "m.me/justin.machics" },
        { id: 2, name: "Phone# (Text Message only)", icons: Phone, path: "(+63) 966-084-1971", pathName: "(+63) 966-084-1971" },
        { id: 3, name: "Email", icons: Mailbox, path: "mailto:justin.a.g.machica@gmail.com", pathName: "justin.a.g.machica@gmail.com" },
    ];

    return (
        <div className="min-h-screen flex flex-col relative">
            {/* Background blur */}
            <div className="absolute inset-0 bg-cyan-50 filter blur-xl -z-10" />

            {/* Main content area */}
            <main className="flex-grow relative z-10 flex flex-col p-4 sm:p-6 gap-6 md:mb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                    {/* Left section */}
                    <div className="md:justify-end md:ml-10 md:mt-10">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl text-cyan-950 text-center md:text-left text-shadow-lg text-shadow-cyan-500">
                            About Me
                        </h1>
                        <div className="bg-cyan-950 p-3 sm:p-4 rounded-tl-2xl rounded-br-2xl max-w-[70%] sm:max-w-[500px] mx-auto bg-[url('/images/bg4.jpg')] bg-cover bg-center md:mt-30 hover:animate-spin">
                            <Image
                                src="/images/me.jpg"
                                alt="Me working on my PC"
                                width={300}
                                height={250}
                                className="rounded-2xl object-cover w-full "
                            />
                        </div>
                    </div>

                    {/* Right section */}
                    <div className="flex flex-col justify-center self-center md:mt-20 md:mr-40 md:ml-0">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-cyan-950 p-2 sm:p-4 text-center md:text-left text-shadow-lg text-shadow-cyan-500">
                            Justin Alexis G. Machica
                        </h1>

                        <h3 className="text-base sm:text-lg p-2 sm:p-4 text-cyan-300 bg-slate-800 rounded-t-2xl w-fit mx-auto md:mx-0">
                            Web Developer
                        </h3>

                        <div className="bg-slate-200 rounded-b-2xl p-4 rounded-tr-2xl mx-2 sm:mx-0">
                            <p className="text-lg indent-5 text-justify text-cyan-900 leading-relaxed p-3">
                                I'm passionate about building software that not only runs smoothly but also meets user expectations intuitively. My journey began in the fast-paced world of customer support, where I developed a strong foundation in understanding diverse user needs and resolving technical challenges. This experience sharpened my problem-solving skills and cultivated a user-first mindset that I now bring into software development.

                                Currently, I'm deepening my expertise in JavaScript ecosystems and cloud technologies, with hands-on training in tools like React.js and Next.js. Certified in Creative Web Design and holding a Magna Cum Laude degree in ICT, I'm driven to create software that enhances everyday experiences. As I transition into tech, I aim to combine the empathy from customer support with the creativity of development. If you're interested in building accessible, engaging tech solutions together, let's connect!
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 text-xl">
                            <div className="bg-slate-100 flex flex-col items-center text-center rounded-2xl p-4 hover:bg-cyan-100 hover:translate-y-4">
                                <Award className="w-8 h-8 mb-2 text-cyan-600" />
                                <h4 className="font-semibold mb-1">Awards</h4>
                                <span className="text-sm text-cyan-900">
                                    Agent of the Year<br />
                                    Magna Cum Laude<br />
                                    With Honors in SHS
                                </span>
                            </div>
                            <div className="bg-slate-100 flex flex-col items-center text-center rounded-2xl p-4 hover:bg-cyan-100 hover:translate-y-4">
                                <BriefcaseBusiness className="w-8 h-8 mb-2 text-cyan-600" />
                                <h4 className="font-semibold mb-1">Work</h4>
                                <span className="text-sm text-cyan-900">
                                    2 years in the BPO Industry
                                </span>
                            </div>
                            <div className="bg-slate-100 flex flex-col items-center text-center rounded-2xl p-4 hover:bg-cyan-100 hover:translate-y-4">
                                <GraduationCap className="w-8 h-8 mb-2 text-cyan-600" />
                                <h4 className="font-semibold mb-1">Education</h4>
                                <span className="text-sm text-cyan-900">
                                    2 Certificates<br />
                                    1 Bachelor's Degree
                                </span>
                            </div>
                        </div>

                        {/* Contact Button */}
                        <Link href="#contact" className="mt-5 sm:mt-6">
                            <div className="bg-cyan-400 text-white hover:bg-slate-200 hover:text-black rounded-2xl w-fit px-4 py-3 mx-auto md:mx-0 transition-colors duration-300 cursor-pointer hover:translate-x-4">
                                <span className="flex items-center gap-2">
                                    <MailPlus className="w-5 h-5 sm:w-6 sm:h-6" />
                                    <span>Contact me</span>
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
            </main>

            <footer className="z-10 flex flex-col p-4 sm:p-6 gap-6 bg-cyan-600">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 text-xl">
                    {menuList.map((menu) => {
                        const Icon = menu.icons;
                        return (
                            <Link key={menu.id} href={menu.path}>
                                <div className="bg-cyan-50 flex flex-col items-center text-center rounded-2xl p-4 hover:bg-cyan-100 hover:-translate-y-7 transition-all duration-300 ease-in-out">
                                    <span className="w-8 h-8 text-cyan-900">
                                        {Icon && <Icon />}
                                    </span>
                                    <h4 className="font-semibold mb-1 text-cyan-900">{menu.name}</h4>
                                    <span className="text-sm text-cyan-900">{menu.pathName}</span>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </footer>
        </div>
    );
}

export default About;
