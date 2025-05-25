'use client'
import React from "react";
import dynamic from "next/dynamic";

const ClientSwiper = dynamic(() => import("@/app/_components/ClientSwiper"), {
    ssr: false,
});

function Testimonials() {
    const proj = [
        {
            id: 1,
            category: "development",
            name: '🗨  Kenobi Ricarte',
            testimony: "I've had a pleasure of know Justin for a long time and can confidently say that he is one of the most dedicated, reliable and capable individual I've met.What stands out most about Justin is their ability to stay calm under pressure and find thoughtful solutions in challenging situations. Any organization would be fortunate to have someone of Justin's caliber on their team. I wholeheartedly recommend him for any position he pursue",
            date: 'January 2023',
            image: '/images/Ricarte.jpg',
        },
        {
            id: 2,
            category: "design",
            name: '🗨  Jose Lorenzo Faelman',
            testimony: 'Working with Justin will give you an assurance that whatever it is that is needed will be delivered with excellence. He does his job above and beyond and his skills and talents will show with every output he delivers.',
            date: 'November 2024',
            image: '/images/Faelman.jpg',
        },
        {
            id: 3,
            category: "support",
            name: '🗨 Jason Rafael Fabrigas',
            testimony: 'Knowing Justin as one of my best friends and as a classmate in high school, I witnessed his grit, perseverance, and passion in everything he pursues or puts effort into. I have no doubt that whenever he takes on a responsibility or role, he will give it his best.',
            date: 'June 2024',
            image: '/images/Fabrigas.jpg',
        },
        {
            id: 4,
            category: "education",
            name: '🗨 Denzel Ivan Ramos',
            testimony: "I'm fortunate to have met Justin as a teammate in my job. He's very hardworking and cunning. His personality is always a delight. I know that his ambitious attitude can deliver solid work without any drawbacks. I can confidently say that his work ethic has a solid foundation and is very efficient.",
            date: 'April 2025',
            image: '/images/Ramos.jpg',
        },
        {
            id: 5,
            category: "support",
            name: '🗨 Christopher Chua',
            testimony: 'Justin, even in back in college has always been a  competent and reliable individual, would always have to initiative to overcome and complete challenges and tasks. A person with great leadership skills.',
            date: 'January 2023',
            image: '/images/Chua.jpg',
        },
        {
            id: 6,
            category: "support",
            name: '🗨 Rhealyn Dela Cruz',
            testimony: "Justin Machica is very exemptional team player, he knows how to handle things lightly, he thinks outside the box and brings positive vibe to other co-workers as well.  He's very dedicted and eager to learn more that's why he's able to be the top customer service representative for 2 quarters.",
            date: 'April 2025',
            image: '/images/Delacruz.jpg',
        },
        {
            id: 7,
            category: "support",
            name: '🗨 Kayelyn Gabriela Villarino',
            testimony: "I know Justin as a good and efficient person, besides that he is dedicated to his work and will do everything to make the work go smoothly. He is very focused on his work and can put aside problems to make the work result good.",
            date: 'January 2025',
            image: '/images/Villarino.jpg',
        },
    ];

    return (
        <div className="min-h-screen md:mt-10">
            <div className="px-4 py-8">
                <h1 className="mt-20 text-3xl sm:text-4xl lg:text-5xl text-cyan-50 text-center text-shadow-lg text-shadow-cyan-500 mb-20 font-bold ">
                    Testimonials
                </h1>

                {/* Swipe hint */}
                <div className="text-center">
                    <div className="bg-cyan-100 text-black text-lg animate-pulse inline-block px-2 py-1 rounded-2xl">
                        <span className="inline-block transform -translate-x-1">⬅️</span> Swipe to see more <span className="inline-block transform translate-x-1">➡️</span>
                    </div>
                </div>

                <ClientSwiper slides={proj} />
            </div>
        </div>
    );
}

export default Testimonials;
