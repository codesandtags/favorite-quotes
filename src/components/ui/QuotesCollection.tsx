'use client';
import { Quote } from '@/types/types';
import QuoteCard from './QuoteCard';
import { IconBlockquote } from '@tabler/icons-react';
import useSWR from 'swr';

export function getBaseUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }

  return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function QuotesCollection() {
  const {
    data: quotes,
    error,
    isLoading,
  } = useSWR(`${getBaseUrl()}/api/quotes`, fetcher);

  if (error) return <div>failed to load</div>;

  return (
    <section className="w-full sm:w-9/12 m-auto">
      <div
        className="grid lg:grid-cols-2 px-5 py-12 mx-auto gap-4 justify-center items-center"
        id="quotes"
      >
        {isLoading && (
          <span className="loading loading-bars loading-lg col-span-2 items-center justify-center"></span>
        )}
        {quotes &&
          quotes?.map((quote: Quote) => (
            <QuoteCard key={quote.id} quote={quote} />
          ))}
      </div>

      {quotes && !isLoading && quotes.length === 0 && (
        <div className="w-8/12 mx-auto flex flex-col justify-start items-center">
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
