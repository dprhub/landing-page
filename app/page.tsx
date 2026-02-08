import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen bg-black text-white selection:bg-zinc-800 font-sans overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-zinc-900/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-zinc-900/30 rounded-full blur-[120px]" />
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-6 py-6 md:px-12">
        <div className="flex items-center gap-2">
          {/* Minimalist text logo */}
          <span className="text-lg font-bold tracking-tight text-white/90">DPR Hub</span>
        </div>
        <nav>
          {/* Optional minimal nav or contact button */}
          <a
            // href="mailto:contact@dprhub.com"
            className="text-sm font-medium text-zinc-400/50 hover:text-white transition-colors duration-200"
          >
            Contacto
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center flex-1 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center justify-center px-3 py-1 mb-4 text-xs font-medium text-zinc-400 border rounded-full border-zinc-800 bg-zinc-900/50 backdrop-blur-sm animate-fade-in-delay-1">
            <span className="w-2 h-2 mr-2 bg-green-500 rounded-full animate-pulse" />
            Sistemas Inteligentes
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] text-transparent bg-clip-text bg-linear-to-b from-white to-zinc-500 animate-fade-in-delay-2">
            Redefiniendo los estándares de la eficiencia empresarial.
          </h1>

          {/* Subheadline/Description */}
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 font-light leading-relaxed animate-fade-in-delay-3">
            Optimización operativa impulsada por IA y arquitectura Cloud-native para profesionales que exigen excelencia.
          </p>

          {/* CTA Buttons */}
          {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 animate-fade-in-delay-4">
            <button className="px-8 py-3 text-sm font-medium text-black bg-white rounded-full hover:bg-zinc-200 transition-all duration-300 hover:scale-105 active:scale-95">
              Comenzar ahora
            </button>
            <button className="px-8 py-3 text-sm font-medium text-zinc-300 border border-zinc-800 rounded-full hover:border-zinc-700 hover:bg-zinc-900/50 transition-all duration-300 hover:text-white">
              Ver soluciones
            </button>
          </div> */}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 text-center border-t border-white/5">
        <p className="text-xs text-zinc-600 font-mono tracking-widest uppercase">
          © 2026 DPR Hub · Innovación Cloud-Native
        </p>
      </footer>
    </div>
  );
}

