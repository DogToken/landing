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
  const [totalHolders, setTotalHolders] = useState("Loading...");
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchBlockchainData() {
      try {
        const { ethers } = await fetchEthers();
        const provider = new ethers.providers.JsonRpcProvider("https://polygon-mainnet.infura.io/v3/4d3f7aeffe5f4a3cbdeb2e6dfa99db91");
        const contract = new ethers.Contract(TOKEN_CONTRACT_ADDRESS, TOKEN_CONTRACT_ABI, provider);

        const totalSupply = await contract.totalSupply();
        setTotalSupply(parseFloat(ethers.utils.formatUnits(totalSupply, 18)).toFixed(0));

        const burnedTokens = await contract.balanceOf("0x000000000000000000000000000000000000dead");
        setBurnedTokens(parseFloat(ethers.utils.formatUnits(burnedTokens, 18)).toFixed(0));

        // Fetch total holders from Polygonscan
        const totalHolders = await fetchTotalHolders();
        setTotalHolders(totalHolders);
      } catch (err) {
        console.error("Error fetching blockchain data:", err);
        setError("Failed to fetch data. Please try again later.");
      }
    }

    fetchBlockchainData();
  }, []);

  async function fetchTotalHolders() {
	try {
	  const params = new URLSearchParams({
		module: 'token',
		action: 'tokeninfo',
		contractaddress: TOKEN_CONTRACT_ADDRESS,
		apikey: 'SM1EWDZAKAF8J8S3JT8TNE2EYWPHQ1IHCF'
	  });
  
	  const apiUrl = `https://api.polygonscan.com/api?${params.toString()}`;
	  
	  console.log('Debug - API URL:', apiUrl);
	  
	  const response = await fetch(apiUrl);
	  const data = await response.json();
	  
	  console.log('Debug - API Response:', data);
	  
	  if (data.status === "0") {
		throw new Error(`Polygonscan API error: ${data.result || data.message}`);
	  }
	  
	  // The holders count should be in the response data
	  return data.result?.holders || data.result;
	} catch (err) {
	  console.error("Error details:", err);
	  return "Error fetching total holders";
	}
  }

  return (
    <div className="flex flex-col items-center bg-image">
      <WelcomeSection />
      <TokenomicsSection totalSupply={totalSupply} />
      <RoadmapSection />
      <TokenInfoSection totalSupply={totalSupply} burnedTokens={burnedTokens} totalHolders={totalHolders} />
      <section className="w-full max-w-6xl mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Join the Pack!</h2>
          {error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <Button asChild size="lg">
              <Link href="https://app.uniswap.org/explore/tokens/polygon/0xd97958fb10092107c2377afa2235d7728ca4bd90">
                Buy $BONE on Uniswap <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          )}
        </div>
      </section>
    </div>
  );
}