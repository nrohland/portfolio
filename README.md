# Portfolio

Personal site for Nicolás Rohland, ecommerce data analyst and analytics engineer.

Static [Next.js](https://nextjs.org/) and Tailwind site. `npm run build` writes the export to `out/`.

## Attribution

Adapted from the [Magic UI portfolio](https://github.com/magicuidesign/portfolio) by Dillion Verma, under the [MIT License](https://github.com/magicuidesign/portfolio/blob/main/LICENSE). Copyright for that template is kept in `LICENSE`.

Blog, hackathon, avatar, and Open Graph image routes from the template are not part of this site. The template's `headers()` config was removed so `output: "export"` can build.

## Local

```bash
npm install
npm run dev
```

Checks:

```bash
npm run lint
npm run typecheck
npm run build
```

## Config

`NEXT_PUBLIC_SITE_URL` sets the canonical URL, Open Graph URL, sitemap, and robots host. When it is missing, the site uses `https://nicolasrohland.vercel.app`. See `.env.example`.

`cvUrl` in `src/data/site.ts` is the CV link. It points at LinkedIn. Set it to an empty string to hide the CV link. There is no CV file in this repo.
