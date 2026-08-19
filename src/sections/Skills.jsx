import skills from "../data/skills";
import SkillCard from "../components/SkillCard";
import ScrollReveal from "../components/ScrollReveal";


function Skills() {
  return (
    <section 
    id="skills"
    className="bg-slate-900 text-white py-24">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center mb-16">
          My Skills
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {skills.map((skill, index) => (
  <ScrollReveal
    key={skill.name}
    direction={index % 2 === 0 ? "left" : "right"}
    delay={index * 100}
  >
    <SkillCard skill={skill} />
  </ScrollReveal>
))}
        </div>

      </div>

    </section>
  );
}

export default Skills;