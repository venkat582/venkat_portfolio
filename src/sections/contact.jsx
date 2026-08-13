import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Contact form submitted:", formData);

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-slate-950 text-white px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-cyan-400 text-lg font-medium mb-3">
            Get In Touch
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Contact Me
          </h2>

          <div className="w-20 h-1 bg-cyan-400 mx-auto mt-5 rounded-full"></div>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
            Have a project, job opportunity, or idea? Feel free to reach out.
            I'm always open to discussing new opportunities.
          </p>

        </div>


        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left Side */}
          <div>

            <h3 className="text-3xl font-bold mb-6">
              Let's work together 🚀
            </h3>

            <p className="text-gray-400 text-lg leading-8 mb-8">
              Whether you're looking for a website, web application,
              AI-powered solution, or someone to help with your startup,
              I'd be happy to hear about it.
            </p>


            {/* Email */}
            <a
              href="mailto:your-email@gmail.com"
              className="flex items-center gap-5 bg-slate-900 border border-slate-800 rounded-2xl p-5 mb-4 hover:border-cyan-400 transition-all duration-300"
            >

              <span className="text-3xl">
                📧
              </span>

              <div>
                <p className="text-sm text-gray-500">
                  Email
                </p>

                <p className="text-gray-200">
                  your-email@gmail.com
                </p>
              </div>

            </a>


            {/* GitHub */}
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 bg-slate-900 border border-slate-800 rounded-2xl p-5 mb-4 hover:border-cyan-400 transition-all duration-300"
            >

              <span className="text-3xl">
                🐙
              </span>

              <div>
                <p className="text-sm text-gray-500">
                  GitHub
                </p>

                <p className="text-gray-200">
                  View My Projects
                </p>
              </div>

            </a>


            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-cyan-400 transition-all duration-300"
            >

              <span className="text-3xl">
                💼
              </span>

              <div>
                <p className="text-sm text-gray-500">
                  LinkedIn
                </p>

                <p className="text-gray-200">
                  Connect With Me
                </p>
              </div>

            </a>

          </div>


          {/* Right Side - Contact Form */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">

            <form onSubmit={handleSubmit}>

              {/* Name */}
              <div className="mb-5">

                <label
                  htmlFor="name"
                  className="block text-gray-300 mb-2"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-400 transition-colors"
                />

              </div>


              {/* Email */}
              <div className="mb-5">

                <label
                  htmlFor="email"
                  className="block text-gray-300 mb-2"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-400 transition-colors"
                />

              </div>


              {/* Subject */}
              <div className="mb-5">

                <label
                  htmlFor="subject"
                  className="block text-gray-300 mb-2"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What would you like to discuss?"
                  required
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-400 transition-colors"
                />

              </div>


              {/* Message */}
              <div className="mb-6">

                <label
                  htmlFor="message"
                  className="block text-gray-300 mb-2"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows="5"
                  required
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-400 transition-colors resize-none"
                />

              </div>


              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-400 text-white font-semibold py-4 rounded-xl hover:scale-[1.02] transition-all duration-300"
              >
                Send Message 🚀
              </button>


              {/* Success Message */}
              {submitted && (
                <p className="text-green-400 text-center mt-5">
                  Thanks! Your message has been submitted.
                </p>
              )}

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;