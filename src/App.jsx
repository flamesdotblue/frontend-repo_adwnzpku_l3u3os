import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B0B0F] via-[#0B0B0F] to-[#0b0b0f] text-white">
      {/* Soft background glow */}
      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute left-1/2 top-[-10%] h-72 w-[80vw] -translate-x-1/2 rounded-full bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-indigo-600/10 via-fuchsia-500/10 to-emerald-400/10 blur-3xl" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <FeatureGrid />
        <section id="pricing" className="mx-auto mt-6 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.04] p-8 text-center">
            <h3 className="text-2xl font-semibold">Simple pricing</h3>
            <p className="mt-2 text-white/70">Start free. Upgrade when you’re ready.</p>
            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <div className="w-full rounded-xl border border-white/10 bg-black/30 p-6 sm:w-1/2">
                <p className="text-sm uppercase tracking-wider text-white/60">Free</p>
                <p className="mt-1 text-3xl font-bold">$0</p>
                <ul className="mt-4 space-y-2 text-left text-sm text-white/70">
                  <li>Core components</li>
                  <li>Community support</li>
                  <li>MIT License</li>
                </ul>
                <button className="mt-6 w-full rounded-md border border-white/10 px-4 py-2 text-sm font-medium text-white/90 transition hover:bg-white/5">Get Free</button>
              </div>
              <div className="w-full rounded-xl border border-white/10 bg-white text-black p-6 sm:w-1/2">
                <p className="text-sm uppercase tracking-wider text-black/60">Pro</p>
                <p className="mt-1 text-3xl font-bold">$29</p>
                <ul className="mt-4 space-y-2 text-left text-sm text-black/80">
                  <li>All components</li>
                  <li>Premium examples</li>
                  <li>Priority support</li>
                </ul>
                <button className="mt-6 w-full rounded-md bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-black/90">Go Pro</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
