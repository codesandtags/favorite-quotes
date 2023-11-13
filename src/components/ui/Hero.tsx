export default function Hero() {
  return (
    <div
      className="hero h-5/6 bg-base-200"
      style={{
        backgroundImage: 'url(/images/books-bg.jpeg)',
      }}
    >
      <div className="hero-overlay bg-opacity-90"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="text-6xl p-4 text-center font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
            Share your favorite quotes with the world
          </h1>
          <p className="py-6">
            Stop losing your favorite quotes in your notes. Everyone has a
            favorite quote, so don&apos;t be shy and share it.
          </p>
          <button className="btn btn-primary">Share now</button>
        </div>
      </div>
    </div>
  );
}
