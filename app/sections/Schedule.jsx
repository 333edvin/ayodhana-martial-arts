export default function Schedule() {
  const scheduleData = [
    {
      time: "4:30 PM - 5:30 PM",
      tuesday: null,
      thursday: null,
      saturday: { type: "karate", name: "Karate" },
      sunday: { type: "karate", name: "Karate" },
    },
    {
      time: "5:30 PM - 6:30 PM",
      tuesday: { type: "boxing", name: "Boxing & Cardio" },
      thursday: { type: "kickboxing", name: "Kickboxing & Fight Training" },
      saturday: { type: "muaythai", name: "Muay Thai & Strengthening" },
      sunday: { type: "fightday", name: "Cardio, Kickboxing & Fight Day" },
    },
    {
      time: "6:30 PM - 7:30 PM",
      tuesday: { type: "boxing", name: "Boxing & Cardio" },
      thursday: { type: "kickboxing", name: "Kickboxing & Fight Training" },
      saturday: { type: "muaythai", name: "Muay Thai & Strengthening" },
      sunday: { type: "fightday", name: "Cardio, Kickboxing & Fight Day" },
    },
    {
      time: "7:30 PM - 8:30 PM",
      tuesday: { type: "boxing", name: "Boxing & Cardio" },
      thursday: { type: "kickboxing", name: "Kickboxing & Fight Training" },
      saturday: { type: "muaythai", name: "Muay Thai & Strengthening" },
      sunday: { type: "fightday", name: "Cardio, Kickboxing & Fight Day" },
    },
    {
      time: "8:30 PM - 9:30 PM",
      tuesday: { type: "senior", name: "Senior Batch – Boxing & Cardio" },
      thursday: { type: "senior", name: "Senior Batch – Kickboxing & Fight Training" },
      saturday: { type: "senior", name: "Senior Batch – Muay Thai & Strengthening" },
      sunday: { type: "senior", name: "Senior Batch – Fight Day Training" },
    },
  ];

  const days = ["Tuesday", "Thursday", "Saturday", "Sunday"];

  const getClassTypeColor = (type) => {
    const colors = {
      karate: "bg-blue-100 text-blue-800 border-blue-300",
      boxing: "bg-orange-100 text-orange-800 border-orange-300",
      kickboxing: "bg-red-100 text-red-800 border-red-300",
      muaythai: "bg-purple-100 text-purple-800 border-purple-300",
      fightday: "bg-pink-100 text-pink-800 border-pink-300",
      senior: "bg-yellow-100 text-yellow-800 border-yellow-300",
    };
    return colors[type] || "bg-gray-100 text-gray-800 border-gray-300";
  };

  return (
    <section
      className="py-20 bg-gradient-to-b from-gray-100 to-white"
      id="schedule"
    >
      <div className="max-w-[1400px] mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Weekly Training Schedule
          </h2>
          <p className="text-lg text-gray-600">
            Tuesday, Thursday, Saturday & Sunday
          </p>
        </div>

        {/* ================= DESKTOP TABLE ================= */}
        <div className="hidden lg:block overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-black text-white">
                <tr>
                  <th className="py-5 px-6 text-left w-1/5 font-semibold">
                    Time
                  </th>
                  {days.map((day) => (
                    <th
                      key={day}
                      className="py-5 px-6 text-center w-1/5 font-semibold"
                    >
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {scheduleData.map((row, index) => (
                  <tr
                    key={row.time}
                    className={
                      index % 2 === 0
                        ? "bg-white"
                        : "bg-gray-50"
                    }
                  >
                    <td className="py-6 px-6 font-semibold text-gray-900">
                      {row.time}
                    </td>

                    {days.map((day) => {
                      const classData = row[day.toLowerCase()];
                      return (
                        <td key={day} className="py-4 px-6 text-center">
                          {classData ? (
                            <span
                              className={`inline-block px-4 py-2 rounded-lg border font-semibold ${getClassTypeColor(
                                classData.type
                              )}`}
                            >
                              {classData.name}
                            </span>
                          ) : (
                            <span className="text-gray-400">—</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ================= MOBILE CARDS ================= */}
        <div className="lg:hidden space-y-6">
          {scheduleData.map((row) => (
            <div
              key={row.time}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
            >
              {/* Time Header */}
              <div className="bg-black text-white py-3 text-center font-bold">
                {row.time}
              </div>

              <div className="p-4 space-y-3">
                {days.map((day) => {
                  const classData = row[day.toLowerCase()];
                  return (
                    <div
                      key={day}
                      className="flex justify-between items-center"
                    >
                      <span className="font-semibold text-gray-700 text-sm">
                        {day}
                      </span>

                      {classData ? (
                        <span
                          className={`px-3 py-1 rounded-lg text-xs border font-medium ${getClassTypeColor(
                            classData.type
                          )}`}
                        >
                          {classData.name}
                        </span>
                      ) : (
                        <span className="text-gray-400 text-sm">—</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* ================= NOTICE ================= */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 shadow-md">
            <h4 className="font-bold text-gray-900 mb-3 text-lg">
              Important Notice
            </h4>
            <p className="text-sm text-gray-700">
              🥋 Karate is conducted exclusively from
              <strong> 4:30 PM – 5:30 PM </strong>
              on <strong>Saturday & Sunday only</strong>.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
