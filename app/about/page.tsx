"use client";

import { useState } from 'react';
import { FaLinkedin, FaTwitter, FaFacebook, FaPaw } from 'react-icons/fa';

const aboutSections = [
  {
    title: 'Our Mission',
    content: [
      'Revolutionize the way pet lovers interact with blockchain technology.',
      'Create a secure, user-friendly platform that brings the benefits of decentralized finance to the pet community.',
      'Focus on creating value for our users and their pets through innovative products and services.'
    ]
  },
  {
    title: 'Our Vision',
    content: [
      'We envision a world where every pet lover can easily access and utilize blockchain technology to enhance their pet\'s life.',
      'From secure transactions to innovative pet-related projects, DogSwap is here to lead the way.',
      'Our long-term vision includes expanding our ecosystem to support various pet-related applications, fostering a global community of pet enthusiasts, and continuously innovating to meet the evolving needs of our users.'
    ]
  },
  {
    title: 'Our Team',
    content: [],
    team: [
      { name: 'Doggo', role: 'Founder', image: '/images/team/doggo.jpg', linkedin: 'https://linkedin.com/in/alice', twitter: 'https://twitter.com/DogSwapDeFi', facebook: 'https://facebook.com/alice' },
      { name: 'Bob', role: 'CTO', image: '/images/team/bob.jpg', linkedin: 'https://linkedin.com/in/bob', twitter: 'https://twitter.com/bob', facebook: 'https://facebook.com/bob' },
      { name: 'Charlie', role: 'COO', image: '/images/team/charlie.jpg', linkedin: 'https://linkedin.com/in/charlie', twitter: 'https://twitter.com/charlie', facebook: 'https://facebook.com/charlie' }
    ]
  },
  {
    title: 'Company History',
    content: [
      'DogSwap was founded in 2022 with the goal of creating a unique space in the blockchain world for pet lovers.',
      'Since our inception, we\'ve achieved significant milestones and continue to grow and innovate in the industry.',
      'Our journey began with a small team of dedicated individuals who shared a common passion for pets and technology.',
      'Over the years, we have expanded our team, launched multiple successful projects, and built a strong community of users.'
    ]
  },
  {
    title: 'Core Values',
    content: [
      'Integrity: We uphold the highest standards of honesty and accountability in all our interactions.',
      'Innovation: We are committed to exploring new ideas and technologies to enhance our platform.',
      'Community: We value and support our community of users, partners, and team members.'
    ]
  },
  {
    title: 'Achievements',
    content: [],
    banners: [
      '/images/achievements/launch.jpg',
      '/images/achievements/community.jpg',
      '/images/achievements/partnership.jpg',
      '/images/achievements/community.jpg',
      '/images/achievements/partnership.jpg',
      '/images/achievements/community.jpg',
      '/images/achievements/partnership.jpg'
    ]
  },
  {
    title: 'Supporters',
    content: [],
    logos: [
      { logo: '/images/supporters/logo1.png', name: 'Project One', link: 'https://projectone.com' },
      { logo: '/images/supporters/logo2.png', name: 'Project Two', link: 'https://projecttwo.com' },
      { logo: '/images/supporters/logo3.png', name: 'Project Three', link: 'https://projectthree.com' },
      { logo: '/images/supporters/logo4.png', name: 'Project Four', link: 'https://projectfour.com' },
      { logo: '/images/supporters/logo5.png', name: 'Project Five', link: 'https://projectfive.com' }
    ]
  },
  {
    title: 'Contact Us',
    content: [
      'We\'d love to hear from you! Whether you have questions, feedback, or simply want to connect, reach out to us using the form below or at contact@dogswap.com. We are always here to help and engage with our community.'
    ]
  }
];

export default function AboutPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server)
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <h1 className="text-5xl font-extrabold mb-16 text-center">About DogSwap</h1>
      
      {/* Mission Section */}
      <section className="mb-16 text-center">
        <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-8 rounded-lg shadow-lg">
          <div className="flex justify-center mb-8">
            <FaPaw className="text-6xl text-white mr-4" />
            <h2 className="text-4xl font-bold">Our Mission</h2>
          </div>
          <div className="text-lg leading-relaxed">
            {aboutSections[0].content.map((paragraph, idx) => (
              <p key={idx} className="mb-6">{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
      
      {/* Vision Section */}
      <section className="mb-16 bg-gradient-to-r from-blue-100 to-blue-300 p-12 rounded-lg text-center">
        <h2 className="text-4xl font-bold mb-8">{aboutSections[1].title}</h2>
        <blockquote className="italic text-2xl text-gray-800 leading-relaxed">
          {aboutSections[1].content.join(' ')}
        </blockquote>
      </section>
      
      {/* Team Section */}
      <section className="mb-16 text-center">
        <h2 className="text-4xl font-bold mb-8">{aboutSections[2].title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {aboutSections[2].team?.map((member, idx) => (
            <div key={idx} className="text-center">
              <img src={member.image} alt={member.name} className="w-40 h-40 rounded-full mx-auto border-4 border-gray-200 shadow-lg"/>
              <p className="mt-6 font-bold text-xl">{member.name}</p>
              <p className="text-sm text-gray-600">{member.role}</p>
              <div className="flex justify-center space-x-4 mt-4">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition"><FaLinkedin className="text-2xl" /></a>
                <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition"><FaTwitter className="text-2xl" /></a>
                <a href={member.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 transition"><FaFacebook className="text-2xl" /></a>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Company History Section */}
      <section className="mb-16 text-center">
        <h2 className="text-4xl font-bold mb-8">{aboutSections[3].title}</h2>
        <div className="text-lg leading-relaxed">
          {aboutSections[3].content.map((paragraph, idx) => (
            <p key={idx} className="mb-6">{paragraph}</p>
          ))}
        </div>
      </section>
      
      {/* Core Values Section */}
      <section className="mb-16 text-center">
        <h2 className="text-4xl font-bold mb-8">{aboutSections[4].title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {aboutSections[4].content.map((value, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">{value.split(': ')[0]}</h3>
              <p className="text-lg">{value.split(': ')[1]}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Achievements Section */}
      <section className="mb-16 text-center">
        <h2 className="text-4xl font-bold mb-8">{aboutSections[5].title}</h2>
        <div className="flex space-x-4 overflow-x-auto p-4 scrollbar-hide">
          {aboutSections[5].banners?.map((banner, idx) => (
            <img key={idx} src={banner} alt={`Achievement ${idx + 1}`} className="w-64 h-40 object-cover rounded-lg shadow-md"/>
          ))}
        </div>
      </section>
      
      {/* Supporters Section */}
      <section className="mb-16 text-center">
        <h2 className="text-4xl font-bold mb-8">{aboutSections[6].title}</h2>
        <div className="flex flex-wrap justify-center space-x-4 overflow-x-auto p-4">
          {aboutSections[6].logos?.map((supporter, idx) => (
            <div key={idx} className="text-center min-w-[150px]">
              <a href={supporter.link} target="_blank" rel="noopener noreferrer">
                <img src={supporter.logo} alt={supporter.name} className="w-24 h-24 object-cover rounded-full shadow-lg mx-auto"/>
                <p className="mt-4 text-lg font-bold">{supporter.name}</p>
              </a>
            </div>
          ))}
        </div>
      </section>
      
      {/* Contact Us Section */}
      <section className="mb-16 text-center">
        <h2 className="text-4xl font-bold mb-8">{aboutSections[7].title}</h2>
        <div className="text-lg leading-relaxed mb-8 mx-auto max-w-3xl">
          {aboutSections[7].content.map((paragraph, idx) => (
            <p key={idx} className="mb-6">{paragraph}</p>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto space-y-6 bg-white p-8 rounded-lg shadow-md">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-12"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-12"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-24"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}