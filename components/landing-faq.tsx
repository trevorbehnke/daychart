"use client";

import React from "react";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Day Chart?",
    answer:
      "Provide a brief overview of what your scheduling app does, its key features, and who it's for.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "Outline the support channels available (email, chat, phone) and any service level agreements (SLAs) for response times.",
  },
  {
    question: "Are there any tutorials or guides for new users?",
    answer:
      "Mention the availability of learning resources to help new users get started.",
  },
  {
    question: "Can I suggest a feature or give feedback?",
    answer:
      "Encourage user feedback and describe how they can submit their suggestions or comments.",
  },
  {
    question: "Are there any planned updates or features?",
    answer:
      "If appropriate, share any upcoming features or updates that might interest users.",
  },
  {
    question: "Is there a free trial, and what features does it include?",
    answer:
      "Provide information on any free trial availability, including which features are accessible during the trial.",
  },
];

export const LandingFaq = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const handleToggle = (itemValue: string) => {
    setOpenItem(openItem === itemValue ? null : itemValue);
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md max-w-4xl mx-auto mt-10">
      <h2 className="text-center text-3xl text-white font-semibold mb-8">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible>
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="flex justify-between items-center p-4 text-lg text-white hover:bg-gray-700 transition-colors duration-150 ease-in-out">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="p-4 text-white bg-gray-900">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
