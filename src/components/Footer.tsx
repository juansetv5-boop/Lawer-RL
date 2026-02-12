export default function Footer() {
    return (
        <footer className="bg-matte-black text-white/40 py-[clamp(4rem,10vh,10rem)] border-t border-legal-gold/10 relative">
            <div className="absolute inset-0 opacity-[0.02] ancient-texture pointer-events-none"></div>
            <div className="container mx-auto px-4 md:px-12 relative z-10">
                <div className="flex flex-wrap gap-[8vw] mb-[clamp(4rem,8vh,8rem)]">
                    <div className="flex-[2] min-w-[min(100%,350px)]">
                        <div className="mb-[6vw] md:mb-12">
                            <span className="font-serif text-[6vw] md:text-3xl font-bold text-white tracking-[0.2em] block uppercase">Representación Legal</span>
                            <span className="text-[2.5vw] md:text-[11px] font-bold text-legal-gold tracking-[0.6em] uppercase mt-[1vw] md:mt-2 block">Popayán • Eternal Justice Design</span>
                        </div>
                        <p className="text-[3.5vw] md:text-sm leading-loose mb-[6vw] md:mb-12 font-light max-w-md">
                            Firma boutique especializada en la defensa técnica ante el poder punitivo del Estado. Excelencia analítica arraigada en los fundamentos eternos del Derecho.
                        </p>
                    </div>
                    <div className="flex-1 min-w-[min(100%,200px)]">
                        <h4 className="text-white font-bold mb-[5vw] md:mb-10 text-[3vw] md:text-[11px] uppercase tracking-[0.4em]">Ubicación</h4>
                        <ul className="space-y-[4vw] md:space-y-8 text-[3vw] md:text-[12px] font-light uppercase tracking-widest">
                            <li className="flex items-start gap-[2vw] md:gap-4">
                                <span className="material-symbols-outlined text-legal-gold text-[5vw] md:text-xl">location_on</span>
                                <span>Centro Histórico, <br />Popayán, Colombia</span>
                            </li>
                            <li className="flex items-center gap-[2vw] md:gap-4">
                                <span className="material-symbols-outlined text-legal-gold text-[5vw] md:text-xl">phone_in_talk</span>
                                <span>Canal de Urgencia 24/7</span>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1 min-w-[min(100%,200px)]">
                        <h4 className="text-white font-bold mb-[5vw] md:mb-10 text-[3vw] md:text-[11px] uppercase tracking-[0.4em]">Áreas de Práctica</h4>
                        <ul className="grid grid-cols-1 gap-[3vw] md:gap-6 text-[3vw] md:text-[12px] font-light uppercase tracking-widest">
                            <li><a className="hover:text-legal-gold border-l border-white/10 pl-[2vw] md:pl-4 transition-all" href="#">Defensa Penal Técnica</a></li>
                            <li><a className="hover:text-legal-gold border-l border-white/10 pl-[2vw] md:pl-4 transition-all" href="#">Compliance Sancionatorio</a></li>
                            <li><a className="hover:text-legal-gold border-l border-white/10 pl-[2vw] md:pl-4 transition-all" href="#">Recursos de Casación</a></li>
                        </ul>
                    </div>
                </div>
                <div className="pt-[8vw] md:pt-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[2.5vw] md:text-[10px] uppercase tracking-[0.5em]">
                    <p>© 2024 Representación Legal Popayán. Justicia de Autoridad.</p>
                    <div className="flex gap-[6vw] md:gap-14 mt-[4vw] md:mt-0">
                        <a className="hover:text-legal-gold transition-colors" href="#">Confidencialidad</a>
                        <a className="hover:text-legal-gold transition-colors" href="#">Aviso Legal</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
