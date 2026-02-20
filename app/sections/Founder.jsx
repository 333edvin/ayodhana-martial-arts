import Image from "next/image";

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
                            className="founder-bg h-42 md:h-52 w-full object-fit rounded-lg grayscale object-[center_38%]"
                        />
                        <Image
                            src='/assets/images/coach-akhil-img1.jpg'
                            alt="background bottom"
                            width={600}
                            height={150}
                            className="founder-bg h-42 md:h-52 w-full object-fit rounded-lg grayscale object-[center_15%]"
                        />
                    </div>



                    {/* Main Founder Image: Centered Overlay */}
                    <div className="absolute inset-0 mb-8 md:mb-0 flex items-center justify-center">
                        <Image
                            src='/assets/images/coach-akhil-main-image.png'
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
                    {/* Instagram Link */}
                    <div className="pt-4">
                        <a 
                            href="https://www.instagram.com/akhil_janardhanan_?igsh=MXZubjhnMjJlMW90YQ=="
                            className="text-white hover:text-red-400 transition-colors p-2 bg-white/5 rounded-full hover:bg-white/20" 
                            aria-label="Instagram"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <FaInstagram className="text-lg md:text-xl" />
                        </a>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
}