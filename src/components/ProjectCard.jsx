function ProjectCard({ project }) {
  return (
    <div className="group bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400 hover:shadow-2xl">

      {/* Project Image */}
      <div className="h-52 relative overflow-hidden bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600">

        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-7xl group-hover:scale-110 transition-transform duration-500">
              💻
            </span>
          </div>
        )}

      </div>

      {/* Project Information */}
      <div className="p-6">

        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 leading-7 mb-5">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">

          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="px-3 py-1 rounded-full text-sm bg-slate-800 border border-slate-700 text-cyan-300 hover:border-cyan-400 transition-colors duration-300"
            >
              {technology}
            </span>
          ))}

        </div>

        {/* Buttons */}
        <div className="flex gap-3">

          {/* GitHub */}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-lg bg-slate-800 border border-slate-600 text-white hover:bg-slate-700 hover:border-cyan-400 transition-all duration-300"
          >
            GitHub
          </a>

          {/* Live Demo */}
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-lg bg-cyan-500 text-white hover:bg-cyan-400 hover:scale-105 transition-all duration-300"
          >
            Live Demo
          </a>

        </div>

      </div>

    </div>
  );
}

export default ProjectCard;