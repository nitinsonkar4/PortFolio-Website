const About = () => {
  return (
    <>
      <section
        id="about"
        className="max-w-4xl mx-auto px-6 py-16 bg-white dark:bg-gray-800 rounded-lg shadow-md mt-12"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          About Me
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto text-center">
          I'm <span className="font-semibold text-indigo-600">Nitin</span>, an
          MCA graduate with a strong interest in full-stack web development. I
          love creating responsive and user-friendly web apps using technologies
          like <strong className="text-indigo-600">React.js</strong>,{" "}
          <strong className="text-indigo-600">Node.js</strong>, and{" "}
          <strong className="text-indigo-600">SQL</strong>. I focus on clean
          code, performance, and great user experiences.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto text-center">
          I’m always eager to learn, collaborate, and solve real-world problems
          through code.
        </p>

        <h3 className="text-xl font-semibold text-indigo-600 mb-4 text-center">
          Technologies I Work With
        </h3>
        <ul className="flex flex-wrap justify-center gap-4">
          {[
            "HTML5",
            "CSS3",
            "JavaScript",
            "React.js",
            "Node.js",
            "SQL",
            "Tailwind CSS",
            "Bootstrap",
            "Git & GitHub",
          ].map((tech) => (
            <li
              key={tech}
              className="bg-indigo-100 dark:bg-indigo-700 text-indigo-700 dark:text-indigo-200 px-4 py-2 rounded-full font-medium text-sm shadow"
            >
              {tech}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default About;
