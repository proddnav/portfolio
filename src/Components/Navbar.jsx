import React, { useState } from 'react';
import Modal from 'react-modal';

const Navbar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <header className="text-white bg-[#141414] body-font">
      <div className="container mx-auto flex flex-wrap py-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-bold items-center text-white text-xl mr-2 mb-4 md:mb-0">
          Pranav Chandra
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-center">
        <a href='/#about' className="mr-5 hover:text-gray-300 hover:scale-110">About me</a>
      <a href='/#portfolio' className="mr-5 hover:text-gray-300 hover:scale-110">Portfolio</a>
      <a href='/#skills' className="mr-5 hover:text-gray-300 hover:scale-110">Skills</a>
      <a href='/#milestone' className="mr-5 hover:text-gray-300 hover:scale-110">Milestone</a>
      <a href='/#connect' className="mr-5 hover:text-gray-300 hover:scale-110">Connect</a>
        </nav>
        <div className='flex gap-5'>
          <button onClick={toggleModal} className="inline-flex items-center bg-gray-800 border-2 py-2 px-6 border-gray-600 focus:outline-none hover:bg-gray-200 rounded-xl text-base mt-4 md:mt-0">Resume</button>
          <a href="https://calendly.com/pranav-7ge/30min" target="_blank" rel="noopener noreferrer">
            <button className="inline-flex items-center bg-blue-700 border-2 py-2 px-6 border-gray-600 focus:outline-none hover:bg-gray-200 rounded-xl text-base mt-4 md:mt-0">Book a Call</button>
          </a>
        </div>
      </div>

      <Modal isOpen={modalIsOpen} onRequestClose={toggleModal}>
        {/* Your form will go here */}
        <form>
          {/* Sample form fields */}
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <button type="submit">Submit</button>
        </form>
      </Modal>
    </header>
  )
}

export default Navbar;
