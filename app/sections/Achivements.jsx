'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const events = [
    {
        id: 1,
        name: 'Oxford Professional Championship – 2025',
        shortDescription: 'Oxford Professional Championship 2025 Title Belt Champion – Abhishek CR',
        description:
            'Abhishek CR delivered an outstanding performance at the Oxford Professional Championship 2025, securing the prestigious Title Belt through skill, determination, and relentless spirit.',
        mainImage: '/assets/images/oxford_championship/event1-7.jpg',
        images: [
            { id: 1, src: '/assets/images/oxford_championship/event1-7.jpg', alt: 'Championship Celebration' },
            { id: 2, src: '/assets/images/oxford_championship/event1-8.jpg', alt: 'Victory Moment' },
            { id: 3, src: '/assets/images/oxford_championship/event1-9.jpeg', alt: 'Award Ceremony' },
            { id: 4, src: '/assets/images/oxford_championship/event1-10.jpeg', alt: 'Professional Title Belt' },
            { id: 5, src: '/assets/images/oxford_championship/event1-11.jpeg', alt: 'Team Celebration' },
        ]
    },
    {
        id: 2,
        name: 'Primal Kick Boxing Championship – Title Belt',
        shortDescription: 'Title Belt Champion – Nishak TK',
        description:
            'Nishak TK demonstrated exceptional prowess at the Primal Kick Boxing Championship, securing the prestigious title belt.',
        mainImage: '/assets/images/primal_title_belt/event2-1.jpeg',
        images: [
            { id: 1, src: '/assets/images/primal_title_belt/event2-1.jpeg', alt: 'Team Recognition' },
            { id: 2, src: '/assets/images/primal_title_belt/event2-2.jpeg', alt: 'Gold Medal Ceremony' },
            { id: 3, src: '/assets/images/primal_title_belt/event2-3.jpeg', alt: 'Fight Action' },
            { id: 4, src: '/assets/images/primal_title_belt/event2-4.jpeg', alt: 'Award Presentation' },
        ]
    },
    {
        id: 3,
        name: 'FL Muay Thai Professional Championship – 2025',
        shortDescription: 'Professional Title Belt – Abhishek CR',
        description:
            'Abhishek CR claimed the FL Muay Thai Professional Title Belt in 2025 with elite performance and strategic dominance.',
        mainImage: '/assets/images/fl_muay_thai/event1-3.jpeg',
        images: [
            { id: 1, src: '/assets/images/fl_muay_thai/event1-3.jpeg', alt: 'Championship Moment' },
            { id: 2, src: '/assets/images/fl_muay_thai/event1-2.jpeg', alt: 'Belt Ceremony' },
            { id: 3, src: '/assets/images/fl_muay_thai/event1-1.jpeg', alt: 'Certificates Presentation' },
            { id: 4, src: '/assets/images/fl_muay_thai/event1-4.jpeg', alt: 'Victory Celebration' },
        ],
    },
    {
        id: 4,
        name: 'All India Full Contact Heavyweight Championship – 2025',
        shortDescription: 'Champion – Anil Babu | Kaju Kado Karate',
        description:
            'Anil Babu secured the All India Full Contact Heavyweight Championship title in 2025.',
        mainImage: '/assets/images/kaju_kado_karate/image1.png',
        images: [
            { id: 1, src: '/assets/images/kaju_kado_karate/image1.png', alt: 'Heavyweight Championship Moment' },
            { id: 2, src: '/assets/images/kaju_kado_karate/image2.png', alt: 'National Award Ceremony' },
            { id: 3, src: '/assets/images/kaju_kado_karate/image3.png', alt: 'Victory Recognition' },
        ],
    }
]

export default function Achievements() {

    const [selectedEvent, setSelectedEvent] = useState(null)
    const [isEventModalOpen, setIsEventModalOpen] = useState(false)

    const [isImageModalOpen, setIsImageModalOpen] = useState(false)
    const [selectedImageIndex, setSelectedImageIndex] = useState(null)
    const [currentImages, setCurrentImages] = useState([])

    // Lock scroll properly
    useEffect(() => {
        document.body.style.overflow =
            isEventModalOpen || isImageModalOpen ? 'hidden' : 'auto'
    }, [isEventModalOpen, isImageModalOpen])

    const openEventModal = (event) => {
        setSelectedEvent(event)
        setIsEventModalOpen(true)
    }

    const closeEventModal = () => {
        setIsEventModalOpen(false)
        setSelectedEvent(null)
    }

    const openImageModal = (index, images) => {
        setSelectedImageIndex(index)
        setCurrentImages(images)
        setIsImageModalOpen(true)
    }

    const closeImageModal = () => {
        setIsImageModalOpen(false)
        setSelectedImageIndex(null)
        setCurrentImages([])
    }

    const showNextImage = () => {
        setSelectedImageIndex((prev) =>
            prev === currentImages.length - 1 ? 0 : prev + 1
        )
    }

    const showPrevImage = () => {
        setSelectedImageIndex((prev) =>
            prev === 0 ? currentImages.length - 1 : prev - 1
        )
    }

    // Keyboard support
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                if (isImageModalOpen) closeImageModal()
                else if (isEventModalOpen) closeEventModal()
            }

            if (isImageModalOpen) {
                if (e.key === 'ArrowRight') showNextImage()
                if (e.key === 'ArrowLeft') showPrevImage()
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [isImageModalOpen, currentImages])

    return (
        <>
            <section className="bg-gradient-to-b from-gray-50 to-white w-full py-16" id='achievements'>

                <div className="text-center mb-12">
                    <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
                        Official Championship Archive
                    </p>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4">
                        Achievements
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
                    {events.map((event) => (
                        <div
                            key={event.id}
                            onClick={() => openEventModal(event)}
                            className="group relative h-[450px] overflow-hidden cursor-pointer rounded-xl"
                        >
                            <Image
                                src={event.mainImage}
                                alt={event.name}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

                            <div className="absolute bottom-0 p-6">
                                <h3 className="text-2xl font-extrabold uppercase tracking-wide text-white mb-3">
                                    {event.name}
                                </h3>
                                <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 mb-4"></div>
                                <p className="text-white/90 text-sm">
                                    {event.shortDescription}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* EVENT MODAL */}
            {isEventModalOpen && selectedEvent && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
                    <div className="relative bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">

                        <button
                            onClick={closeEventModal}
                            className="absolute top-4 right-4 bg-white w-10 h-10 rounded-full shadow flex items-center justify-center z-20"
                        >
                            ✕
                        </button>

                        <div className="relative h-80 w-full">
                            <Image
                                src={selectedEvent.mainImage}
                                alt={selectedEvent.name}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                            <div className="absolute bottom-0 p-6">
                                <h2 className="text-3xl font-extrabold uppercase tracking-wider text-white">
                                    {selectedEvent.name}
                                </h2>
                            </div>
                        </div>

                        <div className="p-8">
                            <p className="text-gray-600 mb-8">
                                {selectedEvent.description}
                            </p>

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {selectedEvent.images.map((image, index) => (
                                    <div
                                        key={image.id}
                                        onClick={() => openImageModal(index, selectedEvent.images)}
                                        className="relative h-40 cursor-pointer overflow-hidden rounded-lg"
                                    >
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            className="object-cover hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* IMAGE MODAL */}
            {isImageModalOpen && selectedImageIndex !== null && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95">

                    <button
                        onClick={closeImageModal}
                        className="absolute top-6 right-6 bg-white w-10 h-10 rounded-full flex items-center justify-center z-20"
                    >
                        ✕
                    </button>

                    <button
                        onClick={showPrevImage}
                        className="absolute left-6 text-white text-5xl font-bold z-20"
                    >
                        ‹
                    </button>

                    <div className="relative w-full h-[90vh] max-w-6xl">
                        <Image
                            src={currentImages[selectedImageIndex].src}
                            alt={currentImages[selectedImageIndex].alt}
                            fill
                            className="object-contain"
                        />
                    </div>

                    <button
                        onClick={showNextImage}
                        className="absolute right-6 text-white text-5xl font-bold z-20"
                    >
                        ›
                    </button>

                    <div className="absolute bottom-6 text-white text-sm">
                        {selectedImageIndex + 1} / {currentImages.length}
                    </div>
                </div>
            )}
        </>
    )
}