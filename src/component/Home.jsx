import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import profileImage from "../assets/image.jpg";
import { useState, useEffect } from "react";
function useTypingEffect(text, speed = 150, pause = 1000) {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (!isDeleting && index <= text.length) {
      timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, index));
        setIndex(index + 1);
      }, speed);
    } else if (isDeleting && index >= 0) {
      timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, index));
        setIndex(index - 1);
      }, speed);
    }

    if (index === text.length + 1 && !isDeleting) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (index === -1 && isDeleting) {
      setIsDeleting(false);
      setIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [text, index, isDeleting, speed, pause]);

  return displayedText;
}

const Home = () => {
  const typedName = useTypingEffect("Hi, I'm Nitin 👋", 150, 1000);
  return (
    <>
      <section
        id="home"
        className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 px-6 pt-20"
      >
        <div className="md:w-1/2 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {typedName}
            <span className="blink">|</span>
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            I'm an MCA graduate passionate about building beautiful and
            functional web applications. Welcome to my portfolio!
          </p>
          <a
            href="#contact"
            className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition mb-6"
          >
            Contact Me
          </a>

          <div className="flex justify-center space-x-6 text-indigo-600 dark:text-indigo-400 text-2xl">
            <a
              href="https://github.com/nitinsonkar4"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-indigo-800"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/nitin-sonkar-565583306?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-indigo-800"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/nitinsonkar_3"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-indigo-800"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com/nitinsonkar_3"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-indigo-800"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img
            src={profileImage}
            alt="Your Profile"
            className="w-64 h-64 rounded-full object-cover shadow-lg"
          />
        </div>
      </section>
    </>
  );
};

export default Home;
