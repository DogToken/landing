import { FaTwitter, FaTelegram, FaDiscord, FaGithub } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:justify-center items-center space-y-8 md:space-y-0 md:space-x-10">
          <div className="flex-shrink-0">
            <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 text-center md:text-left">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Protocol</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="https://app.dogswap.xyz/swap">
                    <a className="text-gray-400 hover:text-white">Swap</a>
                  </Link>
                </li>
                <li>
                  <Link href="https://app.dogswap.xyz/pools">
                    <a className="text-gray-400 hover:text-white">Pools</a>
                  </Link>
                </li>
                <li>
                  <Link href="https://app.dogswap.xyz/stake">
                    <a className="text-gray-400 hover:text-white">Stake</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="https://docs.dogswap.xyz">
                    <a className="text-gray-400 hover:text-white">Documentation</a>
                  </Link>
                </li>
                <li>
                  <Link href="https://docs.dogswap.xyz/faq">
                    <a className="text-gray-400 hover:text-white">FAQ</a>
                  </Link>
                </li>
                <li>
                  <Link href="https://docs.dogswap.xyz/guides">
                    <a className="text-gray-400 hover:text-white">Guides</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Community</h3>
              <div className="flex justify-center md:justify-start space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <FaTwitter size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <FaTelegram size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <FaDiscord size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <FaGithub size={24} />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Featured Pool</h3>
              <Link href="https://dogswap.xyz/featured">
                <a className="text-gray-400 hover:text-white">Visit our featured pool</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} DogSwap. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}