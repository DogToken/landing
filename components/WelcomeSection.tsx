import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import Link from "next/link";

const WelcomeSection = () => (
  <section className="w-full bg-gray-100 bg-cover bg-center" style={{ backgroundImage: 'url(/images/ui/bg.jpg)' }}>
    <div className="max-w-6xl mx-auto px-4 py-24 text-center">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">
        Welcome to <span className="text-primary">DogSwap</span>
      </h1>
      <p className="max-w-[700px] text-muted-foreground md:text-xl mx-auto mb-8">
        Explore one of MintMe's top DeFi, delivering high-yielding, earning pools. 
        Grow your MintMe experience on the DogSwap ecosystem and start earning today!
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild size="lg">
          <Link href="https://app.dogswap.xyz">
            Launch App <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="https://docs.dogswap.xyz">
            Read Docs
          </Link>
        </Button>
      </div>
    </div>
  </section>
);

export default WelcomeSection;