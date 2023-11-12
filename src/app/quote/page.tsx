export default function QuotePage() {
  return (
    <section className="">
      <h1>Add quote</h1>
      <form>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your quote</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Bio"
          ></textarea>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Who is the author?</span>
          </label>
          <input
            type="text"
            placeholder="Author..."
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">What is his/her title?</span>
          </label>
          <input
            type="text"
            placeholder="Title..."
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="">
          <button className="btn btn-primary">Add quote</button>
        </div>
      </form>
    </section>
  );
}
