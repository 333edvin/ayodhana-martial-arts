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
                            src='/assets/images/coach-akhil-img1.jpg'
                            alt="background top"
                            width={600}
                            height={150}
                            className="founder-bg h-42 md:h-52 w-full object-cover rounded-lg grayscale object-[center_38%]"
                        />
                        <Image
                            src='/assets/images/coach-akhil-img2.jpeg'
                            alt="background bottom"
                            width={600}
                            height={150}
                            className="founder-bg h-42 md:h-52 w-full object-cover rounded-lg grayscale object-[center_15%]"
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
                        <span className="text-red-600 font-bold tracking-widest uppercase text-sm">The Founder</span>
                        <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mt-2">
                           Shihan sreejith
                        </h2>
                        <h3 className="text-2xl font-semibold text-gray-700 mt-2">
                            Ayodhana Martial Arts 
                        </h3>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="bg-red-600 text-white px-3 py-1 rounded text-sm font-bold">7th DAN</span>
                            <p className="font-bold text-gray-800">Blackbelt</p>
                        </div>

                        <ul className="grid grid-cols-1 gap-3 text-gray-600">
                            <li className="flex items-center gap-2 italic">
                                <span className="text-red-600">✓</span> Certified MMA Instructor
                            </li>
                            <li className="flex items-center gap-2 italic">
                                <span className="text-red-600">✓</span> Official Referee (KAI)
                            </li>
                            <li className="flex items-center gap-2 italic">
                                <span className="text-red-600">✓</span> Official Referee (WAKO)
                            </li>
                        </ul>

                        <div className="border-l-4 border-red-600 pl-4 py-2 mt-6 bg-gray-50">
                            <p className="text-xs md:text-sm text-gray-800 font-medium leading-relaxed">
                                National Chief Instructor & Examiner. As the Founder and Director of Ayodhana, he is dedicated to the discipline, growth, and excellence of martial arts in India.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}