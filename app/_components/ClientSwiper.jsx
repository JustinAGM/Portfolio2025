'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function ClientSwiper({ slides }) {
    return (
        <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            }}
            touchStartPreventDefault={false}
        >
            {slides.map((item) => (
                <SwiperSlide key={item.id}>
                    <div className="p-4 bg-slate-50 text-cyan-950 rounded-lg shadow-md max-w-sm mx-auto flex flex-col justify-between h-4/12 mt-10">
                        <div className="flex-grow">
                            <p className="text-md italic mb-2">"{item.testimony}"</p>
                            <p className="text-sm italic text-right text-cyan-400">{item.date}</p>
                        </div>
                        <div className="flex items-center mt-4">
                            {item.image ? (
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-16 h-16 object-cover rounded-full mr-3 border border-cyan-400"
                                />
                            ) : (
                                <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center text-gray-300 mr-3">
                                    ?
                                </div>
                            )}
                            <h3 className="text-lg font-semibold">{item.name}</h3>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
