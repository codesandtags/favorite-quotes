import { IconShare2 } from '@tabler/icons-react';
import { IconHeart } from '@tabler/icons-react';

import { Quote } from '@/types/types';
import QuoteIcon from '../icons/QuoteIcon';

export default function Quote({ quote }: { quote: Quote }) {
  return (
    <div
      id={quote.id.toString()}
      key={quote.id}
      className="flex flex-col h-auto w-full lg:w-1/2 overflow-hidden bg-slate-100 dark:bg-slate-900 rounded-t-xl shadow-none sm:shadow-lg"
    >
      <div className="p-4 w-full flex-1">
        <div className="bg-slate-100 dark:bg-slate-900 rounded-md shadow-none p-8">
          <QuoteIcon />
          <div className="font-normal text-base sm:text-3xl text-slate-900 dark:text-slate-100 mb-6">
            {quote.text}
          </div>
          <a className="inline-flex items-center">
            {/* <img
              alt="testimonial"
              className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
              src="https://source.unsplash.com/random/106x106"
            /> */}
            <span className="flex-grow flex flex-col pl-4">
              <div className="font-medium text-sm text-slate-900 dark:text-slate-100">
                {quote.author.name}
              </div>
              <div className="font-normal text-sm text-slate-500 dark:text-slate-500">
                {quote.author.title}
              </div>
            </span>
          </a>
        </div>
      </div>
      <div className="p-2 w-full h-12 flex justify-end gap-4 border-0 border-t dark:border-slate-700">
        <div>
          <IconHeart className="cursor-pointer hover:text-red-500" />
        </div>
        <div>
          <IconShare2 className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
