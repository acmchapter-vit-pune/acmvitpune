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
} from "lucide-react";

const roundsData = [
    {
        round: "Round 1",
        date: "Online (Unstop)",
        side: "left",
        icon: "1",
        desc: "Online quiz conducted on Unstop platform focusing on DSA, Web Development, and OOP fundamentals.",
    },
    {
        round: "Round 2",
        date: "Online (Unstop)",
        side: "right",
        icon: "2",
        desc: "Online coding challenge emphasizing logical thinking, problem-solving, and clean code.",
    },
    {
        round: "Round 3",
        date: "Offline",
        side: "left",
        icon: "3",
        desc: "Offline quiz at college consisting of 15 questions combining theory and practical knowledge.",
    },
    {
        round: "Round 4",
        date: "Offline",
        side: "right",
        icon: "4",
        desc: "Final offline coding round with 5 challenging problems testing real-world coding ability.",
    },
];

export default function CodeSprint() {
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
                    Code<span className="text-green-400">Sprint</span>
                </motion.h1>

                <p className="mt-4 text-gray-400">
                    Organized by <span className="text-white font-semibold">ACM VIIT Student Chapter</span>
                </p>

                <div className="mt-4 flex justify-center gap-6 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                        <CalendarDays size={16} className="text-green-400" />
                        <span>29 Aug 2024</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock size={16} className="text-green-400" />
                        <span>2:00 – 4:00 PM</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-green-400" />
                        <span>B001</span>
                    </div>
                </div>

                <div className="h-1 w-24 bg-green-500 mx-auto mt-6 rounded-full shadow-[0_0_15px_#22c55e]" />

                <p className="mt-8 text-gray-300 leading-relaxed">
                    ACM CodeSprint was a competitive coding event aimed at enhancing students’
                    technical and problem-solving skills across DSA, Web Development, and OOP.
                    It promoted healthy competition, teamwork, and continuous learning.
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
                    {roundsData.map((item, i) => (
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
                                    <h3 className="text-xl font-bold text-gray-900">{item.round}</h3>
                                    <span className="text-xs text-green-700 bg-green-100 px-2 py-1 rounded">
                                        {item.date}
                                    </span>
                                    <p className="mt-3 text-gray-600 text-sm">{item.desc}</p>
                                </div>
                            </motion.div>

                            <div className="absolute left-1/2 -translate-x-1/2">
                                <div className="w-12 h-12 rounded-full bg-white border-4 border-slate-900 flex items-center justify-center text-black font-bold shadow-lg">
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
                        Event <span className="text-green-400">Moments</span>
                    </h2>
                    <div className="h-1 w-24 bg-green-500 mx-auto mt-4 rounded-full shadow-[0_0_15px_#22c55e]" />
                </div>

                <div className="flex flex-col gap-5">

                    <div className="bg-[#0f1629] border border-slate-800 rounded-2xl p-8 shadow-xl">
                        <div className="flex items-center gap-3 mb-6">
                            <Trophy className="text-green-400" size={28} />
                            <h3 className="text-2xl font-bold">Winners</h3>
                        </div>

                        {/* Top 8 */}
                        <div className="mb-8">
                            <div className="flex items-center gap-2 font-semibold text-green-400">
                                <Star size={16} /> Top 8 Teams
                            </div>
                            <p className="text-gray-400 text-sm mt-2">
                                Recognized for outstanding performance and awarded certificates.
                            </p>
                        </div>

                        {/* Top 3 Winners */}
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "First Place – Team Losers",
                                    names: "Anirudha Shripad Kale, Pratik Jitendra Patil",
                                    img: "winner1.png",
                                    color: "text-yellow-400",
                                },
                                {
                                    title: "Second Place – sanchitchavan3636",
                                    names: "Sanchit Chavan, Karan Gulve",
                                    img: "winner2.png",
                                    color: "text-slate-300",
                                },
                                {
                                    title: "Third Place – manglesh_22210095",
                                    names: "Manglesh Nimbalkar, Jayant Patil",
                                    img: "winner3.png",
                                    color: "text-orange-400",
                                },
                            ].map((w, i) => (
                                <div
                                    key={i}
                                    className="bg-[#0a0f1d] border border-slate-800 rounded-xl p-4 hover:border-green-500/40 transition"
                                >
                                    <div className="flex items-center gap-2 mb-2">
                                        <Medal className={w.color} />
                                        <p className="font-semibold text-sm">{w.title}</p>
                                    </div>

                                    <p className="text-gray-400 text-xs mb-3">{w.names}</p>

                                    <Image
                                        src={`/assets/events/codesprint/${w.img}`}
                                        alt={w.title}
                                        width={400}
                                        height={250}
                                        className="rounded-lg border border-slate-700 object-cover"
                                    />
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
                                <span>Certificates for all participants</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users size={18} className="text-green-400" />
                                <span>Total Teams: <strong>255</strong></span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users size={18} className="text-green-400" />
                                <span>Total Participants: <strong>390</strong></span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="mt-24 max-w-6xl mx-auto px-6">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {["event1.png", "event2.png", "event3.png"].map((img, i) => (
                        <div
                            key={i}
                            className="rounded-2xl overflow-hidden border border-slate-800 shadow-xl group"
                        >
                            <Image
                                src={`/assets/events/codesprint/${img}`}
                                alt="CodeSprint Event"
                                width={400}
                                height={260}
                                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    ))}
                </div>
            </section>


        </div>
    );
}
