
const certificates = [
  {
    title: "Sertifikat Kunjungan Industri",
    file: "Sertifikat1.jpg",
  },
  {
    title: "Sertifikat Narasumber KKN",
    file: "Sertifikat2.jpg",
  },
  {
    title: "Sertifikat Pembekalan Kerja Praktik",
    file: "Sertifikat3.jpg",
  },
  {
    title: "Sertifikat TOEFL",
    file: "Sertifikat4.jpeg",
  },
  {
    title: "Sertifikat Mini BHRP",
    file: "sertifikat5.jpg",
  },
];

export default function AwardSection() {
  const base = `${import.meta.env.BASE_URL}Sertifikat/`;

  return (
    <section id="award" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">

        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Award <span className="text-primary">Certificate</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">

          {certificates.map((cert, index) => (
            <a
              key={index}
              href={`${base}${cert.file}`}
              target="_blank"
              rel="noopener noreferrer"
              title={`Lihat ${cert.title}`}
              className="w-52 h-64 bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <img
                src={`${base}${cert.file}`}
                alt={cert.title}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </a>
          ))}

        </div>
      </div>
    </section>
  );
}
