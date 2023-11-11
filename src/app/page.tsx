import Quote from '@/components/ui/Quote';
import Navbar from '@/components/ui/Navbar';

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
  return (
    <main className="flex flex-col justify-between">
      <header className="sticky top-0">
        <Navbar />
      </header>

      <div className="flex flex-col gap-y-8 p-4 font-poppins">
        <div className="container mx-auto flex items-center max-w-7xl flex-col">
          <div className="flex flex-col gap-y-8 text-center">
            <div className="flex flex-col max-w-xl gap-y-4 mx-auto">
              <h1 className="text-6xl p-4 text-center font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
                Share your favorite quotes with the world
              </h1>
              <p className="text-xl base-100">
                Stop losing your favorite quotes in your notes. Everyone has a
                favorite quote, so don&apos;t be shy and share it.
              </p>
              <div className="flex gap-x-3 justify-center">
                <button className="btn btn-primary">Share now</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Box section */}
      {/* <div className="flex justify-center items-center">
        <input
          className="w-11/12 sm:w-1/2 p-4 rounded-lg"
          type="search"
          placeholder="Search quote..."
        />
      </div> */}
      <section className="mb-auto h-full">
        {/* Quotes section */}
        <div
          className="mt-2 container px-5 py-24 mx-auto flex flex-col gap-4 justify-center items-center"
          id="quotes"
        >
          {quotes.map((quote) => (
            <Quote key={quote.id} quote={quote} />
          ))}
        </div>
      </section>
    </main>
  );
}
