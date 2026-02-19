import React from "react";

const EventsSection = () => {
  const events = [
    {
      id: 1,
      name: "🥇 National Kickboxing Championship - 2023",
      shortDescription: "Gold Medal – Emmanuval Joshy",
      description:
        "Emmanuval Joshy secured a prestigious Gold Medal at the National Kickboxing Championship 2023, representing Ayodhana Martial Arts Academy with excellence, discipline, and warrior spirit.",
      mainImage: "/assets/images/event1/event1-1.jpeg",
      images: [
        { id: 1, src: "/assets/images/event1/event1-1.jpeg", alt: "Kickboxing medal moment" },
        { id: 2, src: "/assets/images/event1/event1-2.jpeg", alt: "Award ceremony" },
      ],
    },
    {
      id: 2,
      name: "🥋 State Karate Championship - 2023",
      shortDescription: "Multiple Medal Winners",
      description:
        "Our academy fighters achieved multiple medals at the State Karate Championship 2023, demonstrating technical mastery and disciplined performance.",
      mainImage: "/assets/images/event2/event2-1.jpeg",
      images: [
        { id: 1, src: "/assets/images/event2/event2-1.jpeg", alt: "Karate action moment" },
        { id: 2, src: "/assets/images/event2/event2-2.jpeg", alt: "Team celebration" },
      ],
    },
    {
      id: 3,
      name: "🏆 All Kerala Kickboxing Championship - 2024",
      shortDescription: "Champion – Emmanuval Joshy",
      description:
        "Emmanuval Joshy secured the All Kerala Kickboxing Championship 2024 title, showcasing elite technique, discipline, and competitive dominance under Ayodhana Martial Arts Academy.",
      mainImage: "/assets/images/event3/event3-1.jpeg",
      images: [
        { id: 1, src: "/assets/images/event3/event3-1.jpeg", alt: "Kickboxing championship moment" },
        { id: 2, src: "/assets/images/event3/event3-2.jpeg", alt: "Victory pose with medal" },
        { id: 3, src: "/assets/images/event3/event3-3.jpeg", alt: "Award ceremony stage" },
        { id: 4, src: "/assets/images/event3/event3-4.jpeg", alt: "Team celebration photo" },
      ],
    },
    {
      id: 4,
      name: "🥊 National Muay Thai Championship - 2025",
      shortDescription: "Gold Medal – Ayodhana Fighters",
      description:
        "Ayodhana Fighters delivered an outstanding performance at the National Muay Thai Championship 2025, earning gold medals and national recognition through structured training and warrior discipline.",
      mainImage: "/assets/images/event4/event4-1.jpeg",
      images: [
        { id: 1, src: "/assets/images/event4/event4-1.jpeg", alt: "Muay Thai fight moment" },
        { id: 2, src: "/assets/images/event4/event4-2.jpeg", alt: "Medal ceremony" },
      ],
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Achievements
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
            >
              <img
                src={event.mainImage}
                alt={event.name}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {event.name}
                </h3>
                <p className="text-red-400 font-medium mb-3">
                  {event.shortDescription}
                </p>
                <p className="text-gray-300 text-justify leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
