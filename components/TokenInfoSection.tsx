import { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TokenInfoSectionProps {
  totalSupply: string;
  burnedTokens: string;
  totalHolders: string; 
}

const TokenInfoSection: FC<TokenInfoSectionProps> = ({ totalSupply, burnedTokens, totalHolders }) => (
  <section id="token-info" className="w-full bg-gray-100 bg-cover bg-center" style={{ backgroundImage: 'url(/images/ui/polygon.jpg)' }}>
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Polygon Info</h2>
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Polygon Supply</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-4xl font-bold">{totalSupply}</p>
            <p className="text-muted-foreground">Total $BONE</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Polygon Burned</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-4xl font-bold">{burnedTokens}</p>
            <p className="text-muted-foreground">$BONE Burned</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Holders</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-4xl font-bold">{totalHolders}</p>
            <p className="text-muted-foreground">Total Holders</p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

export default TokenInfoSection;