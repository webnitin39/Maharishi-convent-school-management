import React from "react";

const StudentDashboard = () => {
  return (
    <main className="min-h-screen bg-page p-6">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl font-bold text-navy">
          Student Dashboard
        </h1>

        <p className="mt-2 text-slate-600">
          Welcome to Maharishi Convent School Student Portal.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
  <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
    <p className="text-sm text-slate-500">Attendance</p>
    <h2 className="mt-2 text-2xl font-bold text-navy">--%</h2>
    <p className="mt-1 text-xs text-slate-500">Attendance record</p>
  </div>

  <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
    <p className="text-sm text-slate-500">Subjects</p>
    <h2 className="mt-2 text-2xl font-bold text-navy">--</h2>
    <p className="mt-1 text-xs text-slate-500">Enrolled subjects</p>
  </div>

  <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
    <p className="text-sm text-slate-500">Latest Result</p>
    <h2 className="mt-2 text-2xl font-bold text-navy">--</h2>
    <p className="mt-1 text-xs text-slate-500">Result not connected</p>
  </div>

  <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
    <p className="text-sm text-slate-500">Notices</p>
    <h2 className="mt-2 text-2xl font-bold text-navy">--</h2>
    <p className="mt-1 text-xs text-slate-500">School announcements</p>
  </div>
</div>
<div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
  {/* Timetable */}
  <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
    <h2 className="text-xl font-bold text-navy">
      Today's Timetable
    </h2>

    <p className="mt-1 text-sm text-slate-500">
      Your daily class schedule
    </p>

    <div className="mt-5 space-y-3">
      {[
        { time: "08:00 AM", subject: "Assembly" },
        { time: "08:30 AM", subject: "Class 1" },
        { time: "09:15 AM", subject: "Class 2" },
        { time: "10:00 AM", subject: "Short Break" },
      ].map((item) => (
        <div
          key={item.time}
          className="flex items-center justify-between gap-3 rounded-lg bg-page p-3"
        >
          <span className="text-sm font-medium text-slate-600">
            {item.time}
          </span>

          <span className="font-semibold text-navy">
            {item.subject}
          </span>
        </div>
      ))}
    </div>

    <p className="mt-4 text-xs text-slate-500">
      Sample timetable — actual school schedule to be added.
    </p>
  </section>

  {/* Latest Notices */}
  <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
    <h2 className="text-xl font-bold text-navy">
      Latest Notices
    </h2>

    <p className="mt-1 text-sm text-slate-500">
      School announcements
    </p>

    <div className="mt-5 rounded-lg border-l-4 border-gold bg-page p-4">
      <h3 className="font-semibold text-navy">
        School Announcements
      </h3>

      <p className="mt-2 text-sm text-slate-600">
        New notices and important updates will appear here.
      </p>
    </div>
  </section>
</div>
<section className="mt-10">
  <h2 className="text-xl font-bold text-navy">
    Quick Actions
  </h2>

  <p className="mt-1 text-sm text-slate-500">
    Access your student services
  </p>

  <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
    {[
      "View Attendance",
      "View Results",
      "Class Timetable",
      "School Notices",
    ].map((action) => (
      <button
        key={action}
        type="button"
        className="rounded-xl border border-slate-200 bg-white p-5 text-left font-semibold text-navy shadow-sm transition hover:-translate-y-1 hover:border-gold hover:shadow-md"
      >
        {action}
        <span className="mt-2 block text-sm font-normal text-slate-500">
          Open student service →
        </span>
      </button>
    ))}
  </div>
</section>
      </div>
    </main>
  );
};

export default StudentDashboard;