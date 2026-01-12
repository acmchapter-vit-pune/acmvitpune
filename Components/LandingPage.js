"use client"
import Spline from "@splinetool/react-spline";
import BlurText from "./BlurText";

export default function LandingPage() {
    return (
        <div className="relative w-full min-h-screen bg-[#0a0f1d] overflow-hidden font-sans">


            <div className="flex flex-col md:flex-row items-center justify-between min-h-screen px-4 sm:px-6 md:px-16 pt-20 md:pt-0">
                {/* Text Content */}
                <div className="z-10 w-full md:w-1/2 flex flex-col justify-center order-2 md:order-1 text-center md:text-left">
                    <BlurText
                        text="Association for Computing Machinery"
                        delay={150}
                        animateBy="words"
                        direction="top"
                        className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight mb-3 sm:mb-4"
                    />
                    <h2 className="text-lg sm:text-xl md:text-2xl text-green-400 font-medium mb-4 sm:mb-6">
                        VIT Pune Student Chapter
                    </h2>
                    <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-lg mx-auto md:mx-0 leading-relaxed mb-6 sm:mb-8 px-2 sm:px-0">
                        Advancing computing as a science and profession. Join the premier global community of computing professionals and students.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 sm:gap-4">
                        <button className="px-6 sm:px-8 py-2.5 sm:py-3 bg-green-500 hover:bg-green-600 text-black text-sm sm:text-base rounded-full font-semibold transition-all shadow-lg shadow-green-500/20 active:scale-95">
                            Our Initiatives
                        </button>
                        <button className="px-6 sm:px-8 py-2.5 sm:py-3 border border-gray-700 hover:border-gray-500 text-white text-sm sm:text-base rounded-full font-semibold transition-all active:scale-95">
                            Join Chapter
                        </button>
                    </div>
                </div>

                {/* Spline Model Container */}
                <div className="w-full md:w-1/2 h-[40vh] sm:h-[45vh] md:h-[80vh] relative order-1 md:order-2 flex items-center justify-center mb-6 md:mb-0">
                    <Spline
                        className="w-full h-full scale-[0.6] sm:scale-75 md:scale-100"
                        scene="https://prod.spline.design/5bx7runDgMCS437l/scene.splinecode"
                    />
                </div>
            </div>

            {/* Bottom Gradient Decor */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
        </div>
    )
}