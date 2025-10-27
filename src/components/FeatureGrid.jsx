import { Rocket, Shield, Zap, Star } from 'lucide-react';

const features = [
  {
    title: 'Fast by default',
    description: 'Optimized patterns that help you ship swiftly with minimal setup.',
    icon: Zap,
    color: 'from-amber-400 to-yellow-500',
  },
  {
    title: 'Beautifully crafted',
    description: 'Thoughtful spacing, typography, and motion that feel delightful.',
    icon: Star,
    color: 'from-fuchsia-400 to-pink-500',
  },
  {
    title: 'Production-ready',
    description: 'Accessible components and robust structure designed for real apps.',
    icon: Shield,
    color: 'from-emerald-400 to-teal-500',
  },
  {
    title: 'Built for velocity',
    description: 'Composable blocks so you can focus on your product, not plumbing.',
    icon: Rocket,
    color: 'from-indigo-400 to-blue-500',
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">What you get</h2>
        <p className="mt-3 text-white/70">A carefully selected set of essentials that covers most use cases.</p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div
            key={f.title}
            className="group rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-5 transition hover:from-white/[0.1] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.15)_inset,0_10px_30px_-15px_rgba(0,0,0,0.5)]"
          >
            <div className={`inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${f.color} text-black shadow`}>
              <f.icon size={18} />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
