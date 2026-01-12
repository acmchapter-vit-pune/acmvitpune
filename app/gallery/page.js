"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import fs from 'fs'
import path from 'path'

async function generateGalleryImages() {
    const baseDir = path.join(process.cwd(), 'public/assets/events')
    const folders = ['codesprint', 'Enigma', 'social-event']
    const galleryImages = []
    let id = 1

    folders.forEach(folder => {
        const folderPath = path.join(baseDir, folder)
        if (fs.existsSync(folderPath)) {
            const files = fs.readdirSync(folderPath)
                .filter(file => /\.(png|jpg|jpeg|webp)$/i.test(file))
                .sort() // Optional: sort for consistent order
            files.forEach(file => {
                galleryImages.push({
                    id: id++,
                    src: `/assets/events/${folder}/${file}`,
                    alt: `${folder.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())} - ${path.parse(file).name}`
                })
            })
        }
    })
    return galleryImages
}

const GalleryPage = async () => {
    const galleryImages = await generateGalleryImages()

    const chunkArray = (arr, size) => {
        return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
            arr.slice(i * size, i * size + size)
        )
    }

    const initialImages = galleryImages.slice(0, 6)
    const scrollRows = chunkArray(galleryImages.slice(6), 3)

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, x: 80 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.7, ease: "easeOut" }
        }
    }

    return (
        <div className="h-full bg-[#0a0f1d] px-6 py-28 text-white font-sans">
            {/* Header Section */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl font-bold tracking-tight">
                    ACM <span className="text-green-400">Gallery</span>
                </h2>
                <div className="h-1 w-20 bg-green-500 mx-auto mt-4 rounded-full shadow-[0_0_10px_#22c55e]" />
            </motion.div>

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

const ImageCard = React.forwardRef(({ image, variants }, ref) => (
    <motion.div ref={ref} variants={variants} className="relative group">
        <div className="relative aspect-video overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl transition-all duration-500 group-hover:border-green-500/50">
            <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
        </div>
    </motion.div>
))

ImageCard.displayName = 'ImageCard'

export default GalleryPage
