export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-white/60 sm:flex-row">
          <p>© {year} Vibe UI. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a className="transition hover:text-white" href="#">Docs</a>
            <a className="transition hover:text-white" href="#">GitHub</a>
            <a className="transition hover:text-white" href="#">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
