import { AiOutlineMail } from 'react-icons/ai'
import { BsTelephone } from 'react-icons/bs'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { AiOutlineInfoCircle } from 'react-icons/ai'

export function About() {
    return (
        <section className="container mx-auto my-4 max-w-5xl p-4">
            <div className="p-4 text-center relative">
                <h2 className="text-azul_profundo relative z-10">
                    <span className="mr-2 font-bold font-headline text-3xl">Sobre</span>
                    <span className="font-handwriting text-4xl">Mim</span>
                </h2>
                <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-100/40" />
            </div>

            <div className="mx-auto mt-10 max-w-lg relative">
                <div className="bg-azul_noturno relative w-full rounded-lg p-1.5 ps-10 md:p-4 md:h-64 md:ps-48">
                    <div className="relative h-full w-full rounded-lg bg-gray-50 p-4">
                        <p className="font-handwriting text-lg font-bold ml-5 md:ml-0"> Olá, </p>
                        <p className='ml-5 md:ml-0'>
                            <span className="mr-1">Me chamo</span>
                            <span className="font-headline font-bold text-azul_profundo">Mateus Ferreira</span>
                        </p>
                        <table className="mt-4 w-full flex justify-center items-center text-sm">
                            <tbody>
                                <tr>
                                    <td className="font-headline font-bold uppercase text-azul_profundo flex gap-2 items-center">
                                        <BsTelephone />
                                        Celular:
                                    </td>
                                    <td className='whitespace-nowrap overflow-hidden overflow-ellipsis'>
                                        <a>
                                            +55 11 98891-6005
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-headline font-bold uppercase text-azul_profundo flex gap-2 items-center">
                                        <AiOutlineMail />
                                        Email:
                                    </td>
                                    <td className='whitespace-nowrap overflow-hidden overflow-ellipsis'>
                                        <a>
                                            mateusf63@gmail.com
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-headline font-bold uppercase text-azul_profundo flex gap-2 items-center">
                                        <HiOutlineLocationMarker />
                                        Endereço:
                                    </td>
                                    <td className='whitespace-nowrap overflow-hidden overflow-ellipsis'>
                                        <a className="">
                                            São Paulo - SP
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-headline font-bold uppercase text-azul_profundo flex gap-2 items-center">
                                        <AiOutlineInfoCircle />
                                        Disponível:
                                    </td>
                                    <td>
                                        <span className="relative flex h-3 w-3 ml-2">
                                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                                            <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="absolute -left-2 -top-4 h-24 w-20 rounded-lg bg-azul_cinza_claro bg-cover bg-center md:-left-12 md:-top-12 md:h-72 md:w-56 bg-[url(https://res.cloudinary.com/dnttxkyym/image/upload/v1697663168/mockups-projetos/about-10-18_%C3%A0_s_13.39.32_ae4d19fe_c3kgus.jpg)] md:block"></div>
                </div>
            </div>
        </section>
    )
}
