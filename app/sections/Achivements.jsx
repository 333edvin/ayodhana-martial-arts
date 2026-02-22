'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const events = [
    {
        id: 1,
        name: 'Oxford Professional Championship – 2025',
        shortDescription: 'FL Muay Thai Professional Title Belt – Abhishek CR',
        description:
            'Abhishek CR emerged victorious at the Oxford Professional Championship 2025, claiming the prestigious FL Muay Thai Professional Title Belt. This championship victory showcases exceptional skill, dedication, and mastery in professional Muay Thai.',
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
            'Nishak TK demonstrated exceptional prowess at the Primal Kick Boxing Championship, securing the prestigious title belt. This victory highlights strength, technical excellence, and competitive determination.',
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
            'Abhishek CR claimed the FL Muay Thai Professional Title Belt in 2025 with elite performance, precision, and strategic dominance. A defining milestone in professional Muay Thai excellence.',
        mainImage: '/assets/images/fl_muay_thai/event1-3.jpeg',
        images: [
            { id: 1, src: '/assets/images/fl_muay_thai/event1-3.jpeg', alt: 'Championship Moment' },
            { id: 2, src: '/assets/images/fl_muay_thai/event1-2.jpeg', alt: 'Belt Ceremony' },
            { id: 3, src: '/assets/images/fl_muay_thai/event1-1.jpeg', alt: 'Certificates Presentation' },
            { id: 4, src: '/assets/images/fl_muay_thai/event1-4.jpeg', alt: 'Victory Celebration' },
            { id: 5, src: '/assets/images/fl_muay_thai/event1-5.jpeg', alt: 'Professional Recognition' },
            { id: 6, src: '/assets/images/fl_muay_thai/event1-6.jpeg', alt: 'Elite Performance' },
        ],
    },
    {
        id: 4,
        name: 'All India Full Contact Heavyweight Championship – 2025',
        shortDescription: 'Champion – Anil Babu | Kaju Kado Karate',
        description:
            'Anil Babu secured the All India Full Contact Heavyweight Championship title in 2025. Demonstrating exceptional strength, technique, and discipline, this victory marks a proud national-level achievement.',
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
    const [selectedImage, setSelectedImage] = useState(null)
    const [isEventModalOpen, setIsEventModalOpen] = useState(false)
    const [isImageModalOpen, setIsImageModalOpen] = useState(false)

    const openEventModal = (event) => {
        setSelectedEvent(event)
        setIsEventModalOpen(true)
        document.body.style.overflow = 'hidden'
    }

    const closeEventModal = () => {
        setIsEventModalOpen(false)
        setSelectedEvent(null)
        document.body.style.overflow = 'unset'
    }

    const openImageModal = (image, eventName) => {
        setSelectedImage({ ...image, eventName })
        setIsImageModalOpen(true)
    }

    const closeImageModal = () => {
        setIsImageModalOpen(false)
        setSelectedImage(null)
    }

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                if (isImageModalOpen) closeImageModal()
                else if (isEventModalOpen) closeEventModal()
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [isEventModalOpen, isImageModalOpen])

    return (
        <>
            <section className="bg-gradient-to-b from-gray-50 to-white w-full" id="achievements">

                {/* Official Header */}
                <div className="text-center py-16">
                    <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
                        Official Championship Archive
                    </p>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4">
                        Achievements
                    </h2>
                </div>

                {/* Events Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 w-full">
                    {events.map((event) => (
                        <div
                            key={event.id}
                            onClick={() => openEventModal(event)}
                            className="group relative h-[450px] md:h-[550px] overflow-hidden cursor-pointer"
                        >
                            <Image
                                src={event.mainImage}
                                alt={event.name}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

                            <div className="absolute bottom-0 p-8">
                                <h3 className="text-2xl md:text-3xl font-extrabold uppercase tracking-wide text-white mb-3">
                                    {event.name}
                                </h3>

                                {/* Gold Accent Line */}
                                <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 mb-4"></div>

                                <p className="text-white/90 text-sm md:text-base">
                                    {event.shortDescription}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Event Modal */}
            {isEventModalOpen && selectedEvent && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4" onClick={closeEventModal}>
                    <div className="relative bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>

                        <button
                            onClick={closeEventModal}
                            className="absolute top-4 right-4 bg-white text-gray-800 w-10 h-10 rounded-full shadow-md flex items-center justify-center"
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
                            <div className="absolute bottom-0 p-8">
                                <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wider text-white">
                                    {selectedEvent.name}
                                </h2>
                            </div>
                        </div>

                        <div className="p-8">
                            <p className="text-gray-600 leading-relaxed mb-8">
                                {selectedEvent.description}
                            </p>

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {selectedEvent.images.map((image) => (
                                    <div
                                        key={image.id}
                                        onClick={() => openImageModal(image, selectedEvent.name)}
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
        </>
    )
}