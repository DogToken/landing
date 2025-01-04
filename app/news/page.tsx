import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const newsItems = [
  {
    title: "New DogSwap Homepage",
    date: "2025-06-01",
    content: "A new improved horizon. DogSwap now has a new landing page, where everybody can look into the project without needing a wallet!"
  },
  {
    title: "Polygon Bridging",
    date: "2024-31-12",
    content: "Exciting news! BONE is now available for trading on UniSwap. Get your paws on some $BONE tokens now, or bridge some on MintMe.com!"
  },
  {
    title: "$BONE token Launch",
    date: "2024-05-15",
    content: "Our pack is growing stronger every day! We're thrilled to announce the release of the $BONE token listing on MintMe.com where you can trade and buy services."
  },
  {
    title: "DogSwap Launch",
    date: "2023-05-01",
    content: "DogSwap is excited to announce the release of the dApp, where users can exchange, swap, stake and pool their tokens to earn more! Stay tuned for more details!"
  }
]

export default function NewsPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-center">Latest DogSwap News</h1>
      <div className="grid gap-6">
        {newsItems.map((item, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{item.date}</p>
            </CardHeader>
            <CardContent>
              <p>{item.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

