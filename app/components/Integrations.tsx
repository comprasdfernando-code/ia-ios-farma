// app/components/Plans.tsx
const plans = [
  { name: "Start", price: "R$ 149", who: "Pequenas drogarias", includes: ["PDV", "Fiscal (NFC-e/NFe)"] },
  { name: "Smart", price: "R$ 249", who: "Lojas médias", includes: ["PDV", "Fiscal", "Estoque", "Financeiro"] },
  { name: "Premium", price: "R$ 399", who: "Redes completas", includes: ["Tudo do Smart", "Cloud", "SNGPC"] },
  { name: "IA Full", price: "Sob consulta", who: "Grandes redes", includes: ["Todos os módulos", "API", "E-commerce"] },
];

export default function Plans() {
  return (
    <section id="planos" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Planos e Preços</h2>
          <p className="mt-3 text-slate-600">Comece pequeno e evolua sem fricção.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((p) => (
            <div key={p.name} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="mt-1 text-sm text-slate-600">{p.who}</p>
              <p className="mt-4 text-3xl font-extrabold tracking-tight">
                <span className={p.price === "Sob consulta" ? "text-slate-800" : "text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-emerald-500"}>
                  {p.price}
                </span>
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {p.includes.map((i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-sky-600 to-emerald-500" />
                    {i}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/5511952068432"
                className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-gradient-to-r from-sky-600 to-emerald-500 px-4 py-2 font-semibold text-white shadow hover:opacity-95"
              >
                Contratar
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}