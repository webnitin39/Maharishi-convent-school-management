import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [role, setRole] = useState("Student");
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const roles = ["Student", "Teacher", "Admin"];
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  return (
    <main className="min-h-screen bg-page px-4 py-12">
      <div className="mx-auto max-w-3xl rounded-2xl bg-white p-6 shadow-xl sm:p-10">

        <div className="mb-8 text-center">
          <img
            src="/school-logo.png"
            alt="School Logo"
            className="mx-auto mb-4 h-20 w-20 object-contain"
          />

          <h1 className="text-3xl font-bold text-navy">
            School Login
          </h1>

          <p className="mt-2 text-slate-600">
            Welcome to Maharishi Convent School
          </p>
        </div>

        <h2 className="mb-4 text-center font-semibold text-navy">
          Select Your Role
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {roles.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setRole(item)}
              className={`rounded-xl border-2 p-5 font-semibold transition ${role === item
                ? "border-gold bg-navy text-white"
                : "border-slate-200 bg-white text-navy hover:border-gold"
                }`}
            >
              {item}
            </button>
          ))}
        </div>

        <p className="mt-6 text-center text-slate-600">
          Selected role: <span className="font-bold text-navy">{role}</span>
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (role === "Teacher") {
              const savedTeachers = JSON.parse(
                localStorage.getItem("schoolTeachers") || "[]"
              );

              const teacher = savedTeachers.find(
                (item) =>
                  item.email?.trim().toLowerCase() ===
                  userName.trim().toLowerCase() &&
                  item.password === password
              );

              if (!teacher) {
                alert("Teacher email not found. Please enter your registered email.");
                return;
              }
              localStorage.setItem("currentTeacherId", String(teacher.id));
              navigate("/teacher-dashboard");
              return;
            }

            alert(`${role} login frontend is ready`);
          }}
          className="mt-8 space-y-5"
        >
          <div>
            <label className="mb-2 block font-medium text-navy">
              Email or Username
            </label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter your email or username"
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue focus:ring-2 focus:ring-blue/20"
            />
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 pr-20 outline-none focus:border-blue focus:ring-2 focus:ring-blue/20"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-blue"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-navy py-3 font-semibold text-white transition hover:bg-blue"
          >
            Login as {role}
          </button>
        </form>

      </div>
    </main>
  );
};

export default Login;