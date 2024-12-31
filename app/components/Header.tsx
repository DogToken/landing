"use client"; // This marks the component as a Client Component

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './theme-toggle';

export default function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/ui/logo.png"
            alt="DogSwap Logo"
            width={32}
            height={32}
          />
          <span className="text-xl font-bold">DogSwap</span>
        </Link>
        <nav className="flex items-center space-x-6 ml-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary py-2 px-3" rel="noopener noreferrer">
            Home
          </Link>
          <Link href="/news" className="text-sm font-medium transition-colors hover:text-primary py-2 px-3" rel="noopener noreferrer">
            News
          </Link>
          <div className="relative group">
            <button className="text-sm font-medium transition-colors hover:text-primary py-2 px-3">
              MintMe
            </button>
            <div className="absolute left-0 mt-0 hidden w-48 bg-white border rounded-md shadow-lg group-hover:flex flex-col">
              <Link href="https://app.dogswap.xyz/swap" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" target="_blank" rel="noopener noreferrer">
                Swap
              </Link>
              <Link href="https://app.dogswap.xyz/stake" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" target="_blank" rel="noopener noreferrer">
                Stake
              </Link>
              <Link href="https://app.dogswap.xyz/bonepools" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" target="_blank" rel="noopener noreferrer">
                Pool
              </Link>
            </div>
          </div>
          <div className="relative group">
            <button className="text-sm font-medium transition-colors hover:text-primary py-2 px-3">
              Polygon
            </button>
            <div className="absolute left-0 mt-0 hidden w-48 bg-white border rounded-md shadow-lg group-hover:flex flex-col">
              <Link href="https://app.uniswap.org/explore/tokens/polygon/0xd97958fb10092107c2377afa2235d7728ca4bd90" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" target="_blank" rel="noopener noreferrer">
                Swap
              </Link>
              <Link href="https://polygonscan.com/token/0xd97958Fb10092107C2377afa2235d7728Ca4BD90" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" target="_blank" rel="noopener noreferrer">
                Polygonscan
              </Link>
            </div>
          </div>
          <div className="relative group">
            <button className="text-sm font-medium transition-colors hover:text-primary py-2 px-3">
              Info
            </button>
            <div className="absolute left-0 mt-0 hidden w-48 bg-white border rounded-md shadow-lg group-hover:flex flex-col">
              <Link href="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" rel="noopener noreferrer">
                About
              </Link>
              <Link href="/#tokenomics" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" rel="noopener noreferrer">
                Tokenomics
              </Link>
              <Link href="/#roadmap" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" rel="noopener noreferrer">
                Roadmap
              </Link>
              <Link href="https://docs.dogswap.xyz" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" target="_blank" rel="noopener noreferrer">
                Docs
              </Link>
            </div>
          </div>
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          <ThemeToggle />
          <Button asChild variant="default">
            <Link href="https://app.dogswap.xyz" target="_blank" rel="noopener noreferrer">
              Launch App
            </Link>
          </Button>
        </div>
      </div>
      <style jsx>{`
        .group:hover .group-hover\\:flex {
          display: flex;
        }
        .relative.group:hover .absolute {
          display: flex;
        }
      `}</style>
    </div>
  );
}