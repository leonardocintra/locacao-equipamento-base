"use client"
import { useState } from "react"
import { EquipmentCard } from "./equipment-card"
import { cn } from "@/lib/utils"

const categories = [
  "Todos",
  "Concreto",
  "Perfuração",
  "Demolição",
  "Movimento",
  "Construção",
  "Compressores"
]

const equipmentData = [
  {
    title: "Betoneira 400L",
    rating: 5,
    reviews: 3,
    price: "Consulte"
  },
  {
    title: "Martelete Perfurador 15kg",
    rating: 5,
    reviews: 3,
    price: "Consulte"
  },
  {
    title: "Compactador de Solo",
    rating: 5,
    reviews: 3,
    price: "Consulte"
  },
  {
    title: "Andaime Tubular (Metro)",
    rating: 5,
    reviews: 3,
    price: "Consulte"
  }
];

export function AllEquipment() {
  const [activeCategory, setActiveCategory] = useState("Todos")

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 uppercase">
          Todos os Equipamentos
        </h2>
        
        {/* Categories / Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-2 rounded-md text-sm font-medium transition-colors border",
                activeCategory === category 
                  ? "bg-secondary text-white border-secondary" 
                  : "bg-white text-gray-600 border-gray-200 hover:border-gray-300"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {equipmentData.map((item, index) => (
            <EquipmentCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
