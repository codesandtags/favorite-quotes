# Favorite quotes

## Why did I create this?

I was tired of scattering my favorite quotes across various places, such as Notion, Evernote, books, Kindle, and my notebooks, and after a while I lost them. So, I decided not to procrastinate any longer and created my own centralized space to store my favorite and insightful quotes.

In long term I will have all those quotes that I loved, and remember or reference them somewhere.

## What can I do with these quotes?

I decided to put in this first version the following capabilities:

- Search quotes
- Group quotes by categories
- Filter quotes
- Show timeline when they were added
- Share quotes as image on social network

## How is this project made of (TechStack)?

I love to learn new things, and expan my conform zone, so I decide to try something new. That's why this project is using the following technologies to work, and some reasons:

### Web app
- [Nextjs v14](https://nextjs.org/blog/next-14) (I was thinking to use Bun, but I wanted to learn about the latest changes in Nextjs)
- [DeisyUI](https://daisyui.com/blog/daisyui-vs-tailwindui/) which is a plugin on top of TailwindCSS to support the design system
- [Unsplash](https://unsplash.com/) to show beautiful backgrounds
- Render from server to have a proper SEO when I share the quotes
- Nextjs to support SEO for every quote

### Database
- Firebase to store the quotes, because I needed a simple website and a few storage to do this.

### Analytics
- Google Analytics show track how the website is visited


## Environment variables

This project uses environment variables to work. On your local please create the file `.env.local` with the following information.

```sh
API_URL=http://localhost:3000/api
NEXT_PUBLIC_SITE_URL=http://localhost:3000

FIREBASE_API_KEY='VALUE'
FIREBASE_MEASUREMENT_ID='VALUE'
FIREBASE_AUTH_DOMAIN='VALUE'
FIREBASE_DATABASE_URL='VALUE'
FIREBASE_PROJECT_ID='VALUE'
FIREBASE_STORAGE_BUCKET='VALUE'
FIREBASE_MESSAGING_SENDER_ID='VALUE'
FIREBASE_APP_ID='VALUE'
```
