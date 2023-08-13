import React from 'react';
import MobileNavbar from '@/Components/MobileNavbar';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';

const BookNotes = () => {
  const books = [
    {
      title: 'Deep Work – Summary With Notes and Highlights',
      description: 'A systematic approach to unlocking your intellectual potential – and achieving profound satisfaction in your professional life. Including key insights, practical strategies, and a comprehensive summary of the book.',
      link: 'https://medium.com/@prodduturipranav/deep-work-a-comprehensive-summary-with-notes-and-highlights-9405b24179f3',
    },
    {
      title: 'Mindset - Summary With Notes and Highlights',
      description: 'An insightful exploration of the power of perspective in shaping success and fulfillment. Including essential concepts, transformative approaches, and a shift of mindset from fixed mindset to growth mindset',
    },
    {
      title: 'Why Has Nobody Told Me This Before?',
      description: 'A vital guide to mental well-being. Whether you\'re seeking to manage anxiety, cope with depression, build self-confidence, or find motivation, this book provides practical solutions in anecdotal stories. Including key strategies, actionable insights, and a comprehensive summary that addresses everyday mental health challenges.',
    },
    {
      title: 'The Millionaire Fastlane',
      description: 'A groundbreaking guide to wealth creation and financial independence that challenges conventional financial wisdom. It is thought provoking in the way it shifts the path to financial freedom, this book offers a roadmap to a richer life by breaking free from the slow lane to fast lane of wealth creation.',
    },
    {
      title: 'The Lean Startup',
      description: 'A remarkable, revolutionary approach to entrepreneurship and innovation, The book introduces a new systematic, scientific method for creating and managing successful startups. Including essential concepts, practical methodologies, this book offers a roadmap to sustainable business growth through continuous adaptation, flexible resource allocation, and rigorous testing and validation of ideas.',
    },
    {
      title: 'Atomic Habits',
      description: 'An exploration of the transformative power of small changes, the book reveals how tiny adjustments in behaviour can lead to remarkable results. Including insights into the psychology of habits, practical techniques for habit formation. A must-read for anyone looking to transform their life and achieve extraordinary goals.',
    },
  ];

  return (
    <section className="bg-[#141414] text-white min-h-screen">
      <MobileNavbar />
      <Navbar />
      <div className="container mx-auto py-16 px-4 md:px-0">
        <h1 className="text-5xl font-extrabold text-center mb-10">Book Notes</h1>
        <p className="text-lg text-center mb-8">
          I enjoy reading and love getting my hands on productivity and self-help books. Here&apos;s some of the notes I&apos;ve taken on the best books I&apos;ve read. Check my Medium Page for detail summaries on the books.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {books.map((book, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-4 shadow-lg">
              <img
                style={{ width: '150px', height: '278px' }}
                src={`/books/${index + 1}.jpg`}
                alt={`Book ${index + 1}`}
                className="object-contain mb-4 mx-auto"
              />
              {book.link ? (
                <a href={book.link} target="_blank" rel="noopener noreferrer">
                  <h3 className="text-xl font-semibold text-center mb-2 underline">{book.title}</h3>
                </a>
              ) : (
                <h3 className="text-xl font-semibold text-center mb-2">{book.title}</h3>
              )}
              <p className="text-sm text-gray-400 text-center">{book.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default BookNotes;
