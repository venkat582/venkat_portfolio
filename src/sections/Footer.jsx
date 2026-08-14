import profile from "../data/profile";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-white">

      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Main Footer */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>

            <h2 className="text-2xl font-bold">
              Venkat<span className="text-cyan-400">.</span>
            </h2>

            <p className="text-gray-400 mt-4 leading-7 max-w-sm">
              Computer Science Engineering student passionate about
              web development, AI, and building useful digital products.
            </p>

          </div>


          {/* Quick Links */}
          <div>

            <h3 className="text-lg font-semibold mb-5">
              Quick Links
            </h3>

            <div className="grid grid-cols-2 gap-3">

              <a
                href="#home"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                Home
              </a>

              <a
                href="#about"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                About
              </a>

              <a
                href="#skills"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                Skills
              </a>

              <a
                href="#projects"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                Projects
              </a>

              <a
                href="#services"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                Services
              </a>

              <a
                href="#contact"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                Contact
              </a>

            </div>

          </div>


          {/* Social Links */}
          <div>

            <h3 className="text-lg font-semibold mb-5">
              Connect With Me
            </h3>

            <div className="flex gap-4">

              {/* GitHub */}
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-11 h-11 flex items-center justify-center rounded-xl bg-slate-900 border border-slate-700 text-xl hover:border-cyan-400 hover:text-cyan-400 hover:-translate-y-1 transition-all duration-300"
              >
                🐙
              </a>


              {/* LinkedIn */}
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11 flex items-center justify-center rounded-xl bg-slate-900 border border-slate-700 text-xl hover:border-cyan-400 hover:text-cyan-400 hover:-translate-y-1 transition-all duration-300"
              >
                💼
              </a>


              {/* Email */}
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="w-11 h-11 flex items-center justify-center rounded-xl bg-slate-900 border border-slate-700 text-xl hover:border-cyan-400 hover:text-cyan-400 hover:-translate-y-1 transition-all duration-300"
              >
                📧
              </a>

            </div>

          </div>

        </div>


        {/* Divider */}
        <div className="border-t border-slate-800 mt-10 pt-6">

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-gray-500 text-sm">
              © {currentYear} Venkat Kotaru. All rights reserved.
            </p>

            <p className="text-gray-500 text-sm">
              Built with React & Tailwind CSS ❤️
            </p>

          </div>

        </div>

      </div>


      {/* Back To Top */}
      <a
        href="#home"
        aria-label="Back to top"
        className="fixed bottom-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-cyan-500 text-white shadow-lg hover:bg-cyan-400 hover:-translate-y-1 transition-all duration-300"
      >
        ↑
      </a>

    </footer>
  );
}

export default Footer;