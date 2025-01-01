import { FC } from "react";
import Link from "next/link";
import RoadmapSection from "@/components/RoadmapSection";
import { Button } from "@/components/ui/button";

const RoadmapPage: FC = () => {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">
          DogSwap Roadmap
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl mx-auto mb-8">
          Explore the future plans and milestones for DogSwap.
        </p>
        <div className="text-left bg-gray-100 p-4 rounded-lg shadow-lg">
          <RoadmapSection />
        </div>
        <div className="flex justify-center mt-8">
          <Button asChild size="lg">
            <Link href="/">
              Return to Home
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RoadmapPage;