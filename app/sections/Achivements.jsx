'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const events = [
    {
        id: 1,
        name: '🥇 OXFORD PROFESSIONAL CHAMPIONSHIP - 2025',
        shortDescription: 'Title belt champion - Abishek CR',
        description: 'Abhishek CR emerged victorious at the Oxford Professional Championship 2025, claiming the prestigious FL Muay Thai Professional Title Belt.',
        mainImage: '/assets/images/event1/event1-1.jpeg',
        images: [
            { id: 1, src: '/assets/images/event1/event1-1.jpeg', alt: 'Event Image' },
            { id: 2, src: '/assets/images/event1/event1-2.jpeg', alt: 'Event Image' },
        ]
    },
    {
        id: 2,
        name: '🥊 PRIMAL Kick Boxing Title Belt Championship',
        shortDescription: 'Title belt champion - Nishak TK',
        description: 'Nishak TK demonstrated exceptional prowess at the PRIMAL Kick Boxing Championship.',
        mainImage: '/assets/images/event2/event2-1.jpeg',
        images: [
            { id: 1, src: '/assets/images/event2/event2-1.jpeg', alt: 'Event Image' },
            { id: 2, src: '/assets/images/event2/event2-2.jpeg', alt: 'Event Image' },
        ]
    },
    {
        id: 3,
        name: "🥇 South India Open Championship - 2024",
        shortDescription: "Gold Medal – Ayodhana Fighter",
        description: "Ayodhana Martial Arts Academy secured a Gold Medal at the South India Open Championship 2024.",
        mainImage: "/assets/images/event5/event5-1.jpeg",
        images: [
            { id: 1, src: "/assets/images/event5/event5-1.jpeg", alt: "Event Image" },
            { id: 2, src: "/assets/images/event5/event5-2.jpeg", alt: "Event Image" },
        ],
    },
    {
        id: 4,
        name: "🏆 District Level Martial Arts Championship - 2025",
        shortDescription: "Multiple Medal Winners",
        description: "Our students achieved multiple podium finishes at the District Level Martial Arts Championship 2025.",
        mainImage: "/assets/images/event6/event6-1.jpeg",
        images: [
            { id: 1, src: "/assets/images/event6/event6-1.jpeg", alt: "Event Image" },
            { id: 2, src: "/assets/images/event6/event6-2.jpeg", alt: "Event Image" },
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
                <div className="grid grid-cols-1 md:grid-cols-2 w-full">

                    {events.map((event) => (
                        <div
                            key={event.id}
                            onClick={() => openEventModal(event)}
                            className="group relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden cursor-pointer"
                        >
                            <Image
                                src={event.mainImage}
                                alt={event.name}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                            <div className="absolute bottom-0 p-6">
                                <h3 className="text-2xl font-bold text-white">
                                    {event.name}
                                </h3>
                                <p className="text-white/80">
                                    {event.shortDescription}
                                </p>
                            </div>
                        </div>
                    ))}

                </div>
            </section>

            {/* Event Modal */}
            {isEventModalOpen && selectedEvent && (
                <div
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
                    onClick={closeEventModal}
                >
                    <div
                        className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative h-72 w-full">
                            <Image
                                src={selectedEvent.mainImage}
                                alt={selectedEvent.name}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="p-6">
                            <h2 className="text-2xl font-bold mb-4">
                                {selectedEvent.name}
                            </h2>

                            <p className="text-gray-600 mb-6">
                                {selectedEvent.description}
                            </p>

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {selectedEvent.images.map((image) => (
                                    <div
                                        key={image.id}
                                        className="relative h-40 cursor-pointer"
                                        onClick={() => openImageModal(image, selectedEvent.name)}
                                    >
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            className="object-cover rounded-lg"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Image Modal */}
            {isImageModalOpen && selectedImage && (
                <div
                    className="fixed inset-0 bg-black/95 flex items-center justify-center z-[60]"
                    onClick={closeImageModal}
                >
                    <div className="relative w-full h-[90vh] max-w-6xl">
                        <Image
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            )}
        </>
    )
}
