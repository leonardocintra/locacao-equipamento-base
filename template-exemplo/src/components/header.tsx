import Link from "next/link"
import { cn } from "@/lib/utils"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          {/* We use a simple placeholder logo since we don't have the image file */}
          <div className="flex items-center">
            <span className="text-primary text-2xl font-bold">Loc</span>
            <span className="text-secondary text-2xl font-bold">Fácil</span>
          </div>
          <div className="flex flex-col ml-1">
            <span className="text-[10px] text-gray-500 uppercase font-semibold leading-tight">Construction</span>
            <span className="text-[10px] text-gray-500 uppercase font-semibold leading-tight">Rental</span>
          </div>
        </Link>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#home" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
          <Link href="#construcoes" className="text-sm font-medium hover:text-primary transition-colors">Construções</Link>
          <Link href="#produtos" className="text-sm font-medium hover:text-primary transition-colors">Produtos</Link>
          <Link href="#contato" className="text-sm font-medium hover:text-primary transition-colors">Contato</Link>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <Link
            href="#solicitar"
            className={cn(
              "bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-md text-sm font-semibold transition-colors shadow-sm"
            )}
          >
            SOLICITAR
          </Link>
        </div>
      </div>
    </header>
  )
}
