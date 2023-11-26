import { collection, doc, getDocs, query } from 'firebase/firestore';

import type { NextApiRequest, NextApiResponse } from 'next';
import { Quote } from '@/types/types';
import { db } from '@/lib/firebase/firebase';

type ResponseData = Quote[];

export default async function GET(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // if (process.env.ENVIRONMENT === 'DEVELOPMENT') {
  //   // Load data from local file
  //   const data = require('../../../data/quotes.json');
  //   console.log('Returning quotes from local file');
  //   console.log({ data });

  //   return res.status(200).json(data);
  // }

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
