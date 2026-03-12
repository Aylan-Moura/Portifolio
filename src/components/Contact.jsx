import { useEffect, useState } from 'react'

export default function Contact() {
    const [result, setResult] = useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        const hCaptcha = event.target.querySelector('textarea[name=h-captcha-response]')?.value;
        if (!hCaptcha) {
            event.preventDefault();
            setResult("Por favor, preencha o campo do captcha.");
            return
        }
        setResult("Enviando....");
        const formData = new FormData(event.target);
        formData.append("access_key", "19adb775-ae9a-4409-aa5f-d29cb73ec934");

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        }).then((res) => res.json());

        if (res.success) {
            setResult(res.message);
            event.target.reset();
        } else {
            setResult(res.message);
        }
    };

    function CaptchaLoader() {
        const captchadiv = document.querySelectorAll('[data-captcha="true"]');
        if (captchadiv.length) {
            let lang = null;
            let onload = null;
            let render = null;
            captchadiv.forEach(function (item) {
                const sitekey = item.dataset.sitekey;
                lang = item.dataset.lang;
                onload = item.dataset.onload;
                render = item.dataset.render;
                if (!sitekey) {
                    item.dataset.sitekey = "50b2fe65-b00b-4b9e-ad62-3ba471098be2";
                }
            });
            let scriptSrc = "https://js.hcaptcha.com/1/api.js?recaptchacompat=off";
            if (lang) scriptSrc += `&hl=${lang}`;
            if (onload) scriptSrc += `&onload=${onload}`;
            if (render) scriptSrc += `&render=${render}`;
            var script = document.createElement("script");
            script.type = "text/javascript";
            script.async = true;
            script.defer = true;
            script.src = scriptSrc;
            document.body.appendChild(script);
        }
    }

    useEffect(() => {
        CaptchaLoader();
    }, []);

    return (
        <section id="contact" className="w-full px-4 sm:px-[8%] lg:px-[12%] py-20 scroll-mt-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none" />
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-2xl mx-auto relative z-10">
                <h4 className="text-center text-sm font-semibold uppercase tracking-widest text-blue-700 dark:text-blue-400 font-Outfit">
                    
                </h4>
                <h2 className="text-center text-2xl sm:text-4xl lg:text-5xl font-Ovo font-bold text-slate-800 dark:text-white mt-2">
                    Vamos conversar?
                </h2>
                <div className="section-line" />
                <p className="text-center mt-8 mb-16 text-slate-700 dark:text-slate-300 font-medium font-Outfit leading-relaxed">
                    Estou disponível para oportunidades como Desenvolvedor Back-End Júnior. Se você tem um projeto, uma vaga ou quer trocar uma ideia sobre tecnologia, fique à vontade para entrar em contato — responderei o mais breve possível.
                </p>

                <form onSubmit={onSubmit} className="space-y-6">
                    <input type="hidden" name="subject" value="Aylan - Novo formulário de submissão" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <input
                            type="text"
                            placeholder="Digite seu nome"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-blue-600/50 focus:border-blue-600 outline-none transition font-Outfit"
                            required
                            name="name"
                        />
                        <input
                            type="email"
                            placeholder="Digite seu E-mail"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-blue-600/50 focus:border-blue-600 outline-none transition font-Outfit"
                            required
                            name="email"
                        />
                    </div>
                    <textarea
                        rows="6"
                        placeholder="Digite sua mensagem"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-blue-600/50 focus:border-blue-600 outline-none transition resize-none font-Outfit"
                        required
                        name="message"
                    />
                    <div className="h-captcha max-w-full" data-captcha="true" />
                    <div className="flex flex-col items-center gap-4">
                        <button
                            type="submit"
                            className="py-3.5 px-10 rounded-full bg-gradient-to-r from-blue-700 to-indigo-600 text-white font-medium flex items-center gap-2 shadow-lg shadow-blue-700/25 hover:shadow-corporate transition duration-300"
                        >
                            Enviar agora
                            <img src="./assets/right-arrow-white.png" alt="" className="w-4" />
                        </button>
                        <p className="text-sm text-slate-600">{result}</p>
                    </div>
                </form>
            </div>
        </section>
    )
}
