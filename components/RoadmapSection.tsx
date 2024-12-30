import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket } from 'lucide-react';

const RoadmapSection = () => (
  <section id="roadmap" className="w-full max-w-6xl mx-auto px-4 py-16">
    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Roadmap</h2>
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Rocket className="mr-2" /> Phase 1: Launch
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside">
            <li>Launch of DogSwap on MintMe</li>
            <li>Website and Social Media Launch</li>
            <li>Creation of DogSwap dApp</li>
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Rocket className="mr-2" /> Phase 2: DeFi
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside">
            <li>Introduction of $BONE</li>
            <li>Listing on MintMe.com</li>
            <li>Increasing liquidity</li>
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Rocket className="mr-2" /> Phase 3: Expansion
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside">
            <li>Bridging to Polygon</li>
            <li>Increasing Liquidity</li>
            <li>Verification and Marketing</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  </section>
);

export default RoadmapSection;