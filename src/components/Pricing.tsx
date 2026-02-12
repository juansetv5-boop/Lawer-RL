interface PricingProps {
    data: {
        title: string;
        price: string;
        note: string;
        bullets: string[];
    };
}

export default function Pricing({ data }: PricingProps) {
    return (
        <section className="py-28 px-4 bg-black relative">
            <div className="max-w-4xl mx-auto relative z-10">
                <div className="relative border border-[var(--gold)]/40 p-1">
                    <div className="bg-neutral-950 p-12 md:p-20 text-center relative">

                        <h3 className="text-2xl text-[var(--gold)] font-serif mb-4 tracking-wide">{data.title}</h3>
                        <div className="text-5xl font-serif text-slate-100 mb-4">
                            {data.price}
                        </div>
                        <p className="text-slate-500 mb-10 text-sm tracking-widest uppercase">{data.note}</p>

                        <div className="w-full h-px bg-slate-800 mb-10" />

                        <ul className="mb-12 text-left inline-block space-y-4">
                            {data.bullets.map((item, idx) => (
                                <li key={idx} className="flex items-center text-slate-300">
                                    <span className="w-1.5 h-1.5 bg-[var(--gold)] rounded-full mr-4" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="block">
                            <a
                                href="https://wa.me/573127930898?text=Hola,%20me%20gustar%C3%ADa%20agendar%20una%20evaluaci%C3%B3n%20estrat%C3%A9gica"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block w-full md:w-auto px-12 py-4 border border-slate-700 text-slate-200 hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all uppercase tracking-[0.15em] text-xs font-semibold cursor-pointer"
                            >
                                Agendar Evaluación
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
