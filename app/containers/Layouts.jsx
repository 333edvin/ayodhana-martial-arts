'use client'
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import Image from "next/image";

export default function Layouts({ children }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "Programs", href: "#programs" },
        { name: "Trainers", href: "#trainers" },
        { name: "Schedule", href: "#schedule" },
        { name: "Testimonials", href: "#testimonials" },
        { name: "Contact", href: "#contact" },
    ];
    return (
        <>
            <header className="fixed top-0 z-40 w-full border-b border-white/10 bg-black/90 backdrop-blur-md text-white">
                <div className="container mx-auto flex h-auto py-5 items-center justify-between px-3">
                    {/* LOGO */}
                    <div className="text-xl flex items-center gap-2 md:gap-5 font-black tracking-tighter sm:text-2xl italic">
                        <Image width={50} height={50} src={'/assets/webp/AYODHANA.webp'} alt="logo" className="rounded-full" />
                        <p>
                            AYODHANA<span className="text-red-600">FIGHTERS</span>
                        </p>
                    </div>

                    {/* DESKTOP MENU */}
                    <ul className="hidden space-x-8 lg:flex gap-4">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* MOBILE TOGGLE BUTTON */}
                    <button
                        onClick={toggleMenu}
                        className={`z-[110] text-3xl lg:hidden focus:outline-none text-white transition-all duration-300 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
                            }`}
                    >
                        {/* Render the component directly based on state */}
                        {isOpen ? <IoClose /> : <HiMiniBars3BottomRight />}
                    </button>
                </div>
            </header>

            {/* RIGHT SIDE DRAWER (MOBILE) */}
            <div className={`fixed inset-y-0 right-0 z-[105] w-[280px] h-full bg-zinc-950 text-white p-10 transition-transform duration-300 ease-in-out lg:hidden ${isOpen ? "translate-x-0" : "translate-x-full"
                } border-l border-white/10`}>

                {/* ADD THIS CLOSE BUTTON INSIDE THE DRAWER */}
                <button
                    onClick={toggleMenu}
                    className="absolute top-6 left-6 text-3xl text-white hover:text-red-600 transition-colors z-[106]"
                    aria-label="Close menu"
                >
                    <IoClose />
                </button>
                <div className="flex flex-col items-center justify-center gap-10 mt-10">
                    <Image src={'/assets/webp/AYODHANA.webp'} width={100} height={100} alt="logo" className="rounded-full" />
                    <ul className="flex flex-col justify-center h-full items-center gap-5">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a onClick={toggleMenu} href={link.href} className="text-xl font-black uppercase italic tracking-wider hover:text-red-600 transition-colors">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* DRAWER OVERLAY */}
            {isOpen && (
                <div onClick={toggleMenu} className="fixed inset-0 z-[101] bg-black/60 backdrop-blur-sm lg:hidden" />
            )}
            {children}
            <div className="flex flex-col gap-2 p-2 fixed bottom-2 right-2 md:bottom-5 md:right-5 text-white">
                <a href="tel:+919656571330" className="hover:text-red-500 transition-colors block">
                <p className="p-3 rounded-full bg-blue-500 text-xl md:text-2xl"><MdCall /></p>
                </a>
                <a 
                    href="https://wa.me/919656571330" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-green-500 transition-colors"
                >
                <p className="p-3 rounded-full bg-green-500 text-xl md:text-2xl"><FaWhatsapp /></p>
                </a>
            </div>
            <footer id="contact" className="bg-[#0a0a0a] text-gray-400 pt-20 pb-10 px-5 border-t border-white/5">
    <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

            {/* Column 1: Brand Bio */}
            <div className="flex flex-col gap-6">
                <h3 className="text-white text-2xl font-black uppercase tracking-tighter italic">
                    Ayodhana<span className="text-red-600">Fighters</span>
                </h3>
                <p className="leading-relaxed text-sm">
                    Ayodhana Fighters is a high-performance combat and movement training academy focused on building strength, discipline, confidence, and real-world skills. Inspired by the spirit of Ayodhana (the battlefield), we train individuals not just to fight but to master mind, body, and movement.
                </p>
                <p className="leading-relaxed text-sm mt-2">
                    We offer structured training in martial arts, kickboxing, parkour, self-defence, and functional fitness, designed for beginners to advanced athletes. Our programs emphasize technique, agility, endurance, mental toughness, and character development.
                </p>
                <div className="flex gap-4 mt-2">
                    <a
                        href="https://www.instagram.com/ayodhana_fighters?igsh=MTdyMW9xdHd3OTN1cw=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-red-600 hover:text-white transition-all duration-300"
                        aria-label="Instagram"
                    >
                        <i className="fab fa-instagram" />
                    </a>
                    <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-red-600 hover:text-white transition-all duration-300"
                        aria-label="Facebook"
                    >
                        <i className="fab fa-facebook-f" />
                    </a>
                    <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-red-600 hover:text-white transition-all duration-300"
                        aria-label="YouTube"
                    >
                        <i className="fab fa-youtube" />
                    </a>
                    <a
                        href="https://wa.me/919656571330"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-red-600 hover:text-white transition-all duration-300"
                        aria-label="WhatsApp"
                    >
                        <i className="fab fa-whatsapp" />
                    </a>
                </div>
            </div>

            {/* Column 2: Contact Info */}
            <div className="flex flex-col gap-6">
                <h3 className="text-white text-lg font-bold uppercase tracking-widest border-l-4 border-red-600 pl-4">
                    Contact Info
                </h3>
                <div className="flex flex-col gap-4 text-sm">
                    <div className="flex gap-3">
                        <i className="fas fa-map-marker-alt text-red-600 mt-1" />
                        <div>
                            <p className="text-white font-medium">Ayodhana Fighters</p>
                            <p>Thamarayoor Building, Keltron Nagar</p>
                            <p>Kolazhy, Thrissur - 680010</p>
                            <a 
                                href="https://g.co/kgs/BivA1gS" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-red-500 hover:text-red-400 text-xs mt-1 inline-block"
                            >
                                Get Directions →
                            </a>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <i className="fas fa-phone text-red-600 mt-1" />
                        <div>
                            <a href="tel:+919656571330" className="hover:text-red-500 transition-colors block">+91 96565 71330</a>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <i className="fas fa-envelope text-red-600 mt-1" />
                        <a href="mailto:akhilkj208@gmail.com" className="hover:text-red-500 transition-colors">
                            akhilkj208@gmail.com
                        </a>
                    </div>
                </div>
            </div>

            {/* Column 3: Hours */}
            <div className="flex flex-col gap-6">
                <h3 className="text-white text-lg font-bold uppercase tracking-widest border-l-4 border-red-600 pl-4">
                    Training Hours
                </h3>
                <div className="flex flex-col gap-3 text-sm">
                    <div className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-gray-400">Saturday</span>
                        <span className="text-white font-bold">4:30 PM - 9:30 PM</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-gray-400">Sunday</span>
                        <span className="text-white font-bold">4:30 PM - 9:30 PM</span>
                    </div>
                    <div className="flex justify-between text-red-500/80 pt-2">
                        <span>Mon - Fri</span>
                        <span className="italic">Closed</span>
                    </div>
                </div>
            </div>

            {/* Column 4: Quick Links */}
            <div className="flex flex-col gap-6">
                <h3 className="text-white text-lg font-bold uppercase tracking-widest border-l-4 border-red-600 pl-4">
                    Quick Links
                </h3>
                <ul className="grid grid-cols-1 gap-3 text-sm">
                    {['Home', 'Programs', 'Trainers', 'Schedule', 'Testimonials'].map((link) => (
                        <li key={link}>
                            <a href={`#${link.toLowerCase()}`} className="hover:text-red-600 transition-colors flex items-center gap-2">
                                <span className="text-[10px]">▶</span> {link}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a 
                            href="https://www.instagram.com/ayodhana_fighters?igsh=MTdyMW9xdHd3OTN1cw==" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-red-600 transition-colors flex items-center gap-2 text-sm"
                        >
                            <span className="text-[10px]">▶</span> Follow on Instagram
                        </a>
                    </li>
                    <li>
                        <a 
                            href="https://wa.me/919656571330" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-green-500 transition-colors flex items-center gap-2 text-sm"
                        >
                            <span className="text-[10px]">▶</span> WhatsApp Us
                        </a>
                    </li>
                </ul>
            </div>

        </div>

        {/* Map Section */}
        <div className="mb-12">
            <h3 className="text-white text-lg font-bold uppercase tracking-widest border-l-4 border-red-600 pl-4 mb-6">
                Find Us Here
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Map */}
                <div className="lg:col-span-2 rounded-xl overflow-hidden border border-white/10 h-[300px] lg:h-[350px]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.567812345678!2d76.212345!3d10.567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDM0JzA0LjQiTiA3NsKwMTInNDQuNCJF!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Ayodhana Fighters Location"
                        className="grayscale hover:grayscale-0 transition-all duration-500"
                    />
                </div>

                {/* Map Info Card */}
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h4 className="text-white font-bold text-lg mb-4">Visit Our Academy</h4>
                    <div className="space-y-4">
                        <div className="flex gap-3">
                            <div className="w-8 h-8 bg-red-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                                <i className="fas fa-map-pin text-red-500 text-sm"></i>
                            </div>
                            <div>
                                <p className="text-white font-medium">Ayodhana Fighters</p>
                                <p className="text-sm">Karama Bus Stop,Near Petrol Pumb,Thamarayoor Building,Keltron Nagar</p>
                                <p className="text-sm">Kolazhy, Thrissur - 680010</p>
                                <p className="text-sm text-gray-500 mt-1">Kerala, India</p>
                            </div>
                        </div>
                        
                        <div className="flex gap-3">
                            <div className="w-8 h-8 bg-red-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                                <i className="fas fa-directions text-red-500 text-sm"></i>
                            </div>
                            <div>
                                <p className="text-white font-medium mb-2">How to Reach</p>
                                <ul className="text-sm space-y-1 text-gray-400">
                                    <li>• 7 km from Thrissur Railway Station</li>
                                    <li>• 6 km from Thrissur KSRTC Bus Stand</li>
                                    <li>• Near Keltron Nagar Junction</li>
                                </ul>
                            </div>
                        </div>

                        <div className="pt-4">
                            <a 
                                href="https://g.co/kgs/BivA1gS" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-all duration-300 w-full justify-center text-sm font-semibold"
                            >
                                <i className="fas fa-location-arrow"></i>
                                Open in Google Maps
                            </a>
                            <p className="text-center text-gray-500 text-xs mt-3">
                                <i className="fas fa-share-alt mr-1"></i>
                                Shared via Google • 096565 71330
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] uppercase tracking-[0.2em]">
            <p>© 2026 Ayodhana Fighters Martial Arts Academy. All rights reserved.</p>
            <div className="flex items-center gap-4">
                <a 
                    href="https://www.instagram.com/ayodhana_fighters?igsh=MTdyMW9xdHd3OTN1cw==" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-red-500 transition-colors"
                >
                    Instagram
                </a>
                <span className="text-gray-700">|</span>
                <a 
                    href="https://wa.me/919656571330" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-green-500 transition-colors"
                >
                    WhatsApp
                </a>
                <span className="text-gray-700">|</span>
                <p className="text-gray-600">
                    Design & Development <span className="text-red-900 mx-1">|</span> Premium Experience
                </p>
            </div>
        </div>
    </div>
</footer>
        </>
    )
}