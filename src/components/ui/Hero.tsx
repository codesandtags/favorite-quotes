import Link from 'next/link';

export default function Hero() {
  return (
    <div className="hero bg-base-300 ">
      <div className="hero-overlay bg-opacity-90"></div>
      <div className="hero-content text-center text-neutral-content mb-6">
        <div className="max-w-md">
          <h1 className="text-5xl p-4 text-center font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
            Share your favorite quotes with the world
          </h1>
          <p className="py-6">
            Stop losing your favorite quotes in your notes. Everyone has a
            favorite quote, so don&apos;t be shy and share it.
          </p>
          <Link href="/quote">
            <button className="btn btn-primary">Share now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
