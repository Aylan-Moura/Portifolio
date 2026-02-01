export default function Footer() {
    return (
        <div className="mt-20">
            <div className="text-center">
                <a href="#!">

                </a>

            </div>
            <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-3">
                <p>© {new Date().getFullYear()} <a href="https://prebuiltui.com" target="_blank"></a> • Distribuido por Aylan Moura• Todos os direitos reservados.</p>
                <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
                    <li><a href="https://github.com/Aylan-Moura">GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/aylan-moura/">LinkedIn</a></li>
                    <li><a href="https://wa.link/5yuxhs">Whatsapp</a></li>

                </ul>
            </div>
        </div>
    )
}