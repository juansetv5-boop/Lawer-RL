"use client";

import { useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header className="fixed top-0 z-50 w-full bg-matte-black/90 backdrop-blur-xl border-b border-legal-gold/10">
            <div className="container mx-auto px-[clamp(1rem,5vw,3rem)] h-24 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="flex flex-col leading-none">
                        <span className="font-serif text-[clamp(1rem,1.5vw,1.5rem)] font-bold text-white tracking-[0.2em] uppercase">Representación Legal</span>
                        <span className="text-[10px] font-medium text-legal-gold tracking-[0.6em] uppercase mt-2">Popayán • Eternal Justice</span>
                    </div>
                </div>

                <nav className="hidden lg:flex items-center gap-14 font-medium text-[10px] uppercase tracking-[0.3em] text-white/60">
                    <a className="hover:text-legal-gold transition-colors" href="#defensa">Fundamentos</a>
                    <a className="hover:text-legal-gold transition-colors" href="#compliance">Cumplimiento</a>
                    <a className="hover:text-legal-gold transition-colors" href="#estrategia">Táctica</a>
                    <a className="hover:text-legal-gold transition-colors" href="#contacto">Contacto</a>
                </nav>
                <div className="flex items-center gap-6">
                    <a
                        className="hidden md:inline-block gold-foil-gradient text-black px-8 py-3 text-[10px] font-bold uppercase tracking-[0.25em] transition-transform active:scale-95 shadow-lg shadow-legal-gold/10"
                        href="https://wa.me/573127930898?text=Hola,%20me%20gustar%C3%ADa%20solicitar%20una%20evaluaci%C3%B3n%20t%C3%A9cnica"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Evaluación Técnica
                    </a>
                    {/* Logo Removed from here - moved to fixed bottom left */}
                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden text-legal-gold relative z-50 p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className="material-symbols-outlined text-3xl">
                            {isMenuOpen ? 'close' : 'menu'}
                        </span>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Overlay */}
            {
                isMenuOpen && (
                    <div className="lg:hidden fixed inset-0 bg-matte-black/98 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-10 animate-in fade-in duration-300">
                        <nav className="flex flex-col items-center gap-8 text-xl font-bold uppercase tracking-[0.2em]">
                            <a className="hover:text-legal-gold transition-colors" href="#defensa" onClick={() => setIsMenuOpen(false)}>Defensa</a>
                            <a className="hover:text-legal-gold transition-colors" href="#compliance" onClick={() => setIsMenuOpen(false)}>Compliance</a>
                            <a className="hover:text-legal-gold transition-colors" href="#estrategia" onClick={() => setIsMenuOpen(false)}>Táctica</a>
                            <a className="hover:text-legal-gold transition-colors" href="#contacto" onClick={() => setIsMenuOpen(false)}>Contacto</a>
                        </nav>
                        <a
                            className="gold-foil-gradient text-black px-10 py-4 text-sm font-bold uppercase tracking-[0.25em] shadow-lg shadow-legal-gold/10"
                            href="https://wa.me/573127930898?text=Hola,%20me%20gustar%C3%ADa%20solicitar%20una%20evaluaci%C3%B3n%20t%C3%A9cnica"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Evaluación Técnica
                        </a>
                    </div>
                )
            }
        </header >
    );
}
