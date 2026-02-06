export default function About() {
    const tools = [
        { name: 'Java', icon: './assets/java.png', },
        { name: 'Spring', icon: './assets/spring.png', },
        { name: 'React', icon: './assets/react.png', },
        { name: 'javascript', icon: './assets/javaS.png', },
        { name: 'sql', icon: './assets/sql.png', },
        { name: 'postgreSQL', icon: './assets/postgre.png', },
        { name: 'git', icon: './assets/git.png', },
        { name: 'docker', icon: './assets/docker.png', },
        { name: 'kubernetes', icon: './assets/kubernetes.png', },
        { name: 'aws', icon: './assets/aws.png', },
    ];

    const data = [
        {
            name: 'Linguagens',
            icon1: './assets/code-icon.png',
            icon2: './assets/code-icon-dark.png',
            description: 'Java, Spring Framework, SQL, PostgreSQL, JavaScript, React, Tailwind.',
        },
        {
            name: 'Formação',
            icon1: './assets/edu-icon.png',
            icon2: './assets/edu-icon-dark.png',
            description: 'Análise e desenvolvimento de sistemas.',
        },
        {
            name: 'Projetos',
            icon1: './assets/project-icon.png',
            icon2: './assets/project-icon-dark.png',
            description: 'Mais de 5 projetos construidos.',
        },
    ];

    return (
        <div id="about" className="w-full px-4 sm:px-[8%] lg:px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-sm sm:text-base lg:text-lg font-Ovo">Introdução</h4>
            <h2 className="text-center text-xl sm:text-3xl lg:text-5xl font-Ovo">Sobre mim</h2>

            <div className="flex w-full flex-col lg:flex-row items-center gap-10 lg:gap-20 my-10 lg:my-20">
                <div className="max-w-max mx-auto relative">
                    <img src='./assets/user-image.png' alt="" className="w-48 sm:w-64 lg:w-80 rounded-3xl max-w-none" />
                </div>
                <div className="flex flex-col min-w-0 w-full">
                    <p className="mb-6 text-justify text-sm sm:text-base lg:text-lg leading-relaxed font-Ovo">
                        Sou um profissional em formação com foco em desenvolvimento back-end, direcionando meus estudos e projetos para a construção de sistemas bem estruturados, escaláveis e baseados em boas práticas de engenharia de software. Desenvolvo projetos em Java aplicando lógica de programação, POO, arquitetura em camadas e código limpo, com objetivo de transformar conhecimento técnico em capacidade real de entrega.
                    </p>

                    <p className="mb-6 text-justify text-sm sm:text-base lg:text-lg leading-relaxed font-Ovo">
                        Possuo base introdutória em JavaScript, HTML, CSS, React e Tailwind, que complementa minha visão de integração entre camadas, embora minha especialização esteja voltada ao ecossistema Java. Tenho perfil disciplinado, orientado a aprendizado contínuo e flexibilidade para aprender novas linguagens e stacks conforme a necessidade do projeto. Busco oportunidade como estagiário, trainee ou desenvolvedor júnior para evoluir e contribuir em projetos reais.
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 max-w-2xl">
                        {data.map((data) => (
                            <li key={data.name} className="border border-gray-300 dark:border-white/30 rounded-xl p-4 lg:p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:shadow-white/80 dark:hover:bg-darkHover/50">
                                <img src={data.icon1} alt="" className="w-7 mt-3 dark:hidden" />
                                <img src={data.icon2} alt="" className="w-7 mt-3 hidden dark:block" />
                                <h3 className="my-4 font-semibold text-sm sm:text-base text-gray-700 dark:text-white">{data.name}</h3>
                                <p className="text-gray-600 text-xs sm:text-sm dark:text-white/80">{data.description}</p>
                            </li>
                        ))}
                    </ul>

                    <h4 className="my-6 text-sm sm:text-base text-gray-700 font-Ovo dark:text-white/80">Ferramentas que eu uso.</h4>

                    <ul className="flex items-center gap-3 sm:gap-5 flex-wrap">
                        {tools.map((tool) => (
                            <li key={tool.name} className="flex items-center justify-center w-10 sm:w-12 lg:w-14 aspect-square border border-gray-300 dark:border-white/30 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                                <img src={tool.icon} alt={tool.name} className="w-6 sm:w-8 lg:w-10 object-contain" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}