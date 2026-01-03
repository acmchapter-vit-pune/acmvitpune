"use client"
import Spline from "@splinetool/react-spline";
import BlurText from "./BlurText";

export default function LandingPage() {
    return (
        <div className="relative w-full min-h-screen bg-black overflow-hidden font-sans">


            <div className="flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-16 pt-24 md:pt-0">
                {/* Text Content */}
                <div className="z-10 w-full md:w-1/2 flex flex-col justify-center order-2 md:order-1">
                    <BlurText
                        text="Association for Computing Machinery"
                        delay={150}
                        animateBy="words"
                        direction="top"
                        className="text-4xl md:text-7xl font-bold tracking-tighter text-white leading-tight mb-4"
                    />
                    <h2 className="text-xl md:text-2xl text-blue-400 font-medium mb-6">
                        VIT Pune Student Chapter
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed mb-8">
                        Advancing computing as a science and profession. Join the premier global community of computing professionals and students.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all shadow-lg shadow-blue-500/20 active:scale-95">
                            Our Initiatives
                        </button>
                        <button className="px-8 py-3 border border-gray-700 hover:border-gray-500 text-white rounded-full font-semibold transition-all active:scale-95">
                            Join Chapter
                        </button>
                    </div>
                </div>

                {/* Spline Model Container */}
                <div className="w-full md:w-1/2 h-[45vh] md:h-[80vh] relative order-1 md:order-2 flex items-center justify-center">
                    <Spline
                        className="w-full h-full scale-75 md:scale-100"
                        scene="https://prod.spline.design/5bx7runDgMCS437l/scene.splinecode"
                    />
                </div>
            </div>

            {/* Bottom Gradient Decor */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
        </div>
    )
}