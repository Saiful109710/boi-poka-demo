import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId,bookName, author, image, tags, category } = book;
  return (
    <Link to={`/books/${bookId}`}>
      <div className="card bg-base-100  shadow-xl p-4">
        <figure className="bg-gray-300 p-8 rounded-xl">
          <img src={image} className="h-[200px]" alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="space-x-4">
            {tags.map((tag, idx) => (
              <button
                key={idx}
                className="bg-green-100 text-green-500 btn btn-xs text-md"
              >
                {tag}
              </button>
            ))}
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">NEW</div>
          </h2>

          <p>by: {author}</p>
          <div className="border-t-2 border-dashed"></div>
          <div className="card-actions justify-between mt-3">
            <div className="badge badge-outline">{category}</div>
            <div className="rating">
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 "
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
