# Victor Ramos · Correspondente bancário Caixa (landing page)

Landing page estática (HTML + Tailwind compilado + JS puro), mobile-first, focada em levar o visitante ao WhatsApp para uma simulação gratuita.

**Link (GitHub Pages):** https://davimbraz-del.github.io/victor-ramos/

## Como publicar (uma vez só)

1. No GitHub, abra o repositório → **Settings** → **Pages**.
2. Em *Build and deployment*, escolha **Deploy from a branch**.
3. Branch: **main**, pasta: **/ (root)** → **Save**.
4. Em 1–2 minutos o site fica no ar no link acima.

## O que editar antes de mandar para o público

| O quê | Onde |
|---|---|
| Número do WhatsApp e mensagem padrão | `assets/js/main.js`, objeto `CONFIG` no topo |
| Contadores (+300 famílias, +5 anos) | `index.html`, atributos `data-count` na seção "FAIXA DE CONFIANÇA" (troque também o número dentro do `<span>`) |
| Foto do Victor (hero e "Sobre") | coloque `assets/img/victor.png` (PNG recortado, fundo transparente) e troque o `src` das duas `<img>` que hoje apontam para `victor-placeholder.svg` |
| Selo oficial de correspondente | bloco "SELO" no `index.html` — **só use se houver autorização** |
| Reels "Fica ligado!" | em cada card: `href` = link do Reel; `--thumb:url('assets/img/sua-capa.jpg')` no `style` para usar a capa real |
| Depoimentos | seção "DEPOIMENTOS" — **somente depoimentos reais, com autorização**. Duplique o `<figure>` modelo |
| CRECI / CNPJ | rodapé, `[preencher]` |
| Domínio próprio | troque `https://davimbraz-del.github.io/victor-ramos/` em `index.html` (canonical, Open Graph, JSON-LD) |

Textos comuns (títulos, parágrafos, FAQ) podem ser editados direto no `index.html`, sem rebuild.

## Se mudar classes do Tailwind ou adicionar ícones

```bash
npm install
npm run build   # gera o sprite de ícones Lucide e o CSS minificado
```

Ícones: use `<svg class="ico"><use href="#i-NOME"/></svg>` com qualquer nome do [Lucide](https://lucide.dev/icons) e rode `npm run build`.

## Estrutura

```
index.html              página única (12 seções)
assets/css/styles.css   CSS gerado (não editar à mão)
assets/js/main.js       WhatsApp, menu, animações, contadores, carrossel, FAQ, formulário
assets/img/             placeholder da foto, favicon, imagem de compartilhamento (OG)
src/input.css           fonte do CSS (tokens, componentes, animações)
tailwind.config.js      paleta e tipografia
PRODUCT.md / DESIGN.md  contexto de produto e sistema visual
```

## Notas

- Não usa o logotipo da Caixa nem imita o site do banco.
- Regras de FGTS, cota e ITBI mudam: o FAQ já traz o aviso de análise individual e regras vigentes.
- Acessibilidade: contraste AA, navegação por teclado, `prefers-reduced-motion` respeitado, inputs com 16px (sem zoom no iPhone), áreas seguras do notch.
