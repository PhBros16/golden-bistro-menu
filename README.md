# Golden Bistro Menu

Cardápio digital para a Cafetteria Bistrô — protótipo de apresentação, sem backend.

## Stack

- TanStack Start (React 19 + Vite + Nitro)
- Tailwind CSS 4
- shadcn/ui (Radix primitives)

## Features

- Cardápio completo com imagens geradas por IA (placeholder)
- Carrinho local (sem persistência em banco), com persistência via `localStorage`
- Observações por item
- Seleção "Comer aqui" vs "Retirada/Delivery"
- Pedido finalizado via WhatsApp (mensagem pré-formatada)
- Scroll-spy nas categorias
- Animações leves (reveal on scroll, hover, badge do carrinho)

## Rodando localmente

```bash
bun install
bun run dev
```

## Deploy (Vercel)

O projeto usa Nitro com preset `vercel`, configurado em `vercel.json`.

1. Import Git Repository na Vercel
2. Build Command: `npm run build` (já vem do `vercel.json`)
3. Deploy

## Configuração pendente antes de produção

- `WHATSAPP_NUMBER` em `src/routes/index.tsx` está com número de teste — trocar pelo número real do estabelecimento antes de publicar
- Imagens dos pratos são geradas por IA — substituir por fotos reais quando disponíveis
- Sem painel administrativo nesta versão (cardápio fixo)
