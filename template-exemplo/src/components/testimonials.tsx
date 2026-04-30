import { Quote } from "lucide-react"

export function Testimonials() {
  return (
    <section className="relative overflow-hidden py-24 bg-gray-50 border-y border-gray-100">
      {/* Abstract Background Shapes */}
      <div className="absolute left-0 top-0 w-64 h-64 bg-secondary -translate-x-1/2 -translate-y-1/2 rounded-full" />
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-primary translate-x-1/3 translate-y-1/3 rounded-full" />
      <div className="absolute left-10 bottom-10 w-32 h-32 border border-primary rounded-full" />
      
      <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Testimonial Content */}
        <div className="max-w-xl mx-auto md:mx-0">
          <Quote className="text-primary w-12 h-12 mb-6" />
          <p className="text-xl md:text-2xl text-gray-600 font-medium italic leading-relaxed mb-8">
            "Conseguimos um excelente suporte no qual confiei minha obra, com a locação de equipamentos da melhor qualidade. O atendimento muito rápido da equipe superou as expectativas."
          </p>
          
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden border-2 border-white shadow-sm">
              <span className="text-gray-400 font-medium text-xs">Foto</span>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-lg">Jaros Grano</h4>
              <p className="text-gray-500 text-sm">Cliente - Construtora</p>
            </div>
          </div>
        </div>

        {/* Testimonial Image / Graphic */}
        <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl bg-gray-200 flex items-center justify-center">
           {/* Image placeholder */}
           <span className="text-gray-500 font-medium z-10">Imagem Trabalhador na Obra</span>
           <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
      </div>
    </section>
  )
}
