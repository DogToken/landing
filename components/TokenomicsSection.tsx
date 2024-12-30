import { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TokenomicsSectionProps {
  totalSupply: string;
}

const TokenomicsSection: FC<TokenomicsSectionProps> = ({ totalSupply }) => (
  <section id="tokenomics" className="w-full max-w-6xl mx-auto px-4 py-16">
    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Tokenomics</h2>
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>MintMe Details</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside">
            <li>Distribution</li>
            <li>Liquidity</li>
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Polygon Details</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside">
            <li>Total Supply: {totalSupply} $BONE</li>
            <li>0% Transaction Fee</li>
            <li>Fully Bridged Token</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  </section>
);

export default TokenomicsSection;