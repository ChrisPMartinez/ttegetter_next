# The Tabletop.Events Event Getter
A way to get all the events of a specific guest for your convention. 

## Setup
In your .env.local, assign appropriate values to `NEXT_PUBLIC_TTE_APP_ID`, `NEXT_PUBLIC_TTE_API_KEY`, and `NEXT_PUBLIC_TTE_CON_INDEX`.

The Tabletop.Events Algolia App ID (for `NEXT_PUBLIC_TTE_APP_ID`) and API Key (for `NEXT_PUBLIC_TTE_API_KEY`) are publicly available in [`the Tabletop.Events API documentation`](https://tabletop.events/developer/Event.html#Search_Events). 

The Convention Index is the convention's ID in Tabletop.Events. I wasn't ever able to find my convention's ID anywhere on the site directly, so what I did was use Postman to make an API call to the convention endpoint with the convention's name (URL encoded) as a query parameter. *https://tabletop.events/api/convention?query=partial%20convention%20name* There may be a better way to go about this, but it works for now.

## Use
The `<Guest/>` component with the `guestName` and optional `alternateName` parameters will display a list of a given guest's events, with the date and time, number of seats remaining, and a link to the event on Tabletop.Events.

`guestName` is the name that will be displayed on the site. In most cases, this will return the appropriate results, but if your guest is registered in Tabletop.Events under a different name, or is hosting as part of an organization, you can enter that as the `alternateName` to make the appropriate query.

The guests in index.js were the guests for Genghis Con 45, so you can see what it looks like as an example. Replace them with your own convention's guest. If you wanna get fancy, you could even load your guests into an array and `map()` it.


## All the Next.js Boilerplate stuff in case you aren't familiar

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
