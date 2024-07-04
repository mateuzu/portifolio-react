import { useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { HiExclamationCircle } from 'react-icons/hi';
import { HiCheckCircle, HiDocumentArrowDown } from 'react-icons/hi2'

export function Hero() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleDownload = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);

            const erroSimulado = false;
            if (erroSimulado) {
                setError(true);
            } else {
                setSuccess(true);
                const fileUrl = 'docs/curriculo-mateus.pdf';
                const link = document.createElement('a');
                link.href = fileUrl;
                link.download = 'Currículo - Mateus Ferreira';
                link.click();
            }
        }, 2000);
    }

    return (
        <section className="bg-gradient-to-tr from-azul_cinza_escuro to-azul_marinho_profundo text-white">
            <div className="container mx-auto max-w-4xl p-2 py-12 flex flex-col md:flex-row">
                <div className='basis-1/2'>
                    <h1 className="mb-6 text-center md:text-left">
                        <span className="font-handwriting block text-3xl text-center md:text-left"> Olá, me chamo </span>
                        <span className="font-headline text-5xl font-semibold"> Mateus  </span>
                        <span className="font-headline text-5xl font-light text-cinza_claro"> Ferreira </span>
                    </h1>

                    <h2 className="font-semibold flex items-center gap-3 text-left">
                        <div className="h-1 w-12 rounded-full bg-azul_marinho" />
                        Desenvolvedor Java Backend
                    </h2>

                    <div className=''>
                        <p className="text-cinza_claro my-6 text-left">
                            Sou um estudante de Análise e Desenvolvimento de Sistemas, com foco de desenvolvimento backend. Minha área de estudo inclui tecnologias como: Java, Spring, API Rest e MySQL/PostgreSQL, Docker, Kubernetes, Kafka e RabbitMQ. 
                        </p>
                        <p className="text-cinza_claro my-6 text-left"> 
                            Estou em busca de oportunidades para aprender, crescer e contribuir para o mundo da tecnologia.
                        </p>
                    </div>

                    <div className="flex items-center justify-center md:justify-start gap-3">
                        <a href="#contact" className="underline font-bold text-white hover:text-gray-100">
                            Entre em contato
                        </a>
                        <span className="italic text-azul_cinza_medio">ou</span>

                        <button className='cursor-pointer rounded-md bg-white px-4 py-2 font-headline text-sm font-semibold transition text-azul_meianoite hover:text-azul_marinho duration-300 flex items-center gap-2'
                            onClick={handleDownload}
                            disabled={loading}>
                            {loading ? (
                                <FaSpinner className="h-4 w-4 animate-spin" />
                            ) : error ? (
                                <HiExclamationCircle className="h-4 w-4 text-red-700" />
                            ) : success ? (
                                <HiCheckCircle className="h-4 w-4 text-green-700" />
                            ) : (
                                <HiDocumentArrowDown />
                            )}
                            Baixe meu Currículo
                        </button>
                    </div>
                </div>
                <div className='basis-1/2'></div>
            </div>
            <div className="absolute left-0 -mt-[6px] h-3 w-48 rounded-r-full bg-azul_marinho md:w-96" />
        </section>
    )
}
