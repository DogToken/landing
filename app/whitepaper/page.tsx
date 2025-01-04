"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ReactMarkdown, { Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { Button } from "@/components/ui/button";
import rehypeRaw from "rehype-raw";

// Define the type for the markdown components
const MarkdownComponents: Components = {
  h1: ({ node, ...props }) => <h1 className="text-4xl font-bold mt-8 mb-6" {...props} />,
  h2: ({ node, ...props }) => <h2 className="text-3xl font-semibold mt-6 mb-4" {...props} />,
  h3: ({ node, ...props }) => <h3 className="text-2xl font-semibold mt-5 mb-3" {...props} />,
  p: ({ node, ...props }) => <p className="mt-4 mb-4" {...props} />,
  ul: ({ node, ...props }) => <ul className="list-disc list-inside mt-4 mb-4 ml-6" {...props} />,
  ol: ({ node, ...props }) => <ol className="list-decimal list-inside mt-4 mb-4 ml-6" {...props} />,
  blockquote: ({ node, ...props }) => <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4" {...props} />,
  code: ({ node, ...props }) => <code className="bg-gray-200 rounded px-2 py-1" {...props} />,
  pre: ({ node, ...props }) => <pre className="bg-gray-800 text-white p-4 rounded-md my-4" {...props} />,
  a: ({ node, ...props }) => <a className="text-blue-600 hover:underline" {...props} />,
  hr: () => <hr className="my-8 border-gray-300" />,
};

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
        <div className="text-left bg-gray-100 p-6 rounded-lg shadow-lg">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={MarkdownComponents}
          >
            {content}
          </ReactMarkdown>
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