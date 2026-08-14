function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 bg-slate-900/70 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-cyan-400">
          Venkat
        </h1>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-8 text-white font-medium">

          <li className="cursor-pointer hover:text-cyan-400 transition">
            <a href="#home">Home</a>
          </li>

          <li className="cursor-pointer hover:text-cyan-400 transition">
            <a href="#about">About</a>
          </li>

          <li className="cursor-pointer hover:text-cyan-400 transition">
            <a href="#skills">Skills</a>
          </li>

          <li className="cursor-pointer hover:text-cyan-400 transition">
            <a href="#projects">Projects</a>
          </li>

          <li className="cursor-pointer hover:text-cyan-400 transition">
            <a href="#services">Services</a>
          </li>

          <li className="cursor-pointer hover:text-cyan-400 transition">
            <a href="#contact">Contact</a>
          </li>

          

        </ul>

        {/* Hire Button */}
        <button className="bg-purple-500 hover:bg-purple-600 text-white px-5 py-2 rounded-xl transition">
          Hire Me
        </button>

      </div>
    </nav>
  );
}

export default Navbar;