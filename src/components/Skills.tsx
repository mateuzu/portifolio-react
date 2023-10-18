import { HiAcademicCap, HiCodeBracketSquare } from "react-icons/hi2"

export function Skills() {
    const educations = [
        {
            name: "Desenvolvedor Web Full Stack Júnior - Generation Brasil",
        }
    ]

    const skills = [
        {
            name: "Java",
            icon: "images/java.svg",
            level: 90,
        },
        {
            name: "Spring Boot",
            icon: "/images/spring.svg",
            level: 85,
        },
        {
            name: "MySQL",
            icon: "images/mysqll.svg",
            level: 70,
        },
        {
            name: "HTML5/CSS3",
            icon: "images/html.svg",
            level: 65,
        },
        {
            name: "React",
            icon: "images/react.svg",
            level: 55,
        },
        {
            name: "TypeScript",
            icon: "images/typescript.svg",
            level: 50,
        },
        {
            name: "Tailwind",
            icon: "images/tailwind.svg",
            level: 65,
        }
    ]

    return (
        <section className="rounded-br-[80px] bg-gray-200 md:rounded-br-[100px]">
            <div className="container mx-auto max-w-4xl p-4 py-12">
                <div className="relative mb-4 p-4 text-center">
                    <h2 className="relative z-50 mb-2 font-bold">
                        <span className="mr-2 font-headline text-3xl text-azul_meianoite_profundo">
                            Educação &
                        </span>
                        <span className="font-handwriting text-4xl text-azul_marinho">
                            Skills
                        </span>
                    </h2>
                    <p className="relative text-sm text-azul_meianoite_claro">
                        Back-end Developer | Java | Spring Boot | MySQL | HTML/CSS
                        | React | TypeScript | Tailwind 
                    </p>
                    <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-400/10" />
                </div>

                <div className="flex flex-col gap-8 md:flex-row">
                    <div className="basis-1/2">
                        <h3 className="mb-4 flex items-center gap-2 text-lg font-extrabold text-azul_meianoite_profundo">
                            <HiAcademicCap className="h-8 w-8 text-azul_marinho" />
                            Educação
                        </h3>

                        {educations.map((education, index) => (
                            <div
                                key={`education-${index}`}
                                className="mb-2 rounded-lg bg-white p-4 text-sm font-semibold text-gray-900 hover:bg-azul_marinho hover:text-white transition duration-300"
                            >
                                <a href="https://www.linkedin.com/posts/mateus-ferreira-a55691234_certificado-generation-activity-7102783941740249088-YoCi?utm_source=share&utm_medium=member_desktop" target="_blank">
                                    {education.name}
                                </a>
                            </div>
                        ))}
                    </div>
                    <div className="basis-1/2">
                        <h3 className="mb-4 flex items-center gap-2 text-lg font-extrabold text-azul_meianoite_profundo">
                            <HiCodeBracketSquare className="h-8 w-8 text-azul_marinho" />
                            Skills
                        </h3>

                        <div className="grid grid-cols-1 gap-4 font-semibold md:grid-cols-2">
                            {skills.map((skill, index) => (
                                <div
                                    key={`skill-${index}`}
                                    className="flex flex-row items-center gap-2 md:flex-col md:items-start"
                                >
                                    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-white p-2 hover:bg-gray-100 hover:text-white transition duration-300">
                                        <img
                                            src={skill.icon}
                                            alt={skill.name}
                                            className="h-10 w-10 rounded"
                                        />
                                    </div>
                                    <div className="w-full flex-grow">
                                        <h4 className="font-headline text-azul_meianoite_profundo">{skill.name}</h4>
                                        <div className="h-2.5 w-full rounded-full bg-white">
                                            <div
                                                className="h-2.5 rounded-full bg-azul_marinho"
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}