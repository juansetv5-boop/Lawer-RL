interface ServicesProps {
    items: string[];
}

export default function Services({ items }: ServicesProps) {
    if (!items || items.length === 0) return null;

    return (
        <section className="py-[clamp(4rem,10vh,12rem)] bg-matte-black relative overflow-hidden" id="defensa">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none ancient-texture"></div>
            <div className="container mx-auto px-4 md:px-12 relative z-10">
                <div className="flex flex-col items-center text-center mb-32">
                    <span className="text-legal-gold text-[10px] font-bold uppercase tracking-[0.6em] mb-4">Especialidad de Élite</span>
                    <h2 className="text-[clamp(2.5rem,4vw,4rem)] mb-8 font-bold">Escenarios de Alto Riesgo</h2>
                    <div className="h-px w-32 gold-foil-gradient"></div>
                </div>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-8 justify-center">
                    {items.map((item, idx) => (
                        <div key={idx} className="relative group overflow-hidden gold-border-subtle bg-deep-charcoal aspect-[4/5] flex flex-col justify-end p-[clamp(1.5rem,3vw,3rem)]">
                            {/* Using placeholder images as original pains had no images. */}
                            <div className={`absolute inset-0 opacity-10 grayscale group-hover:opacity-20 transition-opacity duration-700 bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1605142859862-978be7eba909?auto=format&fit=crop&q=80')]`}></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-matte-black/60 to-transparent"></div>
                            <div className="relative z-10">
                                <span className="material-symbols-outlined text-legal-gold text-[12vw] md:text-[4vw] mb-[2vw]">warning</span>
                                <h3 className="text-[5vw] md:text-[1.5vw] mb-[1vw] gold-text-gradient font-bold leading-tight">{item}</h3>
                                <p className="text-white/40 leading-relaxed text-[3.5vw] md:text-[1vw] font-light">
                                    Impacto crítico en la libertad y el patrimonio.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
