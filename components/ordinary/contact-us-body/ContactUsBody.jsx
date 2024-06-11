import React from "react";
import FormFeald from "./FormFeald";

const ContactUsBody = () => {
  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <div className="absolute inset-0">
          <iframe
            width="100%"
            height="100%"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58804.61064160301!2d88.34853333459145!3d22.90273973978223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f893dbd4300835%3A0xeaaf1f3b1143711d!2sChinsurah%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1718122779659!5m2!1sen!2sin"
          ></iframe>
        </div>
        <div className="container px-5 py-24 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <FormFeald />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsBody;
