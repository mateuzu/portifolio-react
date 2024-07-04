import { HiArrowTopRightOnSquare } from "react-icons/hi2"

export function Projects() {
    const projects = [
        {
            title: "Github",
            description: "GitHub contendo meus projetos de programação e algumas contribuições. É onde compartilho meu trabalho também meus estudos pessoais. ",
            image:
                "https://res.cloudinary.com/dnttxkyym/image/upload/v1697659789/mockups-projetos/mockupgit-2_h8udxi.png",
            link: "https://github.com/mateuzu",
            colSpan: "col-span-2 ",
        },
        {
            title: "NutriVidas",
            description: "Projeto estruturado como um e-commerce que visa facilitar o acesso dos usuários à alimentos orgânicos e produtos sustentáveis e contribuir com a ODS 2 - Fome Zero.",
            image:
                "https://res.cloudinary.com/dnttxkyym/image/upload/v1697572953/mockups-projetos/nutri-mockup-phonelogo_ppy5r6.png",
            link: "https://nutri-vidas.vercel.app",
            colSpan: "col-span-1 md:col-span-2",
        }
    ]

    return (
        <>
            <section className="rounded-tl-[80px] bg-gradient-to-tr from-azul_cinza_escuro to-azul_meianoite_escuro text-white md:rounded-tl-[180px]">
                <div className="container mx-auto max-w-4xl p-4 py-12">
                    <div className="relative p-4 text-center">
                        <h2 className="relative z-50 mb-2 text-white">
                            <span className="mr-2 font-headline text-3xl font-semibold">
                                Projetos &
                            </span>
                            <span className="font-handwriting text-4xl text-cinza_claro">Portfólio</span>
                        </h2>
                        <p className="relative text-sm text-azul_cinza_medio">
                            Alguns dos projetos pessoais e que já realizei ao longo da minha
                            trajetória como desenvolvedor.
                        </p>
                        <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-400/10" />
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className={`group relative h-52 cursor-default rounded-lg ${project.colSpan} bg-cover bg-center`}
                                style={{ backgroundImage: `url('${project.image}')` }}
                            >
                                <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center rounded-lg bg-azul_meianoite_escuro text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 backdrop-blur-md bg-opacity-50">
                                    <h4 className="font-headline text-lg font-semibold">
                                        {project.title}
                                    </h4>
                                    <p className=" mb-2 p-1 md:p-3 font-normal md:font-headline text-center">{project.description}</p>
                                    <a href={project.link} target="_blank">
                                        <HiArrowTopRightOnSquare className="h-6 w-6 hover:scale-105 transition-transform duration-200" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <div className="absolute right-0 -mt-[6px] h-3 w-48 rounded-l-full bg-gradient-to-r from-gray-600 to-gray-500 md:w-96" />
        </>
    )
}