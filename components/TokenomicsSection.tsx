import { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface TokenomicsSectionProps {
  polygonTotalSupply: string;
  mintMeTotalSupply: string;
  polygonLiquidity: string; // New prop for Polygon liquidity
}

const TokenomicsSection: FC<TokenomicsSectionProps> = ({ polygonTotalSupply, mintMeTotalSupply, polygonLiquidity }) => {
  // Convert total supplies to numbers for calculation
  const polygonSupply = parseFloat(polygonTotalSupply);
  const mintMeSupply = parseFloat(mintMeTotalSupply);
  const polygonLiquidityTokens = parseFloat(polygonLiquidity);

  // Calculate remaining MintMe supply
  const remainingMintMeSupply = mintMeSupply - polygonSupply;

  const data = {
    labels: ['Polygon Supply', 'Remaining on MintMe', 'Polygon Liquidity on Uniswap'],
    datasets: [
      {
        label: 'Token Allocation',
        data: [polygonSupply, remainingMintMeSupply, polygonLiquidityTokens],
        backgroundColor: ['#4CAF50', '#FF9800', '#F44336'],
        hoverBackgroundColor: ['#66BB6A', '#FFB74D', '#E57373'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <section id="tokenomics" className="w-full max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Tokenomics</h2>
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="text-gray-800">MintMe Details</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="list-disc list-inside text-gray-600">
              <li>Total Supply: {mintMeTotalSupply} $BONE</li>
              <li>20K $BONE in liquidity on DogSwap</li>
              <li>No development reservations</li>
              <li>Dev participates in Staking rewards</li>
              <li>0.001 $BONE minted per LP staked</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="text-gray-800">Polygon Details</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="list-disc list-inside text-gray-600">
              <li>Total Supply: {polygonTotalSupply} $BONE</li>
              <li>Liquidity on Uniswap: {polygonLiquidity} $BONE</li>
              <li>0% Transaction Fee (except gas)</li>
              <li>Fully Bridged From MintMe</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="text-gray-800">Token Allocation</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow flex items-center justify-center">
            <div className="w-full max-w-xs">
              <Doughnut data={data} />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TokenomicsSection;