export default function Footer() {
    return (
        <footer className="mt-16 border-t border-slate-200">
            <div className="max-w-6xl mx-auto px-4 sm:px-[8%] lg:px-[12%] py-10">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                    <p className="text-sm text-slate-300 text-center sm:text-left font-Outfit font-semibold">
                        © {new Date().getFullYear()} Aylan Moura · Todos os direitos reservados.
                    </p>
                    <ul className="flex items-center gap-8">
                        <li>
                            <a href="https://github.com/Aylan-Moura" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-blue-800 transition font-Outfit text-sm font-bold border-b border-transparent hover:border-blue-800">
                                GitHub
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/aylan-moura/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-blue-800 transition font-Outfit text-sm font-bold border-b border-transparent hover:border-blue-800">
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a href="https://wa.link/5yuxhs" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-blue-700 transition font-Outfit text-sm font-medium">
                                WhatsApp
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
