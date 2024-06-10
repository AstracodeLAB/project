import { useState } from "react";

export const Services = () => {
  const [activeServiceIndex, setActiveServiceIndex] = useState(null);

  const handleToggle = (serviceIndex) => {
    setActiveServiceIndex(activeServiceIndex === serviceIndex ? null : serviceIndex);
  };

  const services = [
    {
      title: "Desarrollo de aplicaciones web personalizadas",
      description: "Creamos aplicaciones web a medida que se adaptan perfectamente a tus necesidades y objetivos de negocio, utilizando las últimas tecnologías y metodologías ágiles.",
      bgClass: "bg-black text-secondary",
    },
    {
      title: "Diseño y Experiencia de Usuario (UX/UI)",
      description: "Diseñamos interfaces atractivas y fáciles de usar, asegurando una experiencia de usuario excepcional que mantiene a tus clientes comprometidos y satisfechos.",
      bgClass: "bg-secondary border-4 border-primary",
    },
    {
      title: "Consultoría Tecnológica",
      description: "Ofrecemos asesoramiento experto para ayudarte a tomar decisiones informadas sobre las mejores tecnologías y prácticas para tu negocio.",
      bgClass: "bg-black text-secondary",
    },
    {
      title: "Mantenimiento y Soporte Continuo",
      description: "Proporcionamos servicios de mantenimiento y soporte para asegurar que tu sitio web siempre esté en funcionamiento y actualizado con las últimas mejoras y parches de seguridad.",
      bgClass: "bg-secondary border-4 border-primary",
    },
  ];

  return (
    <section id="about" className="mx-30 mt-7 ">
      <div className="">
        <h2 className="relative z-10 bg-gradient-to-r from-accent to-transparent font-sans font-medium text-2xl px-2 rounded md:inline-block md:text-4xl">
          Servicios
        </h2>
        <ul className="flex flex-col justify-center lg:grid lg:grid-cols-2 lg:gap-4">
          {services.map((service, serviceIndex) => (
            <li key={serviceIndex} className={`${service.bgClass} rounded-[35px] mt-4 p-5 lg:p-7 flex flex-col items-center text-center shadow-lg`}>
              <h3 className="text-2xl flex justify-between items-center">
                {service.title}
                
              </h3>
              <button 
                className="lg:hidden"
                onClick={() => handleToggle(serviceIndex)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 transform transition-transform ${activeServiceIndex === serviceIndex ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <p
                className={`mt-4 transition-all duration-500 ease-in-out ${activeServiceIndex === serviceIndex ? 'block' : 'hidden'} lg:block `}
              >
                {service.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;