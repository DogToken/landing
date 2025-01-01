"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import Link from "next/link";
import { fetchEthers, TOKEN_CONTRACT_ADDRESS, TOKEN_CONTRACT_ABI, MINTME_CONTRACT_ADDRESS, MINTME_CONTRACT_ABI } from "@/utils/ethers";
import WelcomeSection from "@/components/WelcomeSection";
import TokenomicsSection from "@/components/TokenomicsSection";
import TokenInfoSection from "@/components/TokenInfoSection";
import MintMeInfoSection from "@/components/MintMeInfoSection";
import Highlights from "@/components/Highlights";

export default function Home() {
  const [polygonTotalSupply, setPolygonTotalSupply] = useState("Loading...");
  const [mintMeTotalSupply, setMintMeTotalSupply] = useState("Loading...");
  const [polygonLiquidity, setPolygonLiquidity] = useState("Loading...");
  const [burnedTokens, setBurnedTokens] = useState("Loading...");
  const [error, setError] = useState("");

  // Fetch data from Polygon network
  useEffect(() => {
    async function fetchPolygonData() {
      try {
        const { ethers } = await fetchEthers();
        const provider = new ethers.providers.JsonRpcProvider("https://polygon-mainnet.infura.io/v3/4d3f7aeffe5f4a3cbdeb2e6dfa99db91");
        const contract = new ethers.Contract(TOKEN_CONTRACT_ADDRESS, TOKEN_CONTRACT_ABI, provider);

        const totalSupply = await contract.totalSupply();
        setPolygonTotalSupply(parseFloat(ethers.utils.formatUnits(totalSupply, 18)).toFixed(0));

        const burnedTokens = await contract.balanceOf("0x000000000000000000000000000000000000dead");
        setBurnedTokens(parseFloat(ethers.utils.formatUnits(burnedTokens, 18)).toFixed(0));

        const uniswapLiquidity = await contract.balanceOf("0x6a8be780e9991cb840ff016d7a9a89ebac8b800d");
        setPolygonLiquidity(parseFloat(ethers.utils.formatUnits(uniswapLiquidity, 18)).toFixed(0));
      } catch (err) {
        console.error("Error fetching Polygon data:", err);
        setError("Failed to fetch data from Polygon. Please try again later.");
      }
    }

    fetchPolygonData();
  }, []);

  // Fetch data from MintMe network
  useEffect(() => {
    async function fetchMintMeData() {
      try {
        const { ethers } = await fetchEthers();
        const mintMeProvider = new ethers.providers.JsonRpcProvider("https://node.1000x.ch");
        const mintMeContract = new ethers.Contract(MINTME_CONTRACT_ADDRESS, MINTME_CONTRACT_ABI, mintMeProvider);

        const mintMeTotalSupply = await mintMeContract.totalSupply();
        setMintMeTotalSupply(parseFloat(ethers.utils.formatUnits(mintMeTotalSupply, 18)).toFixed(0));
      } catch (err) {
        console.error("Error fetching MintMe data:", err);
        setError("Failed to fetch data from MintMe. Please try again later.");
      }
    }

    fetchMintMeData();
  }, []);

  return (
    <div className="flex flex-col items-center bg-image">
      <WelcomeSection />
      <Highlights />
      <TokenomicsSection polygonTotalSupply={polygonTotalSupply} mintMeTotalSupply={mintMeTotalSupply} polygonLiquidity={polygonLiquidity} />
      <TokenInfoSection totalSupply={polygonTotalSupply} burnedTokens={burnedTokens} polygonLiquidity={polygonLiquidity} />
      <MintMeInfoSection mintMeTotalSupply={mintMeTotalSupply} polygonSupply={polygonTotalSupply} />
      <section className="w-full max-w-6xl mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Join the Pack!</h2>
          <Button asChild size="lg">
            <Link href="https://app.uniswap.org/explore/tokens/polygon/0xd97958fb10092107c2377afa2235d7728ca4bd90">
              Buy $BONE on Uniswap <ArrowRight target="_blank" className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}