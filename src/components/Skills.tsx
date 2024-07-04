import { HiAcademicCap, HiCodeBracketSquare } from "react-icons/hi2";
import { PiCertificateFill } from "react-icons/pi";

export function Skills() {
    const educations = [
        {
            name: "Análise e Desenvolvimento de Sistemas - Cruzeiro do Sul",
            ref: "",
            description:"Cursando - Previsão de conclusão: DEZ/2025"
        }
    ];

    const cursos = [
        {
            name: "Desenvolvedor Web Full Stack Júnior - Generation Brasil",
            ref: "Deixa vazio",
            description:"Bootcamp - 477 horas - 2023"
        },
        {
            name: "Java - Programação Orientada a Objetos - Udemy",
            ref: "https://www.udemy.com/certificate/UC-5cf4d430-090b-446d-9d86-724c0187852e/",
            description:"Curso - 54 horas - 2023"
        },
        {
            name: "Java Fundamentos - FIAP",
            ref: "https://on.fiap.com.br/local/nanocourses/validar-certificado/?chave=618aa481af70b1226617dbaa969132c9",
            description:"Curso - 80 horas - 2024"
        },
        {
            name: "Microsserviços com Spring Boot e Spring Cloud - Udemy",
            ref: "https://www.udemy.com/certificate/UC-98965d3d-f11a-4dad-941d-10f2251a49fe/",
            description:"Curso - 8 horas - 2024"
        },
        {
            name: "Cloud Fundamentals, Administration and Solution Architect - FIAP",
            ref: "https://on.fiap.com.br/local/nanocourses/validar-certificado/?chave=4b6d5bfe7951a08c5bee2afbe75cb2d2",
            description:"Curso - 60 horas - 2024"
        }
    ];

    const skills = [
        {
            name: "Java",
            icon: "/images/java.svg",
            level: 87,
            description: "Minha linguagem dominante. Tenho experiência de aproximadamente 1 ano em estudos em Java através de cursos/bootcamps e projetos"
        },
        {
            name: "Spring Boot",
            icon: "/images/spring.svg",
            level: 87,
            description: "Meu framework dominante. Tenho experiência de aproximadamente 7 meses em estudos em Spring através de cursos/bootcamps e projetos"
        },
        {
            name: "MySQL",
            icon: "/images/mysqll.svg",
            level: 65,
            description: "Tenho familiaridade com bancos de dados relacionais e linguagem SQL através do bootcamp."
        },
        {
            name: "PostgreSQL",
            icon: "/images/postgresql-original.svg",
            level: 65,
            description: "Tenho familiaridade com bancos de dados relacionais e linguagem SQL através do bootcamp."
        },
        {
            name: "Docker",
            icon: "/images/docker-original.svg",
            level: 55,
            description: "Tenho familiaridade inicial com manipulação de containers com Docker"
        },
        {
            name: "Kubernetes",
            icon: "/images/kubernetes-original.svg",
            level: 50,
            description: "Tenho familiaridade inicial com orquestração de containers com Docker"
        },
        {
            name: "Kafka",
            icon: "/images/apachekafka-original.svg",
            level: 45,
            description: "Tenho familiaridade inicial com mensageria utilizando Kafka"
        },
        {
            name: "RabbitMQ",
            icon: "/images/rabbitmq-original.svg",
            level: 45,
            description: "Tenho familiaridade inicial com mensageria assíncrona utilizando RabbitMQ"
        }
    ];

    return (
        <section className="bg-gray-200 overflow-hidden">
          <div className="container mx-auto max-w-4xl p-4 py-12">
            <div className="relative mb-4 p-4 text-center">
              <h2 className="relative z-50 mb-2 font-bold">
                <span className="mr-2 font-headline text-3xl text-blue-900">Educação &</span>
                <span className="font-handwriting text-4xl text-blue-700">Skills</span>
              </h2>
              <p className="relative text-sm text-blue-600">
                Backend Developer | Java | Spring Boot | PostgreSQL/MySQL | Docker | Kubernetes | Kafka | RabbitMQ
              </p>
              <div className="absolute left-1/2 top-3 z-0 h-10 w-10 -translate-x-1/2 rounded-lg bg-blue-400/10" />
            </div>
      
            <div className="flex flex-col gap-8 md:flex-row">
              <div className="basis-1/2">
                <h3 className="mb-4 flex items-center gap-2 text-lg font-extrabold text-blue-900">
                  <HiAcademicCap className="h-8 w-8 text-blue-700" />
                  Educação
                </h3>
      
                {educations.map((education, index) => (
                  <div
                    key={`education-${index}`}
                    className="relative mb-2 rounded-lg bg-white p-4 text-sm font-semibold text-gray-900 transition duration-300 hover:bg-blue-700 hover:text-white group"
                  >
                    <a href={education.ref} target="_blank" rel="noopener noreferrer">
                      {education.name}
                    </a>
                    <div className="absolute left-1/2 -top-4 w-56 -translate-x-1/2 rounded-lg bg-azul_meianoite p-2 text-xs font-bold text-white shadow-md opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:block">
                      {education.description}
                    </div>
                  </div>
                ))}
      
                <h3 className="mt-8 mb-4 flex items-center gap-2 text-lg font-extrabold text-blue-900">
                  <PiCertificateFill className="h-8 w-8 text-blue-700" />
                  Cursos & Certificações
                </h3>
      
                {cursos.map((curso, index) => (
                  <div
                    key={`curso-${index}`}
                    className="relative mb-2 rounded-lg bg-white p-4 text-sm font-semibold text-gray-900 transition duration-300 hover:bg-blue-700 hover:text-white group"
                  >
                    <a href={curso.ref} target="_blank" rel="noopener noreferrer">
                      {curso.name}
                    </a>
                    <div className="absolute left-1/2 -top-4 w-48 -translate-x-1/2 rounded-lg bg-azul_meianoite p-2 text-xs font-bold text-white shadow-md opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:block">
                      {curso.description}
                    </div>
                  </div>
                ))}
              </div>
      
              <div className="basis-1/2">
                <h3 className="mb-4 flex items-center gap-2 text-lg font-extrabold text-blue-900">
                  <HiCodeBracketSquare className="h-8 w-8 text-blue-700" />
                  Skills
                </h3>
      
                <div className="grid grid-cols-1 gap-4 font-semibold md:grid-cols-2">
                  {skills.map((skill, index) => (
                    <div
                      key={`skill-${index}`}
                      className="relative group flex flex-row items-center gap-2 md:flex-col md:items-start"
                    >
                      <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-white p-2 transition duration-300 hover:bg-gray-100">
                        <img src={skill.icon} alt={skill.name} className="h-10 w-10 rounded" />
                      </div>
                      <div className="w-full flex-grow">
                        <h4 className="font-headline text-blue-900">{skill.name}</h4>
                        <div className="h-2.5 w-full rounded-full bg-white">
                          <div className="h-2.5 rounded-full bg-blue-700" style={{ width: `${skill.level}%` }}></div>
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
          <div className="absolute right-0 -mt-[6px] h-3 w-48 md:w-3/12 rounded-l-full bg-gradient-to-r from-blue-700 to-blue-700" />
        </section>
      );      
}
