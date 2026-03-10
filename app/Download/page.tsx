"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Download, ArrowDown, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import applogo from "../../public/descify.svg"
import Footer from "@/components/footer-3"

// ---------- OS icons ----------
const LinuxIcon = () => (
  <svg viewBox="0 0 64 64" className="h-16 w-16" fill="currentColor" aria-hidden="true">
    <path d="M32 2C18.7 2 8 12.7 8 26c0 7.2 3.1 13.7 8 18.2V54c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4v-9.8C53 39.7 56 33.2 56 26 56 12.7 45.3 2 32 2zm-6 36c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm12 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-10H20v-4h24v4z" />
  </svg>
)

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" className="h-16 w-16" fill="currentColor" aria-hidden="true">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
)

const WindowsIcon = () => (
  <svg viewBox="0 0 24 24" className="h-16 w-16" fill="currentColor" aria-hidden="true">
    <path d="M3 12V6.75l6-1.32v6.57H3zm17-9v8.75h-8V5.09L20 3zM3 13h6v6.57l-6-1.32V13zm17 0v8.75l-8-1.41V13h8z" />
  </svg>
)

// ---------- Nav ----------
const menuItems = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/#features" },
  { name: "FAQs", href: "/#faqs" },
  { name: "Download", href: "/Download" },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header>
      <nav
        data-state={menuOpen && "active"}
        className="fixed z-20 w-full border-b border-dashed bg-white backdrop-blur md:relative dark:bg-zinc-950/50 lg:dark:bg-transparent"
      >
        <div className="m-auto max-w-5xl px-6">
          <div className="flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <Link href="/" aria-label="home" className="flex items-center space-x-2">
                <Image src={applogo} alt="Descify Logo" width={24} height={24} />
              </Link>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="toggle menu"
                className="lg:hidden"
              >
                {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>

            <div
              className={`${
                menuOpen ? "flex" : "hidden"
              } w-full flex-col gap-4 lg:flex lg:w-auto lg:flex-row lg:items-center`}
            >
              <ul className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-6">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex gap-2">
                <Button asChild size="sm">
                  <Link
                    href="https://github.com/arrifat346afs/Descify/releases/latest"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Download className="mr-1 h-4 w-4" />
                    Download
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

// ---------- Platform cards ----------
const platforms = [
  {
    name: "Linux",
    icon: <LinuxIcon />,
    href: "https://github.com/arrifat346afs/Descify/releases/latest",
    note: "AppImage / deb",
  },
  {
    name: "macOS",
    icon: <AppleIcon />,
    href: "https://github.com/arrifat346afs/Descify/releases/latest",
    note: "Universal dmg",
  },
  {
    name: "Windows",
    icon: <WindowsIcon />,
    href: "https://github.com/arrifat346afs/Descify/releases/latest",
    note: "Setup exe",
  },
]

// ---------- Page ----------
export default function DownloadPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero */}
      <section className="flex flex-1 flex-col items-center justify-center px-6 pt-32 pb-20 text-center">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-3">
            <Download className="h-10 w-10 text-foreground" strokeWidth={1.5} />
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Download Descify
            </h1>
          </div>

          <p className="max-w-xl text-muted-foreground text-lg md:text-xl">
            Descify is a powerful AI metadata tool that generates titles, descriptions, and keywords
            for your images in seconds.
          </p>

          {/* Version badge */}
          <div className="flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-muted-foreground">Latest release available on GitHub</span>
          </div>

          {/* Scroll cue */}
          <ArrowDown className="mt-4 h-5 w-5 animate-bounce text-muted-foreground" />
        </div>
      </section>

      {/* Platform cards */}
      <section className="border-t bg-muted/40 px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <p className="mb-10 text-center text-sm uppercase tracking-widest text-muted-foreground font-medium">
            Choose your platform
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {platforms.map((p) => (
              <Link
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col items-center gap-4 rounded-2xl border bg-card px-8 py-10 shadow-sm transition-all hover:border-foreground/30 hover:shadow-md"
              >
                <div className="text-foreground/80 transition-transform group-hover:scale-110">
                  {p.icon}
                </div>
                <div className="flex flex-col items-center gap-1">
                  <span className="text-lg font-semibold">{p.name}</span>
                  <span className="text-xs text-muted-foreground">{p.note}</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                  <ExternalLink className="h-3 w-3" />
                  GitHub Releases
                </div>
              </Link>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-muted-foreground">
            All downloads are provided via{" "}
            <Link
              href="https://github.com/arrifat346afs/Descify/releases"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:text-foreground transition-colors"
            >
              GitHub Releases
            </Link>
            . Source code is open-source and free to use.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
