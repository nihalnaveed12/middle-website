"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

type AccordionItem = {
  title: string;
  content: string;
};

const accordionItems: AccordionItem[] = [
  {
    title: "Customers",
    content:
      "Support & enquiries For questions, bugs and suggestions contact us "
  },
  {
    title: "Brokers",
    content:
      "Browse FAQs, video demos, and support documentation by logging into the Broker Portal and navigating to Support",
  },
  {
    title: "Lenders",
    content:
      "For general enquiries contact us at",
  },
  {
    title: "General",
    content:
      "For general enquiries contact us at",
  },
];

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  console.log(openIndex);

  return (

    <div className="bg-gradient-to-r from-cyan-50 to-zinc-50 pb-20">
    <div className="xl:max-w-screen-xl px-4 lg:px-20 mx-auto md:pt-40 pt-40">
      <div className="flex justify-center  lg:flex-row flex-col gap-y-10 gap-x-10">

        <div className="flex flex-col-reverse lg:flex-col px-4 justify-center w-full mx-auto max-w-xl">

          <div className="">
            <div className="flex gap-4 mb-4">
              <Image
                src="/envelope-middle.webp"
                height={100}
                width={100}
                alt="envelop"
                className="inline w-10"
              ></Image>
              <span className="text-5xl font-bold">Contact us</span>
            </div>
            <div>
              <p>
                Want to get in touch with us? Sure! Let us know below what
                you’re looking for and we’ll get back to you.
              </p>
            </div>
            <div>
              <h2 className="pt-10 text-xl font-semibold">Address</h2>
              <p>Brookfield Place, 10 Carrington St, Sydney NSW 2000</p>
            </div>
          </div>

          <div>
            <Image
              src="/ques-middle.webp"
              height={400}
              width={400}
              alt="question image"
              className="mb-10 mt-10 w-[75%] mx-auto lg:mx-0"
            ></Image>
          </div>       
        </div>
        <div className="w-full max-w-xl mx-auto space-y-2">
          {accordionItems.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                className="flex justify-between items-center w-full p-4 text-left bg-white focus:outline-none shadow-md rounded-md"
                onClick={() => toggleAccordion(index)}
                // aria-expanded={openIndex === index}
                // aria-controls={`accordion-content-${index}`}
              >
                <span className="font-medium text-gray-900">{item.title}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform duration-200 hover:bg-purple-100 rounded-lg ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div
                  id={`accordion-content-${index}`}
                  className="p-4 bg-gray-50"
                  role="region"
                  aria-labelledby={`accordion-header-${index}`}
                >
                  <p className="text-gray-700">{item.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}
