import React from 'react'
import { useParams } from 'react-router-dom'


const StudentDetails = () => {
    const { id } = useParams();

    const students = JSON.parse(localStorage.getItem("schoolStudents") || "[]");
    const student = students.find((item) => String(item.id) === id);

    if (!student) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-slate-100 p-4">
                <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
                    <h1 className="text-xl font-bold text-slate-800">
                        Student Not Found
                    </h1>

                    <p className="mt-2 text-slate-500">
                        Student record could not be found.
                    </p>
                </div>
            </div>
        );
    }


    return (
        <div className="min-h-screen bg-slate-100 p-4 sm:p-6 lg:p-8">
            <div className="mx-auto max-w-6xl">
                <div className="rounded-2xl bg-white p-5 shadow-sm sm:p-8">
                    <div className="border-b border-slate-200 pb-5">
                        <p className="text-sm font-medium text-blue-800">
                            MAHARISHI CONVENT HR SEC SCHOOL
                        </p>

                        <h1 className="mt-2 text-2xl font-bold text-slate-800 sm:text-3xl">
                            Student Details
                        </h1>

                        <p className="mt-2 text-sm text-slate-500">
                            Complete information about the selected student.
                        </p>
                    </div>

                    <h2 className="mt-6 text-lg font-bold text-slate-800">
                        Personal Details
                    </h2>

                    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

                        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                            <p className="text-sm text-slate-500">Date of Birth</p>
                            <h2 className="mt-1 font-semibold text-slate-800">
                                {student.dateOfBirth || "Not provided"}
                            </h2>
                        </div>

                        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                            <p className="text-sm text-slate-500">Gender</p>
                            <h2 className="mt-1 font-semibold text-slate-800">
                                {student.gender || "Not provided"}
                            </h2>
                        </div>

                        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                            <p className="text-sm text-slate-500">Admission Date</p>
                            <h2 className="mt-1 font-semibold text-slate-800">
                                {student.admissionDate || "Not provided"}
                            </h2>
                        </div>

                        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 sm:col-span-2 lg:col-span-3">
                            <p className="text-sm text-slate-500">Student Address</p>
                            <h2 className="mt-1 break-words font-semibold text-slate-800">
                                {student.address || "Not provided"}
                            </h2>
                        </div>

                        <h2 className="mt-8 text-lg font-bold text-slate-800 sm:col-span-2 lg:col-span-3">
                            Parent Details
                        </h2>

                        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                            <p className="text-sm text-slate-500">Father's Name</p>
                            <h2 className="mt-1 break-words font-semibold text-slate-800">
                                {student.parentName || "Not provided"}
                            </h2>
                        </div>

                        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                            <p className="text-sm text-slate-500">Mother's Name</p>
                            <h2 className="mt-1 break-words font-semibold text-slate-800">
                                {student.motherName || "Not provided"}
                            </h2>
                        </div>

                        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                            <p className="text-sm text-slate-500">Father's Occupation</p>
                            <h2 className="mt-1 break-words font-semibold text-slate-800">
                                {student.fatherOccupation || "Not provided"}
                            </h2>
                        </div>

                        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                            <p className="text-sm text-slate-500">Mother's Occupation</p>
                            <h2 className="mt-1 break-words font-semibold text-slate-800">
                                {student.motherOccupation || "Not provided"}
                            </h2>
                        </div>

                        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                            <p className="text-sm text-slate-500">Parent Email</p>
                            <h2 className="mt-1 break-words font-semibold text-slate-800">
                                {student.parentEmail || "Not provided"}
                            </h2>
                        </div>

                        <h2 className="mt-8 text-lg font-bold text-slate-800 sm:col-span-2 lg:col-span-3">
                            Academic Details
                        </h2>

                        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                            <p className="text-sm text-slate-500">Previous School</p>
                            <h2 className="mt-1 break-words font-semibold text-slate-800">
                                {student.previousSchool || "Not provided"}
                            </h2>
                        </div>

                        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                            <p className="text-sm text-slate-500">Previous Class</p>
                            <h2 className="mt-1 font-semibold text-slate-800">
                                {student.previousClass || "Not provided"}
                            </h2>
                        </div>

                        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                            <p className="text-sm text-slate-500">Section</p>
                            <h2 className="mt-1 font-semibold text-slate-800">
                                {student.section || "Not provided"}
                            </h2>
                        </div>

                        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                            <p className="text-sm text-slate-500">Admission Type</p>
                            <h2 className="mt-1 font-semibold text-slate-800">
                                {student.admissionType || "Not provided"}
                            </h2>
                        </div>


                        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                            <p className="text-sm text-slate-500">Student Name</p>
                            <h2 className="mt-1 break-words font-semibold text-slate-800">
                                {student.name}
                            </h2>
                        </div>

                        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                            <p className="text-sm text-slate-500">Class</p>
                            <h2 className="mt-1 font-semibold text-slate-800">
                                {student.class}
                            </h2>
                        </div>

                        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                            <p className="text-sm text-slate-500">Roll Number</p>
                            <h2 className="mt-1 font-semibold text-slate-800">
                                {student.rollNumber}
                            </h2>
                        </div>

                        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                            <p className="text-sm text-slate-500">Parent Name</p>
                            <h2 className="mt-1 break-words font-semibold text-slate-800">
                                {student.parentName}
                            </h2>
                        </div>

                        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                            <p className="text-sm text-slate-500">Parent Email</p>
                            <h2 className="mt-1 break-words font-semibold text-slate-800">
                                {student.parentEmail}
                            </h2>
                        </div>

                        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                            <p className="text-sm text-slate-500">Parent Phone</p>
                            <h2 className="mt-1 break-words font-semibold text-slate-800">
                                {student.parentPhone || "Not provided"}
                            </h2>
                        </div>
                    </div>

                    <h2 className="mt-8 border-t border-slate-200 pt-6 text-lg font-bold text-slate-800 sm:col-span-2 lg:col-span-3">
                        Student Documents
                    </h2>


                    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
                            <div className="flex items-center gap-3">
                                <div className="rounded-lg bg-blue-100 p-3 text-xl">
                                    📄
                                </div>

                                <div>
                                    <h3 className="font-semibold text-slate-800">
                                        Birth Certificate
                                    </h3>
                                    <p className="mt-1 text-sm text-slate-500">
                                        Student's birth certificate
                                    </p>
                                </div>
                            </div>

                            <div className="mt-4 flex items-center justify-between rounded-lg bg-amber-50 p-3">
  <span className="text-sm font-medium text-amber-700">
    Not Uploaded
  </span>

  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
    Pending
  </span>
</div>
                        </div>

                        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                            <div className="flex items-center gap-3">
                                <div className="rounded-lg bg-amber-100 p-3 text-xl">
                                    📄
                                </div>

                                <div>
                                    <h3 className="font-semibold text-slate-800">
                                        Transfer Certificate (TC)
                                    </h3>
                                    <p className="mt-1 text-sm text-slate-500">
                                        Student's transfer certificate
                                    </p>
                                </div>
                            </div>

                            <div className="mt-4 flex items-center justify-between rounded-lg bg-amber-50 p-3">
  <span className="text-sm font-medium text-amber-700">
    Not Uploaded
  </span>

  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
    Pending
  </span>
</div>
                        </div>

                        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                            <div className="flex items-center gap-3">
                                <div className="rounded-lg bg-green-100 p-3 text-xl">
                                    📄
                                </div>

                                <div>
                                    <h3 className="font-semibold text-slate-800">
                                        Previous Marksheet
                                    </h3>
                                    <p className="mt-1 text-sm text-slate-500">
                                        Student's previous academic marksheet
                                    </p>
                                </div>
                            </div>

                            <div className="mt-4 flex items-center justify-between rounded-lg bg-amber-50 p-3">
  <span className="text-sm font-medium text-amber-700">
    Not Uploaded
  </span>

  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
    Pending
  </span>
</div>
                        </div>

                        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                            <div className="flex items-center gap-3">
                                <div className="rounded-lg bg-purple-100 p-3 text-xl">
                                    🖼️
                                </div>

                                <div>
                                    <h3 className="font-semibold text-slate-800">
                                        Student Photograph
                                    </h3>
                                    <p className="mt-1 text-sm text-slate-500">
                                        Student's profile photograph
                                    </p>
                                </div>
                            </div>

                           <div className="mt-4 flex items-center justify-between rounded-lg bg-amber-50 p-3">
  <span className="text-sm font-medium text-amber-700">
    Not Uploaded
  </span>

  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
    Pending
  </span>
</div>
                        </div>

                        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                            <div className="flex items-center gap-3">
                                <div className="rounded-lg bg-slate-200 p-3 text-xl">
                                    📁
                                </div>

                                <div>
                                    <h3 className="font-semibold text-slate-800">
                                        Other Documents
                                    </h3>
                                    <p className="mt-1 text-sm text-slate-500">
                                        Additional student documents
                                    </p>
                                </div>
                            </div>

                          <div className="mt-4 flex items-center justify-between rounded-lg bg-amber-50 p-3">
  <span className="text-sm font-medium text-amber-700">
    Not Uploaded
  </span>

  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
    Pending
  </span>
</div>
                        </div>
                    </div>




                </div>
            </div>
        </div>
    );


}

export default StudentDetails