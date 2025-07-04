"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Home, MessageCircle, Bell } from "lucide-react"

export function Navigation() {
  const pathname = usePathname()

  return (
    <div className="flex items-center justify-between p-4 border-b border-white/10 bg-gradient-to-r from-black/50 to-red-900/50 backdrop-blur-sm">
      <Link href="/">
        <Image src="/exon-logo.png" alt="Exon Logo" width={100} height={32} className="object-contain" />
      </Link>

      <div className="flex items-center space-x-4">
        <Link href="/">
          <Button
            variant="ghost"
            size="icon"
            className={`text-white hover:bg-white/10 ${pathname === "/" ? "bg-white/20" : ""}`}
          >
            <Home className="h-5 w-5" />
          </Button>
        </Link>

        <Link href="/chat">
          <Button
            variant="ghost"
            size="icon"
            className={`text-white hover:bg-white/10 ${pathname === "/chat" ? "bg-white/20" : ""}`}
          >
            <MessageCircle className="h-5 w-5" />
          </Button>
        </Link>

        <Link href="/dashboard">
          <Button
            variant="ghost"
            size="icon"
            className={`text-white hover:bg-white/10 ${pathname === "/dashboard" ? "bg-white/20" : ""}`}
          >
            <Bell className="h-5 w-5" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
