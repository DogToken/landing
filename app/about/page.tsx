"use client";

import { useState } from 'react';
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin: string;
  twitter: string;
  facebook: string;
}

interface SectionProps {
  title: string;
  content: string[];
  bgGradient?: string;
  textColor?: string;
  isQuote?: boolean;
}

interface TeamSectionProps {
  title: string;
  team: TeamMember[];
}

interface CoreValuesSectionProps {
  title: string;
  values: string[];
}

interface AchievementsSectionProps {
  title: string;
  banners: { image: string; description: string }[];
}

interface SupportersSectionProps {
  title: string;
  logos: { logo: string; name: string; link: string }[];
}

interface ContactUsSectionProps {
  title: string;
  content: string[];
  formData: { name: string, email: string, message: string };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const aboutSections = [
  {
    title: 'Our Mission',
    content: [
      "At DogSwap, our mission is to enhance user adaptability to the full spectrum of blockchain technology offered by MintMe.com. We have developed DogSwap, a cutting-edge DeFi platform that enables users to stake, earn, pool, and more with tokens supported by the original platform.",
      "Users can seamlessly interact with DogSwap through their MetaMask wallet. Our mission also includes improving the overall MintMe chain experience for everyone by creating web extensions that ensure a wholesome, user-friendly, and less toxic environment.",
      "We strongly support open-source principles, and all our code is available on GitHub for anyone to review, contribute to, or learn from.",
      "As DogSwap continues to invest in new projects, we aim to expand our community by bridging to more chains and attracting new members to explore the exciting developments on MintMe. Join our pack now and become part of this amazing community."
    ]
  },
  {
    title: 'Our Team',
    content: [],
    team: [
      { name: 'Doggo', role: 'Founder', image: '/images/coins/doggo.png', linkedin: 'https://linkedin.com/in/doggo', twitter: 'https://twitter.com/DogSwapDeFi', facebook: 'https://www.facebook.com/DogSwapDeFi' },
    ]
  },
  {
    title: 'DogSwap History',
    content: [
      'DogSwap was founded in 2021 with the goal of creating a unique space in the blockchain world for MintMe Users.',
      'Since our inception, we\'ve achieved significant milestones and continue to grow and innovate on the blockchain.',
      'Our journey began with Doggo leading the pack, without prior coding knowledge, trying to create this massive project.',
      'Over the years, we have expanded our supporters, launched multiple successful projects, and built a strong community of users.'
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
      { image: '/images/achievements/1000x.png', description: '1000x Coding Contest' },
      { image: '/images/achievements/1000x.png', description: '1000x Coding Contest' },
    ]
  },
  {
    title: 'Supporters',
    content: [],
    logos: [
      { logo: '/images/coins/1000x.png', name: '1000x', link: 'https://1000x.ch' },
      { logo: '/images/coins/xatter.png', name: 'XatteR', link: 'https://ancientbeast.com' },
      { logo: '/images/coins/WBUX.png', name: 'WhaleBux', link: 'https://mintme.com/token/whalebux' }
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
      <Section title={aboutSections[0].title} content={aboutSections[0].content} bgGradient="from-green-400 to-blue-500" textColor="text-white" />

      {/* Team Section */}
      <TeamSection title={aboutSections[1].title} team={aboutSections[1].team ?? []} />

      {/* Company History Section */}
      <HistorySection title={aboutSections[2].title} content={aboutSections[2].content} />

      {/* Core Values Section */}
      <CoreValuesSection title={aboutSections[3].title} values={aboutSections[3].content} />

      {/* Achievements Section */}
      <AchievementsSection title={aboutSections[4].title} banners={aboutSections[4].banners ?? []} />

      {/* Supporters Section */}
      <SupportersSection title={aboutSections[5].title} logos={aboutSections[5].logos ?? []} />

      {/* Contact Us Section */}
      <ContactUsSection title={aboutSections[6].title} content={aboutSections[6].content} formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  );
}

function Section({ title, content, bgGradient, textColor, isQuote }: SectionProps) {
  return (
    <section className={`mb-16 ${bgGradient ? `bg-gradient-to-r ${bgGradient}` : ''} ${textColor ? textColor : ''} p-12 rounded-lg`}>
      <div className="mb-8 text-center">
        <h2 className="text-4xl font-bold">{title}</h2>
      </div>
      <div className={`text-lg leading-relaxed ${isQuote ? 'italic text-2xl' : ''}`}>
        {content.map((paragraph, idx) => (
          <p key={idx} className="mb-6">{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

function TeamSection({ title, team }: TeamSectionProps) {
  return (
    <section className="mb-16 text-center">
      <h2 className="text-4xl font-bold mb-8">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {team.map((member, idx) => (
          <div key={idx} className="text-center">
            <img src={member.image} alt={member.name} className="w-40 h-40 rounded-full mx-auto border-4 border-gray-200 shadow-lg" />
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
  );
}

function HistorySection({ title, content }: SectionProps) {
  return (
    <section className="mb-16 bg-gray-100 p-12 rounded-lg">
      <div className="mb-8 text-center">
        <h2 className="text-4xl font-bold">{title}</h2>
      </div>
      <div className="text-lg leading-relaxed">
        {content.map((paragraph, idx) => (
          <p key={idx} className="mb-4">{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

function CoreValuesSection({ title, values }: CoreValuesSectionProps) {
  return (
    <section className="mb-16 text-center">
      <h2 className="text-4xl font-bold mb-8">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {values.map((value, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">{value.split(': ')[0]}</h3>
            <p className="text-lg">{value.split(': ')[1]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function AchievementsSection({ title, banners }: AchievementsSectionProps) {
  return (
    <section className="mb-16 text-center">
      <h2 className="text-4xl font-bold mb-8">{title}</h2>
      <div className="flex flex-wrap justify-center space-x-4 overflow-x-auto p-4">
        {banners.map((banner, idx) => (
          <div key={idx} className="flex-shrink-0 text-center">
            <img 
              src={banner.image} 
              alt={`Achievement ${idx + 1}`} 
              className="w-40 h-auto object-cover rounded-lg shadow-md mx-auto" 
            />
            <p className="mt-4 text-lg mx-auto max-w-xs">{banner.description}</p>
          </div>
        ))}
      </div>
      <p className="mt-8 text-lg">
        We are proud of our achievements and milestones. Each banner represents a significant accomplishment in our journey. Thank you for being a part of our community and supporting us.
      </p>
    </section>
  );
}

function SupportersSection({ title, logos }: SupportersSectionProps) {
  return (
    <section className="mb-16 text-center">
      <h2 className="text-4xl font-bold mb-8">{title}</h2>
      <div className="flex flex-wrap justify-center space-x-4 overflow-x-auto p-4">
        {logos.map((supporter, idx) => (
          <div key={idx} className="text-center min-w-[150px]">
            <a href={supporter.link} target="_blank" rel="noopener noreferrer">
              <img src={supporter.logo} alt={supporter.name} className="w-24 h-24 object-cover rounded-full shadow-lg mx-auto" />
              <p className="mt-4 text-lg font-bold">{supporter.name}</p>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactUsSection({ title, content, formData, handleChange, handleSubmit }: ContactUsSectionProps) {
  return (
    <section className="mb-16 text-center">
      <h2 className="text-4xl font-bold mb-8">{title}</h2>
      <div className="text-lg leading-relaxed mb-8 mx-auto max-w-3xl">
        {content.map((paragraph, idx) => (
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
  );
}