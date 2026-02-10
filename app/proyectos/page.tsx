import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Proyectos | DPRHub',
    description: 'Explora nuestros proyectos y soluciones de software inteligente desarrollados por DPRHub.',
};

const projects = [
    {
        title: "Dental Chart 3D",
        category: "HealthTech",
        description: "Sistema de gestión clínica con visualización 3D interactiva para odontología avanzada.",
        status: "En producción"
    },
    {
        title: "Inventory AI Core",
        category: "Logística",
        description: "Motor de predicción de stock basado en inteligencia artificial para optimizar cadenas de suministro.",
        status: "Beta"
    },
    {
        title: "DPR Authentication",
        category: "Seguridad",
        description: "Sistema de identidad federada y control de acceso robusto para aplicaciones empresariales.",
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group flex flex-col p-6 border border-zinc-800 rounded-2xl bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-zinc-700 transition-all duration-300"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest border border-zinc-800 px-2 py-1 rounded-md">
                                    {project.category}
                                </span>
                                <span className="flex h-2 w-2 rounded-full bg-green-500/50"></span>
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
