export default function Schedule() {
  const scheduleData = [
    {
      time: "4:30 PM - 5:30 PM",
      saturday: { type: "karate", name: "Karate" },
      sunday: { type: "karate", name: "Karate" },
    },
    {
      time: "5:30 PM - 6:30 PM",
      saturday: { type: "kickboxing", name: "Kickboxing" },
      sunday: { type: "kickboxing", name: "Kickboxing" },
    },
    {
      time: "6:30 PM - 7:30 PM",
      saturday: { type: "muaythai", name: "Muay Thai" },
      sunday: { type: "muaythai", name: "Muay Thai" },
    },
    {
      time: "7:30 PM - 8:30 PM",
      saturday: { type: "boxing", name: "Boxing" },
      sunday: { type: "boxing", name: "Boxing" },
    },
    {
      time: "8:30 PM - 9:30 PM",
      saturday: { type: "senior", name: "Seniors Batch" },
      sunday: { type: "senior", name: "Seniors Batch" },
    },
  ];

  const days = ["Saturday", "Sunday"];

  const getClassTypeColor = (type) => {
    const colors = {
      karate: "bg-blue-100 text-blue-800 border-blue-200",
      kickboxing: "bg-red-100 text-red-800 border-red-200",
      muaythai: "bg-purple-100 text-purple-800 border-purple-200",
      boxing: "bg-orange-100 text-orange-800 border-orange-200",
      senior: "bg-yellow-100 text-yellow-800 border-yellow-200",
    };
    return colors[type] || "bg-gray-100 text-gray-800 border-gray-200";
  };

  return (
    <section className="py-16 bg-gray-50" id="schedule">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Weekend Class Schedule
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Saturday & Sunday Only
          </p>
          <div className="mt-4 inline-flex gap-3">
            <span className="px-6 py-2 bg-red-600 text-white rounded-full text-sm font-semibold">
              Saturday
            </span>
            <span className="px-6 py-2 bg-red-600 text-white rounded-full text-sm font-semibold">
              Sunday
            </span>
          </div>
        </div>

        {/* Desktop Schedule Table */}
        <div className="hidden lg:block overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg max-w-4xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-900 text-white">
                <tr>
                  <th className="py-4 px-6 text-left font-semibold w-1/3">Time</th>
                  {days.map((day) => (
                    <th key={day} className="py-4 px-6 text-center font-semibold w-1/3">
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
                    <td className="py-4 px-6 text-center">
                      <span
                        className={`inline-block px-4 py-2 rounded-lg border ${getClassTypeColor(
                          row.saturday.type
                        )} font-medium text-sm whitespace-nowrap`}
                      >
                        {row.saturday.name}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span
                        className={`inline-block px-4 py-2 rounded-lg border ${getClassTypeColor(
                          row.sunday.type
                        )} font-medium text-sm whitespace-nowrap`}
                      >
                        {row.sunday.name}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Schedule Cards */}
        <div className="lg:hidden space-y-4 max-w-2xl mx-auto">
          {scheduleData.map((row) => (
            <div
              key={row.time}
              className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
            >
              {/* Time Header */}
              <div className="bg-gray-900 text-white px-6 py-3">
                <h3 className="font-bold text-center">{row.time}</h3>
              </div>
              
              {/* Saturday & Sunday */}
              <div className="p-4">
                <div className="grid grid-cols-2 gap-4">
                  {/* Saturday */}
                  <div className="text-center">
                    <p className="text-sm font-semibold text-gray-600 mb-2 flex items-center justify-center gap-1">
                      <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                      Saturday
                    </p>
                    <span
                      className={`inline-block px-3 py-2 rounded-lg border ${getClassTypeColor(
                        row.saturday.type
                      )} font-medium text-sm w-full`}
                    >
                      {row.saturday.name}
                    </span>
                  </div>
                  
                  {/* Sunday */}
                  <div className="text-center">
                    <p className="text-sm font-semibold text-gray-600 mb-2 flex items-center justify-center gap-1">
                      <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                      Sunday
                    </p>
                    <span
                      className={`inline-block px-3 py-2 rounded-lg border ${getClassTypeColor(
                        row.sunday.type
                      )} font-medium text-sm w-full`}
                    >
                      {row.sunday.name}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Schedule Notes */}
        <div className="mt-10 text-center max-w-2xl mx-auto">
          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <h4 className="font-bold text-gray-900 mb-3">Weekend Schedule Notes</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>Karate: 4:30 - 5:30 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                <span>Kickboxing: 5:30 - 6:30 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span>Muay Thai: 6:30 - 7:30 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                <span>Boxing: 7:30 - 8:30 PM</span>
              </div>
              <div className="flex items-center gap-2 sm:col-span-2 justify-center">
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                <span>Seniors Batch (18+): 8:30 - 9:30 PM</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-4 pt-4 border-t border-red-200">
              ⚡ Classes available only on Saturday and Sunday • Weekdays Closed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}