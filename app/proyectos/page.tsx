import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Proyectos | DPRHub',
    description: 'Explora nuestros proyectos y soluciones de software inteligente desarrollados por DPRHub.',
};

const projects = [
    {
        title: "Sirius",
        category: "HealthTech",
        description: "Sistema integral de gestión clínica con visualización 3D interactiva para odontología avanzada. Incluye control de pacientes, agenda inteligente y facturación.",
        status: "En desarrollo"
    }
];

export default function ProjectsPage() {
    return (
        <div className="flex flex-col items-center min-h-[calc(100vh-200px)] animate-fade-in py-20 px-4">
            <div className="max-w-5xl mx-auto w-full space-y-12">
                <header className="text-center space-y-4 mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
                        Proyectos
                    </h1>
                    <p className="text-xl text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto">
                        Soluciones que definen el futuro del software empresarial.
                    </p>
                </header>

                <div className="flex flex-wrap justify-center gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group flex flex-col p-6 border border-zinc-800 rounded-2xl bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-zinc-700 transition-all duration-300 w-full max-w-md"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest border border-zinc-800 px-2 py-1 rounded-md">
                                    {project.category}
                                </span>
                                <span className="flex h-2 w-2 rounded-full bg-yellow-500/50"></span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-1">
                                {project.description}
                            </p>
                            <div className="pt-4 border-t border-zinc-800/50 flex items-center justify-between">
                                <span className="text-xs text-zinc-600 font-medium">Status</span>
                                <span className="text-xs text-zinc-300">{project.status}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
