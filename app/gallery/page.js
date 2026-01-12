"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const GalleryPage = () => {

    const galleryImages = [
        { id: 1, src: "/assets/events/codesprint/event1.png", alt: "Codesprint 1" },
        { id: 2, src: "/assets/events/codesprint/event2.png", alt: "Codesprint 2" },
        { id: 3, src: "/assets/events/codesprint/event3.png", alt: "Codesprint 3" },
        { id: 4, src: "/assets/events/codesprint/winner1.png", alt: "Codesprint 4" },
        { id: 5, src: "/assets/events/codesprint/winner2.png", alt: "Codesprint 5" },
        { id: 6, src: "/assets/events/codesprint/winner3.png", alt: "Codesprint 5" },
        { id: 7, src: "/assets/events/Enigma/image0.png", alt: "Enigma 6" },
        { id: 8, src: "/assets/events/Enigma/image1.png", alt: "Enigma 7" },
        { id: 9, src: "/assets/events/Enigma/image2.png", alt: "Enigma 8" },
        { id: 10, src: "/assets/events/Enigma/image3.png", alt: "Enigma 9" },
        { id: 11, src: "/assets/events/Enigma/image5.png", alt: "Enigma 9" },
        { id: 12, src: "/assets/events/Enigma/image6.png", alt: "Enigma 9" },
        { id: 13, src: "/assets/events/Enigma/image7.png", alt: "Enigma 9" },
        { id: 14, src: "/assets/events/Enigma/image8.png", alt: "Enigma 9" },
        { id: 15, src: "/assets/events/Enigma/image9.png", alt: "Enigma 9" },
        { id: 16, src: "/assets/events/Enigma/image41.png", alt: "Enigma 10" },
        { id: 17, src: "/assets/events/social-event/image1.png", alt: "Social Event 11" },
        { id: 18, src: "/assets/events/social-event/image2.png", alt: "Social Event 12" },
    ];


    const chunkArray = (arr, size) => {
        return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
            arr.slice(i * size, i * size + size)
        );
    };

    const initialImages = galleryImages.slice(0, 6);
    const scrollRows = chunkArray(galleryImages.slice(6), 3);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: 80 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.7, ease: "easeOut" }
        }
    };

    return (
        <div className="h-full bg-[#0a0f1d] px-6 py-28  text-white font-sans">
            {/* Header Section */}
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold tracking-tight"
                >
                    ACM <span className="text-green-400">Gallery</span>
                </motion.h2>
                <div className="h-1 w-20 bg-green-500 mx-auto mt-4 rounded-full shadow-[0_0_10px_#22c55e]" />
            </div>

            <div className="max-w-6xl mx-auto space-y-8">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {initialImages.map((image) => (
                        <ImageCard key={image.id} image={image} variants={itemVariants} />
                    ))}
                </motion.div>

                {/* SCROLL GROUPS: 3 Images each */}
                {scrollRows.map((row, rowIndex) => (
                    <motion.div
                        key={rowIndex}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {row.map((image) => (
                            <ImageCard key={image.id} image={image} variants={itemVariants} />
                        ))}
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

const ImageCard = ({ image, variants }) => (
    <motion.div variants={variants} className="relative group">
        <div className="relative aspect-video overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl transition-all duration-500 group-hover:border-green-500/50">
            <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
        </div>
    </motion.div>
)

export default GalleryPage;