"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Download, ArrowDown, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import applogo from "../../public/descify.svg"
import LinuxLogo from "../../public/linux.svg"
import Footer from "@/components/footer-3"

const OWNER = "arrifat346afs"
const REPO = "Descify"

const LinuxIcon = () => (
  <Image src={LinuxLogo} alt="Linux" width={64} height={64} />
)

const AppleIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-16 w-16"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
)

const WindowsIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-16 w-16"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M3 12V6.75l6-1.32v6.57H3zm17-9v8.75h-8V5.09L20 3zM3 13h6v6.57l-6-1.32V13zm17 0v8.75l-8-1.41V13h8z" />
  </svg>
)

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
          <div className="flex flex-wrap items-center justify-between gap-6 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <Image
                  src={applogo}
                  alt="Descify Logo"
                  width={24}
                  height={24}
                />
              </Link>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="toggle menu"
                className="lg:hidden"
              >
                {menuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
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
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex gap-2">
                <Button asChild size="sm">
                  <Link href="/Download">
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

interface PlatformOption {
  name: string
  url: string
}

interface Platforms {
  macos: PlatformOption[]
  windows: PlatformOption[]
  linux: PlatformOption[]
}

interface ReleaseData {
  version: string
  name: string
  platforms: Platforms
}

function PlatformCard({
  icon,
  name,
  options,
}: {
  icon: React.ReactNode
  name: string
  options: PlatformOption[]
}) {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleDownload = (url: string) => {
    window.location.href = url
  }

  return (
    <div className="overflow-hidden rounded-2xl border bg-card">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex w-full items-center justify-between px-8 py-6 text-left transition-colors hover:bg-muted/50"
      >
        <div className="flex items-center gap-4">
          <div className="text-foreground/80">{icon}</div>
          <span className="text-lg font-semibold">{name}</span>
        </div>
        <ChevronDown
          className={`h-5 w-5 text-muted-foreground transition-transform ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isExpanded
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-wrap gap-3 px-8 pt-2 pb-6">
            {options.map((option, idx) => (
              <Button
                key={idx}
                onClick={() => handleDownload(option.url)}
                variant="outline"
                className="gap-2"
              >
                <Download className="h-4 w-4" />
                {option.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function SkeletonCard() {
  return (
    <div className="animate-pulse rounded-2xl border bg-card px-8 py-6">
      <div className="flex items-center gap-4">
        <div className="h-16 w-16 rounded bg-muted" />
        <div className="h-6 w-24 rounded bg-muted" />
      </div>
    </div>
  )
}

export default function DownloadPage() {
  const [releaseData, setReleaseData] = useState<ReleaseData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchRelease = async () => {
      try {
        const response = await fetch("/api/releases")
        if (!response.ok) throw new Error("Failed to fetch release")
        const data = await response.json()
        setReleaseData(data)
      } catch (err) {
        setError("Failed to load release information")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchRelease()
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <section className="flex flex-1 flex-col items-center justify-center px-6 pt-32 pb-20 text-center">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-3">
            <Download className="h-10 w-10 text-foreground" strokeWidth={1.5} />
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Download Descify
            </h1>
          </div>

          <p className="max-w-xl text-lg text-muted-foreground md:text-xl">
            Descify is a powerful AI metadata tool that generates titles,
            descriptions, and keywords for your images in seconds.
          </p>

          {loading ? (
            <div className="h-6 w-48 animate-pulse rounded-full bg-muted" />
          ) : error ? (
            <div className="flex items-center gap-2 rounded-full border border-red-200 px-4 py-1.5 text-sm font-medium text-red-600">
              {error}
            </div>
          ) : releaseData ? (
            <div className="flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
              <span className="text-muted-foreground">
                {releaseData.version} available for download
              </span>
            </div>
          ) : null}

          <ArrowDown className="mt-4 h-5 w-5 animate-bounce text-muted-foreground" />
        </div>
      </section>

      <section className="border-t bg-muted/40 px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <p className="mb-10 text-center text-sm font-medium tracking-widest text-muted-foreground uppercase">
            Choose your platform
          </p>

          <div className="grid grid-cols-1 gap-4">
            {loading ? (
              <>
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
              </>
            ) : releaseData ? (
              <>
                {releaseData.platforms.macos.length > 0 && (
                  <PlatformCard
                    icon={<AppleIcon />}
                    name="macOS"
                    options={releaseData.platforms.macos}
                  />
                )}
                {releaseData.platforms.windows.length > 0 && (
                  <PlatformCard
                    icon={<WindowsIcon />}
                    name="Windows"
                    options={releaseData.platforms.windows}
                  />
                )}
                {releaseData.platforms.linux.length > 0 && (
                  <PlatformCard
                    icon={<LinuxIcon />}
                    name="Linux"
                    options={releaseData.platforms.linux}
                  />
                )}
              </>
            ) : (
              <p className="text-center text-muted-foreground">
                Unable to load download options. Please try again later.
              </p>
            )}
          </div>

          <p className="mt-10 text-center text-sm text-muted-foreground">
            All downloads are provided via{" "}
            <Link
              href={`https://github.com/${OWNER}/${REPO}/releases`}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 transition-colors hover:text-foreground"
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
