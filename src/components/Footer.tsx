export default function Footer() {
    return (
        <div className="container mx-auto flex max-w-4xl p-2 text-sm ">
            <p className="flex-grow">
                &copy; {new Date().getFullYear()} &middot; Todos os direitos reservados.
            </p>
            <ul className="flex flex-nowrap gap-2">
                <li>
                    <a href="#">Mateus Ferreira</a>
                </li>
            </ul>
        </div>
    )
}