'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const achievements = [
    {
        id: 1,
        src: '/assets/images/achievements/achievement1.jpeg',
        alt: 'Black Belt Ceremony 2024',
        title: '🥋 Black Belt Ceremony 2024',
        description: '15 students awarded black belt in annual ceremony'
    },
    {
        id: 2,
        src: '/assets/images/achievements/achievement2.jpeg',
        alt: 'National Championship Victory',
        title: '🏆 National Champions 2024',
        description: 'Our team won 8 gold medals at National Championships'
    },
    {
        id: 3,
        src: '/assets/images/achievements/achievement3.jpg',
        alt: 'International Tournament',
        title: '🌏 International Achievement',
        description: 'Represented India at Asian Martial Arts Games'
    },
    {
        id: 4,
        src: '/assets/images/achievements/achievement4.jpg',
        alt: 'State Championship',
        title: '🥇 State Champions',
        description: 'First place at State Martial Arts Championship with 12 medals'
    },
    {
        id: 5,
        src: '/assets/images/achievements/achievement5.jpeg',
        alt: 'Junior Black Belt',
        title: '🌟 Junior Achievers',
        description: '5 junior students earned their black belts'
    },
    {
        id: 6,
        src: '/assets/images/achievements/achievement6.jpeg',
        alt: 'Self Defense Workshop',
        title: '🤝 Community Outreach',
        description: 'Free self-defense workshop for women conducted'
    },
    {
        id: 7,
        src: '/assets/images/achievements/achievement7.jpeg',
        alt: 'Master Seminar',
        title: '📚 Special Seminar',
        description: 'Hosted Grand Master Lee for 3-day training seminar'
    },
    {
        id: 8,
        src: '/assets/images/achievements/achievement8.jpeg',
        alt: 'Silver Medal Winners',
        title: '🥈 Silver Medalists',
        description: '6 silver medals won at Regional Championships'
    },
    {
        id: 9,
        src: '/assets/images/achievements/achievement9.jpeg',
        alt: 'Bronze Medal Winners',
        title: '🥉 Bronze Medalists',
        description: '4 bronze medals at National Level Competition'
    },
    {
        id: 10,
        src: '/assets/images/achievements/achievement10.jpeg',
        alt: 'Summer Camp 2024',
        title: '🏕️ Summer Camp',
        description: '50+ kids attended annual martial arts summer camp'
    },
    {
        id: 11,
        src: '/assets/images/achievements/achievement11.jpeg',
        alt: 'Demonstration Event',
        title: '🎪 Public Demonstration',
        description: 'Performed at City Cultural Festival'
    },
    {
        id: 12,
        src: '/assets/images/achievements/achievement12.jpeg',
        alt: 'Competition Team',
        title: '🤼 Competition Team',
        description: 'National team selection - 3 students selected'
    },
    {
        id: 13,
        src: '/assets/images/achievements/achievement13.jpeg',
        alt: 'Special Awards',
        title: '⭐ Special Recognition',
        description: 'Best Martial Arts School Award 2024'
    },
    {
        id: 14,
        src: '/assets/images/achievements/achievement14.jpg',
        alt: 'International Seminar',
        title: '🌍 International Exchange',
        description: 'Hosted students from Japan for cultural exchange'
    },
    {
        id: 15,
        src: '/assets/images/achievements/achievement15.jpeg',
        alt: 'Charity Event',
        title: '❤️ Charity Exhibition',
        description: 'Raised funds for local children hospital'
    },
    {
        id: 16,
        src: '/assets/images/achievements/achievement16.jpeg',
        alt: 'Instructor Training',
        title: '👨‍🏫 Instructor Course',
        description: '5 new certified instructors graduated'
    },
    {
        id: 17,
        src: '/assets/images/achievements/achievement17.jpeg',
        alt: 'School Program',
        title: '🏫 School Partnership',
        description: 'Martial arts program started in 3 schools'
    },
    {
        id: 18,
        src: '/assets/images/achievements/achievement18.jpeg',
        alt: 'Tournament Victory',
        title: '🎯 Tournament Champions',
        description: 'Overall champions at Inter-School Tournament'
    },
    {
        id: 19,
        src: '/assets/images/achievements/achievement19.jpeg',
        alt: 'Annual Day Celebration',
        title: '🎉 Annual Day 2024',
        description: 'Grand celebration with 200+ students performing'
    }
]

export default function Achivements() {
    const firstRowRef = useRef(null)
    const secondRowRef = useRef(null)
    const [isPaused, setIsPaused] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null)
    const [isButtonScrolling, setIsButtonScrolling] = useState(false)
    const pauseTimeoutRef = useRef(null)
    const animationRef = useRef(null)
    const modalPauseTimeoutRef = useRef(null)
    const buttonScrollTimeoutRef = useRef(null)

    // Split achievements into two rows
    const firstRowAchievements = achievements.slice(0, 10)
    const secondRowAchievements = achievements.slice(10, 19)

    // Duplicate achievements for seamless infinite scroll
    const firstRowItems = [...firstRowAchievements, ...firstRowAchievements]
    const secondRowItems = [...secondRowAchievements, ...secondRowAchievements]

    // Auto-scroll logic
    useEffect(() => {
        const firstRow = firstRowRef.current
        const secondRow = secondRowRef.current
        if (!firstRow || !secondRow) return

        let scrollPosition = 0
        const scrollSpeed = 0.5

        const scroll = () => {
            if (!isPaused && !isModalOpen && !isButtonScrolling) {
                scrollPosition += scrollSpeed

                // Reset scroll position for infinite effect
                if (scrollPosition >= firstRow.scrollWidth / 2) {
                    scrollPosition = 0
                }

                firstRow.scrollLeft = scrollPosition
                secondRow.scrollLeft = scrollPosition
            }

            animationRef.current = requestAnimationFrame(scroll)
        }

        animationRef.current = requestAnimationFrame(scroll)

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current)
            }
        }
    }, [isPaused, isModalOpen, isButtonScrolling])

    const pauseAutoScroll = (duration = 10000) => {
        // Clear existing timeout
        if (pauseTimeoutRef.current) {
            clearTimeout(pauseTimeoutRef.current)
        }

        // Pause scrolling
        setIsPaused(true)

        // Resume after specified duration
        pauseTimeoutRef.current = setTimeout(() => {
            setIsPaused(false)
        }, duration)
    }

    const handleUserInteraction = () => {
        pauseAutoScroll(10000) // Pause for 10 seconds
    }

    // Smooth scroll with animation
    const smoothScroll = (element, targetPosition, duration = 800) => {
        if (!element) return

        const startPosition = element.scrollLeft
        const distance = targetPosition - startPosition
        const startTime = performance.now()

        setIsButtonScrolling(true)

        // Clear any existing button scroll timeout
        if (buttonScrollTimeoutRef.current) {
            clearTimeout(buttonScrollTimeoutRef.current)
        }

        const animateScroll = (currentTime) => {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)

            // Easing function for smooth acceleration and deceleration
            const easeInOutCubic = progress < 0.5
                ? 4 * progress * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 3) / 2

            const newPosition = startPosition + distance * easeInOutCubic

            element.scrollLeft = newPosition

            if (progress < 1) {
                requestAnimationFrame(animateScroll)
            } else {
                // Ensure we end exactly at target position
                element.scrollLeft = targetPosition
                setIsButtonScrolling(false)
            }
        }

        requestAnimationFrame(animateScroll)
    }

    // Scroll controls with smooth animation
    const scroll = (direction) => {
        if (firstRowRef.current && secondRowRef.current) {
            const scrollAmount = direction === 'left' ? -300 : 300
            const targetPosition = firstRowRef.current.scrollLeft + scrollAmount

            // Smooth scroll both rows
            smoothScroll(firstRowRef.current, targetPosition, 800)
            smoothScroll(secondRowRef.current, targetPosition, 800)

            // Pause auto-scroll for 10 seconds after button click
            pauseAutoScroll(10000)

            // Clear button scrolling flag after animation duration
            buttonScrollTimeoutRef.current = setTimeout(() => {
                setIsButtonScrolling(false)
            }, 800)
        }
    }

    // Modal handlers
    const openModal = (achievement) => {
        setSelectedImage(achievement)
        setIsModalOpen(true)
        // Clear any existing modal timeout
        if (modalPauseTimeoutRef.current) {
            clearTimeout(modalPauseTimeoutRef.current)
        }
    }

    const closeModal = () => {
        setIsModalOpen(false)
        // After closing modal, wait 5 seconds before resuming auto-scroll
        modalPauseTimeoutRef.current = setTimeout(() => {
            setIsPaused(false)
        }, 5000)
    }

    // Cleanup timeouts on unmount
    useEffect(() => {
        return () => {
            if (pauseTimeoutRef.current) {
                clearTimeout(pauseTimeoutRef.current)
            }
            if (modalPauseTimeoutRef.current) {
                clearTimeout(modalPauseTimeoutRef.current)
            }
            if (buttonScrollTimeoutRef.current) {
                clearTimeout(buttonScrollTimeoutRef.current)
            }
        }
    }, [])

    // Keyboard navigation for modal
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (isModalOpen && e.key === 'Escape') {
                closeModal()
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [isModalOpen])

    // If no images are available, show a message
    if (achievements.length === 0) {
        return (
            <section className="py-16 bg-gray-50" id="programs">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Achievements</h2>
                    <p className="text-gray-600">Achievements will be added soon.</p>
                </div>
            </section>
        )
    }

    return (
        <>
            <section className="py-16 bg-gray-50 overflow-hidden" id="programs">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Achievements</h2>
                        <p className="text-sm md:text-xl text-gray-600">Celebrating 19 remarkable milestones in martial arts excellence</p>
                    </div>

                    <div className="relative">
                        {/* Navigation Buttons */}
                        <button
                            onClick={() => scroll('left')}
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-gray-800 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                            aria-label="Previous"
                            disabled={isButtonScrolling}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button
                            onClick={() => scroll('right')}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-gray-800 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                            aria-label="Next"
                            disabled={isButtonScrolling}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* First Row */}
                        <div
                            ref={firstRowRef}
                            className="flex overflow-x-auto scrollbar-hide mb-4 cursor-pointer"
                            style={{
                                scrollbarWidth: 'none',
                                msOverflowStyle: 'none',
                                WebkitOverflowScrolling: 'touch',
                                scrollBehavior: 'auto' // Disable native smooth scroll to use custom animation
                            }}
                            onMouseEnter={handleUserInteraction}
                            onTouchStart={handleUserInteraction}
                        >
                            <div className="flex gap-4 py-2">
                                {firstRowItems.map((achievement, index) => (
                                    <div
                                        key={`row1-${achievement.id}-${index}`}
                                        onClick={() => openModal(achievement)}
                                        className="flex-shrink-0 w-64 bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group"
                                    >
                                        <div className="relative h-40 w-full bg-gray-200">
                                            <Image
                                                src={achievement.src}
                                                alt={achievement.alt}
                                                fill
                                                className="object-cover group-hover:opacity-90 transition-opacity "
                                                sizes="(max-width: 768px) 100vw, 256px"
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                }}
                                            />
                                        </div>
                                        {/* <div className="p-3 text-center">
                                            <p className="text-sm font-semibold text-gray-800">{achievement.title}</p>
                                        </div> */}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Second Row */}
                        <div
                            ref={secondRowRef}
                            className="flex overflow-x-auto scrollbar-hide cursor-pointer"
                            style={{
                                scrollbarWidth: 'none',
                                msOverflowStyle: 'none',
                                WebkitOverflowScrolling: 'touch',
                                scrollBehavior: 'auto' // Disable native smooth scroll to use custom animation
                            }}
                            onMouseEnter={handleUserInteraction}
                            onTouchStart={handleUserInteraction}
                        >
                            <div className="flex gap-4 py-2">
                                {secondRowItems.map((achievement, index) => (
                                    <div
                                        key={`row2-${achievement.id}-${index}`}
                                        onClick={() => openModal(achievement)}
                                        className="flex-shrink-0 w-64 bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group"
                                    >
                                        <div className="relative h-40 w-full bg-gray-200">
                                            <Image
                                                src={achievement.src}
                                                alt={achievement.alt}
                                                fill
                                                className="object-cover group-hover:opacity-90 transition-opacity"
                                                sizes="(max-width: 768px) 100vw, 256px"
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                }}
                                            />
                                        </div>
                                        {/* <div className="p-3 text-center">
                                            <p className="text-sm font-semibold text-gray-800">{achievement.title}</p>
                                        </div> */}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Gradient Overlays */}
                        <div className="absolute top-0 left-0 w-8 md:w-24 h-full bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10"></div>
                        <div className="absolute top-0 right-0 w-8 md:w-24 h-full bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10"></div>
                    </div>

                    {/* Status Indicators */}
                    {/* <div className="flex justify-center items-center gap-4 mt-6">
                        {isButtonScrolling && (
                            <div className="text-blue-600 animate-pulse">
                                <span className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full shadow-md">
                                    <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                    </svg>
                                    Smooth scrolling...
                                </span>
                            </div>
                        )}

                        {isPaused && !isModalOpen && !isButtonScrolling && (
                            <div className="text-gray-600 animate-pulse">
                                <span className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
                                    </svg>
                                    Auto-scroll paused - will resume shortly
                                </span>
                            </div>
                        )}

                        {isModalOpen && (
                            <div className="text-blue-600 animate-pulse">
                                <span className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full shadow-md">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Auto-scroll paused - viewing achievement
                                </span>
                            </div>
                        )}
                    </div> */}
                </div>

                <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
            </section>

            {/* Modal */}
            {isModalOpen && selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                    onClick={closeModal}
                >
                    <div
                        className="relative max-w-4xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 scale-100"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-gray-800 w-10 h-10 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            aria-label="Close"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Image Container */}
                        <div className="relative h-[60vh] w-full bg-gray-100">
                            <Image
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                fill
                                className="object-contain"
                                sizes="(max-width: 1280px) 100vw, 1280px"
                                priority
                            />
                        </div>

                        {/* Image Details */}
                        <div className="p-6 bg-white">
                            {/* <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedImage.title}</h3> */}
                            {/* <p className="text-gray-600">{selectedImage.description}</p> */}

                            {/* Navigation Info */}
                            <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                                <span>Image {selectedImage.id} of {achievements.length}</span>
                                <span>Click outside or press ESC to close</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}