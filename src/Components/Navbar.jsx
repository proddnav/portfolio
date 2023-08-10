import React, { useState } from 'react';
import Modal from 'react-modal';
import emailjs from 'emailjs-com';
import Link from 'next/link';

const Navbar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
          // Open the resume link in a new window or tab
          window.open("https://drive.google.com/file/d/18V10RHbeLaerGKP_6-oZEsOuJ2Trl_Mn/view?usp=sharing", "_blank");
          toggleModal(); // Close the modal
      }, (error) => {
          console.log(error.text);
      });
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
          <Link href='/booknotes' className="mr-5 hover:text-gray-300 hover:scale-110">Book Notes</Link> {/* New Button */}
        </nav>
        <div className='flex gap-5'>
          <button onClick={toggleModal} className="inline-flex items-center bg-gray-800 border-2 py-2 px-6 border-gray-600 focus:outline-none hover:bg-gray-200 rounded-xl text-base mt-4 md:mt-0">Resume</button>
          <a href="https://calendly.com/pranav-7ge/30min" target="_blank" rel="noopener noreferrer">
            <button className="inline-flex items-center bg-blue-700 border-2 py-2 px-6 border-gray-600 focus:outline-none hover:bg-gray-200 rounded-xl text-base mt-4 md:mt-0">Book a Call</button>
          </a>
        </div>
      </div>

      <Modal isOpen={modalIsOpen} onRequestClose={toggleModal} style={{
        content: {
          backgroundColor: '#141414',
          color: 'white',
          borderRadius: '15px',
          border: 'none',
          padding: '20px',
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width: '50%',
          maxWidth: '500px'
        }
      }}>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" required className="py-2 px-4 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-gray-400" />
          <input type="email" name="email" placeholder="Email" required className="py-2 px-4 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-gray-400" />
          <button type="submit" className="py-2 px-4 bg-blue-700 hover:bg-blue-600 rounded text-white">Submit</button>
          <button type="button" onClick={toggleModal} className="py-2 px-4 bg-gray-800 hover:bg-gray-700 rounded text-white">Close</button>
        </form>
      </Modal>
    </header>
  )
}

export default Navbar;
