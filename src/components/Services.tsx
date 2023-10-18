import { HiComputerDesktop } from "react-icons/hi2"
import { FiCloud } from 'react-icons/fi';

export function Services() {
  const services = [
    {
      title: "API Rest",
      description: "Desenvolvimento de sistemas e APIs REST com Java e Spring Boot",
      icon: <FiCloud className="h-12 w-12" />,
    },
    {
      title: "Web",
      description:
        "Desenvolvimento de sites e sistemas web estáticos e dinâmicos com React, HTML5 e CSS3.",
      icon: <HiComputerDesktop className="h-12 w-12" />,
    }
  ]

  return (
    <section className="container mx-auto my-12 max-w-4xl p-4">
      <div className="p-4 text-center">
        <h2 className="mb-2 font-bold text-azul_profundo">
          <span className="mr-2 font-headline text-3xl">Meus</span>
          <span className="font-handwriting text-4xl">Serviços</span>
        </h2>

        <p className="text-sm text-gray-600">
          Posso atender uma  variedade de serviços, abrangendo desde o desenvolvimento front-end até o back-end, incluindo integração com bancos de dados e sistemas.
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-3 md:flex-row">
        {
          services.map((services, index) => (
            <div
              className="basis-1/2 rounded-lg bg-azul_noturno p-4 text-white hover:scale-105 transition-transform duration-300"
              key={`service-${index}`}>
              <div className="mb-2">{services.icon}</div>
              <h3 className="text-xl font-bold">{services.title}</h3>
              <p className="text-sm">{services.description}</p>
            </div>
          ))
        }
      </div>
    </section>
  )
}
