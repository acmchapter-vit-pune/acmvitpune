"use client";

import React from "react";
import Image from "next/image";
import {
    CalendarDays,
    MapPin,
    Users,
    Activity,
    Sparkles,
} from "lucide-react";

const SocialEvent = () => {
    return (
        <section className="pt-7 bg-[#0a0f1d] w-full max-w-7xl mx-auto px-6 space-y-20 text-white">

            <div className="relative h-105 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-black">

                {/* Subtle gradient */}
                <div className="absolute inset-0 bg-linear-to-br from-black via-black to-slate-900" />

                {/* Soft pattern glow */}
                <div className="absolute -top-32 -left-32 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                        ACM <span className="text-green-400">×</span> CSI
                    </h1>

                    <p className="mt-3 text-xl md:text-2xl font-semibold text-gray-300">
                        Social Outreach Event
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 mt-8 text-gray-400 text-sm">
                        <div className="flex items-center gap-2">
                            <CalendarDays size={16} className="text-green-400" />
                            <span>14 February 2025</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin size={16} className="text-green-400" />
                            <span>ABC School</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Users size={16} className="text-green-400" />
                            <span>Grades 7 – 9</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* ================= EVENT OVERVIEW ================= */}
            <div className="max-w-4xl space-y-6">
                <h2 className="text-3xl font-bold">
                    Event <span className="text-green-400">Overview</span>
                </h2>

                <p className="text-gray-300 leading-relaxed">
                    ACM Student Chapter, VIIT, in collaboration with CSI, organized
                    a social outreach event aimed at introducing students from grades
                    7 to 9 to fundamental physics concepts through fun, interactive
                    experiments. Using real-life examples and hands-on activities,
                    the session made learning science engaging, intuitive, and memorable.
                </p>
            </div>

            {/* ================= OBJECTIVES & HIGHLIGHTS ================= */}
            <div className="grid md:grid-cols-2 gap-10">

                <div className="bg-[#0b0f1a] border border-slate-800 rounded-2xl p-8 shadow-xl">
                    <h3 className="text-2xl font-bold flex items-center gap-2">
                        <Sparkles className="text-green-400" />
                        Key Objectives
                    </h3>

                    <ul className="mt-6 space-y-3 text-gray-300 list-disc list-inside">
                        <li>Simplify fundamental physics concepts</li>
                        <li>Promote practical, hands-on learning</li>
                        <li>Relate science to everyday life</li>
                        <li>Encourage curiosity and critical thinking</li>
                    </ul>
                </div>

                <div className="bg-[#0b0f1a] border border-slate-800 rounded-2xl p-8 shadow-xl">
                    <h3 className="text-2xl font-bold flex items-center gap-2">
                        <Activity className="text-green-400" />
                        Event Highlights
                    </h3>

                    <div className="mt-6 space-y-5 text-gray-300">
                        <div>
                            <p className="font-semibold text-white">Pressure Experiments</p>
                            <ul className="list-disc list-inside text-sm mt-1">
                                <li>Balloon in a bottle</li>
                                <li>Water pressure demonstration</li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-semibold text-white">Force & Motion</p>
                            <ul className="list-disc list-inside text-sm mt-1">
                                <li>Balloon rocket (Newton’s Third Law)</li>
                                <li>Pendulum experiment</li>
                                <li>Inclined plane friction test</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* ================= ENGAGEMENT & IMPACT ================= */}
            <div className="grid md:grid-cols-2 gap-10">

                <div className="bg-[#0b0f1a] border border-slate-800 rounded-2xl p-8 shadow-xl">
                    <h3 className="text-2xl font-bold">
                        Student <span className="text-green-400">Engagement</span>
                    </h3>

                    <ul className="mt-6 space-y-3 text-gray-300 list-disc list-inside">
                        <li>Active participation in experiments</li>
                        <li>Students asked insightful questions</li>
                        <li>High enthusiasm and curiosity towards physics</li>
                    </ul>
                </div>

                <div className="bg-[#0b0f1a] border border-slate-800 rounded-2xl p-8 shadow-xl">
                    <h3 className="text-2xl font-bold">
                        Event <span className="text-green-400">Impact</span>
                    </h3>

                    <ul className="mt-6 space-y-3 text-gray-300 list-disc list-inside">
                        <li>Improved understanding of physics concepts</li>
                        <li>Positive feedback from students and teachers</li>
                        <li>Promoted STEM awareness</li>
                        <li>Strengthened community outreach by ACM & CSI</li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-col gap-2 p-4">
                <div className="relative h-72 rounded-2xl overflow-hidden border border-slate-800">
                    <Image
                        src="/assets/events/social-event/image1.png"
                        alt="Social Event Image 1"
                        fill
                        className="object-contain"
                    />
                </div>

                <div className="relative h-72 rounded-2xl overflow-hidden border border-slate-800">
                    <Image
                        src="/assets/events/social-event/image2.png"
                        alt="Social Event Image 2"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>

        </section>
    );
};

export default SocialEvent;
