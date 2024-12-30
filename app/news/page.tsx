import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const newsItems = [
  {
    title: "DogSwap Launches on PancakeSwap",
    date: "2023-06-01",
    content: "Exciting news! DogSwap is now available for trading on PancakeSwap. Get your paws on some $DOGSWAP tokens now!"
  },
  {
    title: "DogSwap Community Reaches 10,000 Members",
    date: "2023-05-15",
    content: "Our pack is growing stronger every day! We're thrilled to announce that our Telegram community has surpassed 10,000 members."
  },
  {
    title: "New Partnership Announcement",
    date: "2023-05-01",
    content: "DogSwap is excited to announce a strategic partnership with BarkChain, a leading blockchain for pet-related projects. Stay tuned for more details!"
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

