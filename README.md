# Josi Simas — Site

Site institucional de **Josi Simas**, especialista em Micropigmentação e Estética.
Instagram: [@josisimaspmu](https://instagram.com/josisimaspmu)

## Stack

- **Next.js** (App Router) com **Static Export** (`output: "export"`) — gera HTML estático, ideal para SEO.
- **TypeScript** + **Tailwind CSS v4**
- Deploy contínuo via **GitHub Actions** a cada push na `main`.

## Rodando localmente

```bash
npm install
npm run dev      # http://localhost:3000
```

Build de produção (gera a pasta `out/`):

```bash
npm run build
```

## Estrutura

```
src/
  app/            # páginas (App Router): home, servicos, sobre, galeria, contato
    sitemap.ts    # gera /sitemap.xml
    robots.ts     # gera /robots.txt
  components/     # Navbar, Footer, CTA, InstagramFeed
  lib/
    site.ts       # dados do negócio e configurações do site
    services.ts   # lista de serviços
public/            # arquivos estáticos
```

## Personalização

Os dados do site (contato, redes sociais, serviços e posts da galeria) ficam
centralizados em [`src/lib/site.ts`](src/lib/site.ts) e
[`src/lib/services.ts`](src/lib/services.ts).

A galeria exibe posts do Instagram via embed oficial — basta adicionar os links
dos posts em `INSTAGRAM_POSTS` no `site.ts`.

## SEO

- Metadata e Open Graph por página + JSON-LD de negócio local
- `sitemap.xml` e `robots.txt` gerados automaticamente
- HTML estático real por rota → indexação fácil no Google

> Após publicar, cadastre o site no **Google Search Console** e envie o `sitemap.xml`.
> Adicione `public/og-image.jpg` (1200×630) para o preview ao compartilhar links.

## Licença

[MIT](LICENSE)
