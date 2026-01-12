"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import {
    CalendarDays,
    Clock,
    MapPin,
    Trophy,
    Users,
    Award,
    Medal,
    Star,
    Presentation,
    Code,
    Brain,
} from "lucide-react";

/* ---------------- TIMELINE DATA ---------------- */

const timelineData = [
    {
        title: "Day 1 – Power BI Workshop",
        date: "14 Oct 2024 • 2:00 – 4:00 PM",
        side: "left",
        icon: <Presentation size={20} />,
        desc: "Hands-on Power BI workshop by Mr. Aditya S. Thakare covering data visualization, business intelligence, and practical industry use cases.",
    },
    {
        title: "Day 2 – Room Rush Coding",
        date: "15 Oct 2024 • 9:30 AM – 4:00 PM",
        side: "right",
        icon: <Code size={20} />,
        desc: "A 3-level coding competition conducted on Unstop, promoting teamwork, problem-solving, and competitive learning.",
    },
    {
        title: "Panel Discussion on AI",
        date: "15 Oct 2024 • 2:00 – 4:00 PM",
        side: "left",
        icon: <Brain size={20} />,
        desc: "Insightful discussion on how AI is transforming job roles, skills, and career paths with industry experts.",
    },
];

export default function Enigma() {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start center", "end center"],
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className="min-h-screen bg-[#0a0f1d] py-28 px-6 text-white">

            {/* ---------- HERO ---------- */}
            <div className="text-center max-w-4xl mx-auto mb-24">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-5xl font-bold"
                >
                    ACM <span className="text-green-400">Enigma 3.0</span>
                </motion.h1>

                <p className="mt-4 text-gray-400">
                    Organized by <span className="text-white font-semibold">ACM Club, VIIT</span>
                </p>

                <div className="mt-4 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                        <CalendarDays size={16} className="text-green-400" />
                        <span>14–15 October 2024</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-green-400" />
                        <span>Seminar Hall & VIIT Campus</span>
                    </div>
                </div>

                <div className="h-1 w-24 bg-green-500 mx-auto mt-6 rounded-full shadow-[0_0_15px_#22c55e]" />

                <p className="mt-8 text-gray-300 leading-relaxed">
                    ACM Enigma 3.0 was a two-day technical event designed to provide students
                    with hands-on learning, competitive exposure, and industry insights
                    through workshops, competitions, and panel discussions.
                </p>
            </div>

            {/* ---------- TIMELINE ---------- */}
            <div ref={ref} className="relative max-w-5xl mx-auto">
                <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-slate-800/40" />

                <motion.div
                    style={{ scaleY, originY: 0 }}
                    className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-linear-to-b from-green-400 to-emerald-600 shadow-[0_0_10px_#22c55e]"
                />

                <div className="space-y-32">
                    {timelineData.map((item, i) => (
                        <div
                            key={i}
                            className={`relative flex items-center justify-between ${item.side === "right" ? "flex-row-reverse" : ""
                                }`}
                        >
                            <motion.div
                                initial={{ opacity: 0, x: item.side === "left" ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="w-[44%]"
                            >
                                <div className="bg-white p-6 rounded-2xl shadow-2xl relative">
                                    <div
                                        className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rotate-45 ${item.side === "left" ? "-right-2" : "-left-2"
                                            }`}
                                    />
                                    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                                    <span className="text-xs text-green-700 bg-green-100 px-2 py-1 rounded">
                                        {item.date}
                                    </span>
                                    <p className="mt-3 text-gray-600 text-sm">{item.desc}</p>
                                </div>
                            </motion.div>

                            <div className="absolute left-1/2 -translate-x-1/2">
                                <div className="w-12 h-12 rounded-full bg-white border-4 border-slate-900 flex items-center justify-center text-black shadow-lg">
                                    {item.icon}
                                </div>
                            </div>

                            <div className="w-[44%]" />
                        </div>
                    ))}
                </div>
            </div>

            {/* ---------- EVENT MOMENTS ---------- */}
            <section className="mt-32 max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold">
                        Event <span className="text-green-400">Highlights</span>
                    </h2>
                    <div className="h-1 w-24 bg-green-500 mx-auto mt-4 rounded-full shadow-[0_0_15px_#22c55e]" />
                </div>

                <div className="grid md:grid-cols-2 gap-8">

                    {/* Winners */}
                    <div className="bg-[#0f1629] border border-slate-800 rounded-2xl p-8 shadow-xl">
                        <div className="flex items-center gap-3 mb-6">
                            <Trophy className="text-green-400" size={28} />
                            <h3 className="text-2xl font-bold">Room Rush Winners</h3>
                        </div>

                        <div className="grid gap-4">
                            {[
                                { title: "1st Place", names: "Anirudha, Pratik Patil", color: "text-yellow-400" },
                                { title: "2nd Place", names: "Manglesh Nimbalkar, Jayant Patil", color: "text-slate-300" },
                                { title: "3rd Place", names: "Mitesh Jain, Akhilesh Choudhary", color: "text-orange-400" },
                            ].map((w, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <Medal className={w.color} />
                                    <div>
                                        <p className="font-semibold">{w.title}</p>
                                        <p className="text-gray-400 text-sm">{w.names}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Participation */}
                    <div className="bg-[#0f1629] border border-slate-800 rounded-2xl p-8 shadow-xl">
                        <div className="flex items-center gap-3 mb-6">
                            <Users className="text-green-400" size={28} />
                            <h3 className="text-2xl font-bold">Participation</h3>
                        </div>

                        <div className="space-y-4 text-gray-300">
                            <div className="flex items-center gap-2">
                                <Award size={18} className="text-green-400" />
                                <span>Total Registrations: <strong>404</strong></span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users size={18} className="text-green-400" />
                                <span>Workshop Participants: <strong>116</strong></span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users size={18} className="text-green-400" />
                                <span>Coding Participants: <strong>110</strong></span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="mt-24 w-full max-w-7xl mx-auto px-6 space-y-24">

                {/* ================= ENIGMA POSTER ================= */}
                <div className="relative h-112 md:h-128 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-linear-to-br from-black to-slate-900 group">
                    <Image
                        src={`/assets/events/Enigma/image0.png`}
                        alt="Enigma Poster"
                        fill
                        priority
                        className="object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                    />

                    {/* Subtle overlay (does NOT hide poster) */}
                    <div className="absolute inset-0 bg-black/20" />

                    {/* Floating Title Badge */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                        <div className="px-8 py-3 rounded-full bg-black/70 backdrop-blur-md border border-slate-700 shadow-lg">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-wide">
                                ENIGMA
                            </h2>
                        </div>
                    </div>
                </div>

                {/* ================= DAY 1 ================= */}
                <div className="space-y-8">
                    <h3 className="text-2xl font-bold text-white">
                        Day 1 – <span className="text-green-400">Power BI Workshop</span>
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {["image1.png", "image2.png", "image3.png"].map((img, i) => (
                            <div
                                key={i}
                                className="relative h-55 rounded-2xl overflow-hidden border border-slate-800 shadow-xl group"
                            >
                                <Image
                                    src={`/assets/events/Enigma/${img}`}
                                    alt="Power BI Workshop"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* ================= DAY 2 – CODING ================= */}
                <div className="space-y-8">
                    <h3 className="text-2xl font-bold text-white">
                        Day 2 – <span className="text-green-400">Room Rush Coding Competition</span>
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {["image41.png", "image5.png", "image6.png"].map((img, i) => (
                            <div
                                key={i}
                                className="relative h-55 rounded-2xl overflow-hidden border border-slate-800 shadow-xl group"
                            >
                                <Image
                                    src={`/assets/events/Enigma/${img}`}
                                    alt="Room Rush Coding Competition"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* ================= DAY 2 – PANEL ================= */}
                <div className="space-y-8">
                    <h3 className="text-2xl font-bold text-white">
                        Day 2 – <span className="text-green-400">Panel Discussion</span>
                        <span className="block text-sm text-gray-400 mt-1">
                            How AI is Transforming Our Job Roles
                        </span>
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {["image7.png", "image8.png", "image9.png"].map((img, i) => (
                            <div
                                key={i}
                                className="relative h-55 rounded-2xl overflow-hidden border border-slate-800 shadow-xl group"
                            >
                                <Image
                                    src={`/assets/events/Enigma/${img}`}
                                    alt="AI Panel Discussion"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </section>


        </div>
    );
}
