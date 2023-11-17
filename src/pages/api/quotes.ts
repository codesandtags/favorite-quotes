import { collection, doc, getDocs, query } from 'firebase/firestore';
import { db } from '@/firebase';

import type { NextApiRequest, NextApiResponse } from 'next';
import { Quote } from '@/types/types';

type ResponseData = Quote[];

export default async function GET(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  console.log('Returning quotes from API ');
  const q = query(collection(db, 'quotes'));
  const results = await getDocs(q);

  const quotes = await results.docs.map((doc: any): Quote => {
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

  console.log({ quotes });

  if (quotes && quotes.length > 0) {
    return res.status(200).json(quotes);
  }

  return res.status(404).json([]);
}
