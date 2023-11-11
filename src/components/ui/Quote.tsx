import { IconShare2 } from '@tabler/icons-react';
import { IconHeart } from '@tabler/icons-react';
import { IconHeartFilled } from '@tabler/icons-react';

import { Quote } from '@/types/types';
import QuoteIcon from '../icons/QuoteIcon';

export default function Quote({ quote }: { quote: Quote }) {
  return (
    <div
      id={quote.id.toString()}
      key={quote.id}
      className="flex flex-col h-auto w-full lg:w-1/2 overflow-hidden rounded-xl shadow-none sm:shadow-lg bg-base-300"
    >
      <div className="p-4 w-full flex-1 ">
        <div className=" rounded-md shadow-none p-8">
          <QuoteIcon />
          <div className="font-semibold text-xl sm:text-4xl  mb-6">
            {quote.text}
          </div>
          <a className="inline-flex items-center border-l-2 border-l-slate-700">
            {/* <img
              alt="testimonial"
              className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
              src="https://i.pravatar.cc/300"
            /> */}
            <span className="flex-grow flex flex-col pl-4">
              <div className="font-medium text-sm  ">{quote.author.name}</div>
              <div className="font-normal text-sm ">{quote.author.title}</div>
            </span>
          </a>
        </div>
        <div className="flex flex-wrap mt-2">
          {quote.categories.map((category, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200  rounded-md px-3 py-1 text-xs  mr-2 mb-2 text-primary cursor-pointer hover:invert"
            >
              #{category}
            </span>
          ))}
        </div>
      </div>
      <div className="p-4 w-full h-12 flex justify-end items-end gap-4 border-0 border-t text-sm border-base-200">
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
