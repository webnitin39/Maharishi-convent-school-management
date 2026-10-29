
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const AdminDashboard = () => {
  // teacher state 
  const [showTeacherForm, setshowTeacherForm] = useState(false);
  const [salary, setSalary] = useState("")
  const [teacherPassword, setTeacherPassword] = useState("");
  const [teacherRole, setTeacherRole] = useState("Subject Teacher");
  const [classTeacherOf, setClassTeacherOf] = useState("");

  const [teachers, setTeachers] = useState(() => {
    const savedTeachers = localStorage.getItem("schoolTeachers");
    return savedTeachers ? JSON.parse(savedTeachers).map((teacher) => ({
      ...teacher,
      paymentHistory: teacher.paymentHistory || [],
    })) : [];
  });

  // student state  
  const [searchStudent, setSearchStudent] = useState("");
  const [students, setStudents] = useState(() => {
    const savedStudents = localStorage.getItem("schoolStudents");

    return savedStudents ? JSON.parse(savedStudents) : [];
  });

  const [showStudentForm, setShowStudentForm] = useState(false);
  const [editingStudentId, setEditingStudentId] = useState(null);
  const [studentName, setStudentName] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [studentRollNumber, setStudentRollNumber] = useState("");
  const [parentName, setParentName] = useState("");
  const [parentEmail, setParentEmail] = useState("");
  const [parentPhone, setParentPhone] = useState("");


  // student delete funvtionality

  const handleDeleteStudent = (studentId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (!confirmDelete) return;

    setStudents((prevStudents) =>
      prevStudents.filter((student) => student.id !== studentId)
    );

    alert("Student deleted successfully!");
  };


  // student edit update functionality


  const handleEditStudent = (student) => {
    setStudentName(student.name);
    setStudentClass(student.class);
    setStudentRollNumber(student.rollNumber);
    setParentName(student.parentName);
    setParentEmail(student.parentEmail);
    setParentPhone(student.parentPhone || "");

    setEditingStudentId(student.id);
    setShowStudentForm(true);
  };


  const filteredStudents = students.filter((student) => {
    const searchText = searchStudent.toLowerCase().trim();

    return (
      student.name.toLowerCase().includes(searchText) ||
      String(student.rollNumber).toLowerCase().includes(searchText)
    );
  });

  const totalTeachers = teachers.length;

  const totalSalary = teachers.reduce(
    (total, teacher) => total + Number(teacher.salary || 0),
    0
  );

  const pendingPayments = teachers.reduce(
    (total, teacher) =>
      total +
      (teacher.paymentHistory || []).filter(
        (payment) => payment.status === "Pending"
      ).length,
    0
  );

  const paidPayments = teachers.reduce(
    (total, teacher) =>
      total +
      (teacher.paymentHistory || []).filter(
        (payment) => payment.status === "Paid"
      ).length,
    0
  );

  const pendingAmount = teachers.reduce(
    (total, teacher) =>
      total +
      (teacher.paymentHistory || []).reduce(
        (sum, payment) =>
          sum +
          (payment.status === "Pending" ? Number(payment.amount) || 0 : 0),
        0
      ),
    0
  );

  const paidAmount = teachers.reduce(
    (total, teacher) =>
      total +
      (teacher.paymentHistory || []).reduce(
        (sum, payment) =>
          sum +
          (payment.status === "Paid" ? Number(payment.amount) || 0 : 0),
        0
      ),
    0
  );

  const [teacherName, setTeacherName] = useState("");
  const [subject, setSubject] = useState("");
  const [teacherEmail, setTeacherEmail] = useState("");
  const [assignedClasses, setAssignedClasses] = useState("");
  const [editingTeacherId, setEditingTeacherId] = useState(null);

  useEffect(() => {
    localStorage.setItem("schoolTeachers", JSON.stringify(teachers));

  }, [teachers]);

  useEffect(() => {
    localStorage.setItem("schoolStudents", JSON.stringify(students));
  }, [students]);



  return (
    <main className="min-h-screen bg-page p-6">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl font-bold text-navy">
          Admin Dashboard
        </h1>

        <p className="mt-2 text-slate-600">
          Welcome to Maharishi Convent School Administration Portal.
        </p>


        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Total Students</p>
            <h2 className="mt-2 text-2xl font-bold text-navy">--</h2>
            <p className="mt-1 text-xs text-slate-500">Registered students</p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Total Teachers</p>
            <h2 className="mt-2 text-2xl font-bold text-navy">{teachers.length}</h2>
            <p className="mt-1 text-xs text-slate-500">Teaching staff</p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Total Classes</p>
            <h2 className="mt-2 text-2xl font-bold text-navy">--</h2>
            <p className="mt-1 text-xs text-slate-500">School classes</p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Pending Requests</p>
            <h2 className="mt-2 text-2xl font-bold text-navy">--</h2>
            <p className="mt-1 text-xs text-slate-500">Awaiting review</p>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-xl font-bold text-navy">
            Salary Summary
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Overview of teachers' salaries and payment records.
          </p>
          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-slate-500">Total Teachers</p>
              <h3 className="mt-2 text-2xl font-bold text-navy">
                {totalTeachers}
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                Registered teaching staff
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-slate-500">Monthly Salary Expense</p>
              <h3 className="mt-2 text-2xl font-bold text-navy">
                ₹{totalSalary.toLocaleString("en-IN")}
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                Total monthly salaries
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-slate-500">Pending Payments</p>
              <h3 className="mt-2 text-2xl font-bold text-amber-600">
                {pendingPayments}
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                Pending salary records
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-slate-500">Paid Payments</p>
              <h3 className="mt-2 text-2xl font-bold text-green-600">
                {paidPayments}
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                Completed salary records
              </p>
            </div>


          </div>

          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="rounded-xl border border-amber-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-slate-500">Pending Salary Amount</p>
              <h3 className="mt-2 text-2xl font-bold text-amber-600">
                ₹{pendingAmount.toLocaleString("en-IN")}
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                Total amount awaiting payment
              </p>
            </div>

            <div className="rounded-xl border border-green-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-slate-500">Paid Salary Amount</p>
              <h3 className="mt-2 text-2xl font-bold text-green-600">
                ₹{paidAmount.toLocaleString("en-IN")}
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                Total amount marked as paid
              </p>
            </div>
          </div>

        </div>

        <div className="mt-10 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-navy">
            Quick Actions
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Manage school activities from one place.
          </p>

          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Manage Teachers",
              "Manage Students",
              "Manage Classes",
              "Manage Timetable",
            ].map((action) => (
              <button
                key={action}
                type="button"
                className="rounded-lg border border-slate-200 p-4 text-left font-semibold text-navy transition hover:border-gold hover:bg-page"
              >
                {action}
                <span className="mt-2 block text-xs font-normal text-slate-500">
                  Open management →
                </span>
              </button>
            ))}
          </div>
        </div>



        <div className="mt-10 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-bold text-navy">
                Teacher Management
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                View and manage school teaching staff.
              </p>
            </div>


            <button
              type="button"
              className="rounded-lg bg-navy px-5 py-3 font-semibold text-white transition hover:bg-blue"
              onClick={() => {

                setEditingTeacherId(null);
                setTeacherName("");
                setTeacherEmail("");
                setTeacherPassword("");
                setSubject("");
                setAssignedClasses("");
                setSalary("");
                setTeacherRole("Subject Teacher");
                setClassTeacherOf("");
                setshowTeacherForm(true);
              }}>
              + Add Teacher
            </button>



          </div>


          {showTeacherForm && (
            <form
              className="mt-6 grid grid-cols-1 gap-4 rounded-xl bg-page p-5 sm:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault();
                if (teacherRole === "Class Teacher") {
                  if (!classTeacherOf) {
                    alert("Please select a class for the Class Teacher.");
                    return;
                  }

                  const alreadyAssigned = teachers.some(
                    (teacher) =>
                      teacher.classTeacherOf === classTeacherOf &&
                      teacher.teacherRole === "Class Teacher" &&
                      teacher.id !== editingTeacherId
                  );

                  if (alreadyAssigned) {
                    alert(`${classTeacherOf} already has a Class Teacher!`);
                    return;
                  }
                }
                if (editingTeacherId !== null) {
                  setTeachers((prevTeachers) =>
                    prevTeachers.map((teacher) =>
                      teacher.id === editingTeacherId
                        ? {
                          ...teacher,
                          name: teacherName.trim(),
                          email: teacherEmail.trim().toLowerCase(),
                          password: teacherPassword || teacher.password || "",
                          subject: subject.trim(),
                          assignedClasses: assignedClasses.trim(),
                          teacherRole: teacherRole,
                          classTeacherOf: classTeacherOf,
                          salary: Number(salary) || 0,
                        }
                        : teacher
                    )
                  );

                  setEditingTeacherId(null);
                } else {
                  const newTeacher = {
                    id: Date.now(),
                    name: teacherName.trim(),
                    email: teacherEmail.trim().toLowerCase(),
                    password: teacherPassword,
                    subject: subject.trim(),
                    assignedClasses: assignedClasses.trim(),
                    teacherRole: teacherRole,
                    classTeacherOf: classTeacherOf,
                    salary: Number(salary) || 0,
                    paymentHistory: [],

                  };

                  setTeachers((prevTeachers) => [...prevTeachers, newTeacher]);
                }

                setTeacherName("");
                setTeacherEmail("");
                setSubject("");
                setAssignedClasses("");
                setSalary("")
                setTeacherPassword("")
                setTeacherRole("Subject Teacher");
                setClassTeacherOf("");
                setshowTeacherForm(false);
              }}
            >
              <div>
                <label className="mb-2 block text-sm font-semibold text-navy">
                  Teacher Name
                </label>
                <input
                  type="text"
                  placeholder="Enter teacher name"
                  value={teacherName}
                  onChange={(e) => setTeacherName(e.target.value)}
                  required
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-navy">
                  Teacher Email
                </label>

                <input
                  type="email"
                  value={teacherEmail}
                  onChange={(e) => setTeacherEmail(e.target.value)}
                  placeholder="Enter teacher email"
                  required
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue"
                />
              </div>


              <div>
                <label className="mb-2 block font-medium text-navy">
                  Teacher Password
                </label>

                <input
                  type="password"
                  value={teacherPassword}
                  onChange={(e) => setTeacherPassword(e.target.value)}
                  placeholder="Set teacher password"
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue focus:ring-2 focus:ring-blue/20"
                />
              </div>


              <div>
                <label className="mb-2 block text-sm font-semibold text-navy">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="e.g. Mathematics"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-navy">
                  Assigned Classes
                </label>
                <input
                  type="text"
                  placeholder="e.g. Class 6, Class 8"
                  value={assignedClasses}
                  onChange={(e) => setAssignedClasses(e.target.value)}
                  required
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue"
                />
              </div>


              <div>
                <label className="mb-1 block text-sm font-medium">
                  Teacher Role
                </label>

                <select
                  value={teacherRole}
                  onChange={(e) => {
                    setTeacherRole(e.target.value);
                    if (e.target.value === "Subject Teacher") {
                      setClassTeacherOf("");
                    }
                  }}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-blue-600"
                >
                  <option value="Subject Teacher">Subject Teacher</option>
                  <option value="Class Teacher">Class Teacher</option>
                </select>
              </div>

              {teacherRole === "Class Teacher" && (
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Class Teacher Of
                  </label>

                  <select
                    value={classTeacherOf}
                    onChange={(e) => setClassTeacherOf(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-blue-600"
                  >
                    <option value="">Select Class</option>
                    <option value="Nursery">Nursery</option>
                    <option value="LKG">LKG</option>
                    <option value="UKG">UKG</option>
                    {Array.from({ length: 12 }, (_, i) => (
                      <option key={i + 1} value={`Class ${i + 1} `}>
                        Class {i + 1}
                      </option>
                    ))}
                  </select>
                </div>
              )}


              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">
                  Monthly Salary (₹)
                </label>

                <input
                  type="number"

                  value={salary}
                  onChange={(e) => {

                    setSalary(e.target.value);

                  }}
                  placeholder="Enter monthly salary"
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue"
                />

              </div>

              {

              }

              <div className="flex items-end">
                <button
                  type="submit"
                  className="w-full rounded-lg bg-navy px-5 py-3 font-semibold text-white transition hover:bg-blue"
                >
                  {editingTeacherId !== null ? "Save Changes" : "Save Teacher"}
                </button>
              </div>
            </form>
          )}


          <div className="mt-6 max-h-80 overflow-auto">

            <table className="w-full min-w-[600px] text-left">
              <thead>
                <tr className="border-b border-slate-200 text-sm text-slate-500">
                  <th className="px-4 py-3">Teacher Name</th>
                  <th className="px-4 py-3">Subject</th>
                  <th className="px-4 py-3">Assigned Classes</th>
                  <th className="px-4 py-3"> Sallary</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Action</th>

                </tr>
              </thead>

              <tbody>
                {teachers.length === 0 ? (
                  <tr>
                    <td
                      colSpan={6}
                      className="px-4 py-8 text-center text-sm text-slate-500"
                    >
                      No teacher records yet. Teacher data will appear here.
                    </td>
                  </tr>
                ) : (
                  teachers.map((teacher) => (
                    <tr key={teacher.id} className="border-b border-slate-100">
                      <td className="px-4 py-3"> <Link className="font-semibold text-blue hover:underline" to={`/teachers/${teacher.id}`} > {teacher.name} </Link></td>
                      <td className="px-4 py-3">{teacher.subject}</td>
                      <td className="px-4 py-3">{teacher.assignedClasses}</td>
                      <td className="px-4 py-3">   ₹{Number(teacher.salary || 0).toLocaleString("en-IN")}</td>
                      <td className="px-4 py-3">
                        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                          Active
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <button
                          type="button"
                          onClick={() => {
                            setEditingTeacherId(teacher.id);
                            setTeacherName(teacher.name);
                            setTeacherEmail(teacher.email || "");
                            setSubject(teacher.subject);
                            setTeacherPassword(teacher.password)
                            setAssignedClasses(teacher.assignedClasses);
                            setTeacherRole(teacher.teacherRole || "Subject Teacher");
                            setClassTeacherOf(teacher.classTeacherOf || "");
                            setSalary(String(teacher.salary ?? ""));
                            setshowTeacherForm(true);
                          }}
                          className="mr-2 rounded-lg bg-blue-100 px-3 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-200"
                        >
                          Edit
                        </button>

                        <button
                          type="button"
                          onClick={() => {
                            const confirmed = window.confirm(
                              `Are you sure you want to delete ${teacher.name}?`
                            );

                            if (confirmed) {
                              setTeachers((prevTeachers) =>
                                prevTeachers.filter((item) => item.id !== teacher.id)
                              );
                            }
                          }}
                          className="rounded-lg bg-red-100 px-3 py-2 text-sm font-semibold text-red-700 transition hover:bg-red-200"
                        >
                          Delete
                        </button>


                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-bold text-navy">
              Student Management
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              View and manage school students.
            </p>
          </div>

          <button
            type="button"
            className="rounded-lg bg-navy px-5 py-3 font-semibold text-white transition hover:bg-blue"
            onClick={() => {
              setStudentName("");
              setStudentClass("");
              setStudentRollNumber("");
              setParentName("");
              setParentEmail("");
              setParentPhone("");
              setShowStudentForm(true);
            }}
          >
            + Add Student
          </button>


          {/* student form ka UI  */}



        </div>
        {showStudentForm && (
          <form
            className="mt-6 grid grid-cols-1 gap-4 rounded-xl bg-page p-5 sm:grid-cols-2"
            onSubmit={(e) => {
              e.preventDefault();

              // duplicate rollNumber handler 


              const duplicateRollNumber = students.some(
                (student) =>
                  student.class === studentClass &&
                  String(student.rollNumber).trim() === studentRollNumber.trim() &&
                  student.id !== editingStudentId
              );

              if (duplicateRollNumber) {
                alert("This roll number is already assigned in this class!");
                return;
              }

              

              if (editingStudentId !== null) {
                setStudents((prevStudents) =>
                  prevStudents.map((student) =>
                    student.id === editingStudentId
                      ? {
                        ...student,
                        name: studentName.trim(),
                        class: studentClass,
                        rollNumber: studentRollNumber.trim(),
                        parentName: parentName.trim(),
                        parentEmail: parentEmail.trim().toLowerCase(),
                        parentPhone: parentPhone.trim(),
                      }
                      : student
                  )
                );

                alert("Student updated successfully!");
              } else {
                const newStudent = {
                  id: Date.now(),
                  name: studentName.trim(),
                  class: studentClass,
                  rollNumber: studentRollNumber.trim(),
                  parentName: parentName.trim(),
                  parentEmail: parentEmail.trim().toLowerCase(),
                  parentPhone: parentPhone.trim(),
                };

                setStudents((prevStudents) => [...prevStudents, newStudent]);

                alert("Student added successfully!");
              }

              setStudentName("");
              setStudentClass("");
              setStudentRollNumber("");
              setParentName("");
              setParentEmail("");
              setParentPhone("");
              setEditingStudentId(null);
              setShowStudentForm(false);

            }}
          >
            <div>
              <label className="mb-1 block text-sm font-medium">
                Student Name
              </label>
              <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                placeholder="Enter student name"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">
                Class
              </label>
              <select
                value={studentClass}
                onChange={(e) => setStudentClass(e.target.value)}
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
              >
                <option value="">Select Class</option>
                <option value="Nursery">Nursery</option>
                <option value="LKG">LKG</option>
                <option value="UKG">UKG</option>
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i + 1} value={`Class ${i + 1}`}>
                    Class {i + 1}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">
                Roll Number
              </label>
              <input
                type="text"
                value={studentRollNumber}
                onChange={(e) => setStudentRollNumber(e.target.value)}
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                placeholder="Enter roll number"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">
                Parent Name
              </label>
              <input
                type="text"
                value={parentName}
                onChange={(e) => setParentName(e.target.value)}
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                placeholder="Enter parent name"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">
                Parent Email
              </label>
              <input
                type="email"
                value={parentEmail}
                onChange={(e) => setParentEmail(e.target.value)}
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                placeholder="Enter parent email"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">
                Parent Phone
              </label>
              <input
                type="tel"
                value={parentPhone}
                onChange={(e) => setParentPhone(e.target.value)}
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                placeholder="Enter parent phone"
              />
            </div>

            <div className="flex gap-3 sm:col-span-2">
              <button
                type="submit"
                className="rounded-lg bg-navy px-5 py-3 font-semibold text-white hover:bg-blue"
              >
                {editingStudentId !== null ? "Update Student" : "Add Student"}
              </button>

              <button
                type="button"
                onClick={() => {
                  setShowStudentForm(false);
                  setEditingStudentId(null);
                  setStudentName("");
                  setStudentClass("");
                  setStudentRollNumber("");
                  setParentName("");
                  setParentEmail("");
                  setParentPhone("");
                }}
                className="rounded-lg border border-slate-300 px-5 py-3 font-semibold text-slate-700 hover:bg-slate-100"
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        {/* filter student by roll nuymber or name  */}


        <div className="mt-5 mb-3">
          <input
            type="text"
            placeholder="Search by student name or roll number..."
            value={searchStudent}
            onChange={(e) => setSearchStudent(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue sm:max-w-md"
          />
        </div>



        <div className="mt-6 overflow-auto max-h-80 rounded-xl border border-slate-200 bg-white">
          <table className="w-full min-w-[700px] text-left text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th className="px-5 py-4">Student Name</th>
                <th className="px-5 py-4">Class</th>
                <th className="px-5 py-4">Roll Number</th>
                <th className="px-5 py-4">Parent Name</th>
                <th className="px-5 py-4">Parent Email</th>
                <th className="px-4 py-3">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">

              {filteredStudents.length > 0 ? (
                filteredStudents.map((student) => (
                  <tr key={student.id}>
                    <td className="px-5 py-4 font-medium text-slate-800">
                      {student.name}
                    </td>
                    <td className="px-5 py-4">{student.class}</td>
                    <td className="px-5 py-4">{student.rollNumber}</td>
                    <td className="px-5 py-4">{student.parentName}</td>
                    <td className="px-5 py-4">{student.parentEmail}</td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => handleEditStudent(student)}
                          className="font-medium text-blue-600 hover:text-blue-800"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() => handleDeleteStudent(student.id)}
                          className="font-medium text-red-600 hover:text-red-800"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={6}
                    className="px-5 py-8 text-center text-slate-500"
                  >
                    {searchStudent.trim()
                      ? "No matching students found."
                      : "No students added yet."}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>


      </div>
    </main>
  );
};

export default AdminDashboard;
