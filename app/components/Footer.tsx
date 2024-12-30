import { FaTwitter, FaTelegram, FaDiscord, FaGithub } from 'react-icons/fa'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold mb-4">Protocol</h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://app.dogswap.xyz/swap" className="text-muted-foreground hover:text-primary">
                  Swap
                </Link>
              </li>
              <li>
                <Link href="https://app.dogswap.xyz/pools" className="text-muted-foreground hover:text-primary">
                  Pools
                </Link>
              </li>
              <li>
                <Link href="https://app.dogswap.xyz/stake" className="text-muted-foreground hover:text-primary">
                  Stake
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://docs.dogswap.xyz" className="text-muted-foreground hover:text-primary">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="https://docs.dogswap.xyz/faq" className="text-muted-foreground hover:text-primary">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="https://docs.dogswap.xyz/guides" className="text-muted-foreground hover:text-primary">
                  Guides
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <FaTelegram size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <FaDiscord size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <FaGithub size={24} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Featured Pool</h3>
            <Link 
              href="https://dogswap.xyz/featured" 
              className="text-muted-foreground hover:text-primary"
            >
              Visit our featured pool
            </Link>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} DogSwap. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

