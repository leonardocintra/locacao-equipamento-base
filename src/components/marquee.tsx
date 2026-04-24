"use client";

import { motion } from "framer-motion";

export function MarqueeStatement() {
  return (
    <section className="w-full bg-white py-20 md:py-32 overflow-hidden flex items-center justify-center border-t border-b border-light-bg">
      <div className="max-w-[1000px] mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.3] text-text-dark"
        >
          Entregamos os equipamentos certos{" "}
          <span className="inline-block hover:scale-110 transition-transform cursor-default">🏗️</span>{" "}
          para cada obra e ajudamos a construir{" "}
          <span className="inline-block hover:scale-110 transition-transform cursor-default">🔧</span>{" "}
          resultados reais com rapidez e confiança{" "}
          <span className="inline-block hover:scale-110 transition-transform cursor-default">🤝</span>
        </motion.h2>
      </div>
    </section>
  );
}
