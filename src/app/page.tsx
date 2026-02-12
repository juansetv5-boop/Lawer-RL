import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Compliance from "@/components/Compliance";
import Strategy from "@/components/Strategy";
import Quote from "@/components/Quote";
import PracticeAreas from "@/components/PracticeAreas";

export default function Home() {
  const content = {
    brand: {
      name: "Representación Legal Popayán",
      tagline: "Defensa técnica en procesos penales"
    },
    hero: {
      h1: "Si cree que su caso no tiene solución, es porque todavía no ha hablado conmigo",
      sub: "Análisis técnico y construcción de una estrategia clara y estructurada.",
      cta: "Solicitar evaluación del caso"
    },
    pains: [
      "Riesgo de privación de libertad",
      "Sanciones económicas",
      "Inhabilitaciones",
      "Impacto reputacional"
    ],
    modules: [
      "Diagnóstico inicial",
      "Análisis de escenario",
      "Estrategia de defensa",
      "Representación"
    ],
    testimonial: {
      quote: "La estrategia permitió desvirtuar la imputación y obtener una decisión judicial favorable.",
      author: "Cliente del sector público"
    }
  };

  return (
    // Main wrapper is now in layout.tsx, but we can have a fragment here or a div
    <>
      <Hero brand={content.brand} content={content.hero} />
      <Services items={content.pains} />
      <Compliance />
      <Strategy items={content.modules} />
      <Quote data={content.testimonial} />
      <PracticeAreas />
    </>
  );
}
