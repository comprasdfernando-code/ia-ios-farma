// app/components/Hero.tsx
export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-50 via-emerald-50 to-white" />
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-medium ring-1 ring-sky-200">
            Sistema Operacional Inteligente das Drogarias IA
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
            Um único sistema. <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-emerald-500">Todas as drogarias</span>. Inteligência em cada operação.
          </h1>
          <p className="mt-6 text-lg text-slate-600">
            ERP farmacêutico modular em nuvem: PDV, Fiscal (NFC-e/NFe), SNGPC, Estoque, Financeiro, Cloud e E-commerce — integrado ao ecossistema IA Drogarias.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a
              href="https://wa.me/5511952068432"
              className="rounded-md bg-gradient-to-r from-sky-600 to-emerald-500 px-6 py-3 text-white font-semibold shadow hover:opacity-95"
            >
              Falar com especialista
            </a>
            <a
              href="#modulos"
              className="rounded-md border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-50"
            >
              Explorar módulos
            </a>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            Sem instalação. 100% em nuvem. Pensado por farmacêuticos, para farmacêuticos.
          </p>
        </div>
      </div>
    </section>
  );
}