// /* eslint-disable @next/next/no-img-element */
"use client"

import Link from "next/link"

import { Button } from "@/components/ui/button"

import { RiGithubFill } from "@remixicon/react"
import { Image, ImageKitProvider, buildSrc } from "@imagekit/next"
import { WavyBackground } from "./ui/wavy-background"

import { HeaderSection } from "./HeaderSection"
import { useState } from "react"
import { Cover } from "./ui/cover"
import { motion } from "motion/react"

const IMAGE_URL =
  "https://ik.imagekit.io/gvt4qxkhg/nextjs%20/Screenshot%20from%202026-03-31%2012-16-45.png"
const Src = "/Screenshot from 2026-03-31 12-16-45.png"

export default function HeroSection() {
  const [showPlaceholder, setShowPlaceholder] = useState(true)
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
            className="mx-auto max-w-5xl px-6 pt-24 pb-12 lg:pt-16"
          >
            <div className="mx-auto max-w-5xl text-center">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="inline-block rounded-full border px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground uppercase"
              >
                AI metadata workflow for images
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="mx-auto mt-4 max-w-5xl text-3xl leading-tight font-semibold text-balance md:text-5xl lg:text-5xl xl:text-5xl"
              >
                Generate image Titles, Descriptions, and Keywords,{" "}
                <Cover>Faster with AI</Cover>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="mx-auto my-6 max-w-3xl text-lg text-muted-foreground md:text-xl"
              >
                Supercharging your images with AI
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="pointer-events-auto relative z-50 flex flex-col items-center justify-center gap-3 sm:flex-row"
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.9, y: 1 }}
                  transition={{ type: "spring" }}
                >
                  <Button size="lg">
                    <Link href="/Download">
                      <span className="btn-label">Download Now</span>
                    </Link>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.9, y: 1 }}
                  transition={{ type: "spring" }}
                >
                  <Button variant="outline" size="lg" className="flex gap-2">
                    <Link
                      href="https://github.com/arrifat346afs/Descify"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2"
                    >
                      <RiGithubFill />
                      <span className="btn-label">Browse the source</span>
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </WavyBackground>

          <motion.div initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mx-auto 2xl:max-w-7xl"
          >
            <div className="pl-8 perspective-distant lg:pl-44">
              <div className="-mt-2 rotate-x-20 skew-x-12 mask-r-from-75% mask-b-from-55% mask-b-to-100% pt-2 pl-6 lg:-mt-10 lg:h-160">
                <ImageKitProvider urlEndpoint={IMAGE_URL}>
                  <Image
                    className="rounded-lg border shadow-xl dark:hidden"
                    src={IMAGE_URL}
                    alt="Descify desktop app preview"
                    width={2880}
                    height={2074}
                    loading="eager"
                    style={
                      showPlaceholder
                        ? {
                            backgroundImage: `url(${buildSrc({
                              urlEndpoint: IMAGE_URL,
                              src: Src,
                              transformation: [
                                // {}, // Any other transformation you want to apply
                                {
                                  quality: 10,
                                  blur: 90,
                                },
                              ],
                            })})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                          }
                        : {}
                    }
                    onLoad={() => {
                      setShowPlaceholder(false)
                    }}
                  />

                  <Image
                    className="hidden rounded-lg border shadow-xl dark:block"
                    src={IMAGE_URL}
                    alt="Descify desktop app preview"
                    width={2880}
                    height={2074}
                    loading="eager"
                    style={
                      showPlaceholder
                        ? {
                            backgroundImage: `url(${buildSrc({
                              urlEndpoint: IMAGE_URL,
                              src: Src,
                              transformation: [
                                // {}, // Any other transformation you want to apply
                                {
                                  quality: 10,
                                  blur: 90,
                                },
                              ],
                            })})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                          }
                        : {}
                    }
                    onLoad={() => {
                      setShowPlaceholder(false)
                    }}
                  />
                </ImageKitProvider>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  )
}
