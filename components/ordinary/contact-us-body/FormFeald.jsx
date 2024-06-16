"use client";
import { useState } from "react";
import sendContactForm from "@/api/sendContactForm";
import CustomAlert from "@/utils/custom-alert/CustomAlert";
import successMessageIcon from '@/assets/icons/green-tick-1.png';
import errorMessageIcon from '@/assets/icons/alert-error-icon.png';
const FormFeald = () => {
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientContactNo, setClientContactNo] = useState("");
  const [neededSolution, setNededSolution] = useState("");
  const [projectBrief, setProjectBrief] = useState("");
  const [ifSuccess, setSuccess] = useState(false);
  const [ifFail, setFail] = useState(false);

  const getStatus = (status) => {
    console.log(status);
   if(status === 'success'){
    setSuccess(true);
   }else if(status === 'failed'){
    setFail(true);
   }else{
    setSuccess(false);
    setFail(false);
   }

  }

  const handleSuccessCloseEvent = () => {
    setSuccess(false);
  }
  const handleFaliureCloseEvent = () => {
    setFail(false);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
   sendContactForm(
      clientName,
      clientEmail,
      clientContactNo,
      neededSolution,
      projectBrief,
      getStatus
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
        required/>
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
          required/>
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
          required/>
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
          required>
          <option value={'Web Devlopment'}>Web Devlopment</option>
          <option value={'Web Design'}>Web Design</option>
          <option value={'Api Development'}>Api Development</option>
          <option value={'Digital Marketing'}>Digital Marketing</option>
          <option value={'Software Maintenance'}>Software Maintenance</option>
          <option value={'App Development'}>App Development</option>
          <option value={'SEO'}>SEO</option>
          <option value={'CMS Solution'}>CMS Solution</option>
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
          required></textarea>
      </div>


      <button type="submit" className="relative flex h-[50px] w-full mt-4 items-center justify-center overflow-hidden bg-gradient-to-r from-blue-800 to-green-800 text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white font-semibold hover:text-blue-900 hover:shadow-blue-600 hover:before:border-[25px] rounded-lg">
          <span className="relative z-10">Send message</span>
          </button>

       
      <CustomAlert 
      showOrHide={ifSuccess === true ? 'flex' : 'hidden'}
      closeButton={handleSuccessCloseEvent}
      statusIcon={successMessageIcon}
      alertHead={'Awsome!'}
      message1={'Your information has been sended succesfully'}
      message2={'We will reachout to you soon !!!'}
      buttonColor={'bg-green-500 hover:bg-green-600'}/>

<CustomAlert 
      showOrHide={ifFail === true ? 'flex' : 'hidden'}
      closeButton={handleFaliureCloseEvent}
      statusIcon={errorMessageIcon}
      alertHead={'Sorry we are unable to submit!'}
      message1={'Please try sometime later!!'}
      buttonColor={'bg-red-500 hover:bg-red-800'}/>

    </form>
  );
};

export default FormFeald;
