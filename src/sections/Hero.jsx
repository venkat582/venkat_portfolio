import TypingText from "../components/TypingText";
import profile from "../assets/images/profile.png";


function Hero() {
  return (
    <section  
    id="home"
    className="min-h-screen bg-slate-950 text-white flex items-center">
      <div className="max-w-7xl mx-auto px-8 w-full">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left Side */}
          <div>

            <p className="text-cyan-400 text-xl mb-2">
              👋 Hello, I'm
            </p>

            <h1 className="text-6xl font-bold leading-tight">
              Venkat Kotaru
            </h1>
            <TypingText />
            <p className="mt-6 text-gray-400 text-lg leading-8 max-w-xl">
              I build modern websites, scalable web applications,
              and AI-powered solutions that solve real-world problems.
            </p>


          </div>

          {/* Right Side */}

          <div className="flex justify-center">

          <div className="relative">

          {/* Glowing Ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 blur-2xl opacity-40 animate-pulse"></div>

          {/* Profile Image */}
          <img
          src={profile}
          alt="Venkat"
          className="relative w-80 h-80 rounded-full object-cover border-4 border-cyan-400 shadow-2xl"/>

          </div>

          </div>

          

        </div>

      </div>
    </section>
  );
}

export default Hero;