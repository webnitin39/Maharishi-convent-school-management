
function Home() {
  return (
    <main>
     <section className="bg-gradient-to-br from-[#DCE5F0] via-[#C7D5E7] to-[#AFC3DC] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
         <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
          
          <div>
            <p className="mb-4 inline-block rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-sm font-semibold text-navy">
              Welcome to Maharishi Convent
            </p>

            <h1 className="text-4xl font-extrabold leading-tight text-navy sm:text-5xl lg:text-6xl">
              Shaping Young Minds,
              <span className="mt-2 block text-blue">
                Building Bright Futures
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Maharishi Convent HR Sec School, Begumganj —
              nurturing knowledge, values and confidence for a
              brighter tomorrow.
            </p>

            <p className="mt-4 font-semibold italic text-gold">
              “Honesty is the Best Policy”
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/admissions"
                className="rounded-lg bg-navy px-6 py-3 font-semibold text-white transition hover:bg-blue"
              >
                Admission Enquiry
              </a>

              <a
                href="/about"
                className="rounded-lg border border-navy px-6 py-3 font-semibold text-navy transition hover:bg-navy hover:text-white"
              >
                Explore Our School
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -bottom-4 -left-4 h-28 w-28 rounded-2xl bg-gold/20 sm:-bottom-5 sm:-left-5" />

            <img
              src="https://www.theasianschool.net/blog/wp-content/uploads/2023/02/Mayo-College-Ajmer.jpg"
              alt="Temporary school campus placeholder"
              className="relative z-10 h-72 w-full rounded-2xl border border-white/50 object-cover shadow-2xl sm:h-96 lg:h-[430px]"
            />

            <div className="absolute -right-2 -top-3 z-20 rounded-xl bg-white px-4 py-3 shadow-lg sm:-right-4 sm:top-5">
              <p className="text-sm font-bold text-navy">
                Established 2001
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Learning with Values
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* school highlight section board classes establised medium  */}


      
<section className="bg-[#AFC3DC] px-4 py-12 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-7xl">
    <div className="mb-8 text-center">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue">
        Our School at a Glance
      </p>

      <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
        Highlights of Our School
      </h2>
    </div>

    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <div className="rounded-2xl border border-white/60 bg-white/80 p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
        <p className="text-sm font-medium text-slate-500">
          Established
        </p>
        <h3 className="mt-3 text-2xl font-bold text-navy">
          2001
        </h3>
        <p className="mt-2 text-sm text-slate-600">
          Building a foundation for learning
        </p>
      </div>

      <div className="rounded-2xl border border-white/60 bg-white/80 p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
        <p className="text-sm font-medium text-slate-500">
          Classes
        </p>
        <h3 className="mt-3 text-2xl font-bold text-navy">
          Nursery–12
        </h3>
        <p className="mt-2 text-sm text-slate-600">
          Learning through every stage
        </p>
      </div>

      <div className="rounded-2xl border border-white/60 bg-white/80 p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
        <p className="text-sm font-medium text-slate-500">
          Board
        </p>
        <h3 className="mt-3 text-2xl font-bold text-navy">
          MP Board
        </h3>
        <p className="mt-2 text-sm text-slate-600">
          Academic learning and development
        </p>
      </div>

      <div className="rounded-2xl border border-white/60 bg-white/80 p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
        <p className="text-sm font-medium text-slate-500">
          Medium
        </p>
        <h3 className="mt-3 text-2xl font-bold text-navy">
          English
        </h3>
        <p className="mt-2 text-sm text-slate-600">
          English-medium education
        </p>
      </div>
    </div>
  </div>
</section>


{/* School Introduction section */}



<section className="bg-[#E8EEF5] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
  <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
    <div>
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue">
        About Our Institution
      </p>

      <h2 className="mt-4 text-3xl font-bold leading-tight text-navy sm:text-4xl">
        Education That Builds
        <span className="block text-blue">Knowledge and Character</span>
      </h2>

      <p className="mt-6 leading-8 text-slate-600">
        Maharishi Convent HR Sec School, Begumganj, is committed
        to supporting students in their academic journey while
        encouraging confidence, discipline and good values.
      </p>

      <p className="mt-4 leading-8 text-slate-600">
        Guided by the belief that honesty is the best policy,
        our aim is to create a learning environment where students
        can grow, explore and prepare for the future.
      </p>

      <a
        href="/about"
        className="mt-7 inline-flex items-center gap-2 rounded-lg bg-navy px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
      >
        Discover Our School
        <span aria-hidden="true">→</span>
      </a>
    </div>

    <div className="rounded-3xl border border-white/70 bg-white/70 p-4 shadow-xl sm:p-6">
      <div className="flex min-h-64 flex-col justify-center rounded-2xl bg-gradient-to-br from-navy to-blue p-8 text-white sm:min-h-80 sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
          Our Guiding Principle
        </p>

        <h3 className="mt-5 text-3xl font-bold sm:text-4xl">
          “Honesty is the Best Policy”
        </h3>

        <p className="mt-5 max-w-sm leading-7 text-slate-200">
          Learning with integrity, growing with confidence and
          moving towards a brighter future.
        </p>
      </div>
    </div>
  </div>
</section>



{/* Why Choose Us section */}



<section className="bg-[#DCE5F0] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
  <div className="mx-auto max-w-7xl">
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue">
        Why Choose Us
      </p>

      <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
        A Better Place to Learn and Grow
      </h2>

      <p className="mt-4 leading-7 text-slate-600">
        We aim to support every student's academic progress,
        confidence and personal development.
      </p>
    </div>

    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <div className="rounded-2xl border border-white bg-white p-6 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-navy text-2xl text-gold">
          ★
        </div>
        <h3 className="text-xl font-bold text-navy">
          Value-Based Education
        </h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">
          Encouraging honesty, discipline, respect and responsibility.
        </p>
      </div>

      <div className="rounded-2xl border border-white bg-white p-6 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-navy text-2xl text-gold">
          ✓
        </div>
        <h3 className="text-xl font-bold text-navy">
          Academic Development
        </h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">
          Supporting students through regular learning and assessment.
        </p>
      </div>

      <div className="rounded-2xl border border-white bg-white p-6 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-navy text-2xl text-gold">
          ✦
        </div>
        <h3 className="text-xl font-bold text-navy">
          Beyond the Classroom
        </h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">
          Encouraging participation in activities, sports and cultural events.
        </p>
      </div>

      <div className="rounded-2xl border border-white bg-white p-6 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-navy text-2xl text-gold">
          ◆
        </div>
        <h3 className="text-xl font-bold text-navy">
          All-Round Growth
        </h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">
          Helping students build confidence, skills and positive habits.
        </p>
      </div>
    </div>
  </div>
</section>




{/* our facility section  */}



<section className="bg-[#E8EEF5] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
  <div className="mx-auto max-w-7xl">
    <div className="mb-12 text-center">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue">
        Explore Our Campus
      </p>
      <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
        Facilities for Better Learning
      </h2>
      <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
        A learning environment designed to support academic,
        creative and physical development.
      </p>
    </div>

    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div className="group overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
        <img
          src="https://mountliteraschool.edu.in/wp-content/uploads/2025/04/068A2257.webp"
          alt="Computer lab placeholder"
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold text-navy">Computer Lab</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Supporting digital learning and computer skills.
          </p>
        </div>
      </div>

      <div className="group overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
        <img
          src="https://c8.alamy.com/comp/K6P3B3/1-indian-school-girl-student-reading-book-study-education-in-library-K6P3B3.jpg"
          alt="Library placeholder"
          className="h-56 w-full object-center transition duration-500 group-hover:scale-105"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold text-navy">Library</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Encouraging reading, curiosity and independent learning.
          </p>
        </div>
      </div>

      <div className="group overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
        <img
          src="https://ogden_images.s3.amazonaws.com/www.ljworld.com/images/2015/08/20233645/clare_frantz_jy_04.jpg"
          alt="Sports ground placeholder"
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold text-navy">Sports Ground</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Making space for physical activity, teamwork and sports.
          </p>
        </div>
      </div>

      <div className="group overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
        <img
          src="https://c8.alamy.com/comp/KX38BJ/indian-school-students-doing-research-using-chemical-liquid-science-KX38BJ.jpg"
          alt="Science lab placeholder"
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold text-navy">Science Lab</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Connecting classroom concepts with practical learning.
          </p>
        </div>
      </div>

      <div className="group overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
        <img
          src="https://www.madhavschool.in/uploads/facility_photos/20260621154400-2ae94715.png"
          alt="Smart classroom placeholder"
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold text-navy">Smart Classroom</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Supporting engaging lessons through visual learning tools.
          </p>
        </div>
      </div>

      <div className="group overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ3hCQ4TTSFCBEDklby0OeFhm_1p-oetacNu_Uy0aHQrolIm31JaYlvRLx&s=10"
          alt="School garden placeholder"
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold text-navy">School Garden</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Providing a pleasant space within the school campus.
          </p>
        </div>
      </div>
    </div>

    <div className="mt-10 text-center">
      <a
        href="/facilities"
        className="inline-flex items-center gap-2 rounded-lg bg-navy px-6 py-3 font-semibold text-white transition hover:bg-blue"
      >
        Explore All Facilities <span aria-hidden="true">→</span>
      </a>
    </div>
  </div>
</section>



{/* academic lave section Nursery to 12 */}




<section className="bg-[#AFC3DC] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
  <div className="mx-auto max-w-7xl">
    <div className="mb-12 text-center">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue">
        Academic Journey
      </p>
      <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
        Learning at Every Stage
      </h2>
      <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
        Building a strong foundation and supporting students as
        they progress through their school years.
      </p>
    </div>

    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      <div className="rounded-2xl border border-white/70 bg-white p-7 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
        <p className="text-sm font-bold uppercase tracking-wider text-gold">
          Level 01
        </p>
        <h3 className="mt-3 text-2xl font-bold text-navy">
          Primary Education
        </h3>
        <p className="mt-2 font-semibold text-blue">Classes 1–5</p>
        <p className="mt-4 leading-7 text-slate-600">
          Developing foundational knowledge, curiosity and
          essential learning skills.
        </p>
      </div>

      <div className="rounded-2xl border border-white/70 bg-white p-7 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
        <p className="text-sm font-bold uppercase tracking-wider text-gold">
          Level 02
        </p>
        <h3 className="mt-3 text-2xl font-bold text-navy">
          Middle Education
        </h3>
        <p className="mt-2 font-semibold text-blue">Classes 6–8</p>
        <p className="mt-4 leading-7 text-slate-600">
          Strengthening subject knowledge, critical thinking
          and independent learning.
        </p>
      </div>

      <div className="rounded-2xl border border-white/70 bg-white p-7 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
        <p className="text-sm font-bold uppercase tracking-wider text-gold">
          Level 03
        </p>
        <h3 className="mt-3 text-2xl font-bold text-navy">
          Secondary & Senior Secondary
        </h3>
        <p className="mt-2 font-semibold text-blue">Classes 9–12</p>
        <p className="mt-4 leading-7 text-slate-600">
          Preparing students for board examinations, future studies
          and responsible decision-making.
        </p>
      </div>
    </div>

    <p className="mt-8 text-center text-sm text-slate-700">
      Nursery and other pre-primary classes are included in the
      school's overall academic programme.
    </p>
  </div>
</section>




{/* : School Activities section */}





<section className="bg-[#E8EEF5] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
  <div className="mx-auto max-w-7xl">
    <div className="mb-12 text-center">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue">
        Beyond Academics
      </p>

      <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
        Activities That Inspire
      </h2>

      <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
        School life is also about creativity, teamwork, participation
        and celebrating achievements together.
      </p>
    </div>

    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <div className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2n9lnkS2CNNQWhmi5AqAEk2zhhqOd-WzQWc1B4fVT_A&s=10"
          alt="Annual function image placeholder"
          className="h-48 w-full object-cover"
        />
        <div className="p-5">
          <h3 className="text-lg font-bold text-navy">Annual Function</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            A platform for students to showcase their talents and creativity.
          </p>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
        <img
          src="https://www.sheffieldhighschool.org.uk/wp-content/uploads/2025/09/SheffieldGirls_Sep25_IndiaHobson_HR-212-scaled-e1758027541127.jpg"
          alt="Sports day image placeholder"
          className="h-48 w-full object-cover"
        />
        <div className="p-5">
          <h3 className="text-lg font-bold text-navy">Sports Day</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Promoting teamwork, participation and a spirit of sportsmanship.
          </p>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
        <img
          src="https://fancydresscostume.in/blog/navratri-garba-costumes-kids-hero.webp"
          alt="Cultural events image placeholder"
          className="h-48 w-full object-cover"
        />
        <div className="p-5">
          <h3 className="text-lg font-bold text-navy">Cultural Events</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Encouraging expression through cultural and creative activities.
          </p>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTskI56yFZ3rF1rQlGMtHN-ut9lu4NzeDmoVywYe5zNWValx4hWO2Pnhd0i&s=10"
          alt="National festivals image placeholder"
          className="h-48 w-full object-cover"
        />
        <div className="p-5">
          <h3 className="text-lg font-bold text-navy">National Festivals</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Celebrating important national occasions and shared values.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


{/* Admission enquary section  */}




<section className="bg-[#DCE5F0] px-4 py-16 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-r from-navy via-[#1D416B] to-blue px-6 py-12 shadow-xl sm:px-10 lg:px-16 lg:py-16">
    <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
      <div className="max-w-2xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold">
          Admissions Enquiry
        </p>

        <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
          Give Your Child a Strong Start
        </h2>

        <p className="mt-4 leading-7 text-slate-200">
          Connect with Maharishi Convent HR Sec School to learn
          more about classes, admission requirements and the
          enrolment process.
        </p>
      </div>

      <a
        href="/admissions"
        className="inline-flex shrink-0 items-center gap-3 rounded-lg bg-gold px-6 py-4 font-bold text-navy transition hover:bg-white"
      >
        Enquire About Admission
        <span aria-hidden="true">→</span>
      </a>
    </div>
  </div>
</section>


{/* School Gallery Preview. */}



<section className="bg-[#AFC3DC] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
  <div className="mx-auto max-w-7xl">
    <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue">
          Memories & Moments
        </p>

        <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
          A Glimpse of School Life
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-slate-600">
          Explore moments from learning, activities and school celebrations.
        </p>
      </div>

      <a
        href="/gallery"
        className="inline-flex w-fit items-center gap-2 rounded-lg border border-navy px-5 py-3 font-semibold text-navy transition hover:bg-navy hover:text-white"
      >
        View Full Gallery <span aria-hidden="true">→</span>
      </a>
    </div>

    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <div className="group relative overflow-hidden rounded-2xl shadow-lg">
        <img
          src="/school-campus.png"
          alt="School campus placeholder"
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent" />
        <h3 className="absolute bottom-5 left-5 text-xl font-bold text-white">
          School Campus
        </h3>
      </div>

      <div className="group relative overflow-hidden rounded-2xl shadow-lg">
        <img
          src="https://media.istockphoto.com/id/539281953/photo/outdoor-games.jpg?s=612x612&w=0&k=20&c=R3oB_WFUbr1z6ERtiu2GqijGD1Cj8sM0TcJoXkR6yc4="
          alt="Student activities placeholder"
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent" />
        <h3 className="absolute bottom-5 left-5 text-xl font-bold text-white">
          Student Activities
        </h3>
      </div>

      <div className="group relative overflow-hidden rounded-2xl shadow-lg sm:col-span-2 lg:col-span-1">
        <img
          src="https://images.tribuneindia.com/cms/gall_content/2018/11/2018_11$largeimg15_Thursday_2018_005815360.jpg"
          alt="School celebrations placeholder"
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent" />
        <h3 className="absolute bottom-5 left-5 text-xl font-bold text-white">
          School Celebrations
        </h3>
      </div>
    </div>
  </div>
</section>



{/* Principal's Message sections */}




<section className="bg-[#E8EEF5] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
  <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
    <div className="mx-auto w-full max-w-sm">
      <div className="rounded-3xl border border-white bg-white p-4 shadow-xl">
        <div className="flex h-80 items-center justify-center rounded-2xl bg-gradient-to-br from-[#AFC3DC] to-[#DCE5F0]">
          <div className="text-center">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-navy text-4xl text-gold">
              ♙
            </div>
            <p className="mt-4 font-semibold text-navy">
              Principal's Photo
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Photo placeholder
            </p>
          </div>
        </div>
      </div>
    </div>

    <div>
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue">
        From the Principal's Desk
      </p>

      <h2 className="mt-4 text-3xl font-bold leading-tight text-navy sm:text-4xl">
        A Message of Learning, Values and Growth
      </h2>

      <div className="mt-6 h-1 w-20 rounded-full bg-gold" />

      <p className="mt-6 text-lg leading-8 text-slate-600">
        At Maharishi Convent HR Sec School, we believe that education
        is about more than academic achievement. It is also about
        developing honesty, confidence, discipline and respect for others.
      </p>

      <p className="mt-4 leading-8 text-slate-600">
        Our aim is to provide students with opportunities to learn,
        explore their interests and prepare for the challenges of
        tomorrow in a supportive learning environment.
      </p>

      <div className="mt-7 border-l-4 border-gold pl-5">
        <p className="font-semibold italic text-navy">
          “Honesty is the Best Policy”
        </p>
        <p className="mt-2 text-sm text-slate-500">
          — School Motto
        </p>
      </div>

      <p className="mt-7 font-bold text-navy">Saras Jain</p>
      <p className="mt-1 text-sm text-slate-500">Principal</p>
    </div>
  </div>
</section>




{/* Latest Notices section */}



<section className="bg-[#DCE5F0] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
  <div className="mx-auto max-w-7xl">
    <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue">
          Stay Updated
        </p>
        <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
          Latest Notices & Announcements
        </h2>
        <p className="mt-4 max-w-2xl leading-7 text-slate-600">
          Important information for students and parents, all in one place.
        </p>
      </div>

      <a
        href="/notices"
        className="inline-flex w-fit items-center gap-2 rounded-lg border border-navy px-5 py-3 font-semibold text-navy transition hover:bg-navy hover:text-white"
      >
        View All Notices <span aria-hidden="true">→</span>
      </a>
    </div>

    <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
      <article className="rounded-2xl border border-white bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy text-sm font-bold text-gold">
            EX
          </div>
          <p className="text-xs font-bold uppercase tracking-wider text-blue">
            Examination
          </p>
        </div>
        <h3 className="mt-5 text-xl font-bold text-navy">
          Examination Schedule
        </h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">
          Students and parents can check the latest examination timetable
          and related instructions.
        </p>
        <p className="mt-5 border-t border-slate-100 pt-4 text-sm text-slate-500">
          Check the official notice for dates
        </p>
      </article>

      <article className="rounded-2xl border border-white bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy text-sm font-bold text-gold">
            AD
          </div>
          <p className="text-xs font-bold uppercase tracking-wider text-blue">
            Admissions
          </p>
        </div>
        <h3 className="mt-5 text-xl font-bold text-navy">
          Admission Information
        </h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">
          Contact the school to learn about available classes,
          required documents and admission procedures.
        </p>
        <a
          href="/admissions"
          className="mt-5 inline-flex items-center gap-2 font-semibold text-blue hover:text-navy"
        >
          Admission Enquiry <span aria-hidden="true">→</span>
        </a>
      </article>

      <article className="rounded-2xl border border-white bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy text-sm font-bold text-gold">
            EV
          </div>
          <p className="text-xs font-bold uppercase tracking-wider text-blue">
            School Events
          </p>
        </div>
        <h3 className="mt-5 text-xl font-bold text-navy">
          Activities & Events
        </h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">
          Look out for school activities, celebrations and upcoming
          programmes through official announcements.
        </p>
        <p className="mt-5 border-t border-slate-100 pt-4 text-sm text-slate-500">
          Follow verified school updates
        </p>
      </article>
    </div>
  </div>
</section>



{/* Parent & Student Benefits section */}



<section className="bg-[#E8EEF5] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
  <div className="mx-auto max-w-7xl">
    <div className="mb-12 text-center">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue">
        For Our School Community
      </p>

      <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
        Information for Parents & Students
      </h2>

      <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
        Find useful school information and stay informed about
        academic activities and important updates.
      </p>
    </div>

    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <div className="flex gap-5 rounded-2xl border border-white bg-white p-6 shadow-md sm:p-8">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-navy text-2xl text-gold">
          ♧
        </div>

        <div>
          <h3 className="text-xl font-bold text-navy">
            For Parents
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Access admission information, school notices, contact
            details and updates about school activities.
          </p>
          <a
            href="/contact"
            className="mt-4 inline-flex items-center gap-2 font-semibold text-blue hover:text-navy"
          >
            Contact the School <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <div className="flex gap-5 rounded-2xl border border-white bg-white p-6 shadow-md sm:p-8">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-navy text-2xl text-gold">
          ✎
        </div>

        <div>
          <h3 className="text-xl font-bold text-navy">
            For Students
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Find academic information, examination announcements,
            activities and other school updates in one place.
          </p>
          <a
            href="/notices"
            className="mt-4 inline-flex items-center gap-2 font-semibold text-blue hover:text-navy"
          >
            View School Notices <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>




{/* Contact & School Information section */}



<section className="bg-[#DCE5F0] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
  <div className="mx-auto max-w-7xl">
    <div className="mb-12 text-center">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue">
        Get in Touch
      </p>

      <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
        Visit Our School
      </h2>

      <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
        Have questions about admissions or school information?
        We welcome you to connect with us.
      </p>
    </div>

    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      <div className="rounded-2xl border border-white bg-white p-7 shadow-md">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy text-2xl text-gold">
          ⌖
        </div>
        <h3 className="mt-5 text-xl font-bold text-navy">
          School Address
        </h3>
        <p className="mt-3 leading-7 text-slate-600">
          Naahar Marriage Garden ke saamne, Fatehpur Road,
          Begumganj, Raisen, Madhya Pradesh.
        </p>
      </div>

      <div className="rounded-2xl border border-white bg-white p-7 shadow-md">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy text-2xl text-gold">
          ◷
        </div>
        <h3 className="mt-5 text-xl font-bold text-navy">
          School Timings
        </h3>
        <p className="mt-3 leading-7 text-slate-600">
          School hours: 8:00 AM – 2:30 PM.
        </p>
        <p className="mt-2 text-sm text-slate-500">
          Please confirm timings before visiting.
        </p>
      </div>

      <div className="rounded-2xl border border-white bg-white p-7 shadow-md">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy text-2xl text-gold">
          ✉
        </div>
        <h3 className="mt-5 text-xl font-bold text-navy">
          Contact & Enquiries
        </h3>
        <p className="mt-3 leading-7 text-slate-600">
          Contact the school office for admission enquiries,
          required documents and other information.
        </p>
        <a
          href="/contact"
          className="mt-5 inline-flex items-center gap-2 font-semibold text-blue transition hover:text-navy"
        >
          Contact Us <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  </div>
</section>




    </main>
  );
}

export default Home;
