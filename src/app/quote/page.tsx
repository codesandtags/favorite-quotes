'use client';
import React, { useEffect, useState } from 'react';

export default function QuotePage() {
  // State management to set a newQuote
  const [newQuote, setNewQuote] = useState({
    text: '',
    author: {
      name: '',
      title: '',
    },
    categories: [''],
  });

  useEffect(() => {}, []);

  // Handle form submit
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    console.log(newQuote);
    console.log(formJson);
  };

  return (
    <section className="mt-6 container m-auto p-4">
      <h1 className="text-3xl font-semibold my-4">Add quote</h1>
      <form className="flex flex-col gap-4 " onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label" htmlFor="text">
            <span className="label-text">Your quote</span>
          </label>
          <textarea
            id="text"
            name="text"
            className="textarea textarea-bordered h-24"
            placeholder="Bio"
            value={newQuote.text}
            onChange={(e) => setNewQuote({ ...newQuote, text: e.target.value })}
          ></textarea>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label" htmlFor="authorName">
            <span className="label-text">Who is the author?</span>
          </label>
          <input
            id="authorName"
            name="authorName"
            type="text"
            placeholder="Author..."
            className="input input-bordered w-full max-w-xs"
            value={newQuote.author.name}
            onChange={(e) =>
              setNewQuote({
                ...newQuote,
                author: { ...newQuote.author, name: e.target.value },
              })
            }
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label" htmlFor="authorTitle">
            <span className="label-text">What is his/her title?</span>
          </label>
          <input
            id="authorTitle"
            name="authorTitle"
            type="text"
            placeholder="Title..."
            className="input input-bordered w-full max-w-xs"
            value={newQuote.author.title}
            onChange={(e) =>
              setNewQuote({
                ...newQuote,
                author: { ...newQuote.author, title: e.target.value },
              })
            }
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label" htmlFor="categories">
            <span className="label-text">What are the categories?</span>
          </label>
          <input
            id="categories"
            name="categories"
            type="text"
            placeholder="business, life, ..."
            className="input input-bordered w-full max-w-xs"
            value={newQuote.categories.join(', ')}
            onChange={(e) =>
              setNewQuote({
                ...newQuote,
                categories: e.target.value.split(', '),
              })
            }
          />
        </div>
        <div className="">
          <button type="submit" className="btn btn-primary">
            Add quote
          </button>
        </div>
      </form>
    </section>
  );
}
