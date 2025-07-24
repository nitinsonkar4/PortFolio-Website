import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nudiyzq", // Your service ID
        "template_xsbsh4i", // Your template ID
        form.current,
        "uM2ZAcCDWaJk81-7G" // Your public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus("Something went wrong. Please try again.");
        }
      );
  };

  // ✅ Auto-hide status message after 4 seconds
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus("");
      }, 4000); // 4 seconds

      return () => clearTimeout(timer); // cleanup on unmount/status change
    }
  }, [status]);

  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto px-6 py-16 bg-white dark:bg-gray-800 rounded-lg shadow-md mt-12"
    >
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        Contact Me
      </h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-xl mx-auto space-y-6"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="user_name"
            required
            placeholder="Your name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="user_email"
            required
            placeholder="your.email@example.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            placeholder="Write your message here..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition"
        >
          Send Message
        </button>

        {status && (
          <p className="text-center text-green-600 dark:text-green-400 mt-4">
            {status}
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
