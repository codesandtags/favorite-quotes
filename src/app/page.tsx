import { IconBrandGithub } from '@tabler/icons-react';
import { IconLogin } from '@tabler/icons-react';

import Quote from '@/components/ui/Quote';
import { ThemeSwitcher } from '@/components/ui/ThemeSwitcher';

const quotes = [
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
  },
];

export default function Home() {
  return (
    <main className="flex flex-col h-screen justify-between">
      <header className="w-full flex justify-between p-5">
        <a href="#" className="text-black dark:text-white">
          My Quotes
        </a>
        <nav className="text-black dark:text-white flex gap-3">
          <a href="#">Sign In</a>
          <a href="#">
            <IconBrandGithub />
          </a>
          <a>
            <ThemeSwitcher />
          </a>
        </nav>
      </header>
      {/* Search Box section */}
      <div className="flex justify-center items-center">
        <input
          className="w-11/12 sm:w-1/2 p-4 rounded-lg"
          type="search"
          placeholder="Search quote..."
        />
      </div>
      <section className="mb-auto h-full">
        {/* Quotes section */}
        <div
          className="mt-2 container px-5 py-24 mx-auto flex flex-col gap-3 justify-center items-center"
          id="quotes"
        >
          {quotes.map((quote) => (
            <Quote quote={quote} />
          ))}
        </div>
      </section>
    </main>
  );
}
