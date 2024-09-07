import React from 'react'
import Link from 'next/link'
import { SiGithub, SiX, SiInstagram } from 'react-icons/si'
import { Button } from './ui/button'

const Footer: React.FC = () => {
  return (
    <footer className="w-fit p-1 md:p-2 fixed bottom-0 right-0">
      <div className="flex justify-end">
        <Button
          variant={'ghost'}
          size={'icon'}
          className="text-muted-foreground/50"
        >
          <Link href="https://github.com/Kookiejarz/morphic" target="_blank">
            <SiGithub size={18} />
          </Link>
        </Button>
        <Button
          variant={'ghost'}
          size={'icon'}
          className="text-muted-foreground/50"
        >
          <Link href="https://x.com/LiuKenneth3" target="_blank">
            <SiX size={18} />
          </Link>
        </Button>
        <Button
          variant={'ghost'}
          size={'icon'}
          className="text-muted-foreground/50"
        >
          <Link href="https://www.instagram.com/kennethhhliu?igsh=eDFhZnQ1NmtweHNx&utm_source=qr" target="_blank">
            <SiInstagram size={18} />
          </Link>
        </Button>
      </div>
    </footer>
  )
}

export default Footer
