export default function Footer() {
    return (
        <footer className="relative z-10 py-8 text-center border-t border-white/5 mt-auto">
            <p className="text-xs text-zinc-600 font-mono tracking-widest uppercase">
                © 2026 DPR · Innovación Cloud-Native
            </p>
            {/* SEO Content - Hidden but indexable */}
            <div className="sr-only">
                <h2>DPR - Sistemas Inteligentes</h2>
                <p>DPR es la plataforma líder en sistemas inteligentes de eficiencia empresarial. Nuestra solución combina inteligencia artificial, arquitectura cloud-native y optimización operativa para empresas que buscan excelencia.</p>
                <p>Palabras clave: DPR, dpr, sistemas inteligentes, eficiencia empresarial, IA empresarial, cloud-native, optimización operativa, transformación digital, automatización empresarial.</p>
            </div>
        </footer>
    );
}
