import { Quote } from '@/types/types';
import QuoteCard from './QuoteCard';
import { collection, doc, getDocs, query } from 'firebase/firestore';
import { db } from '@/firebase';

// Read "quotes" collection from Firestore and return an array of Quote objects
async function getData() {
  const q = query(collection(db, 'quotes'));
  const results = await getDocs(q);

  return results.docs.map((doc): Quote => {
    return {
      id: doc.id,
      text: doc.data().text,
      author: {
        name: doc.data().author.name,
        picture: doc.data().author.picture,
        title: doc.data().author.title,
      },
      categories: doc.data().categories || [],
      likes: doc.data().likes || 0,
      shared: doc.data().shared || 0,
      createdAt: doc.data().createdAt,
    };
  });
}

export default async function QuotesCollection() {
  const quotes = await getData();

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
