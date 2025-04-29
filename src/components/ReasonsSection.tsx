import Image from "next/image";
import mockData from "@/data/mockData.json";

export default function ReasonsSection() {
  return (
    <section className="p-8 sm:p-16">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">More Reasons to Love Netflix</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {mockData.reasons.map((reason, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded">
            <Image
              src={reason.image}
              alt={reason.title}
              width={400}
              height={160}
              className="w-full h-40 object-cover rounded"
            />
            <h3 className="mt-4 text-lg font-bold">{reason.title}</h3>
            <p className="mt-2">{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
