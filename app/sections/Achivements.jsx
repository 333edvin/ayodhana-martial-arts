'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

// Event data structure
const events = [
    {
        id: 1,
        name: '🥇 OXFORD PROFESSIONAL CHAMPIONSHIP - 2025',
        shortDescription: 'Title belt champion - Abishek CR',
        description: 'Abhishek CR emerged victorious at the Oxford Professional Championship 2025, claiming the prestigious FL Muay Thai Professional Title Belt. This championship victory showcases exceptional skill, dedication, and mastery in professional Muay Thai.',
        mainImage: '/assets/images/oxford_championship/event1-7.jpeg',
        images: [
            
            { id: 1, src: '/assets/images/oxford_championship/event1-7.jpg', alt: 'Group celebration' },
            { id: 2, src: '/assets/images/oxford_championship/event1-8.jpg', alt: 'Group celebration' },
            { id: 3, src: '/assets/images/oxford_championship/event1-9.jpeg', alt: 'Group celebration' },
            { id: 4, src: '/assets/images/oxford_championship/event1-10.jpeg', alt: 'Group celebration' },
            { id: 5, src: '/assets/images/oxford_championship/event1-11.jpeg', alt: 'Group celebration' },
        ]
    },
    {
        id: 2,
        name: '🥊 PRIMAL Kick Boxing Title Belt Championship',
        shortDescription: 'Title belt champion - Nishak TK',
        description: 'Nishak TK demonstrated exceptional prowess at the PRIMAL Kick Boxing Championship, securing the prestigious title belt. This victory highlights the strength, technique, and determination of our champion in the competitive kick boxing arena.',
        mainImage: '/assets/images/primal_title_belt/event2-1.jpeg',
        images: [
            { id: 1, src: '/assets/images/primal_title_belt/event2-1.jpeg', alt: 'Team photo with trophies' },
            { id: 2, src: '/assets/images/primal_title_belt/event2-2.jpeg', alt: 'Gold medal moments' },
            { id: 3, src: '/assets/images/primal_title_belt/event2-3.jpeg', alt: 'Competition action' },
            { id: 4, src: '/assets/images/primal_title_belt/event2-4.jpeg', alt: 'Award ceremony' },
        ]
    },
   {
        id: 3,
        name: "🥇 FL Muay Thai Professional Championship - 2025",
        shortDescription: "Professional Title Belt Champion – Abhishek CR",
        description:
            "Abhishek CR claimed the prestigious FL Muay Thai Professional Title Belt in 2025, delivering an outstanding performance marked by power, precision, and elite fight strategy. This professional championship victory highlights his dedication, warrior spirit, and mastery in competitive Muay Thai.",
        mainImage: "/assets/images/fl_muay_thai/event1-1.jpeg",
        images: [
            { id: 1, src: '/assets/images/fl_muay_thai/event1-1.jpeg', alt: 'Black Belt Ceremony group photo' },
            { id: 2, src: '/assets/images/fl_muay_thai/event1-2.jpeg', alt: 'Students receiving belts' },
            { id: 3, src: '/assets/images/fl_muay_thai/event1-3.jpeg', alt: 'Certificates presentation' },
            { id: 4, src: '/assets/images/fl_muay_thai/event1-4.jpeg', alt: 'Group celebration' },
            { id: 5, src: '/assets/images/fl_muay_thai/event1-5.jpeg', alt: 'Group celebration' },
            { id: 6, src: '/assets/images/fl_muay_thai/event1-6.jpeg', alt: 'Group celebration' },
            { id: 12, src: '/assets/images/fl_muay_thai/event1-12.jpeg', alt: 'Group celebration' },
        ],
    },
    {
        id: 4,
        name: "🏆 All India Full Contact Heavyweight Championship - 2025",
        shortDescription: "Champion – Anil Babu (Kaju Kado Karate)",
        description:
            "Anil Babu secured the prestigious All India Full Contact Heavyweight Championship title in Kaju Kado Karate – 2025. Demonstrating exceptional strength, technique, and warrior discipline, this victory marks a proud national-level achievement and reinforces the academy’s commitment to producing elite champions.",
        mainImage: "/assets/images/kaju_kado_karate/image1.png",
        images: [
            { id: 1, src: "/assets/images/kaju_kado_karate/image1.png", alt: "Heavyweight championship moment" },
            { id: 2, src: "/assets/images/kaju_kado_karate/image2.png", alt: "National title award ceremony" },
            { id: 2, src: "/assets/images/kaju_kado_karate/image3.png", alt: "National title award ceremony" },
        ],
    }


]

export default function Achievements() {
    const [selectedEvent, setSelectedEvent] = useState(null)
    const [selectedImage, setSelectedImage] = useState(null)
    const [isEventModalOpen, setIsEventModalOpen] = useState(false)
    const [isImageModalOpen, setIsImageModalOpen] = useState(false)

    // Open event modal
    const openEventModal = (event) => {
        setSelectedEvent(event)
        setIsEventModalOpen(true)
        if (typeof document !== 'undefined') {
            document.body.style.overflow = 'hidden' // Prevent background scrolling
        }
    }

    // Close event modal
    const closeEventModal = () => {
        setIsEventModalOpen(false)
        setSelectedEvent(null)
        if (typeof document !== 'undefined') {
            document.body.style.overflow = 'unset'
        }
    }

    // Open image modal from within event modal
    const openImageModal = (image, eventName) => {
        setSelectedImage({ ...image, eventName })
        setIsImageModalOpen(true)
    }

    // Close image modal
    const closeImageModal = () => {
        setIsImageModalOpen(false)
        setSelectedImage(null)
    }

    // Handle escape key for both modals - FIXED: Added window check
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                if (isImageModalOpen) {
                    closeImageModal()
                } else if (isEventModalOpen) {
                    closeEventModal()
                }
            }
        }

        // Check if window is defined (client-side only)
        if (typeof window !== 'undefined') {
            window.addEventListener('keydown', handleKeyDown)
            return () => window.removeEventListener('keydown', handleKeyDown)
        }
    }, [isEventModalOpen, isImageModalOpen])

    return (
        <>
            <section className="bg-gradient-to-b from-gray-50 to-white w-full" id="achievements">
                {/* Full width container with no horizontal padding */}
                <div className="w-full">
                    {/* Section Header - with max-width for readability but full width background */}
                    {/* <div className="text-center mb-12 px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Our <span className="text-red-600">Achievements</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Celebrating our milestones and memorable moments in martial arts excellence
                </p>
            </div> */}

                    {/* Events Grid - Full width with 2 cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 w-full">
                        {events.map((event) => (
                            <div
                                key={event.id}
                                onClick={() => openEventModal(event)}
                                className="group relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden cursor-pointer"
                            >
                                {/* Event Image - Full size background */}
                                <div className="absolute inset-0 w-full h-full">
                                    <Image
                                        src={event.mainImage}
                                        alt={event.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all"></div>
                                </div>

                                {/* Content Overlay */}
                                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 lg:p-12">
                                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 transform group-hover:translate-y-[-4px] transition-transform">
                                        {event.name}
                                    </h3>
                                    <p className="text-white/90 text-sm md:text-base lg:text-lg max-w-xl mb-4">
                                        {event.shortDescription}
                                    </p>

                                    {/* Quick Stats */}
                                    <div className="flex items-center justify-between text-sm text-white/80 border-t border-white/20 pt-4">
                                        <span className="flex items-center gap-2">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            {event.images.length} photos
                                        </span>
                                        <span className="text-white font-semibold group-hover:translate-x-2 transition-transform duration-300 flex items-center gap-1">
                                            View Details
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Event Details Modal */}
            {isEventModalOpen && selectedEvent && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                    onClick={closeEventModal}
                >
                    <div
                        className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeEventModal}
                            className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-gray-800 w-10 h-10 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            aria-label="Close"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Scrollable Content */}
                        <div className="overflow-y-auto max-h-[90vh]">
                            {/* Event Header Image */}
                            <div className="relative h-72 w-full">
                                <Image
                                    src={selectedEvent.mainImage}
                                    alt={selectedEvent.name}
                                    fill
                                    className="object-[center_35%] object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                                {/* Event Title */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
                                    <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">
                                        {selectedEvent.name}
                                    </h2>
                                    <p className="text-white/90 text-sm md:text-lg">
                                        {selectedEvent.shortDescription}
                                    </p>
                                </div>
                            </div>

                            {/* Event Details */}
                            <div className=" p-4 md:p-8">
                                {/* Description */}
                                <div className="mb-8">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">About this Event</h3>
                                    <p className="text-gray-600 leading-relaxed text-xs md:text-sm">
                                        {selectedEvent.description}
                                    </p>
                                </div>

                                {/* Photo Gallery */}
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Event Gallery</h3>
                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                                        {selectedEvent.images.map((image) => (
                                            <div
                                                key={image.id}
                                                onClick={() => openImageModal(image, selectedEvent.name)}
                                                className="relative w-38 h-38 md:w-48 md:h-48 rounded-lg overflow-hidden cursor-pointer group/image flex-shrink-0"
                                            >
                                                <Image
                                                    src={image.src}
                                                    alt={image.alt}
                                                    fill
                                                    className="object-cover group-hover/image:scale-110 transition-transform duration-500"
                                                />
                                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Navigation Info */}
                                <div className="mt-8 pt-6 border-t border-gray-200 flex items-center justify-between text-sm text-gray-500">
                                    <span>Event {selectedEvent.id} of {events.length}</span>
                                    <span>Click on images to enlarge</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Image Viewer Modal */}
            {isImageModalOpen && selectedImage && (
                <div
                    className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/95"
                    onClick={closeImageModal}
                >
                    <div
                        className="relative max-w-6xl w-full h-[90vh]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeImageModal}
                            className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-gray-800 w-10 h-10 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            aria-label="Close"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Image Container */}
                        <div className="relative w-full h-full flex items-center justify-center">
                            <Image
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                fill
                                className="object-contain"
                                sizes="100vw"
                                priority
                            />
                        </div>

                        {/* Image Info */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                            <p className="text-white text-lg font-semibold">{selectedImage.eventName}</p>
                            <p className="text-white/80 text-sm mt-1">{selectedImage.alt}</p>
                        </div>

                        {/* Navigation Hint */}
                        <div className="absolute top-1/2 left-4 -translate-y-1/2 text-white/50 text-sm hidden md:block">
                            ←
                        </div>
                        <div className="absolute top-1/2 right-4 -translate-y-1/2 text-white/50 text-sm hidden md:block">
                            →
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}