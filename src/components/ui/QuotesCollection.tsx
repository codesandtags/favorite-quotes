import { Quote } from '@/types/types';
import QuoteCard from './QuoteCard';
import { IconBlockquote } from '@tabler/icons-react';
import { env } from 'process';

export function getBaseUrl() {
  if (process.env.NEXT_PUBLIC_VERCEL_URL) {
    return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
  }

  return process.env.NEXT_PUBLIC_SITE_URL;
}

export async function getData() {
  const response = await fetch(`${getBaseUrl()}/api/quotes`);

  if (!response.ok) {
    console.error('Error fetching products');
    return [];
  }

  const data = await response.json();
  return data.quotes;
}

export default async function QuotesCollection() {
  const quotes = (await getData()) as Quote[];

  return (
    <section className="mb-auto h-full">
      <div
        className="mt-2 container px-5 py-24 mx-auto flex flex-col gap-4 justify-center items-center"
        id="quotes"
      >
        {quotes &&
          quotes?.map((quote) => <QuoteCard key={quote.id} quote={quote} />)}
      </div>

      {quotes && quotes.length === 0 && (
        <div className="container mx-auto flex flex-col justify-start items-center">
          <h2 className="text-3xl font-semibold my-4 flex">
            <IconBlockquote />
            <span className="px-4">No quotes yet</span>
          </h2>
          <p className="py-6">
            No quotes yet. Be the first to share your favorite quote.
          </p>
        </div>
      )}
    </section>
  );
}
