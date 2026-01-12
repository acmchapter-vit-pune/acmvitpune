"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const floatingAnimation = {
    animate: {
        y: [-12, 12],
        rotate: [-1, 1],
    },
    transition: {
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
    },
};

const AboutUs = () => {
    const forums = ["ML Forum", "IOT Forum", "Coding Club", "Cyber Cell"];

    return (
        <section id="about" className="relative w-full py-16 sm:py-24 md:py-32 overflow-hidden bg-[#0a0f1d]">
            {/* Background Glow */}
            <div
                className="absolute top-1/2 left-1/2 w-200 h-200 -translate-x-1/2 -translate-y-1/2 bg-green-500/5 rounded-full blur-[120px] pointer-events-none"
                aria-hidden="true"
            />


            <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

                {/* HEADING */}
                <div className="flex flex-col items-center mb-10 sm:mb-12 md:mb-15">
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "80px" }}
                        viewport={{ once: true }}
                        className="h-1 bg-green-500 mb-3 sm:mb-4"
                    />
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl md:text-[38px] font-bold mb-4 text-balance text-white"
                    >
                        About Us
                    </motion.h2>
                </div>

                {/* CONTENT ROW */}
                <div className="flex flex-col lg:flex-row items-stretch gap-8 sm:gap-12 lg:gap-24">

                    {/* IMAGE SIDE */}
                    <motion.div
                        {...floatingAnimation}
                        className="relative w-full lg:w-1/2 flex justify-center px-4 sm:px-0"
                    >
                        <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-20 h-20 sm:w-32 sm:h-32 border-t-2 border-l-2 border-green-500/30 hidden sm:block" />
                        <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-20 h-20 sm:w-32 sm:h-32 border-b-2 border-r-2 border-green-500/30 hidden sm:block" />

                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="relative z-10 group w-full flex justify-center"
                        >
                            <div className="relative w-full max-w-md min-h-112.5 lg:min-h-full overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 group-hover:shadow-green-500/20 border border-white/5">
                                <Image
                                    src={'/assets/about.png'}
                                    alt="ACM Society"
                                    fill
                                    priority
                                    quality={95}
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* TEXT SIDE */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 flex"
                    >
                        <div className="bg-black/60 backdrop-blur-xl border border-green-500/30 p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl md:rounded-4xl shadow-[0_0_80px_rgba(34,197,94,0.15)] relative overflow-hidden flex flex-col justify-center w-full">
                            <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-green-400/50 to-transparent" />

                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">World&apos;s Largest Computing Society</h3>

                            <p className="text-slate-400 leading-relaxed text-base sm:text-lg mb-6 sm:mb-8">
                                The Association for Computing Machinery is an international learned
                                society for computing. Founded in 1947, it serves as the premier
                                scientific and educational computing society globally.
                            </p>

                            <div className="space-y-6">
                                <p className="text-slate-500 font-medium uppercase tracking-wider text-sm">Our Integrated Forums:</p>
                                <div className="flex flex-wrap gap-3">
                                    {forums.map((forum, idx) => (
                                        <motion.span
                                            key={forum}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: idx * 0.1 }}
                                            viewport={{ once: true }}
                                            className="px-4 py-2 bg-green-500/10 border border-green-500/20 text-green-400 rounded-full text-sm font-semibold hover:bg-green-500 hover:text-black transition-colors cursor-default"
                                        >
                                            {forum}
                                        </motion.span>
                                    ))}
                                </div>

                                <p className="text-slate-400 leading-relaxed mt-6 italic border-l-2 border-green-500/30 pl-4">
                                    &quot;Shaping the future of computing through networking, mentoring, and collaborative innovation.&quot;
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;