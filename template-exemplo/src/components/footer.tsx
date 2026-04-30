import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo Column */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex items-center">
                <span className="text-primary text-2xl font-bold">Loc</span>
                <span className="text-secondary text-2xl font-bold">Fácil</span>
              </div>
            </Link>
          </div>

          {/* Links Column 1 */}
          <div className="col-span-1">
            <h4 className="font-bold text-gray-900 mb-4">Links</h4>
            <ul className="space-y-3">
              <li><Link href="#home" className="text-gray-600 hover:text-primary text-sm">Home</Link></li>
              <li><Link href="#equipamentos" className="text-gray-600 hover:text-primary text-sm">Equipamentos</Link></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="col-span-1">
            <h4 className="font-bold text-gray-900 mb-4 invisible">Links</h4>
            <ul className="space-y-3">
              <li><Link href="#links" className="text-gray-600 hover:text-primary text-sm">Links</Link></li>
              <li><Link href="#perfuracao" className="text-gray-600 hover:text-primary text-sm">Perfuração</Link></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="col-span-1">
            <h4 className="font-bold text-gray-900 mb-4">Resources</h4>
            <ul className="space-y-3 mb-6">
              <li><Link href="#blog" className="text-gray-600 hover:text-primary text-sm">Blog</Link></li>
              <li><Link href="#contato" className="text-gray-600 hover:text-primary text-sm">Contact us</Link></li>
            </ul>
          </div>
          
          {/* Social Media placed at the far right or below the 4th col in desktop */}
          <div className="col-span-1 md:col-span-4 flex justify-end">
            <div className="flex flex-col items-end">
               <h4 className="font-bold text-gray-900 mb-4">Social Media</h4>
               <div className="flex items-center gap-4">
                 <Link href="#" className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center hover:bg-secondary-hover transition-colors text-xs font-bold">
                   Fb
                 </Link>
                 <Link href="#" className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center hover:bg-secondary-hover transition-colors text-xs font-bold">
                   Tw
                 </Link>
                 <Link href="#" className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center hover:bg-secondary-hover transition-colors text-xs font-bold">
                   Ig
                 </Link>
                 <Link href="#" className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center hover:bg-secondary-hover transition-colors text-xs font-bold">
                   Yt
                 </Link>
               </div>
            </div>
          </div>
        </div>

        {/* Bottom text */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>LocFácil Construction Rental • Business</p>
        </div>
      </div>
    </footer>
  )
}
