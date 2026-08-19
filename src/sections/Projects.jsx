import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import ScrollReveal from "../components/ScrollReveal";

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-slate-950 text-white py-24"
    >

      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">

          <p className="text-cyan-400 text-lg font-medium mb-3">
            What I've Built
          </p>

          <h2 className="text-5xl font-bold">
            My Projects
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5 leading-7">
            Here are some of the projects I have built while learning,
            experimenting with new technologies, and solving real-world
            problems.
          </p>

        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">


          {projects.map((project, index) => (
  <ScrollReveal
    key={project.id}
    direction={
      index % 3 === 0
        ? "left"
        : index % 3 === 1
        ? "up"
        : "right"
    }
    delay={index * 150}
  >
  <ProjectCard project={project} />
  </ScrollReveal>
))}

        </div>

      </div>

    </section>
  );
}

export default Projects;