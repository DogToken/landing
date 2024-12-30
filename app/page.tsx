"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import Link from "next/link";
import { fetchEthers, TOKEN_CONTRACT_ADDRESS, TOKEN_CONTRACT_ABI } from "@/utils/ethers";
import WelcomeSection from "@/components/WelcomeSection";
import TokenomicsSection from "@/components/TokenomicsSection";
import TokenInfoSection from "@/components/TokenInfoSection";
import RoadmapSection from "@/components/RoadmapSection";

export default function Home() {
  const [totalSupply, setTotalSupply] = useState("Loading...");
  const [burnedTokens, setBurnedTokens] = useState("Loading...");

  useEffect(() => {
    async function fetchBlockchainData() {
      const { ethers } = await fetchEthers();
      const provider = new ethers.providers.JsonRpcProvider("https://polygon-mainnet.infura.io/v3/4d3f7aeffe5f4a3cbdeb2e6dfa99db91");
      const contract = new ethers.Contract(TOKEN_CONTRACT_ADDRESS, TOKEN_CONTRACT_ABI, provider);

      const totalSupply = await contract.totalSupply();
      setTotalSupply(parseFloat(ethers.utils.formatUnits(totalSupply, 18)).toFixed(0));

      const burnedTokens = await contract.balanceOf("0x000000000000000000000000000000000000dead");
      setBurnedTokens(parseFloat(ethers.utils.formatUnits(burnedTokens, 18)).toFixed(0));

    }

    fetchBlockchainData();
  }, []);

  return (
    <div className="flex flex-col items-center bg-image">
      <WelcomeSection />
      <TokenomicsSection totalSupply={totalSupply} />
      <RoadmapSection />
      <TokenInfoSection totalSupply={totalSupply} burnedTokens={burnedTokens} />
      <section className="w-full max-w-6xl mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Join the Pack!</h2>
          <Button asChild size="lg">
            <Link href="https://app.uniswap.org/explore/tokens/polygon/0xd97958fb10092107c2377afa2235d7728ca4bd90">
              Buy $BONE on Uniswap <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}