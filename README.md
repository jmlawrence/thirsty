# Get Ready to Get Thirsty!

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with
your browser to see the result.

## About

There are 2 main pages.

- Home - the main search page
- Details - the drink detail page

We use the _Fractal Modlet_ pattern to keep internal
dependencies within each component's `components` folder.
This folder structure allows us to semantically understand
what belongs to what and makes removing components and their
dependencies a sinch.
