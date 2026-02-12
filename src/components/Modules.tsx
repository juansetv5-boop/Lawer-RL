interface ModulesProps {
    items: string[];
}

export default function Modules({ items }: ModulesProps) {
    if (!items) return null;

    return (
        <section className="py-24 px-4 bg-neutral-950 border-y border-white/5">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-serif text-slate-200 mb-20 text-center">
                    Estrategia de Defensa
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {items.map((module, idx) => {
                        const icons = [
                            <i key="0" className="bi bi-search"></i>,
                            <i key="1" className="bi bi-file-earmark-text"></i>,
                            <i key="2" className="bi bi-shield-check"></i>,
                            <i key="3" className="bi bi-person-badge"></i>
                        ];
                        return (
                            <div key={idx} className="relative group">
                                <div className="text-5xl text-slate-800 group-hover:text-[var(--gold)] transition-colors duration-500 mb-6 font-bold">
                                    {icons[idx % icons.length]}
                                </div>
                                <h3 className="text-lg font-medium text-slate-300 group-hover:text-white transition-colors">
                                    {module}
                                </h3>
                                <div className="mt-4 h-px w-full bg-slate-800 group-hover:bg-[var(--gold)]/50 transition-colors" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
