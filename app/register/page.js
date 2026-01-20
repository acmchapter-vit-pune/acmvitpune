"use client";

import React from "react";
import { useScroll, useSpring, motion } from "framer-motion";

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
};

const FlipCard = ({ children, rules, title = "Criteria/Rules", className, delay = 0 }) => {
    return (
        <motion.div
            {...fadeUp}
            transition={{ delay }}
            className={`group perspective-1000 ${className}`}
        >
            <div className="relative w-full h-full transition-all duration-700 preserve-3d group-hover:rotate-x-180">
                {/* FRONT FACE */}
                <div className="w-full h-full backface-hidden">
                    {children}
                </div>

                {/* BACK FACE */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-x-180 rounded-2xl sm:rounded-3xl bg-slate-900 border border-green-500/40 p-6 flex flex-col justify-center items-center shadow-2xl shadow-green-500/20">
                    <div className="mb-3 w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500/50">
                        <span className="text-green-500 font-bold text-[10px]">ACM</span>
                    </div>

                    <h4 className="text-green-500 font-bold uppercase tracking-widest text-xs mb-4">{title}</h4>

                    <ul className="space-y-2 text-left w-full overflow-y-auto pr-2 custom-scrollbar">
                        {rules.map((rule, idx) => (
                            <li key={idx} className="text-[11px] sm:text-xs text-slate-300 flex gap-2 items-start leading-tight">
                                <span className="text-green-500">•</span>
                                <span>{rule}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    );
};

const Page = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section className="relative w-full py-23 overflow-hidden bg-linear-to-br from-black via-slate-900 to-black text-white">
            <style jsx global>{`
                .perspective-1000 { perspective: 1000px; }
                .preserve-3d { transform-style: preserve-3d; }
                .backface-hidden { backface-visibility: hidden; -webkit-backface-visibility: hidden; }
                .rotate-x-180 { transform: rotateX(180deg); }
                
                @keyframes gold-glow {
                    0% { text-shadow: 0 0 5px #eab308, 0 0 10px #eab308; opacity: 0.8; }
                    50% { text-shadow: 0 0 15px #fde047, 0 0 25px #ca8a04; opacity: 1; color: #fffbeb; }
                    100% { text-shadow: 0 0 5px #eab308, 0 0 10px #eab308; opacity: 0.8; }
                }
                .glow-gold {
                    animation: gold-glow 2s infinite ease-in-out;
                    color: #fde047;
                    font-weight: 900;
                    letter-spacing: 0.05em;
                }
                .custom-scrollbar::-webkit-scrollbar { width: 3px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: #22c55e; border-radius: 10px; }
            `}</style>

            <motion.div className="fixed top-0 left-0 right-0 h-1 bg-green-500 origin-left z-100" style={{ scaleX }} />

            {/* HEADING SECTION */}
            <div className="relative max-w-5xl mx-auto px-4 text-center mb-16">
                <motion.div {...fadeUp} className="inline-block px-4 py-1.5 mb-6 border border-green-500/30 rounded-full bg-green-500/5 backdrop-blur-sm">
                    <span className="text-green-500 tracking-[0.2em] text-xs font-bold uppercase">ACM VIT PUNE</span>
                </motion.div>
                <motion.h1 {...fadeUp} className="text-4xl md:text-6xl font-black mb-4">CodeSprint 2.0</motion.h1>
                <p className="text-slate-400 max-w-xl mx-auto text-sm">Team-based Competition</p>
            </div>

            {/* TRIANGLE FORMATION */}
            <div className="relative max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">

                {/* TOP BOX: Event Overview & Rules */}
                <FlipCard
                    title="General Rules"
                    className="md:col-span-2 max-w-2xl mx-auto w-full h-80 sm:h-65"
                    rules={[
                        "Teams must consist of at most 2 members including leader.",
                        "Once registered, teams cannot change their members.",
                        "Every one should bring there own laptops to round 2.",
                        "Rounds should be attended on team leaders laptop/account.",
                        "Plagiarism or malpractice will result in immediate disqualification.",
                        "Eligibility: Open to all registered participants with a valid HackerRank ID."
                    ]}
                >
                    <div className="h-full p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md relative overflow-hidden flex flex-col justify-center">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 blur-3xl rounded-full -mr-16 -mt-16" />
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-green-500">
                            <span className="p-2 bg-green-500/20 rounded-lg">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                            </span>
                            Event Overview
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-4 text-sm">
                            <ul className="space-y-3">
                                <li className="flex justify-between border-b border-white/5 pb-1">
                                    <span className="text-slate-400">Team Size:</span>
                                    <span className="font-medium text-white">1 - 2 members</span>
                                </li>
                                <li className="flex justify-between border-b border-white/5 pb-1">
                                    <span className="text-slate-400">Registration:</span>
                                    <span className="glow-gold">FREE OF COST</span>
                                </li>
                            </ul>
                            <ul className="space-y-3">
                                <li className="flex justify-between border-b border-white/5 pb-1">
                                    <span className="text-slate-400">Time:</span>
                                    <span className="font-medium text-white underline decoration-green-500/50">January 23 2026</span>
                                </li>
                                <li className="flex justify-between border-b border-white/5 pb-1">
                                    <span className="text-slate-400">Total Rounds:</span>
                                    <span className="font-medium text-white">2 Rounds</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </FlipCard>

                {/* LEFT BOX: Round 1 */}
                <FlipCard
                    delay={0.1}
                    title="Judging Criteria R1"
                    className="h-85"
                    rules={[
                        "Topics: Aptitude, Logical Problem Solving, OOPS.",
                        "Judging: Accuracy and Speed of solving questions.",
                        "Shortlisting: Top teams based on performance will advance to R2.",
                    ]}
                >
                    <div className="h-full p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col">
                        <h3 className="text-xl font-bold mb-2 text-green-400">Round 1: Online Hunt</h3>
                        <div className="space-y-2 text-xs text-slate-300 grow">
                            <p className="flex justify-between"><span className="text-slate-500 italic">Date:</span> 23 Jan 2026</p>
                            <p className="flex justify-between"><span className="text-slate-500 italic">Duration:</span> 40 mins</p>
                            <p className="flex justify-between"><span className="text-slate-500 italic">Type:</span> MCQ Based</p>
                            <p className="flex justify-between"><span className="text-slate-500 italic">Platform:</span> Unstop</p>
                            <p className="mt-4 text-green-500 font-semibold uppercase text-[10px] tracking-widest">Key Topics</p>
                            <p className="text-slate-400">Aptitude • Logical • OOPS</p>
                        </div>
                        <div className="mt-4 text-[13px] font-mono py-1 px-3 bg-green-500/10 text-green-500 rounded-full w-fit">MODE: ONLINE</div>
                    </div>
                </FlipCard>

                {/* RIGHT BOX: Round 2 */}
                <FlipCard
                    delay={0.2}
                    title="Judging Criteria R2"
                    className="h-85"
                    rules={[
                        "Topics: Data Structures & Algorithms.",
                        "Judging: Correctness of solution and submission time.",
                        "Requirement: Must have a valid HackerRank account.",
                        "Laptops: Mandatory to bring your own device."
                    ]}
                >
                    <div className="h-full p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col">
                        <h3 className="text-xl font-bold mb-2 text-green-400">Round 2: The Sprint</h3>
                        <div className="space-y-2 text-xs text-slate-300 grow">
                            <p className="flex justify-between"><span className="text-slate-500 italic">Date:</span> 24 Jan 2026</p>
                            <p className="flex justify-between"><span className="text-slate-500 italic">Duration:</span> 60 mins</p>
                            <p className="flex justify-between"><span className="text-slate-500 italic">Venue:</span> VIT Kondhwa , B001</p>
                            <p className="flex justify-between"><span className="text-slate-500 italic">Platform:</span> HackerRank</p>
                            <p className="mt-4 text-green-500 font-semibold uppercase text-[10px] tracking-widest">Key Topics</p>
                            <p className="text-slate-400">Data Structures & Algorithms</p>
                        </div>
                        <div className="mt-4 text-[13px] font-mono py-1 px-3 bg-green-500/10 text-green-500 rounded-full w-fit">MODE: OFFLINE</div>
                    </div>
                </FlipCard>

                {/* CTA BUTTON */}
                <div className="md:col-span-2 flex flex-col items-center mt-8 gap-4">
                    <a href="https://forms.gle/YZGYG8BoGgty4mbs9" target="_blank">
                        <button className="px-16 py-4 bg-green-500 text-black font-black rounded-full hover:scale-105 transition-all shadow-lg shadow-green-500/20 uppercase tracking-tighter">
                            Register
                        </button>
                    </a>
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest">Hover/Tap cards to see judging criteria</p>
                </div>
            </div>
        </section>
    );
};

export default Page;