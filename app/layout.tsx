import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import { ThemeProvider } from './components/theme-provider'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DogSwap - High Yield DeFi Earning Pools | MintMe',
  description: 'Join DogSwap on MintMe and explore top high-yield DeFi earning pools. Maximize your earnings with our secure and user-friendly platform.',
  keywords: 'DogSwap, DeFi, high-yield, earning pools, MintMe, cryptocurrency, blockchain, finance'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="title" content={metadata.title} />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="/images/ui/logo.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dogswap.xyz" />
      </head>
      <body className={`${inter.className} min-h-screen bg-background antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen">
            <div className="absolute inset-0 bg-grid-pattern opacity-5" />
            <div className="relative">
              <Header />
              <main>{children}</main>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}