import React from 'react';

const events = [
  { id: 1, date: '2020', title: 'Launch of DogSwap on MintMe', description: 'DogSwap is launched on MintMe.' },
  { id: 2, date: '2021', title: 'Website and Social Media Launch', description: 'Official website and social media channels are launched.' },
  { id: 3, date: '2022', title: 'Creation of DogSwap dApp', description: 'Development of the DogSwap decentralized application.' },
  { id: 4, date: '2023', title: 'Introduction of $BONE', description: 'Introduction of the $BONE token.' },
  { id: 5, date: '2024', title: 'Listing on MintMe.com', description: 'DogSwap is listed on MintMe.com.' },
  { id: 6, date: '2025', title: 'Increasing Liquidity', description: 'Efforts to increase liquidity in the market.' },
  { id: 7, date: '2026', title: 'Bridging to Polygon', description: 'DogSwap bridges to the Polygon network.' },
  { id: 8, date: '2027', title: 'Further Liquidity Enhancements', description: 'Further efforts to increase liquidity.' },
  { id: 9, date: '2028', title: 'Verification and Marketing', description: 'Verification and extensive marketing campaigns.' },
];

const RoadmapSection = () => {
  return (
    <div className="w-full bg-gradient-to-b from-white to-blue-50">
      <section className="w-full max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-16 text-blue-900">Our Journey</h2>
        
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
          
          <div className="space-y-12">
            {events.map((event, index) => (
              <div key={event.id} className="relative">
                {/* Content container */}
                <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8`}>
                  {/* Date bubble */}
                  <div className="w-1/2 flex items-center justify-end">
                    <div className={`${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'} w-full`}>
                      <div className="bg-white p-6 rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl border border-blue-100">
                        <span className="text-blue-600 font-bold text-lg block mb-2">{event.date}</span>
                        <h3 className="font-bold text-xl text-gray-800 mb-2">{event.title}</h3>
                        <p className="text-gray-600">{event.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Center dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoadmapSection;