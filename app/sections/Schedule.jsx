export default function Schedule() {
  const scheduleData = [
    {
      time: "4:30 PM - 5:30 PM",
      saturday: { type: "karate", name: "Karate" },
      sunday: { type: "karate", name: "Karate" },
    },
    {
      time: "5:30 PM - 6:30 PM",
      saturday: { type: "muaythai", name: "Muay Thai & Strength" },
      sunday: { type: "kickboxing", name: "Kickboxing & Fight" },
    },
    {
      time: "6:30 PM - 7:30 PM",
      saturday: { type: "boxing", name: "Boxing & Cardio" },
      sunday: { type: "kickboxing", name: "Kickboxing & Fight" },
    },
    {
      time: "7:30 PM - 8:30 PM",
      saturday: { type: "boxing", name: "Advanced Boxing" },
      sunday: { type: "muaythai", name: "Muay Thai Conditioning" },
    },
    {
      time: "8:30 PM - 9:30 PM",
      saturday: { type: "senior", name: "Seniors Batch (18+)" },
      sunday: { type: "senior", name: "Seniors Batch (18+)" },
    },
  ];

  const days = ["Saturday", "Sunday"];

  const getClassTypeColor = (type) => {
    const colors = {
      karate: "bg-blue-100 text-blue-800 border-blue-300",
      kickboxing: "bg-red-100 text-red-800 border-red-300",
      muaythai: "bg-purple-100 text-purple-800 border-purple-300",
      boxing: "bg-orange-100 text-orange-800 border-orange-300",
      senior: "bg-yellow-100 text-yellow-800 border-yellow-300",
    };
    return colors[type] || "bg-gray-100 text-gray-800 border-gray-300";
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-100 to-white" id="schedule">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Weekend Training Schedule
          </h2>
          <p className="text-lg text-gray-600">
            Classes conducted only on <span className="font-semibold text-red-600">Saturday & Sunday</span>
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl max-w-5xl mx-auto">
          <table className="w-full">
            <thead className="bg-black text-white">
              <tr>
                <th className="py-5 px-6 text-left w-1/3">Time</th>
                {days.map((day) => (
                  <th key={day} className="py-5 px-6 text-center w-1/3">
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {scheduleData.map((row, index) => (
                <tr key={row.time} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="py-6 px-6 font-semibold text-gray-900">
                    {row.time}
                  </td>

                  {days.map((day) => (
                    <td key={day} className="py-4 px-6 text-center">
                      <span
                        className={`inline-block px-5 py-2 rounded-lg border font-semibold text-sm ${getClassTypeColor(
                          row[day.toLowerCase()].type
                        )}`}
                      >
                        {row[day.toLowerCase()].name}
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-6 max-w-xl mx-auto">
          {scheduleData.map((row) => (
            <div
              key={row.time}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
            >
              <div className="bg-black text-white py-3 text-center font-bold">
                {row.time}
              </div>

              <div className="grid grid-cols-2 gap-4 p-4">
                {days.map((day) => (
                  <div key={day} className="text-center">
                    <p className="text-sm font-semibold text-gray-600 mb-2">
                      {day}
                    </p>
                    <span
                      className={`block px-3 py-2 rounded-lg border font-medium text-sm ${getClassTypeColor(
                        row[day.toLowerCase()].type
                      )}`}
                    >
                      {row[day.toLowerCase()].name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Notes Section */}
        <div className="mt-14 text-center max-w-2xl mx-auto">
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6 shadow-md">
            <h4 className="font-bold text-gray-900 mb-3 text-lg">
              Important Notes
            </h4>
            <p className="text-sm text-gray-600">
              ⚡ Karate class is exclusively conducted from <span className="font-semibold">4:30 PM – 5:30 PM</span> on both days.
            </p>
            <p className="text-xs text-gray-500 mt-4 border-t pt-4">
              Academy remains closed on weekdays.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
