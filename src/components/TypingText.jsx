import { useEffect, useState } from "react";

const roles = [
  "Full Stack Developer",
  "AI Engineer",
  "Freelancer",
  "React Developer",
  "Problem Solver",
  "Machine Learning Enthusiast",
];

function TypingText() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((previousIndex) =>
        (previousIndex + 1) % roles.length
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <h2 className="text-3xl text-cyan-400 mt-4 font-semibold transition-all duration-500">
      {roles[currentIndex]}
    </h2>
  );
}

export default TypingText;