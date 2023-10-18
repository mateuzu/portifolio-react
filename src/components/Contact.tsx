import emailjs from "@emailjs/browser"
import { FormEvent, useRef, useState } from "react"
import { FaSpinner, FaWhatsapp, FaLinkedin } from "react-icons/fa"
import {
    HiCheckCircle,
    HiOutlineMapPin,
} from "react-icons/hi2"
import {BiLogoGmail} from 'react-icons/bi'

export function Contact() {
    const form = useRef<HTMLFormElement>(null)
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)

    const sendEmail = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (!form.current) return

        setLoading(true)

        emailjs
            .sendForm(
                "service_22gkuwn",
                "template_3prghl4",
                form.current,
                "JiCHJIL_jLqhqv6mU"
            )
            .then(
                () => {
                    setSuccess(true)
                    setLoading(false)
                },
                (error) => {
                    setError(true)
                    setLoading(false)
                    console.error(error)
                }
            )
    }

    const contacts = [
        {
            name: "WhatsApp",
            description: "+55 11 98891-6005",
            link: "https://wa.me/5511988916005?text=Olá...",
            icon: <FaWhatsapp className="h-10 w-10 text-[#25D366]" />,
        },
        {
            name: "Email",
            description: "mateusf63@gmail.com",
            link: "mailto:mateusf63@gmail.com?subject=Olá...",
            icon: <BiLogoGmail className="h-10 w-10 text-[#DB4A39]" />,
        },
        {
            name: "Linkedin",
            description: "Mateus Ferreira",
            link: "https://www.linkedin.com/in/mateus-ferreira-a55691234",
            icon: <FaLinkedin className="h-10 w-10 text-[#0077B5]" />,
        },
        {
            name: "São Paulo - SP",
            description: "",
            link: "https://goo.gl/maps/4yacADQtLB8jz8zn9?coh=178573&entry=tt",
            icon: <HiOutlineMapPin className="h-10 w-10 text-[#FFC107]" />,
        },
    ]

    return (
        <section id="contact" className="bg-gradient-to-tr from-azul_marinho_profundo to-azul_cinza_escuro text-white md:rounded-tr-[50px]">
            <div className="container mx-auto max-w-4xl p-4 py-8">
                <div className="mb-6">
                    <h2 className="z-50 mb-2">
                        <span className="mr-2 font-headline text-3xl font-semibold">
                            Entre
                        </span>
                        <span className="font-handwriting text-4xl text-cinza_claro">Em Contato</span>
                    </h2>
                    <p className="text-sm">
                        Entre em contato por formulário ou WhatsApp, com certeza irei poder
                        te ajudar.
                    </p>
                </div>

                <div className="flex flex-col gap-6 md:flex-row">
                    <div className="basis-2/3">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="mb-4">
                                <label
                                    htmlFor="message"
                                    className="mb-2 block ps-4 font-headline font-semibold"
                                >
                                    Mensagem:
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="h-36 w-full rounded-lg border border-white bg-transparent p-2 outline-none"
                                    required
                                />
                            </div>
                            <div className="mb-6 flex flex-col gap-4 md:flex-row">
                                <div className="flex-grow">
                                    <label
                                        htmlFor="fullName"
                                        className="mb-2 block ps-4 font-headline font-semibold"
                                    >
                                        Seu nome:
                                    </label>
                                    <input
                                        className="w-full rounded-lg border border-white bg-transparent p-2 outline-none"
                                        type="text"
                                        name="fullName"
                                        id="fullName"
                                        required
                                    />
                                </div>
                                <div className="flex-grow">
                                    <label
                                        htmlFor="email"
                                        className="mb-2 block ps-4 font-headline font-semibold"
                                    >
                                        Seu email:
                                    </label>
                                    <input
                                        className="w-full rounded-lg border border-white bg-transparent p-2 outline-none"
                                        type="email"
                                        name="email"
                                        id="email"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="flex items-center gap-2 text-azul_meianoite_profundo cursor-pointer rounded-md bg-white px-4 py-2 font-headline text-sm font-semibold transition hover:text-azul_marinho duration-300"
                                    disabled={loading}
                                >
                                    {loading && <FaSpinner className="h-4 w-4 animate-spin" />}
                                    {success && <HiCheckCircle className="h-4 w-4 text-green-700" />}
                                    Enviar mensagem
                                </button>

                                {error && (
                                    <p className="mt-2">
                                        Ocorreu um erro ao enviar a mensagem, tente novamente mais
                                        tarde.
                                    </p>
                                )}
                            </div>
                        </form>
                    </div>
                    <div className="basis-1/3">
                        {contacts.map((contact, index) => (
                            <div
                                key={`contact-${index}`}
                                className="mb-4 flex items-center gap-4 rounded-lg border border-white p-4 hover:bg-white hover:text-azul_profundo transition duration-300"
                            >
                                {contact.icon}
                                <div className="">
                                    <p className="font-headline font-semibold">{contact.name}</p>
                                    <a
                                        href={contact.link}
                                        target="_blank"
                                        className=""
                                    >
                                        {contact.description}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}