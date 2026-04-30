import Link from "next/link"

export function ComboBanner() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-gray-50 rounded-3xl overflow-hidden flex flex-col md:flex-row items-center">
          {/* Graphic / Image Area */}
          <div className="w-full md:w-1/2 relative h-64 md:h-80 bg-secondary/5 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Abstract blob shape for background */}
              <div className="w-[120%] h-[150%] bg-primary rounded-full absolute -left-[20%] mix-blend-multiply opacity-90 rotate-12"></div>
              <div className="w-[100%] h-[120%] bg-secondary rounded-full absolute -right-[10%] opacity-90 -rotate-12"></div>
            </div>
            {/* Image Placeholder */}
            <div className="relative z-10 text-white text-center p-6 border border-white/20 rounded-xl bg-black/20 backdrop-blur-sm">
              <span className="block text-xl font-bold">Betoneira + Container</span>
              <span className="text-sm opacity-80">Imagem Promocional</span>
            </div>
          </div>

          {/* Content Area */}
          <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 uppercase">
              Combo Betoneira + Container
            </h2>
            <p className="text-gray-600 mb-6">
              Compre uma oferta especial com dois equipamentos imprescindíveis com desconto.
            </p>
            <div className="mb-8">
              <span className="text-4xl font-bold text-gray-900">R$ 450,00</span>
            </div>
            <Link
              href="#garantir"
              className="inline-block bg-accent-green hover:bg-accent-green-hover text-white font-bold py-3 px-8 rounded-md transition-colors"
            >
              GARANTIR COMBO
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
