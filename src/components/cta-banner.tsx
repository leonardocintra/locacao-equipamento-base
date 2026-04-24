"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Image from "next/image";

const WHATSAPP_LINK = "https://wa.me/5516999775829?text=Ol%C3%A1%21+Gostaria+de+alugar+um+equipamento+da+Loc+F%C3%A1cil.";

export function CtaBanner() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative w-full rounded-[2rem] bg-gradient-to-br from-secondary to-secondary-dark overflow-hidden flex flex-col md:flex-row shadow-2xl"
        >
          {/* Textura sutil de fundo */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none"></div>

          {/* Conteúdo (Esquerda) */}
          <div className="relative z-10 p-12 md:p-16 lg:p-20 flex-1 flex flex-col justify-center items-start">
            <h2 className="font-heading text-[clamp(2rem,4vw,3.5rem)] uppercase text-white leading-[1.1] mb-8 max-w-lg">
              Equipamentos prontos para sua obra agora
            </h2>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-heading uppercase tracking-wider text-lg transition-transform hover:scale-105 shadow-lg shadow-primary/30"
            >
              <MessageCircle className="w-5 h-5" />
              Solicitar no WhatsApp
            </a>
          </div>

          {/* Imagem (Direita) */}
          <div className="relative w-full md:w-[45%] min-h-[300px] md:min-h-full">
            {/* Imagem cortada na base (bleeds out) */}
            <div className="absolute bottom-[-10%] right-[-5%] w-[110%] h-[120%]">
              <Image
                src="/hero-equipment.png" // Reaproveitando ou pode ser outra gerada
                alt="Equipamentos"
                fill
                className="object-contain object-bottom drop-shadow-2xl"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
