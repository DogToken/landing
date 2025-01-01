"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Button } from "@/components/ui/button";

const WhitepaperPage = () => {
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    const fetchWhitepaper = async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/DogToken/DogSwap-v2/refs/heads/main/Whitepaper.md"
      );
      const text = await response.text();
      setContent(text);
    };

    fetchWhitepaper();
  }, []);

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">
          DogSwap Whitepaper
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl mx-auto mb-8">
          Discover the comprehensive details and insights about DogSwap and our tokenomics.
        </p>
        <div className="text-left bg-gray-100 p-4 rounded-lg shadow-lg">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
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

export default WhitepaperPage;