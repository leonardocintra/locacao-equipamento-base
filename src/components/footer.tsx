

export function Footer() {
  return (
    <footer className="bg-secondary-dark pt-16 pb-8 border-t border-white/5">
      <div className="max-w-[1280px] mx-auto px-6">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          {/* Logo */}
          <div className="font-heading text-3xl font-bold uppercase tracking-wide">
            <span className="text-white">Loc</span>
            <span className="text-primary">Fácil</span>
          </div>

          {/* Social */}
          <a
            href="https://instagram.com/locfacilclaraval"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[#64748B] text-sm">
          <p>© {new Date().getFullYear()} Loc Fácil — Todos os direitos reservados</p>
          <p>
            Desenvolvido por{" "}
            <a
              href="https://leonardocintra.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Leonardo Cintra
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
