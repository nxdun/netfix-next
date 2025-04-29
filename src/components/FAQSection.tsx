import mockData from "@/data/mockData.json";

export default function FAQSection() {
  return (
    <section className="p-8 sm:p-16">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {mockData.faqs.map((faq, index) => (
          <details key={index} className="bg-gray-800 p-4 rounded">
            <summary className="cursor-pointer">{faq.question}</summary>
            <p className="mt-2">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
