"use client";

import React from "react";
import Image from "next/image";
import { useScroll, useSpring, motion } from "framer-motion";

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
};

const page = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section className="relative w-full py-20 sm:py-24 md:py-32 overflow-hidden bg-linear-to-br from-black via-slate-900 to-black text-white">
            {/* --- BACKGROUND ELEMENTS --- */}

            {/* Animated Reading Progress */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-green-500 origin-left z-100"
                style={{ scaleX }}
            />



            {/* Decorative Floating Orbs */}
            <motion.div
                animate={{ y: [0, -20, 0], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 right-[10%] w-48 h-48 sm:w-64 sm:h-64 bg-green-500/10 rounded-full blur-[80px]"
            />
            <motion.div
                animate={{ y: [0, 30, 0], opacity: [0.05, 0.15, 0.05] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-40 left-[5%] w-64 h-64 sm:w-96 sm:h-96 bg-slate-500/10 rounded-full blur-[100px]"
            />

            {/* ---------- HERO SECTION ---------- */}
            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center mb-16 sm:mb-24 md:mb-32">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-block px-4 py-1.5 mb-6 border border-green-500/30 rounded-full bg-green-500/5 backdrop-blur-sm"
                >
                    <span className="text-green-500 tracking-[0.2em] text-xs font-bold uppercase">
                        ACM VIT
                    </span>
                </motion.div>

                <motion.h1
                    {...fadeUp}
                    transition={{ duration: 0.8 }}
                    className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 sm:mb-8 text-white text-balance px-2"
                >
                    Code Sprint 2026
                </motion.h1>

                {/* ---------- EVENT SPECIFICS (Details & Rules) ---------- */}
                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 mb-20 sm:mb-32 md:mb-40 grid md:grid-cols-2 gap-6 sm:gap-8">
                    {/* Event Details Card */}
                    <motion.div
                        {...fadeUp}
                        className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/10 blur-3xl rounded-full -mr-10 -mt-10" />
                        <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-3">
                            <span className="p-2 bg-green-500/20 rounded-lg text-green-500">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                            </span>
                            Event Details
                        </h3>
                        <ul className="space-y-4 text-slate-400">
                            <li className="flex justify-between border-b border-white/5 pb-2">
                                <span>Date:</span>
                                <span className="text-white font-medium">March 15, 2026</span>
                            </li>
                            <li className="flex justify-between border-b border-white/5 pb-2">
                                <span>Time:</span>
                                <span className="text-white font-medium">10:00 AM - 04:00 PM</span>
                            </li>
                            <li className="flex justify-between border-b border-white/5 pb-2">
                                <span>Venue:</span>
                                <span className="text-white font-medium">Main Auditorium, VIT</span>
                            </li>
                            <li className="flex justify-between border-b border-white/5 pb-2">
                                <span>Format:</span>
                                <span className="text-white font-medium">Team Sprint (Max 3)</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Event Rules Card */}
                    <motion.div
                        {...fadeUp}
                        transition={{ delay: 0.1 }}
                        className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md relative overflow-hidden"
                    >
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-500/10 blur-3xl rounded-full -ml-10 -mb-10" />
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <span className="p-2 bg-green-500/20 rounded-lg text-green-500">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                            </span>
                            Competition Rules
                        </h3>
                        <ul className="space-y-3 text-sm text-slate-400">
                            <li className="flex gap-3">
                                <span className="text-green-500 font-bold">01.</span>
                                Participants must use only approved IDEs and documentation.
                            </li>
                            <li className="flex gap-3">
                                <span className="text-green-500 font-bold">02.</span>
                                Plagiarism results in immediate disqualification.
                            </li>
                            <li className="flex gap-3">
                                <span className="text-green-500 font-bold">03.</span>
                                Internet access is restricted to official event resources.
                            </li>
                            <li className="flex gap-3">
                                <span className="text-green-500 font-bold">04.</span>
                                Teams must submit their code 5 minutes before the final buzzer.
                            </li>
                        </ul>
                    </motion.div>

                    {/* Registration CTA Button */}
                    <motion.div
                        {...fadeUp}
                        transition={{ delay: 0.3 }}
                        className="md:col-span-2 flex justify-center mt-4"
                    >
                        <button className="group relative px-12 py-4 bg-green-500 text-black font-bold rounded-full overflow-hidden transition-all hover:pr-16 active:scale-95">
                            <span className="relative z-10 uppercase tracking-widest">Register for Sprint</span>
                            <span className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </span>
                        </button>
                    </motion.div>
                </div>

                <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="max-w-2xl mx-auto">
                    <p className="text-slate-400 text-xl leading-relaxed">
                        Recognition of excellence: Our team was honored with the{" "}
                        <span className="text-white border-b-2 border-green-500 font-semibold tracking-wide">
                            Early Bird Award
                        </span>.
                    </p>
                </motion.div>
            </div>

            {/* ---------- WHAT IS EUREKA ---------- */}
            <div className="relative max-w-6xl mx-auto px-6 mb-40">
                <motion.div
                    {...fadeUp}
                    className="relative p-8 md:p-16 rounded-4xl bg-black/60 backdrop-blur-xl border border-green-500/30 shadow-[0_0_80px_rgba(34,197,94,0.15)] overflow-hidden"
                >
                    {/* Subtle light streak */}
                    <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-green-400/50 to-transparent" />

                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-green-500">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">The Initiative</h2>
                            <div className="w-12 h-1 bg-green-500 mb-8" />
                        </div>
                        <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                            <p>
                                Organised by the <span className="text-white font-medium">ACM VIT</span>,
                                students of TE ENTC participated to bridge the gap between academia and
                                practical science.
                            </p>
                            <p>
                                The focus was on <span className="text-green-400 italic font-medium">Solving problems</span>,
                                in most quick way possible.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* ---------- REPRESENTATIVES ---------- */}
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 mb-20 sm:mb-32 md:mb-40">
                <div className="flex flex-col items-center mb-10 sm:mb-16">
                    <motion.h3 {...fadeUp} className="text-2xl sm:text-3xl font-bold text-white mb-2 px-4 text-center">Our Representatives</motion.h3>
                    <motion.div {...fadeUp} className="h-1 w-16 sm:w-20 bg-green-500 rounded-full" />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                    {["bg-emerald-800", "bg-orange-800", "bg-green-800", "bg-slate-800"].map((color, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -10 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative"
                        >
                            <div className={`aspect-3/4 rounded-2xl ${color} shadow-2xl overflow-hidden relative border border-white/5`}>
                                <div className="absolute inset-0 bg-linear-to-t from-black to-transparent opacity-80" />
                                <div className="absolute bottom-4 left-4">
                                    <p className="text-xs text-green-400 font-mono">REP_0{i + 1}</p>
                                    <div className="h-4 w-1 bg-green-500 mt-1" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* ---------- GLIMPSES ---------- */}
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <motion.h3 {...fadeUp} className="text-center text-2xl sm:text-3xl font-bold text-white mb-10 sm:mb-16 px-4">
                    Event Glimpses
                </motion.h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
                    {[
                        { src: "/img_acm.JPG", delay: 0 },
                        { src: "/img_acm.JPG", delay: 0.2 }
                    ].map((img, idx) => (
                        <motion.div
                            key={idx}
                            {...fadeUp}
                            transition={{ delay: img.delay }}
                            className="relative group"
                        >
                            {/* Glow effect behind images */}
                            <div className="absolute -inset-1 bg-linear-to-r from-green-600 to-emerald-900 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000" />

                            <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-3 border border-green-500/20">
                                {/* Container for Image: 
                  Next.js Image component needs a relative container with a height/aspect-ratio when using 'fill'
                */}
                                <div className="relative w-full aspect-16/10 overflow-hidden rounded-xl">
                                    <Image
                                        src={img.src}
                                        alt={`Event Glimpse ${idx + 1}`}
                                        fill
                                        priority={idx === 0}
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default page;