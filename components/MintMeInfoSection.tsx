import { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface MintMeInfoSectionProps {
  mintMeTotalSupply: string;
  polygonSupply: string;
}

const MintMeInfoSection: FC<MintMeInfoSectionProps> = ({ mintMeTotalSupply, polygonSupply }) => {
  const remainingMintMeSupply = parseFloat(mintMeTotalSupply) - parseFloat(polygonSupply);

  return (
    <section id="mintme-info" className="w-full bg-gray-100 bg-cover bg-center" style={{ backgroundImage: 'url(/images/ui/mintmebg.png)' }}>
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">MintMe Info</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>$BONE Total Supply</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-4xl font-bold">{mintMeTotalSupply}</p>
              <p className="text-muted-foreground">Total $BONE</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Remaining on MintMe</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-4xl font-bold">{remainingMintMeSupply.toFixed(0)}</p>
              <p className="text-muted-foreground">$BONE Remaining</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MintMeInfoSection;