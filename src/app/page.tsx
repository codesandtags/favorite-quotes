'use client';
import { useEffect, useState } from 'react';
import { collection, onSnapshot, query, setDoc } from 'firebase/firestore';

import { db } from '@/firebase';
import { Quote } from '@/types/types';
import Hero from '@/components/ui/Hero';
import QuotesCollection from '@/components/ui/QuotesCollection';

const quotesMock = [
  {
    id: 1,
    text: 'First do it, then do it right, then do it better.',
    author: {
      name: 'Addy Osmani',
      picture:
        'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png',
      title: 'Head of Developer Relations at Google',
    },
    createdAt: '2021-03-01T12:34:56.000Z',
    categories: ['business', 'inspirational'],
    likes: 28,
    shared: 147,
  },
  {
    id: 2,
    text: 'The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.',
    author: {
      name: 'Winston Churchill',
      picture:
        'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png',
      title: 'Writer and Prime Minister',
    },
    createdAt: '2021-03-01T12:34:56.000Z',
    categories: ['business', 'inspirational'],
    likes: 0,
    shared: 23,
  },
  {
    id: 3,
    text: 'Habia una vez una iguana.',
    author: {
      name: 'La rana',
      picture:
        'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png',
      title: 'Writer and Prime Minister',
    },
    createdAt: '2021-03-01T12:34:56.000Z',
    categories: ['business', 'inspirational'],
    likes: 1200,
    shared: 23,
  },
  {
    id: 4,
    text: 'The only way to do great work is to love what you do.',
    author: {
      name: 'Steve Jobs',
      picture: 'https://your-image-url.com/steve-jobs.png',
      title: 'Co-founder of Apple Inc.',
    },
    createdAt: '2022-01-01T12:34:56.000Z',
    categories: ['business', 'inspirational'],
    likes: 0,
    shared: 23,
  },
  {
    id: 5,
    text: 'Innovation distinguishes between a leader and a follower.',
    author: {
      name: 'Steve Jobs',
      picture: 'https://your-image-url.com/steve-jobs.png',
      title: 'Co-founder of Apple Inc.',
    },
    createdAt: '2022-01-02T12:34:56.000Z',
    categories: ['business', 'technology', 'inspirational'],
    likes: 0,
    shared: 1,
  },
  {
    id: 6,
    text: 'The secret of getting ahead is getting started.',
    author: {
      name: 'Mark Twain',
      picture: 'https://your-image-url.com/mark-twain.png',
      title: 'Author and Humorist',
    },
    createdAt: '2022-01-03T12:34:56.000Z',
    categories: ['business', 'inspirational'],
    likes: 2,
    shared: 0,
  },
  {
    id: 7,
    text: 'The best time to plant a tree was 20 years ago. The second best time is now.',
    author: {
      name: 'Chinese Proverb',
      picture: 'https://your-image-url.com/chinese-proverb.png',
      title: 'Ancient Wisdom',
    },
    createdAt: '2022-01-04T12:34:56.000Z',
    categories: ['business', 'wisdom', 'inspirational'],
    likes: 0,
    shared: 0,
  },
  {
    id: 8,
    text: 'The future belongs to those who believe in the beauty of their dreams.',
    author: {
      name: 'Eleanor Roosevelt',
      picture: 'https://your-image-url.com/eleanor-roosevelt.png',
      title: 'Former First Lady of the United States',
    },
    createdAt: '2022-01-05T12:34:56.000Z',
    categories: ['inspirational'],
    likes: 0,
    shared: 0,
  },
];

export default function Home() {
  // Read "quotes" collection from Firestore and store it into a "quotes" react state

  /*
  const [quotes, setQuotes] = useState<Quote[]>([]);

  useEffect(() => {
    const fetchQuotes = async () => {
      const q = query(collection(db, 'quotes'));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const quotesDoc: any[] = [];

        querySnapshot.forEach((doc) => {
          quotesDoc.push({ ...doc.data(), id: doc.id });
        });

        setQuotes(quotesDoc);
      });
    };

    fetchQuotes();
  }, []);
  */

  return (
    <>
      <Hero />
      <QuotesCollection quotes={[]} />
    </>
  );
}
