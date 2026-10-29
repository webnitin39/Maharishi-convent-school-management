import React, { useState, useEffect } from "react";

const TeacherDashboard = () => {
  const [teacher, setTeacher] = useState(null);
 

useEffect(() => {
  const teacherId = localStorage.getItem("currentTeacherId");

  const savedTeachers = JSON.parse(
    localStorage.getItem("schoolTeachers") || "[]"
  );

  const currentTeacher = savedTeachers.find(
    (item) => String(item.id) === teacherId
  );

  setTeacher(currentTeacher || null);
}, []);
  return (
    <main className="min-h-screen bg-page p-6">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl font-bold text-navy">
          Teacher Dashboard
        </h1>
        {teacher ? (
  <div className="mt-4">
    <h2 className="text-xl font-semibold text-navy">
      Welcome, {teacher.name}!
    </h2>

    <p className="mt-1 text-slate-600">
      Email: {teacher.email}
    </p>

    <p className="mt-1 text-slate-600">
      Subject: {teacher.subject}
    </p>

    <p className="mt-1 text-slate-600">
      Assigned Classes: {teacher.assignedClasses}
    </p>
    <p>
  <span className="font-semibold">Teacher Role:</span>{" "}
  {teacher?.teacherRole || "Subject Teacher"}
</p>

{teacher?.teacherRole === "Class Teacher" && (
  <p>
    <span className="font-semibold">Class Teacher Of:</span>{" "}
    {teacher?.classTeacherOf || "--"}
  </p>
)}
  </div>
) : (
  <p className="mt-4 text-red-600">
    Teacher information not found.
  </p>
)}

        <p className="mt-2 text-slate-600">
          Welcome to Maharishi Convent School Teacher Portal.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
  <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
    <p className="text-sm text-slate-500">My Classes</p>
    <h2 className="mt-2 text-2xl font-bold text-navy">
 
  {teacher?.assignedClasses || "--"}
</h2>
    <p className="mt-1 text-xs text-slate-500">Assigned classes</p>
  </div>

  <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
  <p className="text-sm text-slate-500">My Subject</p>

  <h2 className="mt-2 text-2xl font-bold text-navy">
    {teacher?.subject || "--"}
  </h2>

  <p className="mt-1 text-xs text-slate-500">
    Your assigned teaching subject
  </p>
</div>

  <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
    <p className="text-sm text-slate-500">My Students</p>
    <h2 className="mt-2 text-2xl font-bold text-navy">--</h2>
    <p className="mt-1 text-xs text-slate-500">Students in your classes</p>
  </div>
{teacher?.teacherRole === "Class Teacher" ? (
  <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
    <p className="text-sm text-slate-500">Attendance</p>

    <h2 className="mt-2 text-2xl font-bold text-navy">
      {teacher?.classTeacherOf || "--"}
    </h2>

    <p className="mt-1 text-xs text-slate-500">
      Manage your class attendance
    </p>

    <button
      type="button"
      onClick={() => alert("Attendance module will be added next.")}
      className="mt-4 rounded-lg bg-navy px-4 py-2 text-sm font-medium text-white hover:opacity-90"
    >
      Take Attendance
    </button>
  </div>
) : (
  <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
    <p className="text-sm text-slate-500">Attendance</p>

    <h2 className="mt-2 text-2xl font-bold text-navy">--</h2>

    <p className="mt-1 text-xs text-slate-500">
      Attendance managed by Class Teacher
    </p>
  </div>
)}

  <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
    <p className="text-sm text-slate-500">Pending Tasks</p>
    <h2 className="mt-2 text-2xl font-bold text-navy">--</h2>
    <p className="mt-1 text-xs text-slate-500">Work awaiting completion</p>
  </div>
</div>

<div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
  {/* Class Schedule */}
  <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
    <h2 className="text-xl font-bold text-navy">
      Today's Class Schedule
    </h2>

    <p className="mt-1 text-sm text-slate-500">
      Your daily teaching schedule
    </p>

    <div className="mt-5 space-y-3">
     {[
  {
    time: "08:30 - 09:15 AM",
    className: "Class 6",
    subject: "Mathematics",
    period: "1st Period",
  },
  {
    time: "09:15 - 10:00 AM",
    className: "Class 8",
    subject: "Mathematics",
    period: "2nd Period",
  },
  {
    time: "10:00 - 10:15 AM",
    className: "Short Break",
    subject: "-",
    period: "Break",
  },
  {
    time: "10:15 - 11:00 AM",
    className: "Class 7",
    subject: "Mathematics",
    period: "3rd Period",
  },
].map((item) => (
       <div
  key={item.time}
  className="flex flex-col gap-2 rounded-lg bg-page p-4 sm:flex-row sm:items-center sm:justify-between"
>
  <div>
    <p className="text-sm font-semibold text-navy">
      {item.time}
    </p>

    <p className="mt-1 text-xs text-slate-500">
      {item.period}
    </p>
  </div>

  <div className="sm:text-right">
    <p className="font-semibold text-navy">
      {item.className}
    </p>

    <p className="mt-1 text-sm text-slate-600">
      {item.subject}
    </p>
  </div>
</div>
      ))}
    </div>

    <p className="mt-4 text-xs text-slate-500">
      Sample schedule — actual timetable to be configured.
    </p>
  </section>

  {/* Quick Actions */}
  <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
    <h2 className="text-xl font-bold text-navy">
      Quick Actions
    </h2>

    <p className="mt-1 text-sm text-slate-500">
      Manage your teaching activities
    </p>

    <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
    {[
  "Mark Attendance",
  "View Students",
  "Manage Assignments",
  "View Timetable",
].map((action) => (
  <button
    key={action}
    type="button"
    className="rounded-lg border border-slate-200 p-4 text-left font-semibold text-navy transition hover:border-gold hover:bg-page"
  >
    {action}
    <span className="mt-2 block text-xs font-normal text-slate-500">
      Open teacher service →
    </span>
  </button>
))}
    </div>
  </section>
</div>
      </div>
    </main>
  );
};

export default TeacherDashboard;