import { addDoc, collection, doc, getDocs, query } from 'firebase/firestore';

import type { NextApiRequest, NextApiResponse } from 'next';
import { Quote } from '@/types/types';
import { db } from '@/lib/firebase/firebase';
import { getAuthenticatedAppUser } from '@/lib/firebase/auth';

type ResponseData = Quote[] | Quote | { success: boolean };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  switch (req.method) {
    case 'GET':
      return getQuotes(req, res);
    case 'POST':
      return addQuote(req, res);
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

async function getQuotes(
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

  if (quotes && quotes.length > 0) {
    return res.status(200).json(quotes);
  }

  return res.status(404).json([]);
}

export async function addQuote(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { text, author, categories } = req.body;
  // Get user logged in firebase

  console.log('Creating quote from API ', req.body);
  const user = await getAuthenticatedAppUser();
  console.log({ user });

  const q = query(collection(db, 'quotes'));

  // Add a new document with a generated id.
  await addDoc(collection(db, 'quotes'), {
    text,
    author,
    categories,
    likes: 0,
    shared: 0,
    createdAt: new Date(),
    createdBy: 'admin',
  });

  return res.status(200).json({ success: true });
}
