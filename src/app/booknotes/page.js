import React from 'react';
import MobileNavbar from '@/Components/MobileNavbar';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';

const BookNotes = () => {
  return (
    <section className="bg-[#141414] text-white min-h-screen">
      <MobileNavbar />
      <Navbar />
      <div className="container mx-auto py-16">
        <h1 className="text-5xl font-extrabold text-center mb-10">Book Notes</h1>
        <div className="text-gray-600 dark:text-gray-400">
          {/* Book Summaries Section */}
          <section className="pb-5 pt-5 text-center flex flex-col md:flex-row items-center justify-center">
            <img src="/books/cover.png" alt="Cover" className="w-32 h-32 md:w-64 md:h-64 mb-4 md:mb-0 md:mr-4" />
            <div>
              <h1 className="text-5xl font-extrabold text-white mb-3 color-changing">Book Summaries</h1>
              <p className="mb-4">
                I enjoy reading and get through more books than I can count. Here&apos;s some of the notes I&apos;ve taken on the best books I&apos;ve read.
              </p>
            </div>
          </section>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
            {['1', '2', '3', '4', '5', '6'].map((book) => (
              <div key={book} className="flex flex-row items-center mb-4">
                <img
                  style={{ width: '100px', height: '185px' }}
                  src={`/books/${book}.jpg`}
                  alt={`Book ${book}`}
                  className="object-contain mb-4 md:mb-0 md:mr-4 mr-2" // Added margin-right for mobile view
                />
                <div>
                  <h3 className="text-xl font-semibold">Title of Book {book}</h3>
                  <p className="text-sm text-gray-400">Some description about Book {book}...</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default BookNotes;
