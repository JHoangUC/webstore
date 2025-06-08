"use client";
import { useState } from "react";

const faqs = [
  {
    question: "What kind of stickers do you sell?",
    answer:
      "We sell high-quality vinyl stickers designed for laptops, water bottles, phones, and more. Our designs are original, waterproof, and made to last.",
  },
  {
    question: "Are the stickers waterproof?",
    answer:
      "Yes! All our stickers are weatherproof and waterproof, perfect for outdoor gear, water bottles, and anything you carry on the go.",
  },
  {
    question: "Do you offer free shipping?",
    answer:
      "We offer free shipping on U.S. orders over $20. Otherwise, shipping is calculated at checkout based on your location.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Orders ship within 2–4 business days. U.S. orders typically arrive in 3–7 business days. International orders may take longer depending on customs.",
  },
  {
    question: "Do you take custom orders?",
    answer:
      "At the moment, we are not accepting custom orders, but feel free to reach out—we love hearing your ideas and might open custom slots soon!",
  },
  {
    question: "What’s your return policy?",
    answer:
      "All sales are final. If there’s an issue with your order (damaged/lost in transit), please contact us within 7 days of delivery.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="max-w-3xl mx-auto px-4 py-12 pt-28 work-sans" >
      <h1 className="text-4xl font-bold text-center mb-8 Rubik-Doodle-Shadow">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-xl p-4 transition-all duration-200"
          >
            <button
              className="flex justify-between w-full text-left font-medium text-lg"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-${index}`}
            >
              <span>{faq.question}</span>
              <span>{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <div
                id={`faq-${index}`}
                className="mt-2 text-gray-600"
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
