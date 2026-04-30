import { EquipmentCard } from "./equipment-card"

const featuredData = [
  {
    title: "Betoneira 400L",
    rating: 5,
    reviews: 35,
    price: "R$ 450,00",
    oldPrice: "R$ 550,00",
    badge: { text: "POPULAR", type: "popular" as const }
  },
  {
    title: "Martelete Perfurador 15kg",
    rating: 5,
    reviews: 20,
    price: "R$ 150,00",
    oldPrice: "R$ 250,00",
    badge: { text: "POPULAR", type: "popular" as const }
  },
  {
    title: "Compactador de Solo",
    rating: 5,
    reviews: 25,
    price: "R$ 450,00",
    badge: { text: "NOVO", type: "novo" as const }
  },
  {
    title: "Andaime Tubular (Metro)",
    rating: 5,
    reviews: 20,
    price: "R$ 250,00",
    oldPrice: "R$ 350,00",
    badge: { text: "NOVO", type: "novo" as const }
  }
];

export function FeaturedEquipment() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 uppercase">
          Nossos Equipamentos em Destaque
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredData.map((item, index) => (
            <EquipmentCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
