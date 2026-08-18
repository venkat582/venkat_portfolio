import profile from "../data/profile";
import ScrollReveal from "../components/ScrollReveal";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-slate-950 text-white px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <ScrollReveal direction="up">

          <div className="text-center mb-16">

            <p className="text-cyan-400 text-lg font-medium mb-3">
              Get To Know Me
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              About Me
            </h2>

            <div className="w-20 h-1 bg-cyan-400 mx-auto mt-5 rounded-full"></div>

          </div>

        </ScrollReveal>


        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <ScrollReveal direction="left">

            <div>

              <h3 className="text-3xl font-bold mb-6">
                I'm{" "}
                <span className="text-cyan-400">
                  Venkat Kotaru
                </span>{" "}
                👋
              </h3>

              <p className="text-gray-300 text-lg leading-8 mb-5">
                I'm a Computer Science Engineering student and aspiring
                Full Stack Developer who enjoys building modern websites,
                web applications, and AI-powered solutions.
              </p>

              <p className="text-gray-400 text-lg leading-8 mb-5">
                I enjoy learning new technologies and turning ideas into
                practical projects that solve real-world problems.
              </p>

              <p className="text-gray-400 text-lg leading-8">
                I'm currently looking for opportunities to work with
                startups, companies, and clients where I can contribute,
                learn, and grow as a developer.
              </p>

            </div>

          </ScrollReveal>


          {/* RIGHT SIDE */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

            {/* Education */}
            <ScrollReveal direction="right" delay={100}>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300">

                <div className="text-4xl mb-4">
                  🎓
                </div>

                <h4 className="text-xl font-bold mb-2">
                  Education
                </h4>

                <p className="text-gray-400">
                  B.Tech in Computer Science Engineering
                </p>

              </div>

            </ScrollReveal>


            {/* Development */}
            <ScrollReveal direction="right" delay={200}>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300">

                <div className="text-4xl mb-4">
                  💻
                </div>

                <h4 className="text-xl font-bold mb-2">
                  Development
                </h4>

                <p className="text-gray-400">
                  Full Stack Web Development
                </p>

              </div>

            </ScrollReveal>


            {/* AI */}
            <ScrollReveal direction="right" delay={300}>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300">

                <div className="text-4xl mb-4">
                  🤖
                </div>

                <h4 className="text-xl font-bold mb-2">
                  AI Enthusiast
                </h4>

                <p className="text-gray-400">
                  Interested in AI and intelligent applications
                </p>

              </div>

            </ScrollReveal>


            {/* Freelancing */}
            <ScrollReveal direction="right" delay={400}>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300">

                <div className="text-4xl mb-4">
                  🚀
                </div>

                <h4 className="text-xl font-bold mb-2">
                  Freelancing
                </h4>

                <p className="text-gray-400">
                  Available for projects and collaborations
                </p>

              </div>

            </ScrollReveal>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;