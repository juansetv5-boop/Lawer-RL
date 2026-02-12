interface QuoteProps {
    data: { quote: string; author: string };
}

export default function Quote({ data }: QuoteProps) {
    if (!data) return null;

    return (
        <section className="py-[clamp(4rem,10vh,12rem)] bg-deep-charcoal border-y border-legal-gold/10 overflow-hidden relative">
            <div className="absolute inset-0 opacity-[0.05]">
                {/* Placeholder image from design */}
                <img
                    alt="Atmospheric classical pediment architecture"
                    className="w-full h-full object-cover grayscale"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCsYHXoUrFbeznuOMaQ2PiHNh4ckoJQsQ3b24CWW2x0OznVLRi2G0ZH--2_pKEMWZtjm_eBUmR2G-3Fhrdf2S-D_ifu3YbqwLLwoLs2ftcLFX8TdfeSbOd2fOiEgWtYzJpzpJv_j7J2IdI3FmajIM7z8F8wNRCJ5ND_QiIDg6uzhOr3QOazA00mggYqQ_C0uxFyGfaf5giBjV2Od1RwC1xI9MhJI64_1EKPd9ZvzYer6iGvwgxRaWqyVuAFq9-520ez8UGpGzesOM"
                />
            </div>
            <div className="container mx-auto px-4 md:px-12 text-center max-w-[min(100%,1000px)] relative">
                <span className="material-symbols-outlined text-legal-gold/10 text-[25vw] absolute left-1/2 -top-[10vw] -translate-x-1/2 pointer-events-none select-none">gavel</span>
                <div className="relative z-10">
                    <blockquote className="text-[5vw] md:text-[2.5vw] font-serif text-white italic leading-[1.4] mb-[8vw] font-light">
                        "{data.quote}"
                    </blockquote>
                    <div className="flex flex-col items-center">
                        <div className="h-px w-20 gold-foil-gradient mb-6"></div>
                        <p className="font-bold text-white tracking-[0.4em] uppercase text-[3vw] md:text-[0.9vw] mb-2">{data.author}</p>
                        <p className="text-legal-gold text-[2.5vw] md:text-[0.7vw] tracking-[0.6em] uppercase font-semibold">Representación Legal Popayán</p>
                        <div className="flex gap-1 mt-4">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <span key={i} className="material-symbols-outlined text-legal-gold text-[4vw] md:text-[1.2vw]">star</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
