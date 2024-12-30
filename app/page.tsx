import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Wallet, BarChart2, Shield, Coins, Rocket } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <section className="w-full max-w-6xl mx-auto px-4 py-24 text-center">
        <Image
          src="/dogswap-logo.svg"
          alt="DogSwap Logo"
          width={150}
          height={150}
          className="mx-auto mb-8"
        />
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">
          Welcome to <span className="text-primary">DogSwap</span>
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl mx-auto mb-8">
          The cutest and most rewarding meme token in the crypto universe! 
          Swap, earn, and join the pack!
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
      </section>

      <section id="tokenomics" className="w-full max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Tokenomics</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Token Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside">
                <li>50% Public Sale</li>
                <li>20% Liquidity Pool</li>
                <li>15% Team and Development</li>
                <li>10% Marketing</li>
                <li>5% Community Rewards</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Token Details</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside">
                <li>Total Supply: 1,000,000,000,000 $DOGSWAP</li>
                <li>2% Transaction Fee (1% to holders, 1% to liquidity)</li>
                <li>Anti-Whale Mechanism: Max wallet 2% of total supply</li>
                <li>Liquidity Locked for 2 years</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="token-info" className="w-full max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Token Info</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Supply</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-4xl font-bold">1,000,000,000,000</p>
              <p className="text-muted-foreground">Total $DOGSWAP</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Burned</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-4xl font-bold">50,000,000,000</p>
              <p className="text-muted-foreground">$DOGSWAP Burned</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Liquidity</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-4xl font-bold">$5,000,000</p>
              <p className="text-muted-foreground">Total Value Locked</p>
            </CardContent>
          </Card>
        </div>
      </section>

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
                <li>Token Launch on PancakeSwap</li>
                <li>Website and Social Media Launch</li>
                <li>Community Building</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Rocket className="mr-2" /> Phase 2: Growth
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside">
                <li>Marketing Campaigns</li>
                <li>Partnerships with Influencers</li>
                <li>Listing on CoinGecko and CoinMarketCap</li>
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
                <li>Launch of DogSwap DEX</li>
                <li>NFT Collection Release</li>
                <li>Charity Initiatives</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="w-full max-w-6xl mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Join the Pack!</h2>
          <Button asChild size="lg">
            <Link href="https://app.dogswap.xyz">
              Buy $DOGSWAP <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

