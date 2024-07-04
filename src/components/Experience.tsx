import { MdWork } from "react-icons/md";
import { FaLightbulb } from "react-icons/fa";
import { RiTaskFill } from "react-icons/ri";

export function Experience() {
    const experiences = [
        {
            name: "Analista de Suporte JR - GRUPO SBF",
            description:"Período: ABR/2022 - FEV/2023"
        }
    ];

    const responsabilities = [
        {
            name: "Suporte ao usuário",
            description:"Fornecer assistência técnica e solucionar problemas relacionados a computadores, software e sistemas de TI para colaboradores internos da Centauro e FISIA"
        },
        {
            name: "Suporte aos negócios",
            description:"Fornecer suporte aos negócios, garantindo operações contínuas e eficientes, contribuindo para o alcance dos objetivos estratégicos da organização."
        },
        {
            name: "Documentação de chamados",
            description:"Manter registros precisos dos incidentes, soluções e procedimentos técnicos realizados."
        },
        {
            name: "Gerenciar incidentes",
            description:"Gerenciar incidentes trabalhando em colaboração com outros times de TI"
        },
        {
            name: "Configuração e Instalação de softwares",
            description:"Realizar instalação, configuração e atualização de hardware e software, garantindo que estejam funcionando corretamente e de acordo com os padrões estabelecidos"
        }
    ];

    const skills = [
        {
            name: "Trabalho em equipe",
            icon: "images/equipe.svg",
            level: 87,
            description: "Pude colaborar eficazmente em equipe, contribuindo com ideias e esforços para alcançar metas coletivas e promover um ambiente de trabalho produtivo"
        },
        {
            name: "Comunicação",
            icon: "/images/comunicacao.svg",
            level: 87,
            description: "Pude apresentar habilidades de comunicação, verbal e escrita, facilitando a transmissão de informações de maneira compreensível para usuários e colegas de equipe."
        },
        {
            name: "Suporte ao usuário",
            icon: "/images/suporte.svg",
            level: 80,
            description: "Forneci suporte técnico eficaz aos usuários, identificando e resolvendo problemas de forma proativa para garantir a satisfação do cliente."
        },
        {
            name: "Atenção ao detalhe",
            icon: "/images/atencao.svg",
            level: 80,
            description: "Demonstrei forte atenção aos detalhes na análise e resolução de problemas, garantindo precisão e qualidade em todas as tarefas e minimizando erros e retrabalho."
        },
        {
            name: "Windows",
            icon: "images/windows8-original.svg",
            level: 55,
            description: "Familiariade com o sistema operacional Windows para realizar procedimentos técnicos aos usuários."
        },
        {
            name: "Linux",
            icon: "images/linux-original.svg",
            level: 50,
            description: "Familiariade com o sistema operacional Linux para realizar procedimentos técnicos às lojas do estoque."
        },
        {
            name: "Ubuntu",
            icon: "images/ubuntu-original.svg",
            level: 45,
            description: "Familiariade com o sistema operacional Ubuntu para realizar procedimentos técnicos aos caixas das lojas."
        },
        {
            name: "SAP",
            icon: "images/sap.svg",
            level: 45,
            description: "Familiaridade básica com o sistema de ERP SAP, realizando configurações iniciais, instruções simples e auxiliar em processos básicos"
        }
    ];

    return (
        <section className="bg-azul_noturno overflow-hidden">
  <div className="container mx-auto max-w-4xl p-4 py-12">
    <div className="relative mb-4 p-4 text-center">
      <h2 className="relative z-50 mb-2 font-bold">
        <span className="mr-2 font-headline text-3xl text-gray-200">Experiência Profissional &</span>
        <span className="font-handwriting text-4xl text-gray-300">Competências</span>
      </h2>
      <p className="relative text-sm text-gray-200">Analista de Suporte JR</p>
      <div className="absolute left-1/2 top-3 z-0 h-10 w-10 -translate-x-1/2 rounded-lg bg-gray-200/10" />
    </div>

    <div className="flex flex-col gap-8 md:flex-row">
      <div className="basis-1/2">
        <h3 className="mb-4 flex items-center gap-2 text-lg font-extrabold text-gray-200">
          <MdWork className="h-8 w-8 text-gray-100" />
          Experiências
        </h3>

        {experiences.map((experience, index) => (
          <div
            key={`education-${index}`}
            className="relative mb-2 rounded-lg bg-blue-700 p-4 text-sm font-semibold text-white transition duration-300 hover:bg-white hover:text-gray-900 group"
          >
            <p>{experience.name}</p>
            <div className="absolute left-1/2 -top-4 w-56 -translate-x-1/2 rounded-lg bg-gray-700 p-2 text-xs font-bold text-white shadow-md opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:block">
              {experience.description}
            </div>
          </div>
        ))}

        <h3 className="mt-8 mb-4 flex items-center gap-2 text-lg font-extrabold text-gray-200">
          <FaLightbulb className="h-8 w-8 text-gray-100" />
          Responsabilidades
        </h3>

        {responsabilities.map((respo, index) => (
          <div
            key={`curso-${index}`}
            className="relative mb-2 rounded-lg bg-blue-700 p-4 text-sm font-semibold text-white transition duration-300 hover:bg-white hover:text-gray-900 group"
          >
            <p>{respo.name}</p>
            <div className="absolute left-1/2 -top-4 w-56 -translate-x-1/2 rounded-lg bg-gray-700 text-white font-semibold p-2 text-xs shadow-md opacity-0 transition-opacity duration-300 z-10 group-hover:opacity-100 group-hover:block">
              {respo.description}
            </div>
          </div>
        ))}
      </div>

      <div className="basis-1/2">
        <h3 className="mb-4 flex items-center gap-2 text-lg font-extrabold text-gray-200">
          <RiTaskFill className="h-8 w-8 text-gray-100" />
          Competências
        </h3>

        <div className="grid grid-cols-1 gap-4 font-semibold md:grid-cols-2">
          {skills.map((skill, index) => (
            <div
              key={`skill-${index}`}
              className="relative group flex flex-row items-center gap-2 md:flex-col md:items-start"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-white p-2 transition duration-300 hover:bg-gray-200">
                <img src={skill.icon} alt={skill.name} className="h-10 w-10 rounded" />
              </div>
              <div className="w-full flex-grow">
                <h4 className="font-headline text-gray-100">{skill.name}</h4>
                <div className="h-2.5 w-full rounded-full bg-gray-100">
                  <div className="h-2.5 rounded-full bg-gray-400" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
              <div className="absolute right-4 top-6 mt-2 w-48 rounded-lg bg-white p-2 text-sm shadow-md opacity-0 transition-opacity duration-300 z-10 group-hover:opacity-100 group-hover:block">
                {skill.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  <div className="absolute left-0 -mt-[6px] h-3 w-48 md:w-3/12 rounded-r-full bg-gradient-to-r from-gray-300 to-gray-300" />
</section>

        
    );
}
