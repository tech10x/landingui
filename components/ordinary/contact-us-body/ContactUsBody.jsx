import React from "react";
import FormFeald from "./FormFeald";

const ContactUsBody = () => {
  return (
    <div>
      {/* <section className="text-gray-600 body-font relative">
        <div className="absolute inset-0">

        </div>

      </section> */}


      <div className="font-sans text-[#333] bg-green-100 px-6 py-40">
      <div className="max-w-6xl max-md:max-w-md mx-auto">
        <div className="grid md:grid-cols-2 items-center gap-8">
       
          <div className=" lg:max-w-lg bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <FormFeald />
          </div>
    
          <div className="space-y-4 lg:max-w-lg">
            <div className="flex max-sm:flex-col bg-white p-4 rounded-md">
              <img src='https://readymadeui.com/profile_2.webp' className="shrink-0 w-12 h-12 rounded-full max-sm:mb-2 shadow-[7px_-3px_0px_rgba(253,224,71,1)]" />
              <div className="sm:ml-6">
                <h4 className="text-base font-extrabold">John Doe</h4>
                <p className="text-sm mt-1">Veniam proident aute magna anim excepteur et ex consectetur velit ullamco veniam minim aute sit.</p>
              </div>
            </div>
            <div className="flex max-sm:flex-col p-4 bg-white rounded-md">
              <img src='https://readymadeui.com/profile_3.webp' className="shrink-0 w-12 h-12 rounded-full max-sm:mb-2 shadow-[7px_-3px_0px_rgba(253,224,71,1)]" />
              <div className="sm:ml-6">
                <h4 className="text-base font-extrabold">Mark Adair</h4>
                <p className="text-sm mt-1">Veniam proident aute magna anim excepteur et ex consectetur velit ullamco veniam minim aute excepteur et ex consectetur velit ullamco veniam minim aute sit.</p>
              </div>
            </div>
            <div className="flex max-sm:flex-col p-4 bg-white rounded-md">
              <img src='https://readymadeui.com/profile_3.webp' className="shrink-0 w-12 h-12 rounded-full max-sm:mb-2 shadow-[7px_-3px_0px_rgba(253,224,71,1)]" />
              <div className="sm:ml-6">
                <h4 className="text-base font-extrabold">Mark Adair</h4>
                <p className="text-sm mt-1">Veniam proident aute magna anim excepteur et ex consectetur velit ullamco veniam minim aute excepteur et ex consectetur velit ullamco veniam minim aute sit.</p>
              </div>
            </div>
            <div className="flex max-sm:flex-col bg-white p-4 rounded-md">
              <img src='https://readymadeui.com/profile_4.webp' className="shrink-0 w-12 h-12 rounded-full max-sm:mb-2 shadow-[7px_-3px_0px_rgba(253,224,71,1)]" />
              <div className="sm:ml-6">
                <h4 className="text-base font-extrabold">Simon Konecki</h4>
                <p className="text-sm mt-1">Veniam proident aute magna anim excepteur et ex consectetur velit ullamco excepteur et ex consectetur velit ullamco veniam minim aute sit.</p>
              </div>
            </div>
            <div className="flex max-sm:flex-col bg-white p-4 rounded-md">
              <img src='https://readymadeui.com/team-4.webp' className="shrink-0 w-12 h-12 rounded-full max-sm:mb-2 shadow-[7px_-3px_0px_rgba(253,224,71,1)]" />
              <div className="sm:ml-6">
                <h4 className="text-base font-extrabold">Sophia</h4>
                <p className="text-sm mt-1">Veniam proident aute magna anim excepteur et ex consectetur velit ullamco veniam minim aute sit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactUsBody;
