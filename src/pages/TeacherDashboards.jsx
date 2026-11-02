import React, { useState, useEffect } from "react";

const TeacherDashboard = () => {
  const [teacher, setTeacher] = useState(null);
 const [showAttendance, setShowAttendance] = useState(false);
 const [students, setStudents] = useState([]);
 const [attendance, setAttendance] = useState({});

 const saveAttendance = () => {
  const today = new Date().toISOString().split("T")[0];

  const attendanceRecord = {
    date: today,
    className: teacher?.classTeacherOf,
    records: classStudents.map((student) => ({
      studentId: student.id,
      studentName: student.name,
      rollNumber: student.rollNumber,
      status: attendance[student.id] || "Present",
    })),
  };

  const savedAttendance = JSON.parse(
    localStorage.getItem("schoolAttendance") || "[]"
  );

  const updatedAttendance = savedAttendance.filter(
    (record) =>
      !(
        record.date === today &&
        record.className === teacher?.classTeacherOf
      )
  );

  updatedAttendance.push(attendanceRecord);

  localStorage.setItem(
    "schoolAttendance",
    JSON.stringify(updatedAttendance)
  );

  alert("Attendance saved successfully!");
};

 const classStudents = students.filter(
  (student) =>
    String(student.class).trim() ===
    String(teacher?.classTeacherOf || "").trim()
);

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

useEffect(() => {
  const savedStudents = JSON.parse(
    localStorage.getItem("schoolStudents") || "[]"
  );

  setStudents(savedStudents);
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
      onClick={() => setShowAttendance(true)}
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

{/* attendence section  */}

{showAttendance && teacher?.teacherRole === "Class Teacher" && (
  <section className="mt-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h2 className="text-xl font-bold text-navy">
          Attendance Management
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Class: {teacher.classTeacherOf}
        </p>
      </div>

      <button
        type="button"
        onClick={() => setShowAttendance(false)}
        className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-navy hover:bg-page"
      >
        Close Attendance
      </button>


      
    </div>

    <div className="mt-6 overflow-x-auto">
  <table className="w-full min-w-[500px] text-left">
    <thead>
      <tr className="border-b border-slate-200 text-sm text-slate-500">
        <th className="p-3">Roll Number</th>
        <th className="p-3">Student Name</th>
        <th className="p-3">Class</th>
        <th className="p-3">Attendance Status</th>
      </tr>
    </thead>

    <tbody>
      {classStudents.length > 0 ? (
        classStudents.map((student) => (
          <tr
            key={student.id}
            className="border-b border-slate-100"
          >
            <td className="p-3">{student.rollNumber || "--"}</td>
            <td className="p-3 font-medium text-navy">
              {student.name}
            </td>
            <td className="p-3">{student.class}</td>
            <td className="p-3">
  <select
  value={attendance[student.id] || "Present"}
  onChange={(e) =>
    setAttendance((prev) => ({
      ...prev,
      [student.id]: e.target.value,
    }))
  }
  className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
>
    <option value="Present">Present</option>
    <option value="Absent">Absent</option>
    <option value="Leave">Leave</option>
  </select>
</td>
          </tr>
        ))
      ) : (
        <tr>
          <td
            colSpan="4"
            className="p-4 text-center text-slate-500"
          >
            No students found in this class.
          </td>
        </tr>
      )}
    </tbody>
  </table>
</div>
<button
  type="button"
  onClick={saveAttendance}
  className="mt-6 rounded-lg bg-navy px-5 py-3 font-medium text-white hover:opacity-90"
>
  Save Attendance
</button>

  </section>
)}

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