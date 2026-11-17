---
name: Victor Ramos · Crédito Imobiliário
description: Landing page de correspondente bancário Caixa em Recife — conversa com o especialista, não folheto de banco.
colors:
  night-navy: "#0B1F3A"
  night-navy-deep: "#071528"
  institutional-blue: "#005CA9"
  sky-blue: "#6FB0E6"
  blue-mist: "#EAF3FB"
  cta-orange: "#F39200"
  cta-orange-hover: "#FFA524"
  reading-ground: "#F7F8FA"
  ink-soft: "#3D4F68"
  ink-mute: "#5A6B82"
  hairline: "#E3E8EF"
  white: "#FFFFFF"
typography:
  display:
    fontFamily: "Sora, ui-sans-serif, system-ui, sans-serif"
    fontSize: "4.25rem"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  heading:
    fontFamily: "Sora, ui-sans-serif, system-ui, sans-serif"
    fontSize: "3rem"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  card-title:
    fontFamily: "Sora, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.4
rounded:
  input: "16px"
  card: "24px"
  panel: "32px"
  pill: "999px"
spacing:
  gutter-mobile: "20px"
  gutter-desktop: "32px"
  section-mobile: "80px"
  section-desktop: "112px"
  content-max: "72rem"
components:
  button-cta:
    backgroundColor: "{colors.cta-orange}"
    textColor: "{colors.night-navy}"
    rounded: "{rounded.pill}"
    padding: "0 26px"
    height: "52px"
  button-cta-hover:
    backgroundColor: "{colors.cta-orange-hover}"
  button-ghost-dark:
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    height: "52px"
  card:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.card}"
    padding: "28px"
  card-feature:
    backgroundColor: "{colors.night-navy}"
    textColor: "{colors.white}"
    rounded: "{rounded.card}"
    padding: "36px"
  bubble-visitor:
    backgroundColor: "{colors.white}"
    textColor: "{colors.night-navy}"
    rounded: "{rounded.card}"
    padding: "16px 20px"
  bubble-victor:
    backgroundColor: "{colors.night-navy}"
    textColor: "{colors.white}"
    rounded: "{rounded.card}"
    padding: "16px 20px"
  input-dark:
    backgroundColor: "rgba(255,255,255,0.08)"
    textColor: "{colors.white}"
    rounded: "{rounded.input}"
    height: "52px"
---

## Overview

A conversation with the specialist, not a bank brochure. Two night-navy fields (hero and closing block) bracket an off-white reading ground. The page's signature is the "Você já passou por isso?" thread: the visitor's doubts arrive as chat bubbles and Victor's reply lands last, mirroring the WhatsApp conversation the page exists to start. Persuade mode, mobile-first (visitors come from Instagram).

## Colors

### Primary
- **Night Navy `#0B1F3A`**: the base. Hero, closing CTA, Reels band, featured service card, Victor's reply bubble.
- **Institutional Blue `#005CA9`**: working ink. Icons, step numbers, links, the radial glow behind Victor's portrait. Sky Blue `#6FB0E6` is its on-navy variant (headline emphasis, labels).

### Secondary
- **CTA Orange `#F39200`**: reserved for actions only, always with navy text (7:1). Never decorative, never for text on light grounds.

### Neutral
- **Reading Ground `#F7F8FA`** alternating with white sections; ink `#0B1F3A`, soft ink `#3D4F68`, mute `#5A6B82`, hairline `#E3E8EF`.

### Named Rules
- **The One Action Rule**: orange means "talk to Victor". If it is orange, it opens WhatsApp (or submits the lead form).
- **No Caixa imitation**: never the Caixa logo, never its orange/blue logotype treatment; only the text "Correspondente bancário Caixa" plus the reserved seal slot.

## Typography

Sora (600/700/800) for every heading, tight tracking (-0.03em), balanced wrapping. Inter (400/500/600) for body and UI at 16px minimum on inputs.

### Hierarchy
- Display (hero H1): 2.5rem mobile → 4.25rem desktop, line-height 1.05.
- Section heading (H2): 2.25rem → 3rem.
- Card / step title (H3): 1.25rem–1.875rem.
- Body: 1.0625–1.25rem, line-height ~1.6, measure ≤ 36rem.

## Layout

Container 72rem with 20px/32px gutters. Sections 80px (mobile) / 112px (desktop) vertical rhythm. Two-column splits (5/7, 6/6, 4/8) collapse to one column under `lg`. Horizontal rails (Reels on mobile, testimonials) bleed to the screen edge while their first card aligns to the container. Every grid uses `minmax(0,1fr)` columns so nowrap CTAs never push the page wider than 320px.

## Elevation & Depth

Soft offset shadows only, tinted from navy on light grounds and neutral black on dark ones. Glass (blur 14–16px) is used in exactly two places: the chips floating over Victor's portrait and the scrolled header. No colored glows.

### Shadow Vocabulary
- `soft`: `0 1px 2px rgba(11,31,58,.04), 0 8px 24px -8px rgba(11,31,58,.10)` — resting cards.
- `lift`: `0 2px 4px rgba(11,31,58,.05), 0 20px 40px -16px rgba(11,31,58,.22)` — hover and photos.
- `cta`: `0 6px 16px -6px rgba(0,0,0,.4)` — orange buttons.

## Shapes

Large radii: 16px inputs, 24px cards and bubbles (with one 6px "tail" corner pointing at the speaker), 32px panels, pill buttons. Icons are Lucide line icons at 1.75 stroke, inline SVG sprite.

## Components

- **CTA button**: orange pill, navy text, WhatsApp glyph, 52–60px tall, scale(0.97) on press.
- **Ghost button (dark)**: white text, 25% white inset ring.
- **Glass chip**: check in an orange disc + label, floating with a 6–7s ambient drift.
- **Chat bubbles**: visitor (white, right, tail bottom-right) and Victor (navy, left, tail bottom-left, with VR avatar).
- **Service bento**: one navy feature card spanning two columns, four white cards, one full-width Master Casa row.
- **Timeline**: 56px numbered tiles on a hairline; step 4 is orange (the keys).
- **Reel cover**: 9:16, authored gradient cover with tag pill, title and centered play; `--thumb` swaps in the real cover.
- **FAQ accordion**: native `<details>`, height animated by JS, chevron rotates into a filled blue disc.
- **Lead form (dark)**: translucent inputs, segmented FGTS control, inline error that names every missing field.

## Do's and Don'ts

- Do keep every claim verifiable; stats and testimonials stay as marked placeholders until real.
- Do caveat financing rules ("regras podem mudar", "análise individual").
- Do gate hover motion to fine pointers and give every press an `:active` state.
- Don't add eyebrow labels above headings, gradient text, or colored glows.
- Don't use orange for anything that isn't an action.
- Don't invent testimonials or use the official Caixa logo.
