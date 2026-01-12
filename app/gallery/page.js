"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const GalleryPage = () => {
    const galleryImages = [
        { id: 1, src: "/assets/gallery/image1.png", alt: "Event 1" },
        { id: 2, src: "/assets/gallery/image2.png", alt: "Event 2" },
        { id: 3, src: "/assets/gallery/image3.png", alt: "Event 3" },
        { id: 4, src: "/assets/gallery/image4.png", alt: "Event 4" },
        { id: 5, src: "/assets/gallery/image5.png", alt: "Event 5" },
        { id: 6, src: "/assets/gallery/image6.png", alt: "Event 6" },
        { id: 7, src: "/assets/gallery/image7.png", alt: "Event 7" },
        { id: 8, src: "/assets/gallery/image8.png", alt: "Event 8" },
        { id: 9, src: "/assets/gallery/image9.png", alt: "Event 9" },
        { id: 10, src: "/assets/gallery/image10.png", alt: "Event 10" },
        { id: 11, src: "/assets/gallery/image11.png", alt: "Event 11" },
        { id: 12, src: "/assets/gallery/image12.png", alt: "Event 12" },
        { id: 13, src: "/assets/gallery/image13.png", alt: "Event 13" },
        { id: 14, src: "/assets/gallery/image14.png", alt: "Event 14" },
        { id: 15, src: "/assets/gallery/image15.png", alt: "Event 15" },
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
        <div className="h-full bg-[#0a0f1d] px-4 sm:px-6 py-20 sm:py-24 md:py-28 text-white font-sans">
            {/* Header Section */}
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl sm:text-4xl font-bold tracking-tight"
                >
                    ACM <span className="text-green-400">Gallery</span>
                </motion.h2>
                <div className="h-1 w-16 sm:w-20 bg-green-500 mx-auto mt-3 sm:mt-4 rounded-full shadow-[0_0_10px_#22c55e]" />
            </div>

            <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8"
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
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8"
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
                quality={95}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
        </div>
    </motion.div>
)

export default GalleryPage;