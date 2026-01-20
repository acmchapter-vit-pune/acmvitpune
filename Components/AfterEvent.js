import React from 'react'

const AfterEvent = () => {
    return (
        <div>
            <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="max-w-2xl mx-auto">
                <p className="text-slate-400 text-xl leading-relaxed">
                    Recognition of excellence: Our team was honored with the{" "}
                    <span className="text-white border-b-2 border-green-500 font-semibold tracking-wide">
                        Early Bird Award
                    </span>.
                </p>
            </motion.div>

            {/* ---------- WHAT IS EVENT ---------- */}
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
        </div>
    )
}

export default AfterEvent
