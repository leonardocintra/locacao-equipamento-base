"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    text: "A Loc Fácil salvou nossa obra. Precisávamos de um martelete de urgência e eles entregaram em menos de 2 horas. Equipamento novo e revisado. Recomendo muito!",
    name: "Carlos Eduardo",
    role: "Mestre de Obras",
    initials: "CE",
  },
  {
    id: 2,
    text: "Sempre alugo betoneiras e andaimes com eles. O preço é muito justo, não tem taxa escondida e o atendimento pelo WhatsApp é extremamente ágil.",
    name: "Roberto Silva",
    role: "Engenheiro Civil",
    initials: "RS",
  },
  {
    id: 3,
    text: "Atendimento impecável. Os equipamentos chegaram limpos e funcionando perfeitamente. Com certeza faremos novas locações para os próximos projetos.",
    name: "Juliana Mendes",
    role: "Arquiteta",
    initials: "JM",
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-24 bg-light-bg overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Lado Esquerdo: Textos e Controle */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4">
            Depoimentos
          </span>
          <h2 className="font-heading text-[clamp(2rem,3.5vw,3rem)] uppercase text-text-dark leading-[1.1] mb-12">
            O que Nossos Clientes Disseram
          </h2>

          <div className="relative min-h-[250px]">
            <Quote className="w-16 h-16 text-primary/20 absolute -top-4 -left-4 z-0" />
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                <p className="font-display text-2xl md:text-3xl text-text-dark leading-snug mb-8">
                  "{testimonials[currentIndex].text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">
                    {testimonials[currentIndex].initials}
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-text-dark text-lg leading-tight">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-text-mid text-sm">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navegação */}
          <div className="flex items-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-text-dark hover:border-primary hover:text-primary transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-text-dark hover:border-primary hover:text-primary transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Lado Direito: Imagens */}
        <div className="w-full lg:w-1/2 relative h-[400px] sm:h-[500px]">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute right-0 top-0 w-[70%] h-[80%] rounded-3xl overflow-hidden border-4 border-white shadow-xl z-10"
          >
            <Image
              src="/placeholder-worker1.jpg"
              alt="Cliente usando equipamento"
              fill
              className="object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.classList.add('bg-gray-200');
              }}
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute left-0 bottom-0 w-[55%] h-[60%] rounded-3xl overflow-hidden border-4 border-white shadow-2xl z-20"
          >
            <Image
              src="/placeholder-worker2.jpg"
              alt="Obra satisfeita"
              fill
              className="object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.classList.add('bg-gray-300');
              }}
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
