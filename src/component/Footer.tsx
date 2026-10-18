export default function Footer() {
  return (
    <footer className="mt-20 border-t border-b/6 py-8">
      <div className="mx-auto max-w-[1200px] px-5 text-sm text-white/60">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div>© {new Date().getFullYear()} MONO Labs. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">Dribbble</a>
            <a href="#" className="hover:text-white">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
