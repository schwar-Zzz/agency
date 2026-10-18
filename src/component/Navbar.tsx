import DropMenu from './ui/DropMenu'

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-40 w-full">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-4">
        <a href="#hero" className="text-sm font-semibold uppercase tracking-[0.26em] text-white/90">
          Mono
        </a>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#work" className="text-sm uppercase tracking-[0.18em] text-white/60 hover:text-white transition">
            Work
          </a>
          <a href="#services" className="text-sm uppercase tracking-[0.18em] text-white/60 hover:text-white transition">
            Services
          </a>
          <a href="#contact" className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-black uppercase tracking-[0.12em] hover:bg-white/90 transition">
            Get in touch
          </a>
        </nav>
        <div className="md:hidden">
          <DropMenu />
        </div>
      </div>
    </header>
  )
}
