import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const exampleMessages = [
  {
    heading: '⚙️What is GPT-4o mini?',
    message: 'What is GPT-4o mini?'
  },
  {
    heading: '🥥Nutritions contained in a coconut',
    message: 'Nutritions contained in a coconut'
  },
  {
    heading: '🍎Why should we eat an apple a day?',
    message: 'Why should we eat an apple a day?'
  },
  {
    heading: '📈Why is Nvidia growing rapidly?',
    message: 'Why is Nvidia growing rapidly?'
  },
  {
    heading: '🐧How to take care of a penguin?',
    message: 'How to take care of a penguin?'
  },
  {
    heading: '🔧How is search AI different?',
    message: 'How is search AI different?'
  },
  {
    heading: '💾Size of a META GPU cluster',
    message: 'Size of a META GPU cluster'
  },
  {
    heading: '🐳How can whales communicate to each other?',
    message: 'How can whales communicate to each other?'
  },
  {
    heading: '🏝️Where is the must-visit place in 2024?',
    message: 'Where is the must-visit place in 2024?'
  }
]
export function EmptyScreen({
  submitMessage,
  className
}: {
  submitMessage: (message: string) => void
  className?: string
}) {
  return (
    <div className={`mx-auto w-full transition-all ${className}`}>
      <div className="bg-background p-2">
        <div className="mt-4 flex flex-col items-start space-y-2 mb-4">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              name={message.message}
              onClick={async () => {
                submitMessage(message.message)
              }}
            >
              <ArrowRight size={16} className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
