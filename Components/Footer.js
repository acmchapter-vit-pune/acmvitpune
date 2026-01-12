import React from 'react'
import Image from 'next/image'
import { Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
    return (
        <footer
            id="contact"
            className="bg-[#0a0f1d] text-white px-6 sm:px-8 md:px-20 py-8 md:py-12 font-sans"
        >
            <div
                className="
          max-w-7xl mx-auto
          flex flex-col md:flex-row
          gap-8 md:gap-16
          items-start md:items-stretch
        "
            >
                {/* Left Section: About */}
                <div className="flex-1 flex flex-col gap-3 text-center md:text-left">
                    <h2 className="text-xl md:text-2xl font-bold">About</h2>
                    <p className="text-slate-300 leading-relaxed text-sm md:text-base max-w-md mx-auto md:mx-0">
                        VIT ACM Student Chapter aims to provide students unique opportunities
                        for networking, mentoring and bonding over common interests by
                        offering a range of resources and benefits for students to help them
                        shape the future of computing.
                    </p>
                </div>

                {/* Center Section: Address */}
                <div className="flex-1 flex flex-col gap-4 items-center md:items-start text-center md:text-left">
                    <div className="mb-1">
                        <Image
                            src={'/assets/footerLogo.png'}
                            alt={'ACM VIIT Logo'}
                            width={180}
                            height={60}
                            quality={90}
                            className="object-contain"
                        />
                    </div>
                    <div className="text-slate-300 text-sm md:text-base space-y-1">
                        <p>VIIT B Building</p>
                        <p>Kondhwa Budruk, Pune</p>
                        <p className="hover:text-white cursor-pointer transition-colors">
                            acmchapter@viit.ac.in
                        </p>
                    </div>
                </div>

                {/* Right Section: Social Links */}
                <div className="flex-1 flex flex-col gap-3 items-center md:items-end text-center md:text-right">
                    <h2 className="text-xl md:text-2xl font-bold">Get in touch</h2>
                    <div className="flex flex-col gap-3 w-full max-w-xs md:max-w-none">
                        <a
                            href="https://www.instagram.com/viitacm/?hl=en"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-center md:justify-end gap-3 text-slate-300 hover:text-white transition-colors"
                        >
                            <Instagram size={20} />
                            <span className="text-sm md:text-base">
                VIT ACM Student Chapter
              </span>
                        </a>
                        <a
                            href="https://www.linkedin.com/company/viit-acm-student-chapter/"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-center md:justify-end gap-3 text-slate-300 hover:text-white transition-colors"
                        >
                            <Linkedin size={20} />
                            <span className="text-sm md:text-base">viitacm</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Section: Copyright */}
            <div className="max-w-7xl mx-auto mt-10 md:mt-16 pt-6 md:pt-8 border-t border-slate-800 text-center">
                <p className="text-slate-400 text-xs sm:text-sm">
                    Copyright © 2026 All Rights Reserved by VIT ACM.
                </p>
            </div>
        </footer>
    )
}

export default Footer
