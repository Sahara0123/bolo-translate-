import React, { useState } from "react";

function ReviewBox() {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const submitReview = (e) => {
    e.preventDefault();
    if (name && text) {
      setReviews([...reviews, { name, text }]);
      setName("");
      setText("");
    }
  };

  return (
    <section className="mt-10 bg-zinc-800 p-4 rounded-2xl shadow-md">
      <h2 className="text-2xl mb-4">User Reviews</h2>
      <form onSubmit={submitReview} className="flex flex-col gap-2 md:flex-row md:items-end">
        <input
          className="p-2 rounded bg-zinc-700 text-white w-full md:w-1/4"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          className="p-2 rounded bg-zinc-700 text-white w-full md:w-2/4"
          placeholder="Write your review..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <button type="submit" className="p-2 bg-indigo-600 rounded hover:bg-indigo-700">
          Submit
        </button>
      </form>
      <div className="mt-4">
        {reviews.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          reviews.map((r, i) => (
            <p key={i}>
              <strong>{r.name}</strong>: {r.text}
            </p>
          ))
        )}
      </div>
    </section>
  );
}

export default ReviewBox;
