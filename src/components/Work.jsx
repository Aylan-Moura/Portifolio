export default function Work() {

    const projects = [
        {
            name: 'API REST de Pagamentos',
            subtitle: 'Integração com Mercado Pago',
            date: 'Mar 2026',
            description: 'API REST para processamento de pagamentos com integração direta ao Mercado Pago. Inclui fluxo completo de checkout, validação criptográfica HMAC-SHA256 de webhooks, versionamento de banco com Flyway, testes com Testcontainers e deploy em produção na plataforma Render.',
            stack: ['Java 17', 'Spring Boot', 'PostgreSQL', 'Flyway', 'JUnit', 'Testcontainers', 'Docker', 'Render'],
            stackColor: 'blue',
            icon: './assets/work-3.png',
            link: 'https://github.com/Aylan-Moura/ApiPagamentoMercadoPago',
            highlights: [
                'Webhook com validação HMAC-SHA256 (fail-secure)',
                'Imagem Docker multi-stage com usuário não-root',
                'Deploy automatizado em produção (Render)',
                'Testes de integração com Testcontainers',
            ],
        },
        {
            name: 'Java Job Scraper',
            subtitle: 'Automação de Busca de Vagas (Open Source)',
            date: 'Mar 2026',
            description: 'Sistema automatizado de coleta e filtragem de vagas de desenvolvimento Java, consolidando oportunidades de Vagas.com, InfoJobs, Adzuna e LinkedIn (via SerpAPI) em um único pipeline de dados, eliminando a busca manual diária.',
            stack: ['Python 3.12', 'PostgreSQL', 'Redis', 'Docker', 'BeautifulSoup', 'SerpAPI'],
            stackColor: 'green',
            icon: './assets/work-5.png',
            link: 'https://github.com/Aylan-Moura/JobScraperJava',
            highlights: [
                'Scraping em Vagas.com, InfoJobs e Adzuna',
                'Integração com SerpAPI para vagas do LinkedIn',
                'Pipeline de filtragem por stack, nível e localização',
                'Cache com Redis para reduzir requisições redundantes',
            ],
        },
        {
            name: 'Sistema de Vendas em Java',
            subtitle: 'Arquitetura em Camadas (EBAC)',
            date: 'Nov 2025',
            description: 'Sistema de vendas desenvolvido com Java puro no contexto de formação profissional na EBAC. Foco em boas práticas de engenharia de software: separação de responsabilidades, padrão DAO, camada de serviços, testes unitários com mocks e estrutura profissional de projeto.',
            stack: ['Java', 'JUnit', 'Padrão DAO', 'OOP', 'Maven'],
            stackColor: 'orange',
            icon: './assets/work-2.png',
            link: 'https://github.com/Aylan-Moura/Ebac/tree/main/src/CadastroCliente',
            highlights: [
                'Modelagem de domínio: Cliente, Produto, Venda',
                'Camada de persistência com padrão DAO',
                'Camada de serviços com regras de negócio',
                'Testes unitários com mocks manuais',
            ],
        },
        {
            name: 'Site Institucional',
            subtitle: 'Projeto Front-End',
            date: '2024',
            description: 'Desenvolvimento de site institucional com foco em experiência do usuário, responsividade e integração com serviços web. Projeto prático de desenvolvimento front-end.',
            stack: ['HTML', 'CSS', 'JavaScript'],
            stackColor: 'purple',
            icon: './assets/ben.png',
            link: 'https://github.com/Aylan-Moura/Site-Institucional',
            highlights: [
                'Layout totalmente responsivo',
                'Integração com APIs externas',
                'Boas práticas de UI/UX',
            ],
        },
    ];

    const stackColorMap = {
        blue: 'bg-blue-600/10 text-blue-700 border-blue-600/20',
        green: 'bg-green-600/10 text-green-700 border-green-600/20',
        orange: 'bg-orange-500/10 text-orange-700 border-orange-500/20',
        purple: 'bg-purple-600/10 text-purple-700 border-purple-600/20',
    };

    return (
        <section id="work" className="w-full px-4 sm:px-[8%] lg:px-[12%] py-20 scroll-mt-20 bg-white">
            <div className="max-w-6xl mx-auto">
                <h4 className="text-center text-sm font-semibold uppercase tracking-widest text-blue-700 dark:text-blue-400 font-Outfit">
                    O que já construí
                </h4>
                <h2 className="text-center text-2xl sm:text-4xl lg:text-5xl font-Ovo font-bold text-slate-800 dark:text-white mt-2">
                    Projetos Relevantes
                </h2>
                <div className="section-line" />
                <p className="text-center max-w-xl mx-auto mt-8 mb-16 text-slate-600 dark:text-slate-600 font-medium leading-relaxed font-Outfit">
                    Projetos que desenvolvi com foco em arquitetura, boas práticas e resolução de problemas reais.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <a
                            key={project.name}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-blue-600/10 transition-all duration-500 hover:-translate-y-1"
                        >
                            {/* Imagem do projeto */}
                            <div className="relative h-48 overflow-hidden bg-slate-100">
                                <div
                                    className="absolute inset-0 bg-no-repeat bg-cover bg-center group-hover:scale-105 transition duration-500"
                                    style={{ backgroundImage: `url(${project.icon})` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:bg-blue-600 transition duration-300">
                                    <img src="./assets/send-icon.png" alt="Abrir" className="w-4 invert" />
                                </div>
                                <div className="absolute bottom-4 left-4">
                                    <span className="text-xs text-white/70 font-JetBrains-Mono">{project.date}</span>
                                </div>
                            </div>

                            {/* Conteúdo */}
                            <div className="flex flex-col flex-1 p-6 gap-4">
                                <div>
                                    <p className="text-xs font-semibold text-blue-600 font-Outfit uppercase tracking-wider mb-1">{project.subtitle}</p>
                                    <h3 className="text-xl font-bold text-slate-800 dark:text-white font-Space-Grotesk group-hover:text-blue-700 transition duration-300">
                                        {project.name}
                                    </h3>
                                </div>

                                <p className="text-sm text-slate-600 font-Outfit leading-relaxed flex-1">
                                    {project.description}
                                </p>

                                {/* Destaques */}
                                <ul className="space-y-1.5">
                                    {project.highlights.map((h) => (
                                        <li key={h} className="flex items-center gap-2 text-xs text-slate-600 font-Outfit">
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                                            {h}
                                        </li>
                                    ))}
                                </ul>

                                {/* Stack badges */}
                                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                                    {project.stack.map((tech) => (
                                        <span
                                            key={tech}
                                            className={`px-2.5 py-1 rounded-full text-xs font-semibold font-JetBrains-Mono border ${stackColorMap[project.stackColor]}`}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                <a
                    href="https://github.com/Aylan-Moura"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-max flex items-center justify-center gap-2 text-slate-700 border-2 border-slate-300 hover:border-blue-600/50 hover:bg-blue-600/5 rounded-full py-3 px-8 mx-auto mt-14 font-medium transition duration-300 font-Outfit"
                >
                    Ver todos os projetos no GitHub
                    <img src="./assets/right-arrow-bold.png" alt="" className="w-4" />
                </a>
            </div>
        </section>
    )
}
