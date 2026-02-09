export default function Schedule() {
  const scheduleData = [
    {
      time: "4:00 PM - 5:00 PM",
      classes: [
        { type: "karate", name: "Kids Karate" },
        { type: "karate", name: "Kids Karate" },
        { type: "karate", name: "Kids Karate" },
        { type: "karate", name: "Kids Karate" },
        { type: "karate", name: "Kids Karate" },
        { type: "karate", name: "Kids Karate" },
      ],
    },
    {
      time: "5:00 PM - 6:00 PM",
      classes: [
        { type: "karate", name: "Adult Karate" },
        { type: "karate", name: "Adult Karate" },
        { type: "karate", name: "Adult Karate" },
        { type: "karate", name: "Adult Karate" },
        { type: "karate", name: "Adult Karate" },
        { type: "selfdefense", name: "Self Defense" },
      ],
    },
    {
      time: "6:00 PM - 7:00 PM",
      classes: [
        { type: "kickboxing", name: "Kickboxing" },
        { type: "kickboxing", name: "Kickboxing" },
        { type: "kickboxing", name: "Kickboxing" },
        { type: "kickboxing", name: "Kickboxing" },
        { type: "kickboxing", name: "Kickboxing" },
        { type: "selfdefense", name: "Women's Defense" },
      ],
    },
    {
      time: "7:00 PM - 8:00 PM",
      classes: [
        { type: "selfdefense", name: "Self Defense" },
        { type: "karate", name: "Advanced Karate" },
        { type: "selfdefense", name: "Self Defense" },
        { type: "karate", name: "Advanced Karate" },
        { type: "selfdefense", name: "Self Defense" },
        { name: "Closed" },
      ],
    },
  ];

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const getClassTypeColor = (type) => {
    const colors = {
      karate: "bg-blue-100 text-blue-800 border-blue-200",
      kickboxing: "bg-red-100 text-red-800 border-red-200",
      selfdefense: "bg-green-100 text-green-800 border-green-200",
    };
    return colors[type] || "bg-gray-100 text-gray-800 border-gray-200";
  };

  return (
    <section className="py-16 bg-gray-50" id="schedule">
      <div className="container mx-auto   px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Class Schedule
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Plan your training sessions with our weekly timetable
          </p>
        </div>

        {/* Desktop Schedule Table */}
        <div className="hidden lg:block overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-900 text-white">
                <tr>
                  <th className="py-4 px-6 text-left font-semibold">Time</th>
                  {days.map((day) => (
                    <th key={day} className="py-4 px-6 text-center font-semibold">
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {scheduleData.map((row, rowIndex) => (
                  <tr
                    key={row.time}
                    className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="py-5 px-6 font-medium text-gray-900 whitespace-nowrap">
                      {row.time}
                    </td>
                    {row.classes.map((classItem, colIndex) => (
                      <td key={colIndex} className="py-4 px-6 text-center">
                        {classItem.name === "Closed" ? (
                          <span className="text-gray-500 italic">Closed</span>
                        ) : (
                          <span
                            className={`inline-block px-4 py-2 rounded-lg border ${getClassTypeColor(
                              classItem.type
                            )} font-medium text-sm whitespace-nowrap`}
                          >
                            {classItem.name}
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile/Tablet Schedule Cards */}
        <div className="lg:hidden space-y-6">
          {scheduleData.map((row) => (
            <div
              key={row.time}
              className="bg-white rounded-xl border border-gray-200 shadow-sm p-6"
            >
              <h3 className="font-bold text-lg text-gray-900 mb-4 pb-3 border-b">
                {row.time}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {row.classes.map((classItem, index) => (
                  <div key={index} className="text-center">
                    <p className="text-sm font-medium text-gray-600 mb-2">
                      {days[index]}
                    </p>
                    {classItem.name === "Closed" ? (
                      <p className="text-gray-500 italic text-sm">Closed</p>
                    ) : (
                      <span
                        className={`inline-block px-3 py-2 rounded-lg border ${getClassTypeColor(
                          classItem.type
                        )} font-medium text-sm w-full`}
                      >
                        {classItem.name}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}