"use client";

import { useEffect, useRef } from "react";

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.5 + 0.5,
      });
    }

    function animate() {
      if (!ctx || !canvas) return;

      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
        ctx.fill();

        // Draw connections
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.15 * (1 - distance / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden font-[family-name:var(--font-orbitron)]">
      {/* Animated background canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ opacity: 0.4 }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-black to-zinc-900 z-0" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        {/* Logo/Brand */}
        <div className="mb-16 animate-fade-in">
          <div className="relative inline-block">
            <h1 className="text-8xl md:text-[12rem] font-black tracking-[-0.05em] text-white mb-0 leading-none uppercase">
              DPR
            </h1>
            <div className="absolute -bottom-4 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-60" />
            <div className="absolute -bottom-5 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          </div>
          <div className="text-3xl md:text-5xl font-black tracking-[0.5em] text-zinc-400 mt-6 uppercase">
            HUB
          </div>
        </div>

        {/* Tagline */}
        <p className="max-w-3xl text-xl md:text-3xl font-[family-name:var(--font-rajdhani)] font-medium text-zinc-100 mb-10 leading-relaxed animate-fade-in-delay-1 tracking-wide uppercase">
          Sistemas de gestión inteligentes
          <br />
          para profesionales modernos
        </p>

        {/* Description */}
        <p className="max-w-2xl font-[family-name:var(--font-rajdhani)] font-normal text-lg md:text-xl text-zinc-300 mb-16 leading-relaxed animate-fade-in-delay-2">
          Desarrollamos soluciones tecnológicas especializadas para diferentes
          rubros profesionales
        </p>

        {/* Status badge */}
        <div className="animate-fade-in-delay-3">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full border border-zinc-800 bg-zinc-950/50 backdrop-blur-sm">
            <div className="relative">
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
              <div className="absolute inset-0 w-3 h-3 bg-emerald-500 rounded-full animate-ping opacity-75" />
            </div>
            <span className="text-base font-bold tracking-[0.2em] text-zinc-300 uppercase">
              En Desarrollo
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-8 left-0 right-0 text-center animate-fade-in-delay-4">
          <p className="text-sm md:text-md font-[family-name:var(--font-rajdhani)] text-zinc-500 tracking-[0.3em] uppercase font-medium">
            © 2026 DPR Hub · Innovación en desarrollo
          </p>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-zinc-800 rounded-full blur-3xl opacity-10 animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-zinc-700 rounded-full blur-3xl opacity-10 animate-float-delayed" />
      </div>
    </div>
  );
}

