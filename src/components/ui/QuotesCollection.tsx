'use client';
import { Quote } from '@/types/types';
import QuoteCard from './QuoteCard';
import { IconBlockquote } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

export function getBaseUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }

  return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
}

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function QuotesCollection() {
  // const [quotes, setQuotes] = useState<Quote[]>([]);
  // const [isLoading, setLoading] = useState(true);
  const {
    data: quotes,
    error,
    isLoading,
  } = useSWR(`${getBaseUrl()}/api/quotes`, fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <section className="mb-auto h-full">
      <div
        className="container px-5 py-12 mx-auto flex flex-col gap-4 justify-center items-center"
        id="quotes"
      >
        {isLoading && (
          <div className="flex justify-center">Loading quotes...</div>
        )}
        {quotes &&
          quotes?.map((quote: Quote) => (
            <QuoteCard key={quote.id} quote={quote} />
          ))}
      </div>

      {quotes && !isLoading && quotes.length === 0 && (
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
