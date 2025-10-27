import { useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-gradient-to-b from-black/50 to-transparent backdrop-blur supports-[backdrop-filter]:bg-black/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold text-white">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white">
              <Rocket size={18} />
            </span>
            <span className="text-lg">Vibe UI</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-white/80 md:flex">
            <a href="#features" className="transition hover:text-white">Features</a>
            <a href="#pricing" className="transition hover:text-white">Pricing</a>
            <a href="#about" className="transition hover:text-white">About</a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <button className="rounded-md px-4 py-2 text-sm font-medium text-white/90 transition hover:text-white">Sign in</button>
            <button className="rounded-md bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/90">Get Started</button>
          </div>

          <button
            aria-label="Toggle menu"
            className="inline-flex items-center justify-center rounded-md p-2 text-white md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden">
            <div className="space-y-2 border-t border-white/10 py-4 text-white/80">
              <a href="#features" className="block px-2 py-2">Features</a>
              <a href="#pricing" className="block px-2 py-2">Pricing</a>
              <a href="#about" className="block px-2 py-2">About</a>
            </div>
            <div className="flex gap-2 pb-4">
              <button className="flex-1 rounded-md border border-white/10 px-4 py-2 text-sm text-white/90">Sign in</button>
              <button className="flex-1 rounded-md bg-white px-4 py-2 text-sm font-medium text-black">Get Started</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
