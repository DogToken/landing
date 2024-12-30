export default function TokenomicsSection() {
    return (
      <section id="tokenomics" className="mb-16">
        <h2 className="text-3xl font-bold mb-4">Tokenomics</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Token Distribution</h3>
            <ul className="list-disc list-inside">
              <li>50% Public Sale</li>
              <li>20% Liquidity Pool</li>
              <li>15% Team and Development</li>
              <li>10% Marketing</li>
              <li>5% Community Rewards</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Token Details</h3>
            <ul className="list-disc list-inside">
              <li>Total Supply: 1,000,000,000,000 $DOGSWAP</li>
              <li>2% Transaction Fee (1% to holders, 1% to liquidity)</li>
              <li>Anti-Whale Mechanism: Max wallet 2% of total supply</li>
              <li>Liquidity Locked for 2 years</li>
            </ul>
          </div>
        </div>
      </section>
    )
  }
  
  