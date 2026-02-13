import Image from "next/image";

interface StrategyProps {
    items: string[];
}

export default function Strategy({ items }: StrategyProps) {
    if (!items) return null;

    return (
        <section className="py-[clamp(4rem,10vh,12rem)] bg-matte-black relative overflow-hidden" id="estrategia">
            <div className="absolute right-0 top-0 h-full w-1/2 opacity-[0.08] pointer-events-none grayscale contrast-125">
                <Image
                    alt="Dramatic close-up of marble Themis statue focusing on blindfold and sword"
                    fill
                    className="object-cover object-center"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC09EHaLe2FWtxMtvPSTsZ2x6XqlhbcWbXdPCwdqz9RAE2nSplx0sFX5eQPCMngB99Ql9fwM4MCHS2MmAgRd2bhReqgkRZHZUauvystMCV9ISjKmN8VqeXk46VMaI6ACBtlXd72KYytZ5J28Q7RG86NjH1OdfNYTYDi_A80Ot_uMkrAJWagxIGvXUVZ0VX3PGrHaS5LBjHiclHSjv2txREUiP49IQzOnIzeAC_CHboEidunzACRqPh-ebalhymhu9SPKM1HEDq5WDA"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-legal-gold/5 via-transparent to-transparent"></div>
            </div>
            <div className="container mx-auto px-4 md:px-12 relative z-10">
                <div className="flex flex-wrap gap-[8vw]">
                    <div className="w-full lg:w-1/3 sticky top-40 h-fit">
                        <span className="text-legal-gold font-bold uppercase tracking-[0.5em] text-[2.5vw] md:text-[0.7vw] block mb-[4vw] md:mb-6">Inteligencia Jurídica</span>
                        <h2 className="text-[8vw] md:text-[3.5vw] mb-[5vw] leading-tight">Estrategia <br /><span className="italic text-white/80">Táctica</span></h2>
                        <p className="text-white/40 font-light leading-relaxed mb-[6vw] text-[4vw] md:text-[1.1vw]">
                            Un despliegue de defensa técnica por fases diseñado para desarticular la acusación desde sus cimientos procesales.
                        </p>
                        <div className="h-px w-full bg-legal-gold/20"></div>
                    </div>
                    <div className="flex-1 min-w-[min(100%,600px)]">
                        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,250px),1fr))] gap-x-8 gap-y-12">
                            {items.map((item, idx) => (
                                <div key={idx} className="group">
                                    <div className="gold-text-gradient font-serif text-[10vw] md:text-[3vw] mb-[2vw] font-bold opacity-30 group-hover:opacity-100 transition-opacity flex items-center gap-4">
                                        <span>0{idx + 1}</span>
                                        <div className="tactical-line w-full"></div>
                                    </div>
                                    <h4 className="text-[4vw] md:text-[1.25vw] mb-[1.5vw] text-white uppercase tracking-widest">{item}</h4>
                                    <p className="text-white/30 text-[3.5vw] md:text-[1vw] leading-relaxed font-light">
                                        {/* Placeholder description */}
                                        Fase estretégica {idx + 1} de la defensa.
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
