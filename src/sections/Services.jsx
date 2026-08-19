import ScrollReveal from "../components/ScrollReveal";

const services = [
  {
    icon: "🌐",
    title: "Website Development",
    description:
      "Modern, responsive websites for businesses, personal brands, portfolios, and startups.",
    features: [
      "Responsive design",
      "Modern UI",
      "Mobile friendly",
      "SEO-friendly structure",
    ],
  },

  {
    icon: "💻",
    title: "Web Application Development",
    description:
      "Interactive web applications built with modern frontend and backend technologies.",
    features: [
      "React applications",
      "API integration",
      "Backend development",
      "Database integration",
    ],
  },

  {
    icon: "🤖",
    title: "AI Solutions",
    description:
      "AI-powered applications and intelligent features that help solve real-world problems.",
    features: [
      "AI integration",
      "Machine learning",
      "AI APIs",
      "Automation",
    ],
  },

  {
    icon: "📱",
    title: "Responsive UI Design",
    description:
      "Clean and attractive interfaces that work smoothly across desktop, tablet, and mobile devices.",
    features: [
      "Modern layouts",
      "Responsive design",
      "Animations",
      "User-friendly interfaces",
    ],
  },

  {
    icon: "🔧",
    title: "Website Maintenance",
    description:
      "Improve, update, fix, and maintain existing websites and web applications.",
    features: [
      "Bug fixing",
      "UI updates",
      "Performance improvements",
      "Feature additions",
    ],
  },

  {
    icon: "🚀",
    title: "Startup Development",
    description:
      "Help startups turn ideas into functional MVPs and scalable digital products.",
    features: [
      "MVP development",
      "Prototype building",
      "Feature development",
      "Technical assistance",
    ],
  },
];


function Services() {
  return (
    <section
      id="services"
      className="min-h-screen bg-slate-900 text-white px-6 py-24"
    >

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-cyan-400 text-lg font-medium mb-3">
            What I Can Do
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            My Services
          </h2>

          <div className="w-20 h-1 bg-cyan-400 mx-auto mt-5 rounded-full"></div>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
            I help businesses, startups, and individuals turn their ideas
            into modern digital products.
          </p>

        </div>


        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">


            {services.map((service, index) => (

  <ScrollReveal
    key={service.title}
    direction={index % 2 === 0 ? "left" : "right"}
    delay={index * 150}
  >

  
            

            <div
              key={service.title}
              className="group bg-slate-950 border border-slate-800 rounded-2xl p-8
              hover:border-cyan-400 hover:-translate-y-3
              hover:shadow-2xl transition-all duration-500"
            >

              {/* Icon */}
              <div className="text-5xl mb-6
              group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>


              {/* Title */}
              <h3 className="text-2xl font-bold mb-4
              group-hover:text-cyan-400 transition-colors duration-300">
                {service.title}
              </h3>


              {/* Description */}
              <p className="text-gray-400 leading-7 mb-6">
                {service.description}
              </p>


              {/* Features */}
              <ul className="space-y-3">

                {service.features.map((feature) => (

                  <li
                    key={feature}
                    className="flex items-center gap-3 text-gray-300"
                  >

                    <span className="text-cyan-400">
                      ✓
                    </span>

                    {feature}

                  </li>

                ))}

              </ul>

            </div>
            </ScrollReveal>

          ))}

        </div>


        {/* Bottom CTA */}
        <div className="text-center mt-16">

          <p className="text-gray-400 text-lg mb-5">
            Have a project in mind?
          </p>

          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-cyan-500
            hover:bg-cyan-400 text-white font-semibold rounded-xl
            hover:scale-105 transition-all duration-300"
          >
            Let's Work Together 🚀
          </a>

        </div>

      </div>

    </section>
  );
}

export default Services;