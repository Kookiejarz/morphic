import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const exampleMessages = [
  {
    heading: "❓What's new with the iPad Pro?",
    message: "What's new with the iPad Pro?"
  },
  {
    heading: '📈Why is Nvidia growing rapidly?',
    message: 'Why is Nvidia growing rapidly?'
  },
  {
    heading: '🤖 How Large Language models work?',
    message: 'How Large Language models work?'
  },
  {
    heading: '🌋 How are volcanoes formed?',
    message: 'How are volcanoes formed?'
  },
  {
    heading: '🍋 Health benefits of lemon water!',
    message: 'Health benefits of lemon water'
  },
  {
    heading: '🌍 How does the sun affect the Earth climate?',
    message: 'How does the sun affect the Earth climate?'
  },
  {
    heading: '🐍 Why do snakes shed their skin?',
    message: 'Why do snakes shed their skin?'
  },
  {
    heading: '🐬 How intelligent are dolphins?',
    message: 'How intelligent are dolphins?'
  },
  {
    heading: '✈️ What are some popular travel destinations?',
    message: 'What are some popular travel destinations?'
  },
  {
    heading: '🐧 How to take care of a penguin?',
    message: 'How to take care of a penguin?'
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
