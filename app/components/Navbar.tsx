// app/components/Navbar.tsx
export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-100 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-sky-600 to-emerald-500 text-white font-bold">IA</span>
          <span className="font-semibold">IA IOs Farma</span>
        </div>
        <nav className="hidden gap-6 text-sm md:flex">
          <a href="#modulos" className="hover:text-sky-700">Módulos</a>
          <a href="#planos" className="hover:text-sky-700">Planos</a>
          <a href="#integracoes" className="hover:text-sky-700">Integrações</a>
        </nav>
        <a
          href="https://wa.me/5511952068432"
          className="rounded-md bg-gradient-to-r from-sky-600 to-emerald-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:opacity-95"
        >
          Fale no WhatsApp
        </a>
      </div>
    </header>
  );
}