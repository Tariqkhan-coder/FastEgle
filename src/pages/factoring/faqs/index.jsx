import { useState } from "react";
import { FaqsCard } from "../../../components/FaqsCard";
import { FaqsData } from "../../../data/faqsFactoringData";

export default function Faqs() {
  const [openFaqId, setOpenFaqId] = useState(null);

  const FaqsColumn1 = FaqsData.slice(0, 3);
  const FaqsColumn2 = FaqsData.slice(3, 6);
  const handleFaqToggle = (id) => {
    setOpenFaqId((prevId) => (prevId === id ? null : id));
  };
  return (
    <section>
      <div className="container py-15 md:py-20">
        <div className="w-full">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-4">
              Frequently asked questions
            </h1>
            <p className="max-w-xl mx-auto text-sm sm:text-base text-soft-white leading-relaxed">
              Here we answer the most frequently asked questions from our
              clients and partners
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {[FaqsColumn1, FaqsColumn2].map((column, i) => (
              <div key={i} className="space-y-4">
                {column.map((faq) => (
                  <FaqsCard
                    key={faq.id}
                    faq={faq}
                    isOpen={openFaqId === faq.id}
                    onClick={() => handleFaqToggle(faq.id)}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
