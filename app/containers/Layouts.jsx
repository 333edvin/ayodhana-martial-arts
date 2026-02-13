'use client'
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
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
                    <div className="text-xl  flex items-center gap-2 md:gap-5 font-black tracking-tighter sm:text-2xl italic">
                        <Image width={50} height={50} src={'/assets/webp/AYODHANA.webp'} alt="logo" className="rounded-full"/>
                        <p>
                            AYODHANA<span className="text-red-600">FIGHTERS</span>
                            </p>
                    </div>

                    {/* DESKTOP MENU */}
                    <ul className="hidden space-x-8 lg:flex gap-4">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} className="text-sm   uppercase tracking-widest hover:text-red-600 transition-colors">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* MOBILE TOGGLE BUTTON */}
                    <button
                        onClick={toggleMenu}
                        className="z-[110] text-3xl lg:hidden focus:outline-none text-white transition-all duration-300"
                    >
                        {/* Render the component directly based on state */}
                        {isOpen ? <IoClose /> : <HiMiniBars3BottomRight />}
                    </button>
                </div>
            </header>

            {/* RIGHT SIDE DRAWER (MOBILE) */}
            <div className={`fixed inset-y-0 right-0 z-[105] w-[280px] h-full bg-zinc-950 text-white p-10 transition-transform duration-300 ease-in-out lg:hidden ${isOpen ? "translate-x-0" : "translate-x-full"} border-l border-white/10`}>
                <ul className="flex flex-col justify-center  h-full items-center gap-5  ">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a onClick={toggleMenu} href={link.href} className="text-xl font-black uppercase italic tracking-wider hover:text-red-600 transition-colors">
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* DRAWER OVERLAY */}
            {isOpen && (
                <div onClick={toggleMenu} className="fixed inset-0 z-[101] bg-black/60 backdrop-blur-sm lg:hidden" />
            )}
            {children}
           <footer id="contact" className="bg-[#0a0a0a] text-gray-400 pt-20 pb-10 px-5 border-t border-white/5">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    
                    {/* Column 1: Brand Bio */}
                    <div className="flex flex-col gap-6">
                        <h3 className="text-white text-2xl font-black uppercase tracking-tighter italic">
                            Ayodhana<span className="text-red-600">Fighters</span>
                        </h3>
                        <p className="leading-relaxed text-sm">
                            Martial Arts Academy in Thrissur, Kerala. We empower individuals through martial arts training, fostering physical fitness, mental strength, and self-confidence.
                        </p>
                        <div className="flex gap-4">
                            {['facebook-f', 'instagram', 'youtube', 'whatsapp'].map((social) => (
                                <a 
                                    key={social} 
                                    href="#" 
                                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-red-600 hover:text-white transition-all duration-300"
                                >
                                    <i className={`fab fa-${social}`} />
                                </a>
                            ))}
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
                                    <p className="text-white font-medium">Thamarayoor Building</p>
                                    <p>Keltron Nagar, Kolazhy, Thrissur, 680010</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <i className="fas fa-phone text-red-600 mt-1" />
                                <div>
                                    <p>+91 96565 71330</p>
                                    <p>+91 94478 21330</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <i className="fas fa-envelope text-red-600 mt-1" />
                                <p>info@ayodhanafighters.com</p>
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
                                <span>Mon - Fri</span>
                                <span className="text-white font-bold">4 PM - 8 PM</span>
                            </div>
                            <div className="flex justify-between border-b border-white/5 pb-2">
                                <span>Saturday</span>
                                <span className="text-white font-bold">4 PM - 7 PM</span>
                            </div>
                            <div className="flex justify-between text-red-500/50">
                                <span>Sunday</span>
                                <span>Closed</span>
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
                                <a href="#" id="admin-login-link" className="text-xs opacity-50 hover:opacity-100 italic">Admin Login</a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] uppercase tracking-[0.2em]">
                    <p>© 2026 Ayodhana Fighters Martial Arts Academy.</p>
                    <p className="text-gray-600">
                        Design & Development <span className="text-red-900 mx-1">|</span> Premium Experience
                    </p>
                </div>
            </div>
        </footer>
        </>
    )
}