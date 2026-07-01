import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Plus,
  Minus,
  ShoppingBag,
  MessageCircle,
  Utensils,
  Bike,
} from "lucide-react";
import logoAsset from "@/assets/cafetteria-logo.png.asset.json";
// existing hero-ish images
import imgTapiocaCarne from "@/assets/dish-tapioca.jpg";
import imgCuscuzCarne from "@/assets/dish-cuscuz.jpg";
import imgArrozLeite from "@/assets/dish-arroz-leite.jpg";
import imgBrownieSorvete from "@/assets/dish-brownie.jpg";
import imgCappuccino from "@/assets/dish-cappuccino.jpg";
import imgPaoChapa from "@/assets/dish-pao.jpg";
import imgLasanha from "@/assets/dish-lasanha.jpg";
import imgBolo from "@/assets/dish-bolo.jpg";
// new images
import imgPanqueca from "@/assets/dish-panqueca.jpg";
import imgEscondidinho from "@/assets/dish-escondidinho.jpg";
import imgFricasse from "@/assets/dish-fricasse.jpg";
import imgSalpicao from "@/assets/dish-salpicao.jpg";
import imgTapiocaQueijo from "@/assets/dish-tapioca-queijo.jpg";
import imgTapiocaFrango from "@/assets/dish-tapioca-frango.jpg";
import imgTapiocaOvo from "@/assets/dish-tapioca-ovo.jpg";
import imgTapiocaCalabresa from "@/assets/dish-tapioca-calabresa.jpg";
import imgCrepioca from "@/assets/dish-crepioca.jpg";
import imgPaoOvo from "@/assets/dish-pao-ovo.jpg";
import imgPaoRequeijao from "@/assets/dish-pao-requeijao.jpg";
import imgPaoQueijo from "@/assets/dish-pao-queijo.jpg";
import imgPaoFrango from "@/assets/dish-pao-frango.jpg";
import imgPaoPresunto from "@/assets/dish-pao-presunto.jpg";
import imgPaoCarne from "@/assets/dish-pao-carne.jpg";
import imgCuscuzSimples from "@/assets/dish-cuscuz-simples.jpg";
import imgCuscuzFrango from "@/assets/dish-cuscuz-frango.jpg";
import imgCuscuzQueijo from "@/assets/dish-cuscuz-queijo.jpg";
import imgCuscuzCalabresa from "@/assets/dish-cuscuz-calabresa.jpg";
import imgTortaAbacaxi from "@/assets/dish-torta-abacaxi.jpg";
import imgBoloCobertura from "@/assets/dish-bolo-cobertura.jpg";
import imgBrownieSimples from "@/assets/dish-brownie-simples.jpg";
import imgMungunza from "@/assets/dish-mungunza.jpg";
import imgOmelete from "@/assets/dish-omelete.jpg";
import imgSalgado from "@/assets/dish-salgado.jpg";
import imgCachorroQuente from "@/assets/dish-cachorro-quente.jpg";
import imgEmpadao from "@/assets/dish-empadao.jpg";
import imgQuiche from "@/assets/dish-quiche.jpg";
import imgSopa from "@/assets/dish-sopa.jpg";
import imgCafeSimples from "@/assets/dish-cafe-simples.jpg";
import imgExpresso from "@/assets/dish-expresso.jpg";
import imgCafeLicor from "@/assets/dish-cafe-licor.jpg";
import imgCappuccinoGelado from "@/assets/dish-cappuccino-gelado.jpg";
import imgChocolateQuente from "@/assets/dish-chocolate-quente.jpg";
import imgChaMate from "@/assets/dish-cha-mate.jpg";
import imgCha from "@/assets/dish-cha.jpg";
import imgSuco from "@/assets/dish-suco.jpg";
import imgAgua from "@/assets/dish-agua.jpg";
import imgWhisky from "@/assets/dish-whisky.jpg";
import imgAmarula from "@/assets/dish-amarula.jpg";
import imgRefriLata from "@/assets/dish-refri-lata.jpg";
import imgAquaFresh from "@/assets/dish-aqua-fresh.jpg";
import imgRecheio from "@/assets/dish-recheio.jpg";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export const Route = createFileRoute("/")({
  component: Menu,
});

type Item = { name: string; price: string; note?: string; image?: string };
type Section = { id: string; title: string; items: Item[]; footnote?: string };

const SECTIONS: Section[] = [
  {
    id: "prato-do-dia",
    title: "Prato do Dia",
    footnote: "Consultar prato do dia disponível",
    items: [
      { name: "Arroz de leite com carne de sol", price: "20,00", image: imgArrozLeite },
      { name: "Lasanha de carne", price: "20,00", image: imgLasanha },
      { name: "Lasanha de frango", price: "20,00", image: imgLasanha },
      { name: "1 Panqueca", price: "10,00", image: imgPanqueca },
      { name: "1 Panqueca com arroz", price: "14,00", image: imgPanqueca },
      { name: "2 Panquecas com arroz", price: "20,00", image: imgPanqueca },
      { name: "Escondidinho de macaxeira", price: "20,00", image: imgEscondidinho },
      { name: "Fricassê de frango", price: "20,00", image: imgFricasse },
      { name: "Salpicão", price: "20,00", image: imgSalpicao },
    ],
  },
  {
    id: "tapioca",
    title: "Tapioca",
    items: [
      { name: "Com manteiga", price: "5,00", image: imgTapiocaQueijo },
      { name: "Com ovo", price: "7,00", image: imgTapiocaOvo },
      { name: "Com queijo coalho", price: "12,00", image: imgTapiocaQueijo },
      { name: "Com queijo manteiga", price: "12,00", image: imgTapiocaQueijo },
      { name: "Com mista", price: "12,00", image: imgTapiocaQueijo },
      { name: "Com creme de frango", price: "14,00", image: imgTapiocaFrango },
      { name: "Com calabresa", price: "14,00", image: imgTapiocaCalabresa },
      { name: "Com carne de sol", price: "15,00", image: imgTapiocaCarne },
      { name: "Com carne moída", price: "13,00", image: imgTapiocaCarne },
      { name: "Crepioca de frango", price: "15,00", image: imgTapiocaFrango },
      { name: "Crepioca de queijo e presunto", price: "13,00", image: imgCrepioca },
      { name: "Crepioca de carne de sol", price: "16,00", image: imgCrepioca },
    ],
  },
  {
    id: "paes",
    title: "Pães",
    items: [
      { name: "Na chapa", price: "2,50", image: imgPaoChapa },
      { name: "Com ovo", price: "5,00", image: imgPaoOvo },
      { name: "Com requeijão", price: "5,00", image: imgPaoRequeijao },
      { name: "Com cheddar", price: "5,00", image: imgPaoRequeijao },
      { name: "Com queijo coalho", price: "10,00", image: imgPaoQueijo },
      { name: "Com queijo manteiga", price: "10,00", image: imgPaoQueijo },
      { name: "Com presunto e mussarela", price: "10,00", image: imgPaoPresunto },
      { name: "Com frango", price: "12,00", image: imgPaoFrango },
      { name: "Com carne de sol na nata", price: "15,00", image: imgPaoCarne },
    ],
  },
  {
    id: "recheio",
    title: "Recheio Adicional",
    items: [
      { name: "Ovo", price: "2,50", image: imgRecheio },
      { name: "Queijo coalho ou manteiga", price: "7,50", note: "cada", image: imgRecheio },
      { name: "Porção de carne", price: "15,00", image: imgRecheio },
      { name: "Porção de frango", price: "12,00", image: imgRecheio },
    ],
  },
  {
    id: "cuscuz",
    title: "Cuscuz",
    items: [
      { name: "Com manteiga", price: "8,00", image: imgCuscuzSimples },
      { name: "Com ovo", price: "10,00", image: imgCuscuzSimples },
      { name: "Com carne de sol", price: "16,00", image: imgCuscuzCarne },
      { name: "Com frango", price: "13,00", image: imgCuscuzFrango },
      { name: "Com queijo coalho ou manteiga", price: "12,00", image: imgCuscuzQueijo },
      { name: "Temperado", price: "14,00", image: imgCuscuzSimples },
      { name: "Com calabresa", price: "14,00", image: imgCuscuzCalabresa },
      { name: "Com carne moída", price: "13,00", image: imgCuscuzFrango },
    ],
  },
  {
    id: "bolo",
    title: "Bolo",
    items: [
      { name: "Fatia do bolo", price: "8,00", image: imgBolo },
      { name: "Fatia com cobertura", price: "12,00", image: imgBoloCobertura },
      { name: "Torta de abacaxi", price: "10,00", image: imgTortaAbacaxi },
      { name: "Brownie", price: "10,00", image: imgBrownieSimples },
      { name: "Brownie com sorvete", price: "14,00", image: imgBrownieSorvete },
    ],
  },
  {
    id: "pratos",
    title: "Pratos Diversos",
    items: [
      { name: "Mungunzá", price: "8,00", image: imgMungunza },
      { name: "Omelete (frango ou misto)", price: "15,00", image: imgOmelete },
      { name: "Omelete (carne)", price: "18,00", image: imgOmelete },
      { name: "Salgados", price: "5,00", image: imgSalgado },
      { name: "Cachorro quente", price: "8,00", image: imgCachorroQuente },
      { name: "Empadão", price: "18,00", image: imgEmpadao },
      { name: "Torta salgada", price: "18,00", image: imgQuiche },
      { name: "Quiche de frango", price: "18,00", image: imgQuiche },
      { name: "Sopa (frango ou carne)", price: "13,00", image: imgSopa },
    ],
  },
  {
    id: "cafe",
    title: "Café",
    items: [
      { name: "Café pequeno", price: "4,00", image: imgCafeSimples },
      { name: "Café grande", price: "6,00", image: imgCafeSimples },
      { name: "Acréscimo de leite", price: "1,00", image: imgCafeSimples },
      { name: "Expresso pequeno", price: "8,00", image: imgExpresso },
      { name: "Expresso grande", price: "12,00", image: imgExpresso },
      { name: "Café com amarula", price: "12,00", image: imgCafeLicor },
      { name: "Café com licor", price: "10,00", image: imgCafeLicor },
      { name: "Café com whisky", price: "10,00", image: imgCafeLicor },
      { name: "Café com avelã", price: "15,00", image: imgCafeLicor },
      { name: "Cappuccino", price: "15,00", image: imgCappuccino },
      { name: "Cappuccino gelado", price: "18,00", image: imgCappuccinoGelado },
      { name: "Cappuccino com avelã", price: "18,00", image: imgCappuccino },
      { name: "Café descafeinado", price: "5,00", note: "pequeno", image: imgCafeSimples },
      { name: "Café descafeinado", price: "9,00", note: "grande", image: imgCafeSimples },
    ],
  },
  {
    id: "bebidas",
    title: "Bebidas",
    items: [
      { name: "Chocolate quente", price: "15,00", image: imgChocolateQuente },
      { name: "Chá mate com limão", price: "10,00", image: imgChaMate },
      { name: "Chá mate abacaxi/hortelã", price: "10,00", image: imgChaMate },
      { name: "Chá mate", price: "8,00", image: imgChaMate },
      { name: "Chá", price: "5,00", image: imgCha },
      { name: "Achocolatado", price: "4,00", image: imgChocolateQuente },
      { name: "Suco na água", price: "8,00", image: imgSuco },
      { name: "Suco", price: "10,00", note: "maracujá, cupuaçu, graviola, morango ou manga", image: imgSuco },
      { name: "Suco ao leite", price: "+2,00", note: "acréscimo" },
      { name: "Água na garrafa", price: "3,00", image: imgAgua },
      { name: "Água no copo", price: "2,00", image: imgAgua },
      { name: "Água com gás", price: "4,00", image: imgAgua },
    ],
  },
  {
    id: "alcoolicas",
    title: "Bebidas Alcoólicas",
    items: [
      { name: "Dose de whisky", price: "10,00", image: imgWhisky },
      { name: "Dose de licor", price: "5,00", image: imgAmarula },
      { name: "Dose de amarula", price: "10,00", image: imgAmarula },
    ],
  },
  {
    id: "refri",
    title: "Refrigerante",
    items: [
      { name: "Refrigerante lata pequena", price: "5,00", image: imgRefriLata },
      { name: "Refrigerante lata grande", price: "7,00", image: imgRefriLata },
      { name: "Aqua Fresh", price: "7,00", image: imgAquaFresh },
      { name: "H2O", price: "7,00", image: imgAquaFresh },
      { name: "Grapette", price: "5,00", image: imgRefriLata },
    ],
  },
];


const WHATSAPP_NUMBER = "5584991362838"; // TEMP: número de teste até liberação dos donos

function priceToNumber(price: string): number {
  return parseFloat(price.replace(/[+\s]/g, "").replace(",", "."));
}
function formatBRL(n: number): string {
  return n.toFixed(2).replace(".", ",");
}

// ----- Sunflower & Logo -----
function Sunflower({
  className = "",
  size = 28,
  spin = false,
}: {
  className?: string;
  size?: number;
  spin?: boolean;
}) {
  const petals = Array.from({ length: 12 });
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={`${spin ? "spin-slow" : ""} ${className}`}
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
    </svg>
  );
}

function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt="Cafetteria Bistrô"
      className={`aspect-square object-contain ${className}`}
      style={{ filter: "drop-shadow(0 6px 12px color-mix(in oklab, var(--ink) 30%, transparent))" }}
    />
  );
}

// ----- Cart -----
type CartLine = { name: string; unitPrice: number; qty: number; note?: string; obs?: string };

const CART_STORAGE_KEY = "cafetteria-cart-v1";

function useCart() {
  const [lines, setLines] = useState<Record<string, CartLine>>(() => {
    if (typeof window === "undefined") return {};
    try {
      const raw = window.localStorage.getItem(CART_STORAGE_KEY);
      return raw ? (JSON.parse(raw) as Record<string, CartLine>) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(lines));
    } catch {
      /* ignore quota / private mode */
    }
  }, [lines]);

  const key = (i: Item) => `${i.name}${i.note ? "|" + i.note : ""}`;

  const add = (item: Item) => {
    const k = key(item);
    setLines((prev) => {
      const existing = prev[k];
      return {
        ...prev,
        [k]: existing
          ? { ...existing, qty: existing.qty + 1 }
          : { name: item.name, unitPrice: priceToNumber(item.price), qty: 1, note: item.note },
      };
    });
  };
  const inc = (k: string) => setLines((p) => ({ ...p, [k]: { ...p[k], qty: p[k].qty + 1 } }));
  const dec = (k: string) =>
    setLines((p) => {
      const l = p[k];
      if (!l) return p;
      if (l.qty <= 1) {
        const { [k]: _, ...rest } = p;
        return rest;
      }
      return { ...p, [k]: { ...l, qty: l.qty - 1 } };
    });
  const setObs = (k: string, obs: string) =>
    setLines((p) => (p[k] ? { ...p, [k]: { ...p[k], obs } } : p));
  const clear = () => setLines({});

  const items = Object.entries(lines).map(([k, l]) => ({ k, ...l }));
  const count = items.reduce((s, l) => s + l.qty, 0);
  const total = items.reduce((s, l) => s + l.qty * l.unitPrice, 0);

  return { items, count, total, add, inc, dec, setObs, clear };
}


// ----- Animated count-up for total -----
function useCountUp(value: number, duration = 260) {
  const [display, setDisplay] = useState(value);
  const fromRef = useRef(value);
  useEffect(() => {
    const from = fromRef.current;
    const to = value;
    if (from === to) return;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 2);
      setDisplay(from + (to - from) * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
      else fromRef.current = to;
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value, duration]);
  return display;
}

// ----- Scroll reveal -----
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

// ----- Section renderer -----
function SectionBlock({
  section,
  index,
  onAdd,
}: {
  section: Section;
  index: number;
  onAdd: (i: Item) => void;
}) {
  const ref = useReveal<HTMLElement>();
  const highlight = section.id === "prato-do-dia";
  return (
    <section ref={ref} id={section.id} className="reveal scroll-mt-40 pt-10 sm:pt-14">
      <div
        className={highlight ? "relative rounded-2xl p-5 sm:p-8" : ""}
        style={
          highlight
            ? {
                border: "3px dashed var(--gold)",
                outline: "1px solid color-mix(in oklab, var(--gold) 30%, transparent)",
                outlineOffset: "4px",
                background:
                  "linear-gradient(180deg, color-mix(in oklab, var(--sunflower) 12%, var(--card)) 0%, var(--card) 100%)",
                boxShadow:
                  "0 4px 0 color-mix(in oklab, var(--ink) 15%, transparent), var(--shadow-warm)",
              }
            : undefined
        }
      >
        {highlight && (
          <div
            className="chalk-corners pulse-soft absolute -top-4 left-5 flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em]"
            style={{
              backgroundColor: "var(--sunflower)",
              color: "var(--ink)",
              border: "2px solid var(--ink)",
            }}
          >
            Hoje
          </div>
        )}

        <div className={`${highlight ? "" : "mb-5"} flex items-baseline gap-3`}>
          <h3 className="font-display text-3xl font-bold leading-none sm:text-4xl">
            {section.title}
          </h3>
          <span className="h-px flex-1" style={{ backgroundColor: "var(--gold)", opacity: 0.4 }} />
          <span className="font-script text-lg" style={{ color: "var(--gold)" }}>
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <ul className={highlight ? "mt-6 space-y-3" : "space-y-2"}>
          {section.items.map((item, i) => {
            const isAddon = item.price.startsWith("+");
            return (
              <li
                key={i}
                className={`${highlight ? "" : "item-row"} group flex items-center gap-3`}
              >
                {item.image ? (
                  <div
                    className="dish-thumb h-14 w-14 shrink-0 shadow-sm sm:h-16 sm:w-16"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      width={64}
                      height={64}
                    />
                  </div>
                ) : (
                  <div className="h-14 w-14 shrink-0 sm:h-16 sm:w-16" aria-hidden />
                )}
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-[15px] font-medium leading-snug sm:text-base">
                      {item.name}
                    </span>
                    {item.note && (
                      <span className="text-xs italic text-muted-foreground">
                        {item.note}
                      </span>
                    )}
                  </div>
                </div>
                <span
                  className="shrink-0 whitespace-nowrap font-display text-base font-bold tabular-nums sm:text-lg"
                  style={{ color: highlight ? "var(--gold)" : "var(--foreground)" }}
                >
                  R$ {item.price}
                </span>
                {!isAddon && (
                  <button
                    type="button"
                    aria-label={`Adicionar ${item.name}`}
                    onClick={() => onAdd(item)}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-transform duration-200 ease-out hover:scale-110 active:scale-90"
                    style={{
                      backgroundColor: "var(--ink)",
                      color: "var(--sunflower)",
                      boxShadow: "0 4px 12px -4px color-mix(in oklab, var(--ink) 60%, transparent)",
                    }}
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                )}
              </li>
            );
          })}
        </ul>

        {section.footnote && (
          <p className="mt-5 text-center font-script text-lg" style={{ color: "var(--gold)" }}>
            {section.footnote}
          </p>
        )}
      </div>
    </section>
  );
}

// ----- Cart Dialog with order type + payment flow -----
type OrderType = "dine-in" | "takeout";
type Step = "cart" | "order-type" | "dine-confirm" | "takeout-confirm";

function CartDialog({
  open,
  onOpenChange,
  cart,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  cart: ReturnType<typeof useCart>;
}) {
  const [step, setStep] = useState<Step>("cart");
  const [table, setTable] = useState("");
  const [orderType, setOrderType] = useState<OrderType | null>(null);

  const animatedTotal = useCountUp(cart.total);

  useEffect(() => {
    if (open) setStep("cart");
  }, [open]);

  const buildMessage = () => {
    const lines = cart.items
      .map((l) => {
        const variant = l.note ? ` (${l.note})` : "";
        const obs = l.obs?.trim() ? `\n   ↳ obs: ${l.obs.trim()}` : "";
        return `• ${l.name}${variant} x${l.qty} — R$ ${formatBRL(l.qty * l.unitPrice)}${obs}`;
      })
      .join("\n");
    const typeLabel = orderType === "dine-in" ? "Comer aqui" : "Retirar / Delivery";
    const location = orderType === "dine-in" ? `Mesa: ${table || "—"}` : `Retirada / Delivery`;
    return (
      `*Pedido - Cafetteria Bistrô*\n` +
      `${typeLabel}\n${location}\n\n` +
      `${lines}\n\n` +
      `*Total:* R$ ${formatBRL(cart.total)}`
    );
  };

  const sendWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildMessage())}`;
    window.open(url, "_blank", "noopener,noreferrer");
    onOpenChange(false);
    setTimeout(() => {
      cart.clear();
      setTable("");
      setOrderType(null);
    }, 400);
  };

  const canProceed = cart.count > 0;


  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-h-[90vh] overflow-y-auto sm:max-w-md"
        style={{ backgroundColor: "var(--card)" }}
      >
        {step === "cart" && (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-2xl">
                Seu pedido
                <span className="font-script ml-2 text-xl" style={{ color: "var(--gold)" }}>
                  ({cart.count} {cart.count === 1 ? "item" : "itens"})
                </span>
              </DialogTitle>
              <DialogDescription>Revise os itens antes de continuar.</DialogDescription>
            </DialogHeader>

            {cart.count === 0 ? (
              <p className="py-8 text-center text-sm text-muted-foreground">
                Seu carrinho está vazio.
              </p>
            ) : (
              <>
                <ul className="divide-y" style={{ borderColor: "var(--border)" }}>
                  {cart.items.map((l) => (
                    <li key={l.k} className="flex items-center gap-3 py-3">
                      <div className="min-w-0 flex-1">
                        <div className="truncate text-sm font-medium">{l.name}</div>
                        {l.note && (
                          <div className="text-xs italic text-muted-foreground">{l.note}</div>
                        )}
                        <div className="mt-0.5 text-xs text-muted-foreground">
                          R$ {formatBRL(l.unitPrice)} · Subtotal R${" "}
                          <span className="font-semibold" style={{ color: "var(--gold)" }}>
                            {formatBRL(l.qty * l.unitPrice)}
                          </span>
                        </div>
                      </div>
                      <div
                        className="flex items-center gap-2 rounded-full px-1 py-1"
                        style={{ backgroundColor: "var(--muted)" }}
                      >
                        <button
                          onClick={() => cart.dec(l.k)}
                          aria-label="Diminuir"
                          className="flex h-7 w-7 items-center justify-center rounded-full bg-transparent transition-transform duration-150 hover:bg-black/10 active:scale-90"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span
                          key={l.qty}
                          className="tick-in w-5 text-center text-sm font-bold tabular-nums"
                        >
                          {l.qty}
                        </span>
                        <button
                          onClick={() => cart.inc(l.k)}
                          aria-label="Aumentar"
                          className="flex h-7 w-7 items-center justify-center rounded-full transition-transform duration-150 active:scale-90"
                          style={{ backgroundColor: "var(--ink)", color: "var(--sunflower)" }}
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>

                <div
                  className="mt-2 flex items-center justify-between rounded-lg p-3"
                  style={{ backgroundColor: "color-mix(in oklab, var(--sunflower) 15%, transparent)" }}
                >
                  <span className="font-display text-lg font-bold">Total</span>
                  <span
                    className="font-display text-2xl font-bold tabular-nums"
                    style={{ color: "var(--ink)" }}
                  >
                    R$ {formatBRL(animatedTotal)}
                  </span>
                </div>

                <button
                  onClick={() => setStep("order-type")}
                  disabled={!canProceed}
                  className="mt-4 w-full rounded-full py-3 text-sm font-bold uppercase tracking-widest transition-opacity disabled:cursor-not-allowed disabled:opacity-40"
                  style={{ backgroundColor: "var(--ink)", color: "var(--sunflower)" }}
                >
                  Continuar
                </button>
                <button
                  onClick={() => cart.clear()}
                  className="mt-2 w-full text-xs text-muted-foreground underline underline-offset-4"
                >
                  Limpar carrinho
                </button>
              </>
            )}
          </>
        )}

        {step === "order-type" && (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-2xl">Onde você vai comer?</DialogTitle>
              <DialogDescription>Escolha para continuar com o pedido.</DialogDescription>
            </DialogHeader>

            <div className="grid gap-3 pt-2 sm:grid-cols-2">
              <button
                onClick={() => setOrderType("dine-in")}
                className={`flex flex-col items-center gap-2 rounded-xl p-6 transition-transform duration-200 hover:scale-[1.02] active:scale-95 ${
                  orderType === "dine-in" ? "ring-2 ring-offset-2" : ""
                }`}
                style={{
                  border: "2px dashed var(--gold)",
                  backgroundColor:
                    orderType === "dine-in"
                      ? "color-mix(in oklab, var(--sunflower) 25%, var(--card))"
                      : "color-mix(in oklab, var(--sunflower) 8%, var(--card))",
                }}
              >
                <Utensils className="h-10 w-10" style={{ color: "var(--gold)" }} />
                <span className="font-display text-lg font-bold">Vou comer aqui</span>
                <span className="text-center text-xs text-muted-foreground">
                  Atendimento na mesa
                </span>
              </button>
              <button
                onClick={() => setOrderType("takeout")}
                className={`flex flex-col items-center gap-2 rounded-xl p-6 transition-transform duration-200 hover:scale-[1.02] active:scale-95 ${
                  orderType === "takeout" ? "ring-2 ring-offset-2" : ""
                }`}
                style={{
                  border: "2px dashed var(--gold)",
                  backgroundColor:
                    orderType === "takeout"
                      ? "color-mix(in oklab, var(--sunflower) 25%, var(--card))"
                      : "color-mix(in oklab, var(--sunflower) 8%, var(--card))",
                }}
              >
                <Bike className="h-10 w-10" style={{ color: "var(--gold)" }} />
                <span className="font-display text-lg font-bold">Retirar / Delivery</span>
                <span className="text-center text-xs text-muted-foreground">
                  Pagar por Pix ou na retirada
                </span>
              </button>
            </div>

            {orderType === "dine-in" && (
              <label className="mt-4 block">
                <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Número da mesa
                </span>
                <Input
                  type="text"
                  inputMode="numeric"
                  placeholder="Ex: 12"
                  value={table}
                  onChange={(e) => setTable(e.target.value)}
                  className="text-base"
                />
              </label>
            )}

            <button
              onClick={() => {
                setStep(orderType === "dine-in" ? "dine-confirm" : "takeout-confirm");
              }}
              disabled={!orderType || (orderType === "dine-in" && !table.trim())}
              className="mt-4 w-full rounded-full py-3 text-sm font-bold uppercase tracking-widest transition-opacity disabled:cursor-not-allowed disabled:opacity-40"
              style={{ backgroundColor: "var(--ink)", color: "var(--sunflower)" }}
            >
              Continuar
            </button>
            <button
              onClick={() => setStep("cart")}
              className="mt-2 w-full text-xs text-muted-foreground underline underline-offset-4"
            >
              ← Voltar ao carrinho
            </button>
          </>
        )}

        {step === "dine-confirm" && (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-2xl">Confirme seu pedido</DialogTitle>
              <DialogDescription>
                Mesa <strong>{table}</strong> · Total <strong>R$ {formatBRL(cart.total)}</strong>
              </DialogDescription>
            </DialogHeader>

            <div
              className="rounded-xl p-5 text-center"
              style={{
                border: "2px dashed var(--gold)",
                backgroundColor: "color-mix(in oklab, var(--sunflower) 12%, var(--card))",
              }}
            >
              <Utensils className="mx-auto mb-2 h-10 w-10" style={{ color: "var(--gold)" }} />
              <p className="font-script text-2xl leading-snug" style={{ color: "var(--ink)" }}>
                Revise seu pedido
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                O pedido só é enviado para a cozinha quando você confirmar pelo WhatsApp.
              </p>
            </div>

            <button
              onClick={sendWhatsApp}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm font-bold uppercase tracking-widest transition-transform hover:scale-[1.02] active:scale-95"
              style={{ backgroundColor: "#25D366", color: "white" }}
            >
              <MessageCircle className="h-4 w-4" />
              Enviar pedido para a cozinha
            </button>
            <button
              onClick={() => setStep("order-type")}
              className="mt-2 w-full text-xs text-muted-foreground underline underline-offset-4"
            >
              ← Voltar
            </button>
          </>
        )}

        {step === "takeout-confirm" && (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-2xl">Confirme seu pedido</DialogTitle>
              <DialogDescription>
                Retirada / Delivery · Total <strong>R$ {formatBRL(cart.total)}</strong>
              </DialogDescription>
            </DialogHeader>

            <div
              className="rounded-xl p-5 text-center"
              style={{
                border: "2px dashed var(--gold)",
                backgroundColor: "color-mix(in oklab, var(--sunflower) 12%, var(--card))",
              }}
            >
              <Bike className="mx-auto mb-2 h-10 w-10" style={{ color: "var(--gold)" }} />
              <p className="font-script text-2xl leading-snug" style={{ color: "var(--ink)" }}>
                Revise seu pedido
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Ao enviar, um atendente confirma o pedido pelo WhatsApp e combina o pagamento
                (Pix ou cartão na retirada).
              </p>
            </div>

            <button
              onClick={sendWhatsApp}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm font-bold uppercase tracking-widest transition-transform hover:scale-[1.02] active:scale-95"
              style={{ backgroundColor: "#25D366", color: "white" }}
            >
              <MessageCircle className="h-4 w-4" />
              Enviar pedido para a cozinha
            </button>
            <button
              onClick={() => setStep("order-type")}
              className="mt-2 w-full text-xs text-muted-foreground underline underline-offset-4"
            >
              ← Voltar
            </button>
          </>
        )}

      </DialogContent>
    </Dialog>
  );
}

// ----- Main -----
function Menu() {
  const [active, setActive] = useState(SECTIONS[0].id);
  const [cartOpen, setCartOpen] = useState(false);
  const chipsRef = useRef<HTMLDivElement>(null);
  const cart = useCart();

  // Bounce FAB badge whenever count increments
  const [badgeBounce, setBadgeBounce] = useState(0);
  const prevCount = useRef(cart.count);
  useEffect(() => {
    if (cart.count > prevCount.current) setBadgeBounce((v) => v + 1);
    prevCount.current = cart.count;
  }, [cart.count]);

  // Scroll-spy: highlight active chip when its section is in viewport
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

  const onAdd = (item: Item) => {
    cart.add(item);
    toast.success(`${item.name} adicionado`, { duration: 1400 });
  };

  const animatedFabTotal = useCountUp(cart.total);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <div className="mx-auto max-w-3xl px-4 pt-3 pb-2 sm:px-6">
          <div className="flex items-center gap-3">
            <Logo className="h-14 w-14 shrink-0 sm:h-16 sm:w-16" />
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <div
                  className="font-script text-2xl leading-none sm:text-3xl"
                  style={{ color: "var(--gold)" }}
                >
                  Cafetteria
                </div>
                <Sunflower size={22} spin className="shrink-0" />
              </div>
              <h1 className="font-display text-2xl font-bold leading-tight sm:text-3xl">Bistrô</h1>
              <p className="mt-0.5 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                Aberto · Todos os dias · 14h — 20h
              </p>
            </div>
          </div>

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
                  className={`shrink-0 snap-start rounded-full border px-4 py-1.5 text-sm font-medium transition-[background-color,color,border-color,box-shadow,transform] duration-200 ease-out ${
                    isActive
                      ? "border-transparent shadow-warm"
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
          <div
            className="mx-auto mb-4 flex items-center justify-center gap-3"
            style={{ color: "var(--gold)" }}
          >
            <span className="h-px w-16 bg-current opacity-60" />
            <Sunflower size={28} />
            <span className="h-px w-16 bg-current opacity-60" />
          </div>
          <div
            className="mb-3 text-[10px] font-semibold uppercase tracking-[0.35em]"
            style={{ color: "var(--gold)" }}
          >
            Cardápio
          </div>
          <h2 className="font-display text-4xl font-bold leading-[1.05] sm:text-6xl">
            Um cantinho
            <span
              className="block font-script text-6xl font-normal sm:text-8xl"
              style={{ color: "var(--gold)" }}
            >
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
      <main className="mx-auto max-w-3xl px-4 pb-32 sm:px-6">
        {SECTIONS.map((section, i) => (
          <SectionBlock key={section.id} section={section} index={i} onAdd={onAdd} />
        ))}

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
      <footer
        className="border-t border-border/60"
        style={{ backgroundColor: "var(--ink)", color: "var(--cream)" }}
      >
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
              <a
                href="https://www.google.com/maps/search/?api=1&query=R.+Brg.+Eduardo+Gomes%2C+202b+-+Ema%C3%BAs%2C+Parnamirim+-+RN%2C+59149-390"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-lg p-2 transition-colors hover:bg-white/5"
              >
                <div
                  className="text-[10px] font-semibold uppercase tracking-[0.25em]"
                  style={{ color: "var(--gold)" }}
                >
                  Endereço
                </div>
                <p className="mt-1 text-sm opacity-90 group-hover:opacity-100">
                  R. Brg. Eduardo Gomes, 202b
                  <br />
                  Emaús, Parnamirim - RN
                </p>
              </a>
              <a
                href="https://wa.me/558421312259"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-lg p-2 transition-colors hover:bg-white/5"
              >
                <div
                  className="text-[10px] font-semibold uppercase tracking-[0.25em]"
                  style={{ color: "var(--gold)" }}
                >
                  WhatsApp
                </div>
                <p className="mt-1 text-sm opacity-90 group-hover:opacity-100">
                  +55 (84) 2131-2259
                </p>
              </a>
              <a
                href="https://www.instagram.com/cafetteriabistro/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-lg p-2 transition-colors hover:bg-white/5"
              >
                <div
                  className="text-[10px] font-semibold uppercase tracking-[0.25em]"
                  style={{ color: "var(--gold)" }}
                >
                  Instagram
                </div>
                <p className="mt-1 text-sm opacity-90 group-hover:opacity-100">
                  @CafetteriaBistro
                </p>
              </a>
            </div>

            <div className="mt-4 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] opacity-70">
              <span className="h-px w-10" style={{ backgroundColor: "var(--gold)" }} />
              <Sunflower size={18} />
              <span>Aberto todos os dias · 14h às 20h</span>
              <span className="h-px w-10" style={{ backgroundColor: "var(--gold)" }} />
            </div>
          </div>
        </div>
      </footer>

      {/* Floating cart FAB */}
      {cart.count > 0 && (
        <button
          onClick={() => setCartOpen(true)}
          className="fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3 rounded-full px-5 py-3 text-sm font-bold shadow-warm transition-transform hover:scale-105 active:scale-95"
          style={{
            backgroundColor: "var(--ink)",
            color: "var(--sunflower)",
            border: "2px solid var(--sunflower)",
            boxShadow: "0 12px 28px -8px rgba(0,0,0,0.5)",
          }}
        >
          <ShoppingBag className="h-5 w-5" />
          <span
            key={badgeBounce}
            className="bounce-once inline-flex items-center gap-2 tabular-nums"
          >
            🛒 Carrinho ({cart.count}) · R$ {formatBRL(animatedFabTotal)}
          </span>
        </button>
      )}

      <CartDialog open={cartOpen} onOpenChange={setCartOpen} cart={cart} />
    </div>
  );
}
