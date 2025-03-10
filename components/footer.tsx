import Link from 'next/link'
import React from 'react'
import { SiInstagram, SiGithub } from 'react-icons/si'
import { RiLinkUnlinkM } from "react-icons/ri"
import { Button } from './ui/button'

const Footer: React.FC = () => {
  return (
    <footer className="w-fit p-1 md:p-2 fixed bottom-0 right-0 hidden lg:block">
      <div className="flex justify-end">
        <Button
          variant={'ghost'}
          size={'icon'}
          className="text-muted-foreground/50"
        >
          <Link href="https://www.instagram.com/kennethhhliu" target="_blank">
            <SiInstagram size={18} />
          </Link>
        </Button>
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
          <Link href="https://liuu.org" target="_blank">
            <RiLinkUnlinkM size={18} />
          </Link>
        </Button>
      </div>
    </footer>
  )
}

export default Footer
