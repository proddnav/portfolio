import React from 'react';
import MobileNavbar from '@/Components/MobileNavbar';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';

const BookNotes = () => {
  const books = [
    {
      title: 'Deep Work – Summary With Notes and Highlights',
      description: 'A systematic approach to unlocking your intellectual potential – and achieving profound satisfaction in your professional life. Including key insights, practical strategies, and a comprehensive summary of the book.',
    },
    {
      title: 'Lorem Ipsum – Dolor Sit Amet',
      description: 'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    },
    {
      title: 'Curabitur Vitae – Nunc Et Magna',
      description: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod.',
    },
    {
      title: 'Praesent Commodo – Cursus Magna',
      description: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla.',
    },
    {
      title: 'Nullam Quis – Risus Eget',
      description: 'Urnas ac leo integer malesuada nunc vel risus. Commodo viverra maecenas accumsan lacus vel facilisis volutpat.',
    },
    {
      title: 'Sed Posuere – Consectetur Est',
      description: 'At lobortis morbi leo urna molestie at elementum eu facilisis. Sed odio morbi quis commodo odio aenean sed adipiscing.',
    },
  ];

  return (
    <section className="bg-[#141414] text-white min-h-screen">
      <MobileNavbar />
      <Navbar />
      <div className="container mx-auto py-16">
        <h1 className="text-5xl font-extrabold text-center mb-10">Book Notes</h1>
        <div className="text-gray-600 dark:text-gray-400">
          {/* Book Summaries Section */}
          <section className="pb-5 pt-5 text-center flex flex-col md:flex-row items-center justify-center">
            <div>
              <p className="mb-4">
                I enjoy reading and get through more books than I can count. Here&apos;s some of the notes I&apos;ve taken on the best books I&apos;ve read.
              </p>
            </div>
          </section>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
            {books.map((book, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center mb-4">
                <img
                  style={{ width: '150px', height: '278px' }}
                  src={`/books/${index + 1}.jpg`}
                  alt={`Book ${index + 1}`}
                  className="object-contain mb-4 md:mb-0 md:mr-4 mr-2"
                />
                <div className="text-center md:text-left">
                  <div>
                    <h3 className="text-xl font-semibold">{book.title}</h3>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{book.description}</p>
                  </div>
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