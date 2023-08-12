import React from 'react';

const BookNotes = () => {
  return (
    <section className="bg-[#141414] text-white min-h-screen">
      <div className="container mx-auto py-16">
        <h1 className="text-5xl font-extrabold text-center mb-10">Book Notes</h1>
        <div className="text-gray-600 dark:text-gray-400">
          {/* Book Summaries Section */}
          <section className="pb-5 pt-5">
            <div className="container pb-5 pt-5">
              <div className="align-items-center gx-lg-5 gy-5 row">
                <div className="col-lg-6">
                  <h1 className="text-5xl font-extrabold text-white mb-3">Book Summaries</h1>
                  <div className="header-intro-text">
                    <p className="mb-4">
                      I enjoy reading self-help & business books. Here&apos;s some of the notes I&apos;ve taken on the best books I&apos;ve read.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="container mx-auto grid grid-cols-2 gap-8 justify-center">
            {/* Left Section */}
            <div className="flex flex-col gap-4">
              {['1', '2', '3'].map((book) => (
                <div key={book} className="flex items-center">
                  <img
                    style={{ width: '150px', height: '278px' }}
                    src={`/books/${book}.jpg`}
                    alt={`Book ${book}`}
                    className="object-contain"
                  />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">Title of Book {book}</h3>
                    <p className="text-sm text-gray-400">Really good book</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Example of a book review */}
          <div className="mb-8">
            <h2 className="text-3xl font-semibold">Title of the Book</h2>
            <p className="mt-2">Author John Doe</p>
            <p className="mt-2">My thoughts and notes about this book</p>
          </div>

          {/* You can add more book reviews or other content here */}
        </div>
      </div>
    </section>
  );
};

export default BookNotes;
