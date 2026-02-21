import Image from "next/image";
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Founder() {
    return (
        <section className="container mx-auto py-10 px-5 my-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column: The Image Stack */}
                <div className="relative flex flex-col items-center justify-center">

                    {/* Background Images Wrapper */}
                    <div className="flex flex-col gap-3 w-full">
                        <Image
                            src='/assets/images/coach-akhil-img2.jpg'
                            alt="background top"
                            width={600}
                            height={150}
                            className="founder-bg h-42 md:h-52 w-full object-cover rounded-lg grayscale object-[center_38%]"
                        />
                        <Image
                            src='/assets/images/medal.png'
                            alt="background bottom"
                            width={600}
                            height={150}
                            className="founder-bg h-42 md:h-52 w-full object-cover rounded-lg grayscale  object-[center_80%]"
                        />
                    </div>



                    {/* Main Founder Image: Centered Overlay */}
                    <div className="absolute inset-0 mb-8 md:mb-0 flex items-center justify-center">
                        <Image
                            src='/assets/images/coach-akhil-main-image.jpg'
                            alt="Founder"
                            width={400}
                            height={400}
                            className="drop-shadow-2xl object-contain max-h-[120%] md:max-h-[100%]"
                        />
                    </div>
                </div>

                {/* Right Column: Text Content */}
                <div className="flex flex-col space-y-6">
                    <div>
                        <span className="text-red-600 font-bold tracking-widest uppercase text-sm">Head Coach</span>
                        <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mt-2">
                            Akhil K J
                        </h2>
                        <h3 className="text-2xl font-semibold text-gray-700 mt-2">
                            Ayodhana Martial Arts
                        </h3>
                    </div>

                    <div className="space-y-4">
                        {/* <div className="flex items-center gap-3">
                            <span className="bg-red-600 text-white px-3 py-1 rounded text-sm font-bold">7th DAN</span>
                            <p className="font-bold text-gray-800">Blackbelt</p>
                        </div> */}

                        <ul className="grid grid-cols-1 gap-3 text-gray-600">
                            <li className="flex items-center gap-2 italic">
                                <span className="text-red-600">✓</span> Certified Kickboxing trainer
                            </li>
                            <li className="flex items-center gap-2 italic">
                                <span className="text-red-600">✓</span>Certified Muay Thai trainer
                            </li>
                            {/* <li className="flex items-center gap-2 italic">
                                <span className="text-red-600">✓</span> Official Referee (WAKO)
                            </li> */}
                        </ul>

                        <div className="border-l-4 border-red-600 pl-4 py-2 mt-6 bg-gray-50">
                            <p className="text-xs md:text-sm text-gray-800 font-medium leading-relaxed">
                                Certified Kickboxing & Muay Thai trainer with a proven track record of developing disciplined, high-performance fighters. Strategic Lead at Ayodhana Fighters, driving vision, training excellence, and competitive success through structured programs and strong leadership.
                            </p>
                        </div>



                         <div className="mt-8">
                            <a
                            href="https://www.instagram.com/akhil_janardhanan_"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`w-full sm:w-auto inline-flex justify-center items-center gap-3 
                            bg-gradient-to-r from-red-950 via-red-600 to-red-900 
                            px-6 py-3 rounded-full text-white font-semibold tracking-wide 
                            shadow-lg transition-all duration-300 
                            hover:scale-105 hover:shadow-red-500/40`}
                            >
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-5 h-5"
                                >
                                <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm8.5 2A3.75 3.75 0 0 1 20 7.75v8.5A3.75 3.75 0 0 1 16.25 20h-8.5A3.75 3.75 0 0 1 4 16.25v-8.5A3.75 3.75 0 0 1 7.75 4h8.5zm-4.25 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm4.75-.88a1.12 1.12 0 1 0 0 2.24 1.12 1.12 0 0 0 0-2.24z"/>
                                </svg>
                                Instagram
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}