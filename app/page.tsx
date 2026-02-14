export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DPR",
    "alternateName": ["DPR", "dpr"],
    "url": "https://www.dpr.com.py",
    "logo": "https://www.dpr.com.py/logo.png",
    "description": "DPR - Redefiniendo los estándares de la eficiencia empresarial. Optimización operativa impulsada por IA y arquitectura Cloud-native.",
    "slogan": "Redefiniendo los estándares de la eficiencia empresarial",
    "foundingDate": "2026",
    "sameAs": [
      "https://www.linkedin.com/company/dpr_py"
    ]
  };

  return (
    <div className="flex flex-col items-center justify-center flex-1 text-center min-h-[calc(100vh-200px)]">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="max-w-4xl mx-auto space-y-8 animate-fade-in py-20">
        {/* Badge */}
        <div className="inline-flex items-center justify-center px-3 py-1 mb-4 text-xs font-medium text-zinc-400 border rounded-full border-zinc-800 bg-zinc-900/50 backdrop-blur-sm animate-fade-in-delay-1">
          <span className="w-2 h-2 mr-2 bg-green-500 rounded-full animate-pulse" />
          DPR · Sistemas Inteligentes
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] text-transparent bg-clip-text bg-linear-to-b from-white to-zinc-500 animate-fade-in-delay-2">
          Redefiniendo los estándares de la eficiencia empresarial.
        </h1>

        {/* Subheadline/Description */}
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 font-light leading-relaxed animate-fade-in-delay-3">
          Optimización operativa impulsada por IA y arquitectura Cloud-native para profesionales que exigen excelencia.
        </p>
      </div>
    </div>
  );
}
