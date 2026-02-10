import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Acerca de nosotros | DPRHub',
    description: 'Conoce más sobre DPRHub, nuestra misión de redefinir la eficiencia empresarial a través de sistemas inteligentes y arquitectura cloud-native.',
};

export default function AboutPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] animate-fade-in py-20">
            <div className="max-w-3xl mx-auto space-y-12">
                <header className="text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
                        Acerca de nosotros
                    </h1>
                    <p className="text-xl text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto">
                        Innovación tecnológica al servicio de la eficiencia operativa.
                    </p>
                </header>

                <div className="prose prose-invert prose-lg text-zinc-300 leading-relaxed space-y-6">
                    <p>
                        En <strong>DPRHub</strong>, nos dedicamos a transformar la manera en que las empresas operan.
                        Nuestra filosofía se basa en la integración de <span className="text-white font-medium">inteligencia artificial</span> y
                        <span className="text-white font-medium"> arquitectura cloud-native</span> para crear sistemas que no solo gestionan datos,
                        sino que impulsan decisiones inteligentes.
                    </p>
                    <p>
                        Nacimos con la visión de que la tecnología debe ser invisible pero omnipotente: debe funcionar sin fricciones,
                        escalar infinitamente y adaptarse a las necesidades cambiantes de los profesionales modernos.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
                        <div className="p-6 border border-zinc-800 rounded-2xl bg-zinc-900/30 backdrop-blur-sm">
                            <h3 className="text-lg font-bold text-white mb-2">Misión</h3>
                            <p className="text-sm text-zinc-400">
                                Democratizar el acceso a herramientas de gestión de clase mundial, permitiendo a profesionales y PYMEs competir al más alto nivel.
                            </p>
                        </div>
                        <div className="p-6 border border-zinc-800 rounded-2xl bg-zinc-900/30 backdrop-blur-sm">
                            <h3 className="text-lg font-bold text-white mb-2">Visión</h3>
                            <p className="text-sm text-zinc-400">
                                Ser el estándar de referencia en sistemas de gestión inteligente, donde la automatización y la simplicidad convergen.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
