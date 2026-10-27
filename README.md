# Futurize website

A local Next.js portfolio using TypeScript and a static export. Run `npm run dev`, or build with `npm run typecheck` and `npm run build`. The production export is `out/`. No deployment was performed.

## Design direction

The homepage takes inspiration from the Shora Creative Agency reference: a dramatic opening, large typography, dark sections and restrained grids. Futurize keeps its own off-white, black and yellow identity. The atmospheric hero is CSS artwork; it does not represent client work.

## Content rules

The active client roster is taken from the owner-supplied `DownloadablePortfolio.pptx.pdf`. Current clients, previous relationships, and event entries are presented as separate groups. Complete client logos were extracted from the supplied PDF; entries without suitable logos use typeset names. See `review/client-review.md` for the roster and content boundaries. Client detail pages display identity and a coming-soon message until the project stories are authored.

The homepage uses original generated yellow ribbon artwork (`public/assets/futurize-ribbon.webp`) as agency art, a client grid, large identity previews, editorial service rows, and an approach card grid. No reel is shown until a suitable video is supplied.

## Editing

- Client names, identity files and general services: `lib/content.ts`
- Homepage: `app/page.tsx`
- Hero and service illustrations: `components/GraphicHero.tsx`
- Shared client identity cards, navigation and services: `components/Site.tsx`
- Client detail template: `app/work/[slug]/page.tsx`
- Shared styles: `app/globals.css`

Space Grotesk is bundled under the SIL Open Font License in `public/fonts/OFL.txt`.
