import { Quote } from '@/types/types';
import QuoteCard from './QuoteCard';

export default function QuotesCollection({ quotes }: { quotes: Quote[] }) {
  return (
    <section className="mb-auto h-full">
      <div
        className="mt-2 container px-5 py-24 mx-auto flex flex-col gap-4 justify-center items-center"
        id="quotes"
      >
        {quotes.map((quote) => (
          <QuoteCard key={quote.id} quote={quote} />
        ))}
      </div>
    </section>
  );
}
