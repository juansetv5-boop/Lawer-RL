export default function PracticeAreas() {
    return (
        <section className="py-[clamp(4rem,10vh,12rem)] bg-matte-black" id="servicios">
            <div className="container mx-auto px-4 md:px-12">
                <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,450px),1fr))] gap-1">
                    <div className="p-[clamp(1.5rem,5vw,4rem)] gold-border-subtle bg-deep-charcoal flex flex-col justify-center relative overflow-hidden">
                        <div className="absolute inset-0 opacity-[0.04] ancient-texture pointer-events-none"></div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-[3vw] mb-[6vw]">
                                <span className="material-symbols-outlined text-legal-gold text-[10vw] md:text-[3vw] font-extralight">shield</span>
                                <h3 className="text-[6vw] md:text-[2vw] font-bold uppercase tracking-wider">Defensa de Alto Riesgo</h3>
                            </div>
                            <p className="text-[4vw] md:text-[1.25vw] mb-[6vw] text-white/50 font-light leading-relaxed">
                                Intervención técnica en procesos de alta complejidad donde la libertad y el patrimonio están en juego.
                            </p>
                            <ul className="space-y-8 mb-16">
                                <li className="flex items-center gap-5 text-[13px] text-white/60 uppercase tracking-widest">
                                    <span className="w-1.5 h-1.5 gold-foil-gradient"></span>
                                    Derecho Penal Económico
                                </li>
                                <li className="flex items-center gap-5 text-[13px] text-white/60 uppercase tracking-widest">
                                    <span className="w-1.5 h-1.5 gold-foil-gradient"></span>
                                    Delitos contra la Administración
                                </li>
                                <li className="flex items-center gap-5 text-[13px] text-white/60 uppercase tracking-widest">
                                    <span className="w-1.5 h-1.5 gold-foil-gradient"></span>
                                    Casación Penal & Revisión
                                </li>
                            </ul>
                            <a
                                className="inline-block text-center border border-legal-gold/40 text-legal-gold px-12 py-5 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-legal-gold hover:text-black transition-all"
                                href="https://wa.me/573127930898?text=Hola,%20quisiera%20consultar%20sobre%20su%20perfil%20t%C3%A9cnico"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Consultar Perfil Técnico
                            </a>
                        </div>
                    </div>

                    <div className="p-[clamp(1.5rem,5vw,4rem)] gold-foil-gradient text-matte-black flex flex-col justify-center shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
                        <span className="text-[10px] font-black text-black/40 tracking-[0.6em] mb-6 uppercase">Intervención Inmediata</span>
                        <h3 className="text-[clamp(2.5rem,4vw,4rem)] font-bold mb-12 leading-none">Blindaje de Libertad</h3>
                        <div className="space-y-10 mb-16">
                            <div className="flex items-start gap-6">
                                <span className="material-symbols-outlined text-black text-3xl">emergency_home</span>
                                <p className="text-sm font-bold uppercase tracking-wider leading-relaxed">Defensa técnica inmediata en capturas y legalización de garantías.</p>
                            </div>
                            <div className="flex items-start gap-6">
                                <span className="material-symbols-outlined text-black text-3xl">security</span>
                                <p className="text-sm font-bold uppercase tracking-wider leading-relaxed">Investigación defensiva con soporte pericial especializado.</p>
                            </div>
                        </div>
                        <a
                            href="https://wa.me/573127930898?text=Hola,%20necesito%20una%20evaluaci%C3%B3n%20urgente%20de%20mi%20caso"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-matte-black text-legal-gold py-6 font-bold text-xs uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all shadow-2xl relative z-10 text-center block"
                        >
                            Solicitar Evaluación de Caso
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
