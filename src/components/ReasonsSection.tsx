import Image from "next/image";
import mockData from "@/data/mockData.json";

export default function ReasonsSection() {
  return (
    <section className="section-padding">
      {/* ! Section heading */}
      <h2 className="text-2xl sm:text-3xl font-bold mb-10">More Reasons to Join</h2>
      <div className="flex flex-col sm:flex-row flex-wrap justify-stdart items-stretch gap-3">
        {/* 🔥 Dynamically render reasons from mockData */}
        {mockData.reasons.map((reason, index) => (
          <div
            key={index}
            className="relative flex-1 basis-[calc(25%-0.75rem)] min-h-[262px] bg-[linear-gradient(149deg,_#192247_0%,_#210e17_96.86%)] pt-6 px-5 pb-6 rounded-xl flex flex-col"
          >
            {/* ! Reason title */}
            <h3 className="text-2xl font-bold">{reason.title}</h3>
            {/* ? Reason description */}
            <p className="text-base mt-2">{reason.description}</p>
            {/* ! Image for the reason */}
            <div className="absolute bottom-4 right-4">
              <Image
                src={reason.image}
                alt={reason.title}
                width={72}
                height={72}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
