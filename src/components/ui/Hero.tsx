export default function Hero() {
  return (
    <div
      className="hero h-5/6 bg-base-200"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1526243741027-444d633d7365?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
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
