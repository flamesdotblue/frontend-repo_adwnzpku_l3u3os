import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.25),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            <Sparkles size={14} className="text-yellow-300" />
            <span>Beautiful UI, production-ready</span>
          </div>
          <h1 className="bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-6xl">
            Build sleek interfaces in minutes
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-white/70">
            A curated set of polished building blocks that help you ship fast. Mix, match, and make them your own with zero friction.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#get-started" className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90">
              Get started
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-md border border-white/10 px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/5">
              Explore features
            </a>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-4">
            <div className="aspect-video w-full rounded-lg bg-black/40 backdrop-blur-sm" />
            <p className="mt-3 text-sm text-white/60">Drop your components here, customize with Tailwind.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-4">
            <div className="aspect-video w-full rounded-lg bg-black/40 backdrop-blur-sm" />
            <p className="mt-3 text-sm text-white/60">Accessible, responsive, and themeable out-of-the-box.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
