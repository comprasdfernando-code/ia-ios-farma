// app/components/CTA.tsx
export default function CTA() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-sky-600 to-emerald-500 opacity-10" />
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h3 className="text-3xl font-extrabold tracking-tight">Pronto para transformar sua farmácia?</h3>
        <p className="mx-auto mt-3 max-w-2xl text-slate-600">
          O IA IOs Farma integra PDV, Fiscal, SNGPC, Estoque, Financeiro e E-commerce — tudo em nuvem, pronto para crescer com você.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a
            href="https://wa.me/5511952068432"
            className="rounded-md bg-gradient-to-r from-sky-600 to-emerald-500 px-6 py-3 font-semibold text-white shadow hover:opacity-95"
          >
            Falar no WhatsApp
          </a>
          <a
            href="https://iadrogarias.com.br"
            className="rounded-md border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-50"
            target="_blank"
          >
            Ver e-commerce
          </a>
        </div>
      </div>
    </section>
  );
}