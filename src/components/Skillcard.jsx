function SkillCard({ skill }) {
  return (
    <div
      className={`bg-gradient-to-r ${skill.color}
      rounded-2xl
      p-6
      text-white
      font-bold
      text-center
      shadow-xl
      hover:scale-105
      transition
      duration-300`}
    >
      <h3 className="text-xl">
        {skill.name}
      </h3>
    </div>
  );
}

export default SkillCard;