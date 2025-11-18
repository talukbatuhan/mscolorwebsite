"use client";

import React from "react";
import ContactMap from "@/app/components/ContactComponents/ContactMap";
import ContactForm from "@/app/components/ContactComponents/ContactForm";

const Contact: React.FC = () => {
  return (
    <section className="bg-linear-to-br from-slate-900 via-blue-950 to-slate-900 min-h-[calc(80vh)] flex justify-center items-center">
      <div className="max-w-6xl mx-auto  sm:px-6 lg:px-2 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <div className="bg-[#182D51] p-2 sm:p-4 rounded-xl border-2 border-[#193770] h-[500px] flex flex-col justify-center">
            <ContactForm />
          </div>

          <div className="bg-white p-0 rounded-xl  overflow-hidden h-[500px]">
            <ContactMap />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
