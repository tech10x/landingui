"use client";
import { useState } from "react";
import sendContactForm from "@/api/sendContactForm";

const FormFeald = () => {
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientContactNo, setClientContactNo] = useState("");
  const [neededSolution, setNededSolution] = useState("");
  const [projectBrief, setProjectBrief] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    sendContactForm(
      clientName,
      clientEmail,
      clientContactNo,
      neededSolution,
      projectBrief
    );
    setClientName("");
    setClientEmail("");
    setClientContactNo("");
    setNededSolution("");
    setProjectBrief("");
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="emailForm">
      <div className="mt-4">
        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
          Your Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          onChange={(event) => setClientName(event.target.value)}
        />
      </div>

      <div className="mt-4">
        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          onChange={(event) => setClientEmail(event.target.value)}
        />
      </div>

      <div className="mt-4">
        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
          Contact No
        </label>
        <input
          type="number"
          name="contact"
          placeholder="Your Contact No"
          className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          onChange={(event) => setClientContactNo(event.target.value)}
        />
      </div>

      <div className="mt-4">
        <label
          htmlFor="solutions"
          className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
        >
          Solution You Are Searching
        </label>

        <select
          id="solutions"
          name="solutions"
          className="block w-full px-5 py-2.5 mt-2 text-gray-400 placeholder-gray-200 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          onChange={(event) => setNededSolution(event.target.value)}
        >
          <option>Web Devlopment</option>
          <option>Web Design</option>
          <option>Api Development</option>
          <option>Digital Marketing</option>
          <option>Software Maintenance</option>
          <option>App Development</option>
          <option>SEO</option>
          <option>CMS Solution</option>
        </select>
      </div>

      <div className="w-full mt-4">
        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
          Project Brief
        </label>
        <textarea
          name="message"
          className="block w-full h-28 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-28 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Project Brief"
          onChange={(event) => setProjectBrief(event.target.value)}
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
      >
        Send message
      </button>
    </form>
  );
};

export default FormFeald;
