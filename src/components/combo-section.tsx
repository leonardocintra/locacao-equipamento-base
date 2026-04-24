"use client";

import { motion } from "framer-motion";
import { MessageCircle, PackagePlus } from "lucide-react";
import Image from "next/image";

const WHATSAPP_LINK = "https://wa.me/5516999775829?text=Ol%C3%A1%21+Gostaria+de+alugar+o+combo+Betoneira+%2B+Container+por+R%24+450%2C00+ao+m%C3%AAs.";

export function ComboSection() {
  return (
    <section className="py-24 bg-light-bg overflow-hidden border-y border-gray-200">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row items-center gap-12 lg:gap-20">

        {/* Lado Esquerdo: Imagem do Combo */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 relative h-[400px] sm:h-[500px] rounded-4xl overflow-hidden shadow-2xl border-4 border-white group"
        >
          <div className="absolute top-4 left-4 z-20 bg-primary text-white text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full shadow-lg">
            Oferta Especial
          </div>

          <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-in-out">
            <Image
              src="/combo.jpeg"
              alt="Combo Betoneira + Container"
              fill
              className="object-cover"
              priority
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.classList.add('bg-gray-300');
              }}
            />
            {/* Gradiente de sobreposição sutil */}
            <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
          </div>
        </motion.div>

        {/* Lado Direito: Conteúdo e Preço */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 flex flex-col items-start"
        >
          <div className="flex items-center gap-3 text-primary mb-4">
            <PackagePlus className="w-6 h-6" />
            <span className="font-bold tracking-widest uppercase text-sm">Pacote Mensal</span>
          </div>

          <h2 className="font-heading text-[clamp(2.5rem,4vw,3.5rem)] uppercase text-text-dark leading-[1.1] mb-6">
            Combo Betoneira + Container
          </h2>

          <p className="text-text-mid font-sans text-lg mb-8 leading-relaxed max-w-lg">
            A solução perfeita e mais econômica para o início da sua obra. Garanta o equipamento principal e o armazenamento seguro em um único pacote com desconto.
          </p>

          <div className="flex flex-col mb-10 p-6 bg-white rounded-2xl border border-[#F0F0F0] shadow-sm w-full max-w-sm">
            <span className="text-text-light text-sm font-medium mb-1 uppercase tracking-wide">Valor do combo</span>
            <div className="flex items-end gap-2 text-primary">
              <span className="font-heading font-bold text-5xl">R$ 450,00</span>
              <span className="text-text-mid font-medium text-lg mb-1">/ mês</span>
            </div>
          </div>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-full font-heading uppercase tracking-wider text-lg transition-transform hover:scale-105 shadow-lg shadow-[#25D366]/30"
          >
            <MessageCircle className="w-6 h-6" />
            Garantir Combo
          </a>
        </motion.div>

      </div>
    </section>
  );
}
