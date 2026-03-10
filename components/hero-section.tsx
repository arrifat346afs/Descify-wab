// /* eslint-disable @next/next/no-img-element */
"use client"
// import { Logo } from "@/components/logo"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const GitHubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
)
import Image from "next/image"
import appimg from "../public/screenshot_2025-12-26_16-58-54.png"
import { WavyBackground } from "./ui/wavy-background"
import applogo from "../public/descify.svg"

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Features", href: "#features", isAnchor: true },
  { name: "Demo", href: "#demo", isAnchor: true },
  { name: "FAQs", href: "#faqs", isAnchor: true },
  { name: "Download", href: "#download", isAnchor: true },
]

export default function HeroSection() {
  const [menuState, setMenuState] = useState(false)
  return (
    <>
      <header>
        <nav
          data-state={menuState && "active"}
          className="fixed z-20 w-full border-b border-dashed bg-white backdrop-blur md:relative dark:bg-zinc-950/50 lg:dark:bg-transparent"
        >
          <div className="m-auto max-w-5xl px-6">
            <div className="flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
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
                  onClick={() => setMenuState(!menuState)}
                  aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                  className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
                >
                  <Menu className="m-auto size-6 duration-200 in-data-[state=active]:scale-0 in-data-[state=active]:rotate-180 in-data-[state=active]:opacity-0" />
                  <X className="absolute inset-0 m-auto size-6 scale-0 -rotate-180 opacity-0 duration-200 in-data-[state=active]:scale-100 in-data-[state=active]:rotate-0 in-data-[state=active]:opacity-100" />
                </button>
              </div>

              <div className="mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border bg-background p-6 shadow-2xl shadow-zinc-300/20 in-data-[state=active]:block md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none lg:in-data-[state=active]:flex dark:shadow-none dark:lg:bg-transparent">
                <div className="lg:pr-4">
                  <ul className="space-y-6 text-base lg:flex lg:gap-8 lg:space-y-0 lg:text-sm">
                    {menuItems.map((item, index) => (
                      <li key={index}>
                        {item.isAnchor ? (
                          <button
                            onClick={() => {
                              document
                                .getElementById(item.href.slice(1))
                                ?.scrollIntoView({ behavior: "smooth" })
                            }}
                            className="block text-muted-foreground duration-150 hover:cursor-pointer hover:text-accent-foreground"
                          >
                            <span>{item.name}</span>
                          </button>
                        ) : (
                          <Link
                            href={item.href}
                            target={
                              item.href.startsWith("http")
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              item.href.startsWith("http")
                                ? "noreferrer"
                                : undefined
                            }
                            className="block text-muted-foreground duration-150 hover:text-accent-foreground"
                          >
                            <span>{item.name}</span>
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit lg:border-l lg:pl-6">
                  <Button asChild variant="outline" size="sm">
                    <Link
                      href="https://github.com/arrifat346afs/Descify"
                      target="_blank"
                      rel="noreferrer"
                    >
                       <GitHubIcon />
                    </Link>
                  </Button>
                  <Button asChild size="sm">
                    <Link
                      href="https://github.com/arrifat346afs/Descify/releases/latest"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>Download</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <div
          aria-hidden
          className="absolute inset-0 isolate z-2 hidden opacity-50 contain-strict lg:block"
        >
          <div className="absolute top-0 left-0 h-320 w-140 -translate-y-87.5 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="absolute top-0 left-0 h-320 w-60 [translate:5%_-50%] -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
          <div className="absolute top-0 left-0 h-320 w-60 -translate-y-87.5 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>

        <section className="overflow-hidden bg-muted/50 dark:bg-background">
          <WavyBackground
            backgroundFill="transparent"
            blur={12}
            waveOpacity={0.2}
            className="mx-auto max-w-5xl px-6 pt-24 pb-12 lg:pt-16"
          >
            <div className="mx-auto max-w-5xl text-center">
              <span className="inline-block rounded-full border px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                AI metadata workflow for images
              </span>
              <h1 className="mx-auto mt-4 max-w-5xl text-3xl leading-tight font-semibold text-balance md:text-5xl lg:text-5xl xl:text-5xl">
                Generate image titles, descriptions, and keywords, faster
              </h1>
              <p className="mx-auto my-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
                Supercharging your images with AI
              </p>

              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link
                    href="https://github.com/arrifat346afs/Descify/releases/latest"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="btn-label">Download latest release</span>
                  </Link>
                </Button>
                <Button asChild variant="outline" className="flex items-center gap-2" size="lg">
                  <Link
                    href="https://github.com/arrifat346afs/Descify"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="btn-label">Browse the source <GitHubIcon /></span>
                  </Link>
                </Button>
              </div>
            </div>
          </WavyBackground>

          <div className="mx-auto 2xl:max-w-7xl">
            <div className="pl-8 perspective-distant lg:pl-44">
              <div className="-mt-2 rotate-x-20 skew-x-12 mask-r-from-75% mask-b-from-55% mask-b-to-100% pt-2 pl-6 lg:-mt-10 lg:h-160">
                <Image
                  className="rounded-(--radius) border shadow-xl dark:hidden"
                  src={appimg}
                  alt="Descify desktop app preview"
                  width={2880}
                  height={2074}
                />
                <Image
                  className="hidden rounded-(--radius) border shadow-xl dark:block"
                  src={appimg}
                  alt="Descify desktop app preview"
                  width={2880}
                  height={2074}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
