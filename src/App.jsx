import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Academics from "./pages/Academics"
import Facilities from "./pages/Facilities"
import Faculty from "./pages/Faculty"
import Gallery from "./pages/Gallery "
import Notices from "./pages/Notices"
import Admission from "./pages/Admission"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"
import Login from "./pages/Login"
import StudentDashboard from "./pages/StudentDashboard"
import TeacherDashboard from "./pages/TeacherDashboards"
import AdminDashboard from "./pages/AdminDashboards"
import TeacherDetails from "./pages/TeacherDetails"




function App() {
  return (
    <main className="min-h-screen bg-page px-4 py-8 md:px-8 md:py-12 lg:px-16">

      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/academics" element={<Academics/>} />
        <Route path="/facilities" element={<Facilities/>} />
        <Route path="/faculty" element={<Faculty/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/notices" element={<Notices/>} />
        <Route path="/admission" element={<Admission/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/student-dashboard" element={<StudentDashboard/>} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard/>} />
        <Route path="/admin-dashboard" element={<AdminDashboard/>} />
        <Route path="/teachers/:id" element={<TeacherDetails/>} />




      </Routes>
      <Footer/>
      
    </main>
  )
}

export default App