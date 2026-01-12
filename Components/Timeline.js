"use client"

import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const events = [
    { id: 1, title: "Code-Sprint", desc: "ACM Codesprint was a competitive coding event organized to encourage students to enhance their technical and problem-solving skills.", side: "left", logo: "/assets/card3.png" },
    { id: 2, title: "Enigma", desc: "An event series that features hackathon, seminar, coding-contest, workshop, panel-discussion.", side: "right", logo: "/assets/card2.png" },
    { id: 3, title: "Social-Event", desc: "Social Outreach Event", side: "left", logo: "/assets/card4.png" },
];

const Timeline = () => {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div id="event" className="min-h-screen bg-[#0a0f1d] px-6 py-28 text-white font-sans overflow-hidden">

            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1 }}
                className="max-w-3xl mx-auto mb-40 rounded-3xl bg-black/70 border border-green-500/30 shadow-[0_0_80px_rgba(34,197,94,0.15)] p-10 text-center"
            >
                <motion.span
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="inline-block mb-4 px-4 py-1 text-xs font-semibold bg-white text-black rounded-full"
                >
                    ACM VIIT
                </motion.span>

                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-3xl md:text-4xl font-bold text-green-400 tracking-wide"
                >
                    Upcoming Event
                </motion.h1>

                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "80px" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="h-0.5 bg-green-400 mx-auto my-6"
                />

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                    className="text-slate-300 leading-relaxed text-sm md:text-base"
                >
                    "Code Sprint", a coding competition focused on Data Structures and Algorithms (DSA), provides a unique platform to showcase talent in knowledge-sharing and collaborate for a noble social cause in education.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9 }}
                    className="mt-6 text-slate-400"
                >
                    Want to compete? Click below
                </motion.p>

                <div className="mt-8 flex flex-col gap-4 items-center">
                    <Link href={'/register'}>
                        <motion.button
                            animate={{ boxShadow: ["0 0 0px #22c55e", "0 0 25px #22c55e", "0 0 0px #22c55e"] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            whileHover={{ scale: 1.1 }}
                            className="px-8 py-3 bg-green-500 text-black font-semibold rounded-lg cursor-pointer"
                        >
                            Register
                        </motion.button>
                    </Link>
                </div>
            </motion.section>

            <div className="text-center mb-24">
                <h2 className="text-4xl font-bold">Our Journey · 2024–25</h2>
                <div className="h-1 w-20 bg-green-500 mx-auto mt-4 rounded-full" />
            </div>

            <div ref={containerRef} className="relative max-w-5xl mx-auto">

                {/* Static Background Track */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-slate-800/30" />

                {/* Animated Growing Line */}
                <motion.div
                    style={{ scaleY, originY: 0 }}
                    className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-white z-0 shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                />

                <div className="space-y-32 relative z-10">
                    {events.map((event, index) => (
                        <Link key={event.id} href={`/events/${event.title}`}>
                            <div
                                key={event.id}
                                className={`relative flex items-center justify-between w-full ${event.side === 'right' ? 'flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Content Card with Triangle Edge */}
                                <motion.div
                                    initial={{ opacity: 0, x: event.side === 'left' ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="w-[44%] relative"
                                >
                                    <div className="bg-[#111827] p-6 rounded-xl relative border border-green-500/30 shadow-[0_0_15px_rgba(34,197,94,0.1)] hover:shadow-[0_0_25px_rgba(34,197,94,0.2)] transition-all">
                                        {/* Triangle Arrow */}
                                        <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-[#111827] border-t border-l border-green-500/30 rotate-45 
        ${event.side === 'left' ? '-right-2' : '-left-2'}`}
                                        />

                                        <h3 className="text-xl font-bold text-green-400">{event.title}</h3>
                                        <p className="text-slate-300 font-medium text-sm mt-1">{event.desc}</p>
                                        <div className="mt-4 w-10 h-1 bg-green-500 rounded-full" /> {/* Accent line */}
                                    </div>
                                </motion.div>

                                {/* Center Circle Indicator */}
                                <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        className="w-10 h-10 rounded-full bg-white border-2 border-slate-900 flex items-center justify-center text-black font-black text-sm z-20 shadow-lg"
                                    >
                                        <Image
                                            src={event.logo}
                                            alt={event.title}
                                            width={20}
                                            height={20}
                                        />
                                    </motion.div>
                                </div>

                                {/* Spacer */}
                                <div className="w-[44%]" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Timeline;