export default function Compliance() {
    return (
        <section className="py-[clamp(4rem,10vh,12rem)] bg-deep-charcoal relative border-y border-legal-gold/10" id="compliance">
            <div className="absolute inset-0 opacity-[0.02] ancient-texture pointer-events-none"></div>
            <div className="container mx-auto px-4 md:px-12 relative z-10">
                <div className="flex flex-wrap lg:flex-nowrap gap-[8vw] items-center">
                    <div>
                        <span className="text-legal-gold font-bold uppercase tracking-[0.5em] text-[2.5vw] md:text-[0.7vw] block mb-[4vw] md:mb-6">Prevención de Riesgos</span>
                        <h2 className="text-[8vw] md:text-[3.5vw] mb-[5vw] leading-tight font-bold">Compliance & <br /><span className="italic text-white/80">Gestión de Riesgos</span></h2>
                        <p className="text-white/60 font-light leading-relaxed mb-[6vw] max-w-xl text-[4vw] md:text-[1.1vw]">
                            Anticipamos y neutralizamos riesgos corporativos. Diseñamos estructuras de cumplimiento normativo (Compliance) que actúan como un escudo ante el aparato sancionatorio del Estado.
                        </p>
                        <div className="space-y-[4vw] md:space-y-6">
                            <div className="flex gap-[3vw] md:gap-6 items-start">
                                <span className="material-symbols-outlined text-legal-gold text-[5vw] md:text-[1.5vw]">verified_user</span>
                                <div>
                                    <h4 className="text-white uppercase tracking-widest text-[3.5vw] md:text-[0.9vw] mb-2">Auditoría Preventiva</h4>
                                    <p className="text-white/40 text-[3vw] md:text-[0.8vw] leading-relaxed">Blindaje en procesos de contratación y gestión de recursos públicos.</p>
                                </div>
                            </div>
                            <div className="flex gap-[3vw] md:gap-6 items-start">
                                <span className="material-symbols-outlined text-legal-gold text-[5vw] md:text-[1.5vw]">gavel</span>
                                <div>
                                    <h4 className="text-white uppercase tracking-widest text-[3.5vw] md:text-[0.9vw] mb-2">Defensa Administrativa</h4>
                                    <p className="text-white/40 text-[3vw] md:text-[0.8vw] leading-relaxed">Litigio especializado ante superintendencias y organismos reguladores.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-full lg:w-auto mt-[8vw] lg:mt-0">
                        <div className="absolute -inset-[2vw] gold-foil-gradient opacity-10 blur-2xl"></div>
                        <div className="relative gold-border-subtle p-[6vw] bg-matte-black aspect-video flex flex-col justify-center">
                            <h3 className="text-[6vw] md:text-[2vw] mb-[4vw] gold-text-gradient font-bold">Entes de Control</h3>
                            <div className="grid grid-cols-2 gap-[4vw]">
                                <div className="border-l border-legal-gold/30 pl-[3vw]">
                                    <span className="text-[2.5vw] md:text-[0.8vw] uppercase tracking-widest text-legal-gold block mb-[1vw] font-bold">Disciplinario</span>
                                    <p className="text-white/50 text-[2.5vw] md:text-[0.8vw]">Defensa ante la PGN y personerías.</p>
                                </div>
                                <div className="border-l border-legal-gold/30 pl-[3vw]">
                                    <span className="text-[2.5vw] md:text-[0.8vw] uppercase tracking-widest text-legal-gold block mb-[1vw] font-bold">Fiscal</span>
                                    <p className="text-white/50 text-[2.5vw] md:text-[0.8vw]">Gestión ante CGR y procesos coactivos.</p>
                                </div>
                                <div className="border-l border-legal-gold/30 pl-[3vw]">
                                    <span className="text-[2.5vw] md:text-[0.8vw] uppercase tracking-widest text-legal-gold block mb-[1vw] font-bold">Penal</span>
                                    <p className="text-white/50 text-[2.5vw] md:text-[0.8vw]">Asistencia inmediata ante la FGN.</p>
                                </div>
                                <div className="border-l border-legal-gold/30 pl-[3vw]">
                                    <span className="text-[2.5vw] md:text-[0.8vw] uppercase tracking-widest text-legal-gold block mb-[1vw] font-bold">Policial</span>
                                    <p className="text-white/50 text-[2.5vw] md:text-[0.8vw]">Justicia administrativa y policiva.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
