# Portfolio

Portfólio pessoal bilíngue (PT/EN) de Gustavo Borges Cardoso, em Next.js 16 (App Router), TypeScript e Tailwind CSS 4.

O mundo visual é o **Fluxograma Curricular**: a carreira aparece como a grade de um curso, com períodos em colunas, núcleos em faixas e setas de pré-requisito até a coluna "em curso", que é o back-end.

- Produto e público: [`PRODUCT.md`](PRODUCT.md)
- Design system: [`DESIGN.md`](DESIGN.md)
- Contrato de direção da página: `.impeccable/surfaces/src-app-lang-page-tsx.md`

## Rodando

```bash
npm install
npm run dev     # http://localhost:3000 → redireciona para /pt ou /en
npm run build
npm run lint
```

Requer Node 20.9+ (o Impeccable pede 22.18+).

## Estrutura

```text
src/
  proxy.ts                    # "/" → /pt ou /en via Accept-Language
  app/
    globals.css               # tokens do mundo (@theme static) e utilitários
    icon.svg
    [lang]/layout.tsx         # root layout por idioma, fontes (Archivo, Spline Sans Mono), metadata
    [lang]/page.tsx           # cabeçalho-ficha, grade, histórico, parecer e contato
  components/
    curriculum-map.tsx        # o fluxograma interativo (seleção, rota back-end, ementa)
    contact-actions.tsx
    site-header.tsx
    locale-switcher.tsx
  content/
    curriculum.ts             # caixas da grade (fonte: o CV)
    history.ts                # cargos, formação, certificações e contato
  i18n/
    config.ts, dictionaries.ts, dictionaries/{pt,en}.json
public/cv/                    # CV em PDF para download
```

## Regras de conteúdo

- Todo fato vem do CV em `Referencias/`, que não é versionado porque os documentos têm CPF e RG. Não invente métricas, projetos nem cargos.
- Da carta de recomendação, só pode ir ao ar o trecho da avaliação, atribuído à empresa.
- PT e EN têm o mesmo conteúdo.
- Não há seção de projetos: os projetos são privados de empresas, sem repositório nem demo públicos. As caixas da grade fazem esse papel.
