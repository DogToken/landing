"use client";

import { useState, useEffect } from "react";
import dynamic from 'next/dynamic';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Rocket } from 'lucide-react';
import Link from "next/link";
import Image from "next/image";

const TOKEN_CONTRACT_ADDRESS = "0xd97958Fb10092107C2377afa2235d7728Ca4BD90";
const TOKEN_CONTRACT_ABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_bridge",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "allowance",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "needed",
				"type": "uint256"
			}
		],
		"name": "ERC20InsufficientAllowance",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "balance",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "needed",
				"type": "uint256"
			}
		],
		"name": "ERC20InsufficientBalance",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "approver",
				"type": "address"
			}
		],
		"name": "ERC20InvalidApprover",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			}
		],
		"name": "ERC20InvalidReceiver",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"name": "ERC20InvalidSender",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "ERC20InvalidSpender",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "burn",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_account",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "burnFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "mint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

const fetchEthers = async () => {
  const ethers = await import('ethers');
  return ethers;
};

export default function Home() {
  const [totalSupply, setTotalSupply] = useState("Loading...");
  const [burnedTokens, setBurnedTokens] = useState("Loading...");
  const [liquidityLocked, setLiquidityLocked] = useState("Loading...");

  useEffect(() => {
    async function fetchBlockchainData() {
      const { ethers } = await fetchEthers();
      const provider = new ethers.providers.JsonRpcProvider("https://polygon-mainnet.infura.io/v3/4d3f7aeffe5f4a3cbdeb2e6dfa99db91");
  
      const contract = new ethers.Contract(TOKEN_CONTRACT_ADDRESS, TOKEN_CONTRACT_ABI, provider);
  
      // Fetch total supply
      const totalSupply = await contract.totalSupply();
      const formattedTotalSupply = parseFloat(ethers.utils.formatUnits(totalSupply, 18)).toFixed(0);
      setTotalSupply(formattedTotalSupply);
  
      // Fetch burned tokens (assuming you have a function to get this data)
      const burnedTokens = await contract.balanceOf("0x000000000000000000000000000000000000dead");
      const formattedBurnedTokens = parseFloat(ethers.utils.formatUnits(burnedTokens, 18)).toFixed(0);
      setBurnedTokens(formattedBurnedTokens);
  
      // Fetch liquidity locked (assuming you have a function to get this data)
      const liquidityLocked = await contract.getLiquidityLocked();
      const formattedLiquidityLocked = parseFloat(ethers.utils.formatUnits(liquidityLocked, 18)).toFixed(0);
      setLiquidityLocked(formattedLiquidityLocked);
    }
  
    fetchBlockchainData();
  }, []);

  return (
    <div className="flex flex-col items-center bg-image">
      <section className="w-full max-w-6xl mx-auto px-4 py-24 text-center">
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
      </section>
  
      <section id="tokenomics" className="w-full max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Tokenomics</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>MintMe Details</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside">
                <li>Distribution</li>
                <li>Liquidity</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Polygon Details</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside">
                <li>Total Supply: {totalSupply} $BONE</li>
                <li>0% Transaction Fee</li>
                <li>Fully Bridged Token</li>
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
              <CardTitle>Polygon Supply</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-4xl font-bold">{totalSupply}</p>
              <p className="text-muted-foreground">Total $BONE</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Polygon Burned</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-4xl font-bold">{burnedTokens}</p>
              <p className="text-muted-foreground">$BONE Burned</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Liquidity</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-4xl font-bold">{liquidityLocked}</p>
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
                <li>Launch of DogSwap on MintMe</li>
                <li>Website and Social Media Launch</li>
                <li>Creation of DogSwap dApp</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Rocket className="mr-2" /> Phase 2: DeFi
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside">
                <li>Introduction of $BONE</li>
                <li>Listing on MintMe.com</li>
                <li>Increasing liquidity</li>
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
                <li>Bridging to Polygon</li>
                <li>Increasing Liquidity</li>
                <li>Verification and Marketing</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
  
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