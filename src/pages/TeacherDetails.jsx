
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";


const TeacherDetails = () => {
  const { id } = useParams();
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [paymentMonth, setPaymentMonth] = useState("");
  const [paymentAmount, setPaymentAmount] = useState("");
  const [paymentDate, setPaymentDate] = useState("")
  const [paymentStatus, setPaymentStatus] = useState("Paid")



  const [teacher, setTeacher] = useState(() => {
    const savedTeachers = JSON.parse(localStorage.getItem("schoolTeachers") || "[]")
    return savedTeachers.find((item) => item.id === Number(id)) || null;
  });


  const markPaymentAsPaid = (paymentId) => {
    const updatedTeachers = JSON.parse(
      localStorage.getItem("schoolTeachers") || "[]"
    ).map((item) =>
      item.id === teacher.id
        ? {
          ...item,
          paymentHistory: (item.paymentHistory || []).map((payment) =>
            payment.id === paymentId
              ? { ...payment, status: "Paid" }
              : payment
          ),
        }
        : item
    );

    localStorage.setItem(
      "schoolTeachers",
      JSON.stringify(updatedTeachers)
    );

    const updatedTeacher = updatedTeachers.find(
      (item) => item.id === teacher.id
    );

    setTeacher(updatedTeacher);
  };



  return (
    <main className="min-h-screen bg-page p-6">
      <div className="mx-auto max-w-7xl">

        <Link
          to="/admin-dashboard"
          className="inline-flex items-center gap-2 font-semibold text-blue hover:underline"
        >
          <i className="ri-arrow-left-line"></i>
          Back to Admin Dashboard
        </Link>

        {teacher ? (
          <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">

            <p className="text-sm font-medium text-slate-500">
              Teacher Profile
            </p>

            <h1 className="mt-2 text-3xl font-bold text-navy">
              {teacher.name}
            </h1>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">

              <div className="rounded-lg bg-page p-4">
                <p className="text-sm text-slate-500">Teacher ID</p>
                <p className="mt-1 font-semibold text-navy">
                  {teacher.id}
                </p>
              </div>

              <div className="rounded-lg bg-page p-4">
                <p className="text-sm text-slate-500">Subject</p>
                <p className="mt-1 font-semibold text-navy">
                  {teacher.subject}
                </p>
              </div>

              <div className="rounded-lg bg-page p-4 ">
                <p className="text-sm text-slate-500">Assigned Classes</p>
                <p className="mt-1 font-semibold text-navy">
                  {teacher.assignedClasses}
                </p>

              </div>

              <div className="rounded-lg bg-page p-4">
                <p className="text-sm text-slate-500">Monthly Salary</p>
                <p className="mt-1 font-semibold text-navy">
                  ₹{Number(teacher.salary || 0).toLocaleString("en-IN")}
                </p>
              </div>



            </div>
          </div>
        ) : (
          <div className="mt-6 rounded-xl bg-white p-6 shadow-sm">
            <h1 className="text-2xl font-bold text-navy">
              Teacher Not Found
            </h1>

            <p className="mt-2 text-slate-600">
              Is ID ka teacher record nahi mila. Admin Dashboard se teacher select karke dobara try karo.
            </p>
          </div>
        )}

      </div>



      {/* teachers payment history section  */}



      <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-navy">
          Salary Payment History
        </h2>

        <button
          type="button"
          onClick={() => setShowPaymentForm(!showPaymentForm)}
          className="mt-4 rounded-lg bg-navy px-5 py-2.5 font-semibold text-white transition hover:bg-blue-900"
        >
          {showPaymentForm ? "Cancel Payment" : "Record Salary Payment"}
        </button>




        {/* record salary payment ka UI form  */}



        {showPaymentForm && (
          <form
            className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2"
            onSubmit={(e) => {
              e.preventDefault()
              if (!paymentAmount || !paymentMonth || !paymentDate) {
                alert("please fill in all payment details");
                return;
              }

              if (Number(paymentAmount) <= 0) {
                alert("Payment amount must be greater than zero.");
                return;
              }

              const existingPayment = teacher.paymentHistory?.some(
                (payment) => payment.month === paymentMonth
              );

              if (existingPayment) {
                alert("Payment record already exists for this month.");
                return;
              }


              const newPayment = {
                id: Date.now(),
                month: paymentMonth,
                amount: Number(paymentAmount),
                date: paymentDate,
                status: paymentStatus,
              }

              const updatedTeachers = JSON.parse(localStorage.getItem("schoolTeachers") || "[]").map((item) =>
                item.id === teacher.id ? {
                  ...item,
                  paymentHistory: [
                    ...(item.paymentHistory || []),
                    newPayment,
                  ],
                } : item
              );

              localStorage.setItem("schoolTeachers", JSON.stringify(updatedTeachers))
              const updatedTeacher = updatedTeachers.find((item) => item.id === teacher.id);
              setTeacher(updatedTeacher)
              setPaymentMonth("");
              setPaymentAmount("");
              setPaymentDate("");
              setPaymentStatus("Paid");
              setShowPaymentForm(false);


            }}

          >
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">
                Salary Month
              </label>
              <input
                type="month"
                value={paymentMonth}
                onChange={(e) => setPaymentMonth(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-4 py-2 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">
                Amount (₹)
              </label>
              <input
                type="number"
                min="0"
                placeholder="Enter amount"
                value={paymentAmount}
                onChange={(e) => setPaymentAmount(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-4 py-2 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">
                Payment Date
              </label>
              <input
                type="date"
                value={paymentDate}
                onChange={(e) => setPaymentDate(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-4 py-2 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">
                Payment Status
              </label>
              <select
                value={paymentStatus}
                onChange={(e) => setPaymentStatus(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-4 py-2 outline-none focus:border-blue-500"
              >
                <option value="Paid">Paid</option>
                <option value="Pending">Pending</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                className="rounded-lg bg-navy px-5 py-2.5 font-semibold text-white hover:bg-blue-900"
              >
                Save Payment
              </button>
            </div>
          </form>
        )}



        {/* payment history paid or pending date UI Table  */}



        {!teacher.paymentHistory || teacher.paymentHistory.length === 0 ? (
          <p className="mt-4 text-sm text-slate-500">
            No salary payment records available yet.
          </p>
        ) : (
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[600px] text-left">
              <thead>
                <tr className="border-b border-slate-200 text-sm text-slate-500">
                  <th className="px-4 py-3">Salary Month</th>
                  <th className="px-4 py-3">Amount</th>
                  <th className="px-4 py-3">Payment Date</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Action</th>

                </tr>
              </thead>

              <tbody>
                {teacher.paymentHistory.map((payment) => (
                  <tr key={payment.id} className="border-b border-slate-100">
                    <td className="px-4 py-3">{payment.month}</td>

                    <td className="px-4 py-3 font-semibold">
                      ₹{Number(payment.amount).toLocaleString("en-IN")}
                    </td>

                    <td className="px-4 py-3">
                      {payment.date || payment.paymentDate || "—"}
                    </td>

                    <td className="px-4 py-3">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${payment.status === "Paid"
                          ? "bg-green-100 text-green-700"
                          : "bg-amber-100 text-amber-700"
                          }`}
                      >
                        {payment.status}
                      </span>
                    </td>

                    <td className="px-4 py-3">
                      {payment.status === "Pending" && (
                        <button
                          type="button"
                          className="rounded-lg bg-green-600 px-3 py-2 text-sm font-semibold text-white hover:bg-green-700"
                          onClick={()=>markPaymentAsPaid(payment.id)}
                        >
                          Mark as Paid
                        </button>
                      )}

                      {payment.status === "Paid" && (
                        <span className="text-sm text-slate-400">Completed</span>
                      )}
                    </td>


                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>


    </main>
  );
};

export default TeacherDetails;
