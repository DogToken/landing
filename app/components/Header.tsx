import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ThemeToggle } from './theme-toggle'

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
  <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
    Home
  </Link>
  <Link href="/news" className="text-sm font-medium transition-colors hover:text-primary">
    News
  </Link>
  <Link href="/#tokenomics" className="text-sm font-medium transition-colors hover:text-primary">
    Tokenomics
  </Link>
  <Link href="/#roadmap" className="text-sm font-medium transition-colors hover:text-primary">
    Roadmap
  </Link>
  <Link href="https://app.dogswap.xyz/swap" className="text-sm font-medium transition-colors hover:text-primary">
    Swap
  </Link>
  <Link href="https://docs.dogswap.xyz" className="text-sm font-medium transition-colors hover:text-primary">
    Docs
  </Link>
</nav>
        <div className="ml-auto flex items-center space-x-4">
          <ThemeToggle />
          <Button asChild variant="default">
            <Link href="https://app.dogswap.xyz">
              Launch App
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

