interface PainsProps {
    items: string[];
}

export default function Pains({ items }: PainsProps) {
    if (!items || items.length === 0) return null;

    return (
        <section className="py-24 px-4 bg-black bg-[linear-gradient(to_bottom,#000000,#0a0a0a)]">
            <div className="max-w-6xl mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-serif text-slate-200">
                        Escenarios de Alto Riesgo
                    </h2>
                    <div className="w-24 h-0.5 bg-slate-800 mx-auto mt-6" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {items.map((pain, idx) => {
                        const icons = [
                            <i key="0" className="bi bi-exclamation-triangle"></i>,
                            <i key="1" className="bi bi-currency-dollar"></i>,
                            <i key="2" className="bi bi-slash-circle"></i>,
                            <i key="3" className="bi bi-eye-slash"></i>
                        ];
                        return (
                            <div
                                key={idx}
                                className="group p-10 border border-slate-800 hover:border-[var(--gold)]/60 transition-colors duration-500 bg-black relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl group-hover:text-[var(--gold)] transition-colors">
                                    {icons[idx % icons.length]}
                                </div>
                                <p className="text-xl text-slate-300 font-light relative z-10 group-hover:translate-x-1 transition-transform">
                                    {pain}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
