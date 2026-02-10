import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contacto | DPRHub',
    description: 'Ponte en contacto con el equipo de DPRHub para discutir tus necesidades de software empresarial.',
};

export default function ContactPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] animate-fade-in py-20 px-4">
            <div className="max-w-2xl mx-auto w-full space-y-12">
                <header className="text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
                        Contacto
                    </h1>
                    <p className="text-xl text-zinc-400 font-light leading-relaxed max-w-xl mx-auto">
                        Estamos listos para escuchar sobre tu próximo gran desafío.
                    </p>
                </header>

                <div className="flex flex-col md:flex-row gap-8 mt-12">
                    {/* Contact Methods */}
                    <div className="flex-1 space-y-6">
                        <a
                            href="mailto:contact@dprhub.com"
                            className="block group p-6 border border-zinc-800 rounded-2xl bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-zinc-600 transition-all duration-300"
                        >
                            <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">Email</h3>
                            <p className="text-zinc-400">contact@dprhub.com</p>
                        </a>

                        <a
                            href="https://twitter.com/dprhub"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block group p-6 border border-zinc-800 rounded-2xl bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-zinc-600 transition-all duration-300"
                        >
                            <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">X (Twitter)</h3>
                            <p className="text-zinc-400">@dprhub</p>
                        </a>
                    </div>
                </div>

                <div className="text-center pt-8">
                    <p className="text-zinc-500 text-sm">
                        Responderemos a tu solicitud en menos de 24 horas hábiles.
                    </p>
                </div>
            </div>
        </div>
    );
}
