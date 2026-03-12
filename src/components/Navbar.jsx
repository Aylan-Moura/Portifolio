import { useEffect, useRef } from 'react'

export default function Navbar() {
    const sideMenuRef = useRef();
    const navRef = useRef();
    const navLinkRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)';
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)';
    }


    useEffect(() => {

        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                navRef.current.classList.add('bg-white/70', 'backdrop-blur-xl', 'shadow-sm');
                navLinkRef.current.classList.remove('bg-white/80', 'shadow-sm', 'backdrop-blur-md');
            } else {
                navRef.current.classList.remove('bg-white/70', 'backdrop-blur-xl', 'shadow-sm');
                navLinkRef.current.classList.add('bg-white/80', 'shadow-sm', 'backdrop-blur-md');
            }
        })

    }, [])

    return (
        <>
            <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
                <img src="./assets/header-bg-color.png" alt="" className="w-full" />
            </div>

            <nav ref={navRef} className="w-full fixed top-0 left-0 px-4 sm:px-[8%] lg:px-[12%] py-4 flex items-center justify-between z-50 transition-all duration-300">

                <a href="#top" className="flex items-center gap-2">
                    <span className="text-xl font-bold tracking-tighter text-slate-800 dark:text-slate-400 font-Space-Grotesk drop-shadow-sm">
                        AYLAN<span className="text-blue-600">MOURA</span>
                    </span>
                </a>


                {/* MENU CENTRAL REAL */}
                <ul
                ref={navLinkRef}
                className="hidden md:flex items-center gap-1 rounded-2xl px-6 py-2 bg-white/80 backdrop-blur-md font-Outfit text-sm border border-white/20 absolute left-1/2 -translate-x-1/2 shadow-sm"
                >
                <li><a className='px-4 py-2 rounded-full hover:bg-blue-600/10 transition text-slate-700 dark:text-slate-600 font-semibold' href="#top">Início</a></li>
                <li><a className='px-4 py-2 rounded-full hover:bg-blue-600/10 transition text-slate-700 dark:text-slate-600 font-semibold' href="#about">Sobre mim</a></li>
                <li><a className='px-4 py-2 rounded-full hover:bg-blue-600/10 transition text-slate-700 dark:text-slate-600 font-semibold' href="#work">Projetos</a></li>
                <li><a className='px-4 py-2 rounded-full hover:bg-green-500/10 transition flex items-center gap-2 text-slate-700 dark:text-slate-600 font-semibold' href="https://wa.link/5yuxhs" target="_blank" rel="noopener noreferrer">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" className="text-green-500"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.7 17.4 69.4 26.5 106.3 26.5h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.3-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.2-3.2-5.6-.3-8.6 2.4-11.3 2.5-2.4 5.5-6.5 8.3-9.7 2.8-3.3 3.7-5.6 5.5-9.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.3 5.7 23.5 9.2 31.6 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>
                    Contate-me
                </a></li>
                </ul>


                <div className="flex items-center gap-3">



                <a href="https://wa.link/5yuxhs" target="_blank" rel="noopener noreferrer" className="hidden lg:flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#25D366] text-white font-medium text-sm shadow-lg shadow-green-500/20 hover:scale-105 transition duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.7 17.4 69.4 26.5 106.3 26.5h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.3-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.2-3.2-5.6-.3-8.6 2.4-11.3 2.5-2.4 5.5-6.5 8.3-9.7 2.8-3.3 3.7-5.6 5.5-9.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.3 5.7 23.5 9.2 31.6 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>
                    Contate-me
                </a>

                    <button className="block md:hidden ml-3" onClick={openMenu}>
                        <img src="./assets/menu-white.png" alt="" className="w-6 dark:hidden" />
                        <img src="./assets/menu-black.png" alt="" className="w-6 hidden dark:block" />
                    </button>

                </div>
                {/* -- ----- mobile menu ------  -- */}
                <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-white/90 backdrop-blur-2xl transition duration-500 font-Outfit border-l border-white/20 shadow-[-10px_0_30px_-15px_rgba(0,0,0,0.1)]">

                    <div className="absolute right-6 top-6" onClick={closeMenu}>
                        <img src="./assets/close-white.png" alt="" className="w-5 cursor-pointer dark:hidden" />
                        <img src="./assets/close-black.png" alt="" className="w-5 cursor-pointer hidden dark:block" />
                    </div>

                   <li><a className="text-slate-700 dark:text-slate-400 font-semibold" href="#top" onClick={closeMenu}>Início</a></li>
<li><a className="text-slate-700 dark:text-slate-400 font-semibold" href="#about" onClick={closeMenu}>Sobre mim</a></li>
<li><a className="text-slate-700 dark:text-slate-400 font-semibold" href="#work" onClick={closeMenu}>Projetos</a></li>
                    <li><a href="https://wa.link/5yuxhs" target="_blank" rel="noopener noreferrer" onClick={closeMenu} className="flex items-center gap-2 text-green-600 dark:text-green-400 font-semibold">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.7 17.4 69.4 26.5 106.3 26.5h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.3-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.2-3.2-5.6-.3-8.6 2.4-11.3 2.5-2.4 5.5-6.5 8.3-9.7 2.8-3.3 3.7-5.6 5.5-9.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.3 5.7 23.5 9.2 31.6 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>
                        Contate-me
                    </a></li>
                </ul>
            </nav>
        </>
    )
}
