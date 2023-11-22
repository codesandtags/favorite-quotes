import { IconShare2 } from '@tabler/icons-react';
import { IconHeart } from '@tabler/icons-react';
import { IconHeartFilled } from '@tabler/icons-react';

import { Quote } from '@/types/types';
import QuoteIcon from '../icons/QuoteIcon';

export default function QuoteCard({ quote }: { quote: Quote }) {
  return (
    <div className="card">
      <div
        id={quote.id.toString()}
        key={quote.id}
        className="card-body rounded-t-lg"
      >
        <div className="w-full flex-1">
          <QuoteIcon />
          <div className="font-semibold text-2xl sm:text-4xl  mb-6">
            {quote.text}
          </div>
          <a className="inline-flex items-center">
            {/* <div className="avatar mr-4">
              <div className="w-12 rounded-full ring">
                <img src="https://i.pravatar.cc/300" />
              </div>
            </div> */}
            <span className="flex-grow flex flex-col pl-4 border-l-slate-700 border-l-2">
              <div className="font-medium text-xs  ">{quote.author.name}</div>
              <div className="font-normal text-xs ">{quote.author.title}</div>
            </span>
          </a>
          <div className="flex flex-wrap mt-2">
            {quote.categories.map((category, index) => (
              <span
                key={index}
                className="inline-block bg-base-200 rounded-md px-3 py-1 text-xs  mr-2 mb-2 text-secondary cursor-pointer hover:text-secondary-focus"
              >
                #{category}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="card-actions py-2 px-4">
        <div className="flex-1 flex  pl-2 gap-2 ">
          <span>@codesandtags</span>
        </div>
        <div className="flex gap-1 items-end">
          {quote.likes > 0 ? (
            <IconHeartFilled className="cursor-pointer text-red-500" />
          ) : (
            <IconHeart className="cursor-pointer" />
          )}
          <span className="">{quote.likes}</span>
        </div>
        <div className="flex gap-1 items-end">
          <IconShare2 className="cursor-pointer hover:text-purple-600" />
          <span className=""> 14</span>
        </div>
      </div>
    </div>
  );
}
