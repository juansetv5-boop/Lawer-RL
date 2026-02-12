

import Image from "next/image";

interface HeroProps {
    brand: { name: string; tagline: string };
    content: { h1: string; sub: string; cta: string };
}

export default function Hero({ brand, content }: HeroProps) {
    return (
        <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBY6IB_9kO_FS7Ren-rc1X5GrN6ml81smC2HMiOvUJY7BCG2ilGSa0VjQwp4S0lAPm7yl8zo09GTsUXTFH3TkJcPQj8in5fdnA2PpJ_QrXf-YZuTdrzo2GixtHy-QkFC_AUuV8zDXf07rEu6RZWgKKMEHAVZi_dDgliSbtpe0eqfUmu0Gx9m_Toe7L9IGkulcOv5EIMvN5FMpWWdDZn0E4oOcVHXQGqINp2TLsLV8_hZiJ6DNJBpo2-xASdZKUmUteZLArHzKREJ8Y"
                    alt="Atmospheric Greco-Roman columns in dark mist with golden highlights"
                    fill
                    className="object-cover grayscale brightness-[0.3] contrast-[1.1]"
                    priority
                />
                <div className="absolute inset-0 hero-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-transparent to-matte-black/30"></div>
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-legal-gold/5 blur-[120px] rounded-full"></div>
            </div>

            <div className="container mx-auto px-4 md:px-12 relative z-10 flex flex-col justify-center h-full">
                <div className="max-w-[min(100%,900px)]">


                    <h1 className="text-[9vw] md:text-[5vw] leading-[1.1] mb-[4vw] text-white font-bold italic relative z-20">
                        {content.h1}
                    </h1>

                    <p className="text-[4.5vw] md:text-[1.2vw] text-white/70 mb-[6vw] leading-relaxed max-w-[90%] md:max-w-2xl font-light">
                        {content.sub}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-[4vw]">
                        <a
                            href="https://wa.me/573127930898?text=Hola,%20me%20gustar%C3%ADa%20solicitar%20una%20evaluaci%C3%B3n%20de%20mi%20caso"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="gold-foil-gradient text-black px-[8vw] md:px-14 py-[4vw] md:py-6 font-bold text-[3vw] md:text-[0.9vw] uppercase tracking-[0.3em] hover:brightness-110 transition-all flex items-center justify-center gap-4 shadow-xl shadow-legal-gold/20"
                        >
                            {content.cta}
                        </a>
                    </div>

                    <div className="w-full flex flex-col items-center mt-[6vw] relative z-20 mix-blend-overlay opacity-80">
                        <div className="flex flex-col items-center gap-[2vw] mb-[3vw]">
                            <div className="relative w-[25vw] h-[25vw] md:w-32 md:h-32 mb-[2vw]">
                                <Image
                                    src="/logo.png"
                                    alt={brand.name}
                                    fill
                                    className="object-contain drop-shadow-2xl"
                                />
                            </div>
                            <span className="text-legal-gold text-[4vw] md:text-xl font-semibold uppercase tracking-[0.3em] block text-center">
                                {brand.name}
                            </span>
                        </div>
                        <div className="h-[2px] w-[20vw] gold-foil-gradient"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
