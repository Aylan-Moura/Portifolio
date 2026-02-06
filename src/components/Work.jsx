export default function Work() {
    const work = [
        {
            name: 'Site institucional',
            icon: './assets/ben.png',
            description: 'Full Stack',
            link: 'https://github.com/Aylan-Moura/Site-Institucional?tab=readme-ov-file',
        },
        {
            name: 'CRUD de clientes',
            icon: './assets/work-2.png',
            description: 'Back-End',
            link: 'https://github.com/Aylan-Moura/Ebac/tree/main/src/CadastroCliente',
        },
        {
            name: 'Test Junit',
            icon: './assets/work-3.png',
            description: 'Back-End',
            link: 'https://github.com/Aylan-Moura/Ebac/tree/main/src/Mod23Test',
        },
        {
            name: 'Padrões de projetos',
            icon: './assets/work-4.png',
            description: 'Back-End',
            link:'https://github.com/Aylan-Moura/Ebac/tree/main/src/Tarefa_PadroesDeProjetos1',
        }
    ];

    return (
        <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
            <h2 className="text-center text-5xl font-Ovo">
                Meus últimos trabalhos
            </h2>

            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
                Bem-vindo ao meu portfólio de desenvolvimento. Aqui você encontra projetos que refletem meu compromisso com qualidade, organização e boas práticas de software.
            </p>

            <div className="grid grid-cols-auto my-10 gap-5 dark:text-black">
                {work.map((item) =>
                    item.link ? (
                        <a
                            key={item.name}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative group block cursor-pointer"
                            style={{ backgroundImage: `url(${item.icon})` }}
                        >
                            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                                <div>
                                    <h2 className="font-semibold">{item.name}</h2>
                                    <p className="text-sm text-gray-700">
                                        {item.description}
                                    </p>
                                </div>
                                <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                                    <img
                                        src="./assets/send-icon.png"
                                        alt="Abrir projeto"
                                        className="w-5"
                                    />
                                </div>
                            </div>
                        </a>
                    ) : (
                        <div
                            key={item.name}
                            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative group cursor-not-allowed opacity-80"
                            style={{ backgroundImage: `url(${item.icon})` }}
                        >
                            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between">
                                <div>
                                    <h2 className="font-semibold">{item.name}</h2>
                                    <p className="text-sm text-gray-700">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                )}
            </div>

            <a
                href="https://github.com/Aylan-Moura"
                className="w-max flex items-center justify-center gap-2 text-gray-700 border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover rounded-full py-2 px-8 mx-auto my-20 duration-300 dark:text-white"
            >
                Mostrar mais
                <img
                    src="./assets/right-arrow-bold.png"
                    alt=""
                    className="w-4 dark:hidden"
                />
                <img
                    src="./assets/right-arrow-bold-dark.png"
                    alt=""
                    className="w-4 hidden dark:block"
                />
            </a>
        </div>
    );
}
