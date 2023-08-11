import React from 'react';

const BookNotes = () => {
  return (
    <section className="bg-[#141414] text-white min-h-screen">
      <div className="container mx-auto py-16">
        <h1 className="text-5xl font-extrabold text-center mb-10">Book Notes</h1>
        <div className="text-gray-600 dark:text-gray-400">
          {/* You can add your book reviews or any other content here */}
          <p className="mb-4">
            {" Here youll find my thoughts and notes on the books Ive read. Feel free to explore and share your thoughts with me! "}
            </p>

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
