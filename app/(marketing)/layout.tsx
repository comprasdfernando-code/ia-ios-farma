// app/(marketing)/layout.tsx
export const metadata = {
  title: "IA IOs Farma — Sistema Operacional Inteligente das Drogarias",
  description:
    "ERP farmacêutico modular em nuvem: PDV, Fiscal (NFC-e/NFe), SNGPC, Estoque, Financeiro, Cloud e E-commerce.",
};

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="antialiased bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}