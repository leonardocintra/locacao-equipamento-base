import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface EquipmentCardProps {
  title: string;
  rating: number;
  reviews: number;
  price: string;
  oldPrice?: string;
  badge?: {
    text: string;
    type: "popular" | "novo";
  };
}

export function EquipmentCard({ title, rating, reviews, price, oldPrice, badge }: EquipmentCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow relative group">
      {badge && (
        <div
          className={cn(
            "absolute -top-3 -right-3 text-white text-xs font-bold px-3 py-1 rounded-md z-10",
            badge.type === "popular" ? "bg-[#FF5A5F]" : "bg-[#6B46C1]",
            badge.type === "novo" && badge.text === "NOVO" ? "bg-accent-green" : ""
          )}
        >
          {badge.text}
        </div>
      )}

      {/* Image Placeholder */}
      <div className="w-full h-48 bg-gray-50 rounded-lg mb-4 flex items-center justify-center border border-gray-100/50 group-hover:bg-gray-100 transition-colors">
        <span className="text-gray-400 text-sm font-medium">Imagem do Produto</span>
      </div>

      <div className="space-y-2">
        <h3 className="font-bold text-gray-900 text-lg line-clamp-1">{title}</h3>
        
        <div className="flex items-center gap-1">
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={cn(
                  "w-4 h-4",
                  star <= rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
                )}
              />
            ))}
          </div>
          <span className="text-sm text-gray-500 ml-1">({reviews})</span>
        </div>

        <div className="pt-2 flex items-baseline gap-2">
          <span className="text-xl font-bold text-gray-900">{price}</span>
          {oldPrice && (
            <span className="text-sm text-gray-400 line-through">{oldPrice}</span>
          )}
        </div>
      </div>
    </div>
  )
}
