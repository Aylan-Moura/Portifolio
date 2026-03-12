export default function About() {
    const skills = [
        { name: 'Java', icon: './assets/java.png' },
        { name: 'Spring Boot', icon: './assets/spring.png' },
        { name: 'Python', icon: './assets/python.png' },
        { name: 'PostgreSQL', icon: './assets/postgre.png' },
        { name: 'Docker', icon: './assets/docker.png' },
        { name: 'Git', icon: './assets/git.png' },
        { name: 'React', icon: './assets/react.png' },
        { name: 'JavaScript', icon: './assets/javaS.png' },
        { name: 'SQL', icon: './assets/sql.png' },
        { name: 'AWS', icon: './assets/aws.png' },
        { name: 'Kubernetes', icon: './assets/kubernetes.png' },
    ];

    const highlights = [
        {
            name: 'Formação',
            icon: './assets/edu-icon.png',
            description: 'ADS — Uniasselvi (2023–2025) · Back-End Java — EBAC (cursando)',
        },
        {
            name: 'Experiência',
            icon: './assets/project-icon.png',
            description: 'APIs REST, integração de pagamentos, automação de dados e web scraping.',
        },
        {
            name: 'Projetos',
            icon: './assets/code-icon.png',
            description: '3+ projetos relevantes com Java, Python, Docker e PostgreSQL.',
        },
    ];

    return (
        <section id="about" className="w-full px-4 sm:px-[8%] lg:px-[12%] py-20 scroll-mt-20 bg-slate-50">
            <div className="max-w-6xl mx-auto">
               
                <h2 className="text-center text-2xl sm:text-4xl lg:text-5xl font-Ovo font-bold text-slate-800 dark:text-blue-400 mt-2">
                    Sobre mim
                </h2>
                <div className="section-line" />

                <div className="flex w-full flex-col lg:flex-row items-center gap-12 lg:gap-16 my-14 lg:my-20">
                    <div className="flex-shrink-0">
                        <div className="relative">
                            <div className="absolute -inset-2 bg-gradient-to-r from-blue-700/10 to-indigo-600/10 rounded-[2.5rem] blur-2xl" />
                            <img src='./assets/user-image.png' alt="Aylan Moura" className="relative w-48 sm:w-64 lg:w-80 rounded-3xl border border-white/40 shadow-2xl shadow-slate-200/50 object-cover" />
                        </div>
                    </div>
                    <div className="flex flex-col min-w-0 w-full">
                        <p className="mb-5 text-justify text-sm sm:text-base lg:text-lg leading-relaxed text-slate-700 dark:text-slate-600 font-Outfit font-normal">
                            Sou formado em Análise e Desenvolvimento de Sistemas pela Uniasselvi e atualmente em formação como Especialista Back-End Java pela EBAC. Possuo perfil analítico, alta capacidade de aprendizado e facilidade para absorver novos conhecimentos.
                        </p>
                        <p className="mb-8 text-justify text-sm sm:text-base lg:text-lg leading-relaxed text-slate-700 dark:text-slate-600 font-Outfit font-normal">
                            Tenho experiência em backend, APIs REST e automação. Desenvolvi uma API de pagamentos integrada ao Mercado Pago com Java, Spring Boot, PostgreSQL, Flyway, Docker e testes automatizados. Também criei o Java Job Scraper, um sistema open source em Python que automatiza a coleta e filtragem de vagas, utilizando Docker, PostgreSQL, Redis e scraping estruturado.
                        </p>

                        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-5 max-w-2xl mb-8">
                            {highlights.map((item) => (
                                <li
                                    key={item.name}
                                    className="group border border-white/60 rounded-3xl p-6 bg-white/70 backdrop-blur-md hover:bg-white hover:shadow-2xl hover:shadow-blue-600/5 cursor-pointer transition duration-500 shadow-sm"
                                >
                                    <img src={item.icon} alt="" className="w-7 mt-1" />
                                    <h3 className="my-3 font-semibold text-sm sm:text-base text-slate-800 dark:text-slate-400 font-Outfit">
                                        {item.name}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed font-medium">
                                        {item.description}
                                    </p>
                                </li>
                            ))}
                        </ul>

                        <h4 className="mb-4 text-sm font-semibold text-slate-700 font-Outfit">
                            Tecnologias que utilizo
                        </h4>
                        <ul className="flex items-center gap-3 sm:gap-4 flex-wrap">
                            {skills.map((skill) => (
                                <li
                                    key={skill.name}
                                    title={skill.name}
                                    className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-xl hover:scale-110 cursor-pointer transition duration-300"
                                >
                                    <img src={skill.icon} alt={skill.name} className="w-6 sm:w-8 object-contain" />
                                </li>
                            ))}
                        </ul>

                        {/* Competências principais em texto */}
                        <div className="mt-8 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm">
                            <h4 className="text-sm font-bold text-slate-700 font-Outfit mb-3 uppercase tracking-wider">Competências Técnicas</h4>
                            <p className="text-sm text-slate-600 font-Outfit leading-relaxed">
                                POO · APIs RESTful · Java EE / Jakarta EE · Spring Boot · JPA / Hibernate · JDBC · SQL · MySQL · PostgreSQL · MVC · Arquitetura em Camadas · Padrão DAO · Git · GitHub · Maven · JUnit · Testcontainers · Flyway · Docker · Postman · Integração com APIs externas
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
