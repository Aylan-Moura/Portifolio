export default function Services() {

    const services = [
        {
            name: 'Desenvolvimento Back-end',
            icon: './assets/back-end.png',
            description: 'Desenvolvo soluções back-end para sistemas, APIs e integrações entre plataformas. Estruturo regras de negócio, gerencio dados e conecto serviços externos garantindo aplicações estáveis e seguras.',
        },
        {
            name: 'Desenvolvimento Web',
            icon: './assets/micro.png',
            description: 'Criação de sites e aplicações web responsivas com foco em organização de informação, integração com APIs e boa experiência de uso em diferentes dispositivos.',
        },
        {
            name: 'Integração e Automação',
            icon: './assets/bd.png',
            description: 'Automação e integração de sistemas para conectar APIs, otimizar fluxos de dados e eliminar tarefas manuais aumentando eficiência operacional.',
        },
        {
            name: 'Manutenção e Segurança',
            icon: './assets/empresa.png',
            description: 'Manutenção técnica, correção de falhas e aplicação de boas práticas de segurança para manter sistemas estáveis, atualizados e protegidos.',
        },
    ];

    return (

        <section id="services" className="w-full px-4 sm:px-[8%] lg:px-[12%] py-20 scroll-mt-20">

            <div className="max-w-5xl mx-auto">

                <h2 className="text-center text-3xl lg:text-5xl font-bold text-slate-800 dark:text-white">
                    Meus serviços
                </h2>

                <p className="text-center max-w-xl mx-auto mt-6 mb-14 text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                    Construir sistemas confiáveis, escaláveis e bem arquitetados para levar projetos a outro nível.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-center">

                    {services.map((service) => (

                        <div
                            key={service.name}
                            className="max-w-md mx-auto border border-white/60 rounded-[2rem] p-8 bg-white shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-blue-600/5 transition duration-500"
                        >

                            <div className="w-14 h-14 rounded-2xl bg-blue-600/[0.08] flex items-center justify-center mb-6 backdrop-blur-sm border border-blue-600/5">
                                <img src={service.icon} className="w-7" />
                            </div>

                            <h3 className="text-lg font-bold mb-3 text-slate-800 dark:text-white">
                                {service.name}
                            </h3>

                            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                                {service.description}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    )
}
