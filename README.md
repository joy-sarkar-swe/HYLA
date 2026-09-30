HYLA Architects website concept, built with Next.js.

Portfolio images use `OptimizedImage` to serve responsive sizes while retaining their original aspect ratios. The `predev` and `prebuild` scripts update `src/components/image-dimensions.json` from files in `public/assets`; run `node scripts/generate-image-metadata.mjs` after adding images if you need to update it separately.

Project and press detail records live in `src/data/projects.json` and `src/data/press.json`. The `/projects/[slug]` and `/press/[slug]` routes read those records and render on request.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

The site fonts are self hosted through `next/font`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
