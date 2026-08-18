import { useEffect, useRef, useState } from "react";

function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const getTransform = () => {
    if (visible) {
      return "translate(0, 0)";
    }

    if (direction === "left") {
      return "translateX(-120px)";
    }

    if (direction === "right") {
      return "translateX(120px)";
    }

    if (direction === "down") {
      return "translateY(-100px)";
    }

    return "translateY(100px)";
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: getTransform(),
        transition: "opacity 1s ease, transform 1s ease",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default ScrollReveal;