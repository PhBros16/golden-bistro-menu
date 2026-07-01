import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  component: Menu,
});

type Item = { name: string; price: string; note?: string };
type Section = { id: string; title: string; items: Item[]; footnote?: string };

const SECTIONS: Section[] = [
  {
    id: "prato-do-dia",
    title: "Prato do Dia",
    footnote: "Consultar prato do dia disponível",
    items: [
      { name: "Arroz de leite com carne de sol", price: "20,00" },
      { name: "Lasanha de carne", price: "20,00" },
      { name: "Lasanha de frango", price: "20,00" },
      { name: "1 Panqueca", price: "10,00" },
      { name: "1 Panqueca com arroz", price: "14,00" },
      { name: "2 Panquecas com arroz", price: "20,00" },
      { name: "Escondidinho de macaxeira", price: "20,00" },
      { name: "Fricassê de frango", price: "20,00" },
      { name: "Salpicão", price: "20,00" },
    ],
  },
  {
    id: "tapioca",
    title: "Tapioca",
    items: [
      { name: "Com manteiga", price: "5,00" },
      { name: "Com ovo", price: "7,00" },
      { name: "Com queijo coalho", price: "12,00" },
      { name: "Com queijo manteiga", price: "12,00" },
      { name: "Com mista", price: "12,00" },
      { name: "Com creme de frango", price: "14,00" },
      { name: "Com calabresa", price: "14,00" },
      { name: "Com carne de sol", price: "15,00" },
      { name: "Com carne moída", price: "13,00" },
      { name: "Crepioca de frango", price: "15,00" },
      { name: "Crepioca de queijo e presunto", price: "13,00" },
      { name: "Crepioca de carne de sol", price: "16,00" },
    ],
  },
  {
    id: "paes",
    title: "Pães",
    items: [
      { name: "Na chapa", price: "2,50" },
      { name: "Com ovo", price: "5,00" },
      { name: "Com requeijão", price: "5,00" },
      { name: "Com cheddar", price: "5,00" },
      { name: "Com queijo coalho", price: "10,00" },
      { name: "Com queijo manteiga", price: "10,00" },
      { name: "Com presunto e mussarela", price: "10,00" },
      { name: "Com frango", price: "12,00" },
      { name: "Com carne de sol na nata", price: "15,00" },
    ],
  },
  {
    id: "recheio",
    title: "Recheio Adicional",
    items: [
      { name: "Ovo", price: "2,50" },
      { name: "Queijo coalho ou manteiga", price: "7,50", note: "cada" },
      { name: "Porção de carne", price: "15,00" },
      { name: "Porção de frango", price: "12,00" },
    ],
  },
  {
    id: "cuscuz",
    title: "Cuscuz",
    items: [
      { name: "Com manteiga", price: "8,00" },
      { name: "Com ovo", price: "10,00" },
      { name: "Com carne de sol", price: "16,00" },
      { name: "Com frango", price: "13,00" },
      { name: "Com queijo coalho ou manteiga", price: "12,00" },
      { name: "Temperado", price: "14,00" },
      { name: "Com calabresa", price: "14,00" },
      { name: "Com carne moída", price: "13,00" },
    ],
  },
  {
    id: "bolo",
    title: "Bolo",
    items: [
      { name: "Fatia do bolo", price: "8,00" },
      { name: "Fatia com cobertura", price: "12,00" },
      { name: "Torta de abacaxi", price: "10,00" },
      { name: "Brownie", price: "10,00" },
      { name: "Brownie com sorvete", price: "14,00" },
    ],
  },
  {
    id: "pratos",
    title: "Pratos Diversos",
    items: [
      { name: "Mungunzá", price: "8,00" },
      { name: "Omelete (frango ou misto)", price: "15,00" },
      { name: "Omelete (carne)", price: "18,00" },
      { name: "Salgados", price: "5,00" },
      { name: "Cachorro quente", price: "8,00" },
      { name: "Empadão", price: "18,00" },
      { name: "Torta salgada", price: "18,00" },
      { name: "Quiche de frango", price: "18,00" },
      { name: "Sopa (frango ou carne)", price: "13,00" },
    ],
  },
  {
    id: "cafe",
    title: "Café",
    items: [
      { name: "Café pequeno", price: "4,00" },
      { name: "Café grande", price: "6,00" },
      { name: "Acréscimo de leite", price: "1,00" },
      { name: "Expresso pequeno", price: "8,00" },
      { name: "Expresso grande", price: "12,00" },
      { name: "Café com amarula", price: "12,00" },
      { name: "Café com licor", price: "10,00" },
      { name: "Café com whisky", price: "10,00" },
      { name: "Café com avelã", price: "15,00" },
      { name: "Cappuccino", price: "15,00" },
      { name: "Cappuccino gelado", price: "18,00" },
      { name: "Cappuccino com avelã", price: "18,00" },
      { name: "Café descafeinado", price: "5,00", note: "pequeno" },
      { name: "Café descafeinado", price: "9,00", note: "grande" },
    ],
  },
  {
    id: "bebidas",
    title: "Bebidas",
    items: [
      { name: "Chocolate quente", price: "15,00" },
      { name: "Chá mate com limão", price: "10,00" },
      { name: "Chá mate abacaxi/hortelã", price: "10,00" },
      { name: "Chá mate", price: "8,00" },
      { name: "Chá", price: "5,00" },
      { name: "Achocolatado", price: "4,00" },
      { name: "Suco na água", price: "8,00" },
      { name: "Suco", price: "10,00", note: "maracujá, cupuaçu, graviola, morango ou manga" },
      { name: "Suco ao leite", price: "+2,00", note: "acréscimo" },
      { name: "Água na garrafa", price: "3,00" },
      { name: "Água no copo", price: "2,00" },
      { name: "Água com gás", price: "4,00" },
    ],
  },
  {
    id: "alcoolicas",
    title: "Bebidas Alcoólicas",
    items: [
      { name: "Dose de whisky", price: "10,00" },
      { name: "Dose de licor", price: "5,00" },
      { name: "Dose de amarula", price: "10,00" },
    ],
  },
  {
    id: "refri",
    title: "Refrigerante",
    items: [
      { name: "Refrigerante lata pequena", price: "5,00" },
      { name: "Refrigerante lata grande", price: "7,00" },
      { name: "Aqua Fresh", price: "7,00" },
      { name: "H2O", price: "7,00" },
      { name: "Grapette", price: "5,00" },
    ],
  },
];

function Sunflower({ className = "", size = 28 }: { className?: string; size?: number }) {
  const petals = Array.from({ length: 12 });
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      aria-hidden
    >
      {petals.map((_, i) => (
        <ellipse
          key={i}
          cx="32"
          cy="14"
          rx="4.5"
          ry="10"
          fill="var(--sunflower)"
          stroke="var(--gold)"
          strokeWidth="0.8"
          transform={`rotate(${(360 / petals.length) * i} 32 32)`}
        />
      ))}
      <circle cx="32" cy="32" r="8" fill="var(--ink)" />
      <circle cx="32" cy="32" r="8" fill="url(#seedGrain)" opacity="0.6" />
      <defs>
        <radialGradient id="seedGrain">
          <stop offset="0%" stopColor="var(--gold)" stopOpacity="0.4" />
          <stop offset="100%" stopColor="var(--ink)" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function Logo({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative grid aspect-square place-items-center rounded-full bg-ink text-cream ${className}`}
      style={{ boxShadow: "inset 0 0 0 1px var(--gold), inset 0 0 0 4px var(--ink), inset 0 0 0 5px color-mix(in oklab, var(--gold) 60%, transparent)" }}
    >
      <div className="text-center leading-none">
        <div className="font-script text-[1.05em]" style={{ color: "var(--sunflower)" }}>
          Cafetteria
        </div>
        <div className="font-display text-[0.55em] uppercase tracking-[0.3em]" style={{ color: "var(--gold)" }}>
          Bistrô
        </div>
      </div>
    </div>
  );
}

function Menu() {
  const [active, setActive] = useState(SECTIONS[0].id);
  const chipsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const chip = chipsRef.current?.querySelector<HTMLElement>(`[data-chip="${active}"]`);
    chip?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [active]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 140;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <div className="mx-auto max-w-3xl px-4 pt-3 pb-2 sm:px-6">
          <div className="flex items-center gap-3">
            <Logo className="h-14 w-14 shrink-0 sm:h-16 sm:w-16" />
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <div className="font-script text-2xl leading-none sm:text-3xl" style={{ color: "var(--gold)" }}>
                  Cafetteria
                </div>
                <Sunflower size={22} className="shrink-0" />
              </div>
              <h1 className="font-display text-2xl font-bold leading-tight sm:text-3xl">
                Bistrô
              </h1>
              <p className="mt-0.5 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                Aberto · Seg a Sáb · 7h — 19h
              </p>
            </div>
          </div>

          {/* Chips */}
          <div
            ref={chipsRef}
            className="-mx-4 mt-3 flex snap-x snap-mandatory gap-2 overflow-x-auto px-4 pb-1 sm:-mx-6 sm:px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {SECTIONS.map((s) => {
              const isActive = active === s.id;
              return (
                <button
                  key={s.id}
                  data-chip={s.id}
                  onClick={() => scrollTo(s.id)}
                  className={`shrink-0 snap-start rounded-full border px-4 py-1.5 text-sm font-medium transition-all ${
                    isActive
                      ? "border-transparent bg-ink text-cream shadow-warm"
                      : "border-border bg-transparent text-muted-foreground hover:border-gold/60 hover:text-foreground"
                  }`}
                  style={
                    isActive
                      ? { backgroundColor: "var(--ink)", color: "var(--cream)" }
                      : undefined
                  }
                >
                  {s.title}
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-3xl px-4 pt-8 pb-4 sm:px-6 sm:pt-12">
        <div className="text-center">
          <div className="mx-auto mb-4 flex items-center justify-center gap-3" style={{ color: "var(--gold)" }}>
            <span className="h-px w-10 bg-current opacity-60" />
            <Sunflower size={26} />
            <span className="text-[10px] font-semibold uppercase tracking-[0.35em]">Cardápio</span>
            <Sunflower size={26} />
            <span className="h-px w-10 bg-current opacity-60" />
          </div>
          <h2 className="font-display text-4xl font-bold leading-[1.05] sm:text-6xl">
            Um cantinho
            <span className="block font-script text-6xl font-normal sm:text-8xl" style={{ color: "var(--gold)" }}>
              aconchegante
            </span>
            para você
          </h2>
          <p className="mx-auto mt-5 max-w-md text-sm text-muted-foreground sm:text-base">
            Sabores de casa, café fresquinho e aquele carinho de sempre. Escolha
            seu favorito e chame na mesa.
          </p>
        </div>
      </section>

      {/* Sections */}
      <main className="mx-auto max-w-3xl px-4 pb-24 sm:px-6">
        {SECTIONS.map((section) => {
          const highlight = section.id === "prato-do-dia";
          return (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-40 pt-10 sm:pt-14"
            >
              <div
                className={
                  highlight
                    ? "relative rounded-2xl p-5 sm:p-8"
                    : ""
                }
                style={
                  highlight
                    ? {
                        border: "3px dashed var(--gold)",
                        outline: "1px solid color-mix(in oklab, var(--gold) 30%, transparent)",
                        outlineOffset: "4px",
                        background:
                          "linear-gradient(180deg, color-mix(in oklab, var(--sunflower) 12%, var(--card)) 0%, var(--card) 100%)",
                        boxShadow: "0 4px 0 color-mix(in oklab, var(--ink) 15%, transparent), var(--shadow-warm)",
                      }
                    : undefined
                }
              >
                {highlight && (
                  <div
                    className="absolute -top-4 left-5 flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] shadow-sm"
                    style={{ backgroundColor: "var(--sunflower)", color: "var(--ink)", border: "2px solid var(--ink)" }}
                  >
                    <Sunflower size={14} />
                    Hoje
                  </div>
                )}

                <div className={`${highlight ? "" : "mb-5"} flex items-baseline gap-3`}>
                  <h3 className="font-display text-3xl font-bold leading-none sm:text-4xl">
                    {section.title}
                  </h3>
                  <span className="h-px flex-1" style={{ backgroundColor: "var(--gold)", opacity: 0.4 }} />
                  <span className="font-script text-lg" style={{ color: "var(--gold)" }}>
                    {String(SECTIONS.indexOf(section) + 1).padStart(2, "0")}
                  </span>
                </div>

                <ul className={highlight ? "mt-6 space-y-3" : "space-y-3"}>
                  {section.items.map((item, i) => (
                    <li key={i} className="group flex items-baseline gap-2">
                      <div className="min-w-0 flex-1">
                        <span className="text-[15px] font-medium leading-snug sm:text-base">
                          {item.name}
                        </span>
                        {item.note && (
                          <span className="ml-2 text-xs italic text-muted-foreground">
                            {item.note}
                          </span>
                        )}
                      </div>
                      <span
                        aria-hidden
                        className="dotted-leader h-[3px] min-w-[16px] flex-1 self-end pb-1 opacity-30"
                      />
                      <span
                        className="shrink-0 whitespace-nowrap font-display text-base font-bold tabular-nums sm:text-lg"
                        style={{ color: highlight ? "var(--gold)" : "var(--foreground)" }}
                      >
                        R$ {item.price}
                      </span>
                    </li>
                  ))}
                </ul>

                {section.footnote && (
                  <p className="mt-5 text-center font-script text-lg" style={{ color: "var(--gold)" }}>
                    {section.footnote}
                  </p>
                )}
              </div>
            </section>
          );
        })}

        {/* Signature block */}
        <div className="mt-16 text-center">
          <div className="mx-auto mb-4 h-px w-20" style={{ backgroundColor: "var(--gold)" }} />
          <p className="font-script text-2xl" style={{ color: "var(--gold)" }}>
            feito com carinho
          </p>
          <p className="mt-1 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            desde sempre
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/60" style={{ backgroundColor: "var(--ink)", color: "var(--cream)" }}>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
          <div className="flex flex-col items-center gap-6 text-center">
            <Logo className="h-20 w-20" />
            <div>
              <div className="font-script text-2xl" style={{ color: "var(--gold-soft)" }}>
                Cafetteria
              </div>
              <div className="font-display text-3xl font-bold" style={{ color: "var(--cream)" }}>
                Bistrô
              </div>
            </div>

            <div className="grid w-full gap-4 sm:grid-cols-3">
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.25em]" style={{ color: "var(--gold)" }}>
                  Endereço
                </div>
                <p className="mt-1 text-sm opacity-90">
                  Rua Principal, 123<br />Centro
                </p>
              </div>
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.25em]" style={{ color: "var(--gold)" }}>
                  WhatsApp
                </div>
                <a
                  href="https://wa.me/5500000000000"
                  className="mt-1 block text-sm underline-offset-4 hover:underline"
                >
                  (00) 00000-0000
                </a>
              </div>
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.25em]" style={{ color: "var(--gold)" }}>
                  Instagram
                </div>
                <a
                  href="https://instagram.com/cafetteriabistro"
                  className="mt-1 block text-sm underline-offset-4 hover:underline"
                >
                  @cafetteriabistro
                </a>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] opacity-70">
              <span className="h-px w-8" style={{ backgroundColor: "var(--gold)" }} />
              <Sunflower size={18} />
              Aberto Seg — Sáb · 7h às 19h
              <Sunflower size={18} />
              <span className="h-px w-8" style={{ backgroundColor: "var(--gold)" }} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
