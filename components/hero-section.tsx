// /* eslint-disable @next/next/no-img-element */
"use client"
// import { Logo } from "@/components/logo"
import Link from "next/link"
// import { useState } from "react"
import { Button } from "@/components/ui/button"
// import { Menu, X } from "lucide-react"
import { Github } from "lucide-react"
import Image from "next/image"
import appimg from "../public/Screenshot from 2026-03-21 23-12-28.png"
import { WavyBackground } from "./ui/wavy-background"
// import applogo from "../public/descify.svg"
import { HeaderSection } from "./HeaderSection"

// const menuItems = [
//   { name: "Home", href: "/" },
//   { name: "Features", href: "#features", isAnchor: true },
//   { name: "Download", href: "#download", isAnchor: true },
// ]

export default function HeroSection() {
  // const [menuState, setMenuState] = useState(false)
  return (
    <>
      <HeaderSection />

      <main>
        <div
          aria-hidden
          className="absolute inset-0 isolate -z-10 hidden opacity-50 contain-strict lg:block"
        >
          <div className="absolute top-0 left-0 h-320 w-140 -translate-y-87.5 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="absolute top-0 left-0 h-320 w-60 [translate:5%_-50%] -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
          <div className="absolute top-0 left-0 h-320 w-60 -translate-y-87.5 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>

        <section className="relative overflow-hidden bg-muted/50 dark:bg-background">
          <WavyBackground
            backgroundFill="transparent"
            blur={12}
            waveOpacity={0.2}
            className="mx-auto max-w-5xl px-6 pt-24 pb-12 lg:pt-16 "
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

              <div className="pointer-events-auto relative z-50 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button size="lg">
                  <Link href="/Download" target="_blank" rel="noreferrer">
                    <span className="btn-label">Download Now</span>
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="gap-2 flex">
                  <Link
                    href="https://github.com/arrifat346afs/Descify"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="size-4" />
                    <span className="btn-label">Browse the source</span>
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
