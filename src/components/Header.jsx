export default function Header() {
    return (
        <header className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 overflow-hidden bg-white">
            {/* Imagem de fundo tecnologica (laptop com código) */}
            <div className="absolute inset-0 z-0 opacity-40">
                <img 
                    src="/assets/header-laptop-code.jpg" 
                    alt="Background Tech" 
                    className="w-full h-full object-cover"
                />
            </div>
            {/* Overlay sutil para legibilidade em degradê */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/40 to-white z-0" />
            
            {/* Grid sutil estilo terminal */}
            <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none z-0" />

            <div className="w-11/12 max-w-4xl text-center mx-auto flex flex-col items-center justify-center gap-5 relative z-10 text-slate-900 font-Space-Grotesk">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-700 text-sm font-JetBrains-Mono font-semibold tracking-wide">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse inline-block"></span>
                    Disponível para oportunidades
                </span>
                <h3 className="flex items-end justify-center gap-2 text-4xl md:text-5xl font-Space-Grotesk font-bold text-slate-800 tracking-tighter drop-shadow-md">
                    Aylan Moura
                </h3>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-Open-Sauce font-bold text-gradient-tech drop-shadow-md leading-tight">
                    Desenvolvedor<br/>Back-End
                </h1>
                <p className="max-w-xl mx-auto text-slate-700 font-JetBrains-Mono text-base md:text-lg mt-2 font-medium leading-relaxed">
                    Especialista em Java & Spring Boot · APIs REST · Automação · Docker
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
                    <a
                        href="https://wa.link/5yuxhs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group px-8 py-4 rounded-2xl bg-[#25D366] text-white font-Space-Grotesk font-bold text-base flex items-center gap-2 shadow-xl shadow-green-500/20 hover:scale-105 transition duration-300"
                    >
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.7 17.4 69.4 26.5 106.3 26.5h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.3-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.2-3.2-5.6-.3-8.6 2.4-11.3 2.5-2.4 5.5-6.5 8.3-9.7 2.8-3.3 3.7-5.6 5.5-9.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.3 5.7 23.5 9.2 31.6 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>
                        Entrar em contato
                    </a>
                    <a
                        href="https://github.com/Aylan-Moura"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 rounded-2xl border-2 border-slate-300 bg-white/70 backdrop-blur-sm text-slate-700 font-Space-Grotesk font-bold text-base flex items-center gap-2 hover:border-blue-600/50 hover:text-blue-700 transition duration-300"
                    >
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                        Ver GitHub
                    </a>
                </div>
            </div>
        </header>
    )
}
