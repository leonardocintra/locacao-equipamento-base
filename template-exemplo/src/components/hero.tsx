import Link from "next/link"
import Image from "next/image"
import { CheckCircle2, HeadphonesIcon, ThumbsUp } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Content */}
        <div className="max-w-2xl z-20 relative">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-secondary leading-tight mb-6">
            Alugue Equipamentos de Construção com Facilidade
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Alugue equipamentos e construa com a melhor qualidade e confiança.
          </p>

          <Link
            href="#whatsapp"
            className="inline-block bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-md font-bold text-sm transition-colors shadow-lg mb-12"
          >
            SOLICITAR NO WHATSAPP
          </Link>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-6 items-center">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-accent-green w-5 h-5" />
              <span className="text-sm text-gray-600 font-medium">Troca de<br />Equipamento</span>
            </div>
            <div className="flex items-center gap-2">
              <HeadphonesIcon className="text-blue-500 w-5 h-5" />
              <span className="text-sm text-gray-600 font-medium">Assistência<br />ao Cliente</span>
            </div>
            <div className="flex items-center gap-2">
              <ThumbsUp className="text-yellow-500 w-5 h-5" />
              <span className="text-sm text-gray-600 font-medium">Catálogo<br />Qualificado</span>
            </div>
          </div>
        </div>

        <div className="relative h-[280px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[600px] w-full max-w-[400px] md:max-w-none mx-auto flex items-center justify-center mt-8 md:mt-0">
          {/* Equipment Image */}
          <div className="relative w-[95%] sm:w-[90%] md:w-[90%] lg:w-full xl:w-[130%] flex items-center justify-center z-10 xl:-ml-24">
            <Image
              src="/img/betoneira-e-compactador.png"
              alt="Betoneira e Compactador"
              width={900}
              height={900}
              className="object-contain w-full h-auto drop-shadow-2xl animate-float"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
