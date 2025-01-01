"use client"

import React from 'react';

const Highlights = () => {
  const items = [
    {
      icon: <i className="fas fa-exchange-alt"></i>, // Using FontAwesome icons
      title: 'Seamless Token Swaps',
      description:
        'Trade tokens with ease on DogSwap, benefiting from fast, secure, and transparent swaps powered by DeFi innovation.',
    },
    {
      icon: <i className="fas fa-coins"></i>,
      title: 'Earn with Liquidity',
      description:
        'Provide liquidity and earn rewards in BONE while helping build a more liquid and accessible DeFi ecosystem.',
    },
    {
      icon: <i className="fas fa-lock"></i>,
      title: 'Secure and Trusted',
      description:
        'Security is our top priority. Your assets and data are protected through industry-standard security practices.',
    },
    {
      icon: <i className="fas fa-chart-line"></i>,
      title: 'Stake and Grow',
      description:
        'Maximize your earnings by staking BONE and participating in governance to shape the future of DogSwap.',
    },
    {
      icon: <i className="fas fa-headset"></i>,
      title: '24/7 Community Support',
      description:
        'Our dedicated team and active community are always here to support your DogSwap journey, no matter where you are.',
    },
    {
      icon: <i className="fas fa-chart-pie"></i>,
      title: 'Data-Driven Insights',
      description:
        'Make informed decisions with real-time insights and analytics, empowering you to navigate the DeFi space with confidence.',
    },
  ];

  return (
    <section id="highlights" className="py-16 bg-gray-900 text-white w-full">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Highlights</h2>
          <p className="text-gray-400">
            Discover why DogSwap stands out: <br />
            Accessibility, User-Friendly, Open Source and Community based.
            Enjoy reliable customer support, a strong mintme community and passion for every detail.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg text-left">
              <div className="text-4xl text-gray-500 mb-4">{item.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;