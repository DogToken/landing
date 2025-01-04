import React from 'react';

const events = [
  { id: 1, date: 'April 2022', title: 'DogSwap Launch', description: 'DogSwap is launched on MintMe.com.' },
  { id: 2, date: 'May 2022', title: 'Website and Social Media Launch', description: 'Official website and social media channels are launched.' },
  { id: 3, date: 'November 2022', title: 'Creation of DogSwap dApp', description: 'Development of the DogSwap decentralized application.' },
  { id: 4, date: 'May 2023', title: 'DogSwap Domain', description: 'The DogSwap.online domain was registered.' },
  { id: 4, date: 'May 2023', title: 'Introduction of $BONE', description: 'Introduction of the $BONE token with the v2 release of DogSwap.' },
  { id: 5, date: 'June 2023', title: 'Stake & Farm', description: 'Staking and Farming $BONE or other liquidity pools.' },
  { id: 6, date: 'June 2023', title: '1000x Partnership', description: '1000x (mintme token) invested and listed DogSwap on their exchange.' },
  { id: 7, date: 'August 2023', title: 'Increase of liquidity', description: 'Due to inflation and low supply, the prices got raised and liquidity increased.' },
  { id: 8, date: 'January 2024', title: 'Winner Coding Contest', description: 'DogSwap won a coding contest, organised by 1000x as best DAPP.' },
  { id: 9, date: 'March 2024', title: '$BONE listing on MintMe', description: 'The $BONE token got listed on MintMe.com as the first mintme token, created outside of the platform.' },
  { id: 10, date: 'April 2024', title: 'Marketing & Social media', description: 'Increase marketing and list more tokens for traction and increasing visibilty.' },
  { id: 11, date: 'May 2024', title: 'Start Bridge Development', description: 'Announcing the development of the bridge we are creating to Polygon, to spread $BONE.' },
  { id: 12, date: 'June 2024', title: 'New Domain', description: 'DogSwap moved over to a new domain -> dogswap.xyz.' },
  { id: 13, date: 'August 2024', title: 'React Upgrade', description: 'DogSwap got fully recoded from scratch to be up to standards, going from react 16 to react 18 with a new design.' },
  { id: 14, date: 'September 2024', title: 'DogSwap Docs', description: 'Introduction of our Docs, where we will put most information about the project.' },
  { id: 15, date: 'November 2024', title: 'Improving DogSwap', description: 'Improving user journey, adding more pools, increasing liquidity.' },
  { id: 16, date: 'December 2024', title: 'Briding to Polygon', description: '$BONE is now available on Polygon, with growing liquidity.' },
  { id: 17, date: 'January 2025', title: '$BONE Sellout', description: '$BONE is now sold out on MintMe.com, with exponential price increases visible.' },
  { id: 18, date: '2025', title: 'Marketing', description: 'We will increase our public visibility even more traction and getting our socials more active for both chains!' },
  { id: 19, date: '2025', title: 'Hiring', description: 'DogSwap will be on the lookout for a coder, a community manager and a marketeer to gain more popularity' },
  { id: 20, date: '2025', title: 'Coding & Designing', description: 'Small DogSwap redesigns are coming, with requested features by the community' },
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