
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-navy px-4 pb-6 pt-14 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/school-logo.png"
              alt="Maharishi Convent School logo"
              className="h-14 w-14 rounded-full bg-white object-contain p-1"
            />
            <div>
              <h2 className="text-lg font-bold">Maharishi Convent</h2>
              <p className="text-xs text-slate-300">HR Sec School</p>
            </div>
          </div>

          <p className="mt-5 max-w-xs text-sm leading-7 text-slate-300">
            Nurturing knowledge, confidence and good values
            for a brighter future.
          </p>

          <p className="mt-4 text-sm font-semibold italic text-gold">
            "Honesty is the Best Policy"
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-gold">Quick Links</h3>
          <ul className="mt-5 space-y-3 text-sm text-slate-300">
            <li><Link className="transition hover:text-white" to="/">Home</Link></li>
            <li><Link className="transition hover:text-white" to="/about">About Us</Link></li>
            <li><Link className="transition hover:text-white" to="/academics">Academics</Link></li>
            <li><Link className="transition hover:text-white" to="/facilities">Facilities</Link></li>
            <li><Link className="transition hover:text-white" to="/gallery">Gallery</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-gold">Useful Pages</h3>
          <ul className="mt-5 space-y-3 text-sm text-slate-300">
            <li><Link className="transition hover:text-white" to="/faculty">Our Faculty</Link></li>
            <li><Link className="transition hover:text-white" to="/notices">Notices</Link></li>
            <li><Link className="transition hover:text-white" to="/admissions">Admissions</Link></li>
            <li><Link className="transition hover:text-white" to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-gold">Visit Our School</h3>
          <p className="mt-5 text-sm leading-7 text-slate-300">
            Naahar Marriage Garden ke saamne,
            Fatehpur Road, Begumganj,
            Raisen, Madhya Pradesh.
          </p>
          <p className="mt-4 text-sm text-slate-300">
            School Hours: 8:00 AM – 2:30 PM
          </p>
        </div>
        
<div className="mt-6">
  <h4 className="text-sm font-bold text-gold">
    Connect With Us
  </h4>

  <div className="mt-4 flex items-center gap-4">
    <a
      href="https://www.google.com/maps/search/?api=1&query=Maharishi+Convent+HR+Sec+School+Begumganj+Raisen+Madhya+Pradesh"
      target="_blank"
      rel="noreferrer"
      aria-label="Find us on Google Maps"
      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-gold hover:bg-gold hover:text-navy"
    >
      <i className="ri-map-pin-line text-xl"></i>
    </a>

    <a
      href="https://www.instagram.com/popular/maharishi-convent-school-begumganj"
      target="_blank"
      rel="noreferrer"
      aria-label="Instagram"
      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-gold hover:bg-gold hover:text-navy"
    >
      <i className="ri-instagram-line text-xl"></i>
    </a>

    <a
      href="https://www.facebook.com/Mharishiconmenthrsecschool/"
      target="_blank"
      rel="noreferrer"
      aria-label="Facebook"
      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-gold hover:bg-gold hover:text-navy"
    >
      <i className="ri-facebook-fill text-xl"></i>
    </a>
  </div>
  
</div>
<div className="flex flex-col items-start md:items-end">
  <h3 className="mb-5 text-lg font-bold text-gold">
    Website Developer
  </h3>

  <div className="flex items-center gap-4">
    <img
      src="/devloper-pic.jpg"
      alt="Developer profile"
      className="h-16 w-16 rounded-full border-2 border-gold object-cover"
    />

    <div>
      <h4 className="text-lg font-semibold text-white">
       Nitin Kumar Gour
      </h4>

      <a
        href="https://github.com/webnitin39"
        target="_blank"
        rel="noreferrer"
        className="mt-2 inline-flex items-center gap-2 text-sm text-gray-300 transition hover:text-gold"
      >
        <i className="ri-github-fill text-xl"></i>
        GitHub Profile
        <i className="ri-arrow-up-right-line"></i>
      </a>
    </div>
  </div>
</div>

      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/20 pt-6">
        <p className="text-center text-xs leading-6 text-slate-300">
          © {new Date().getFullYear()} Maharishi Convent HR Sec School,
          Begumganj. All rights reserved.
        </p>
        

      </div>
      
    </footer>
  );
};

export default Footer;
