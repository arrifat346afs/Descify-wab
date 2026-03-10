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
  <svg
   width="200"
   height="200"
   viewBox="0 0 200 200"
   version="1.1"
   id="svg17"
   sodipodi:docname="a_professional_flat_vector_illustration_of_tux_the_019cd8c7-1ac1-74f0-bac3-387f51d17eed.svg"
   inkscape:version="1.4.3 (0d15f75042, 2025-12-25)"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <defs
     id="defs17" />
  <sodipodi:namedview
     id="namedview17"
     pagecolor="#ffffff"
     bordercolor="#000000"
     borderopacity="0.25"
     inkscape:showpageshadow="2"
     inkscape:pageopacity="0.0"
     inkscape:pagecheckerboard="0"
     inkscape:deskcolor="#d1d1d1"
     inkscape:zoom="3.045"
     inkscape:cx="100"
     inkscape:cy="99.671593"
     inkscape:window-width="1528"
     inkscape:window-height="820"
     inkscape:window-x="0"
     inkscape:window-y="0"
     inkscape:window-maximized="0"
     inkscape:current-layer="svg17" />
  <!-- SVG created with Arrow, by QuiverAI (https://quiver.ai) -->
  <path
     d="m178.9 161.8c-2.87-2.53-3.62-4.48-3.75-7.93-0.25-4.82-2.72-8.54-6.63-9.38-0.57-0.14-0.76-0.65-0.5-1.72 3.43-11.34 1.29-25.32-8.45-41.82-8.44-14.43-22.65-24.28-22.65-45.38 0-17.6 1.64-46.6-32.37-52.75h-2.32c-35.31 0-32.23 34.43-32.04 41.07 0.33 12.5 0.94 22.16-8.81 37.03-11.22 14.05-19.33 26.3-23.55 41.13-2.32 8.09-1.71 15.92-0.91 18.82-1.64 1.31-3.07 3.75-4.59 5.83-2.08 2.6-8.23 2.92-11.23 5.14-2.94 2.33-4.95 5.61-3.77 11.33 0.57 3.2 1.15 4.51-1.04 9.87-1.31 3.21-1.13 6.01 0.76 8.27 2.6 3.31 7.68 4.68 14.87 5.74 9.1 1.37 14.33 3.76 20.98 6.3 6.09 2.47 14.59 4.04 20.86 1.01 2.99-1.25 4.19-3.29 4.66-4.67 5.54-0.2 13.65-2.98 23.03-2.98 6.71 0 14.21 1.88 24.02 2.39 1.37 3.87 5.98 7.74 13.36 7.74 8.24 0 12.37-4.82 19.87-9.79 6.58-4.48 12.05-6.18 18.08-10.05 5.97-3.58 9.18-9.03 2.12-15.2z"
     fill="#000"
     id="path1" />
  <path
     d="m177.1 165.2c-4.82-4.31-4.82-7.21-5.08-11.31-0.25-3.15-1.5-6.19-5.37-6.19h-3.76c-3.72 5.04-7.97 7.7-12.62 7.56-5.39-0.13-7.86-5.17-7.99-12.13-4.61 0-7.31 3.46-8.26 11.31-0.84 6.77-1.61 11.95-5.04 20.65-1.83 4.69-2.27 6.7-0.58 11.43 1.58 4.18 5.68 6.4 10.41 6.27 8.56-0.26 15.01-8.15 20.3-11.65 8.88-5.88 13.1-6.2 17.86-9.85 2.93-2.16 3-3.89 0.13-6.09z"
     fill="#FDD250"
     id="path2"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     d="m177 168.1c-5.85 4.25-12 5.69-21.26 12.27-7.89 5.94-11.1 7.86-17.09 7.47-4.82-0.33-8.62-2.09-10.41-6.79-0.84 2.87-0.19 6.59 1.89 8.7 2.08 2.33 5.88 3.28 9.68 3.02 9.2-0.69 14.89-9.1 22.37-13.35 5.72-3.24 8.52-4.25 13.6-7.37 3.07-1.98 3.42-3.02 1.22-3.95z"
     fill="#F7A548"
     id="path3"
     style="fill:#d2d2d2;fill-opacity:1" />
  <path
     d="m57.72 152.2c-5.21-7.76-8.64-10.57-12.89-10.18-3.7 0.25-6.52 2.78-8.75 7.37-1.76 3.4-5.63 3.91-10.07 5.28-5.39 1.73-5.96 4.72-4.88 10.03 0.84 4.03 0.65 6.19-1.3 10.37-2.54 5.52 3.35 7.66 12.49 8.97 9.43 1.44 13.59 3.56 20.8 6.16 7.69 2.79 15 3.44 19.72-0.49 5.66-4.69 3.65-11.27-1.68-17.31-5.22-5.88-10-14.8-13.44-20.2z"
     fill="#FDD250"
     id="path4"
     style="fill:#ffffff" />
  <path
     d="m 73.79,179.2 c -1.44,4.96 -5.41,8.99 -14.84,8.21 -7.34,-0.65 -11.6,-4.53 -22.94,-6.78 -7.89,-1.62 -13.85,-1.98 -15.99,-4.26 -1,3.35 1.04,6.34 10.6,8.22 11.54,2.33 15.57,3.67 22.02,6.4 8.81,3.73 18.1,3.4 21.97,-2.41 2.7,-4.12 2.01,-7.59 -0.82,-9.38 z"
     fill="#F7A548"
     id="path5"
     style="fill:#d2d2d2;fill-opacity:1" />
  <path
     d="m99.83 92.56c-23.28 0-42.7 19.15-42.7 43.47 0 2.6 0.19 4.48 0.51 5.78 6.21 7.02 12.38 9.68 16.6 15.42 3.11 4.18 3.05 8.56-0.96 10.71 7.75 6.77 15.73 9.62 26.42 9.62 11.46 0 21.52-4.95 28.61-10.88 1.51-6.64 1.32-12.64 3.4-18.86 2.01-6.11 6-8.37 10.61-8.8 0.26-1.14 0.26-2.41 0.26-3.71 0-24.08-19.23-42.75-42.75-42.75z"
     fill="#fff"
     id="path6" />
  <path
     d="m84.06 34.76c-5.47 0-7.57 6.51-7.57 11.4 0 4.56 1.25 7.77 3.41 9.78l2.13-1.18c-1.31-1.22-2.2-3.98-2.2-6.88 0-4.28 2.01-7.74 4.68-7.74 2.81 0 4.82 3.27 4.82 7.61 0 1.56-0.32 2.97-0.74 4.19l2.86-1.22c0.26-1.31 0.39-2.71 0.39-4.18 0-5.58-3.05-11.78-7.78-11.78z"
     fill="#fff"
     id="path7" />
  <path
     d="m110.4 33.6c-7.12 0-10.35 7.12-10.35 13.5 0 1.43 0.13 2.31 0.26 2.92l3.66 1.63c-0.32-1.12-0.5-2.31-0.5-3.71 0-4.53 2.57-8.05 6-8.05 3.72 0 5.92 3.45 5.92 7.79 0 2.79-0.99 5.33-2.62 6.83l3.3 1.23c2.87-2.73 4.11-6.21 4.11-10 0-5.98-3.99-12.14-9.78-12.14z"
     fill="#fff"
     id="path8" />
  <path
     d="m113.6 57.36c-4.76-1.75-9.59-5.2-14.41-6.64-5.52-1.5-10.29 0.73-14.16 3.91-3.37 2.66-8.46 3.71-8.65 8.4-0.13 5.78 6.28 7.15 10.73 10.7 4 3.31 8.15 4.02 12.08 3.08 3.34-0.78 6.48-3.14 9.42-4.58 4.76-2.19 10.79-4.28 10.66-8.82-0.08-3.55-2.61-4.95-5.67-6.05z"
     fill="#FCC447"
     id="path9"
     style="fill:#ffffff" />
  <path
     d="m92.03 53.41c-1.57 0-2.52 1.54-2.64 2.2-0.13 0.68 0.75 0.81 1.07 0.55 0.48-0.35 0.76-1.21 1.89-1.53 0.71-0.25 0.9-1.22-0.32-1.22z"
     fill="#000"
     id="path10" />
  <path
     d="m98.72 53.73c-1.56-0.32-1.88 0.84-1.11 1.35 0.7 0.39 1.11 0.95 1.9 1.15 1.05 0.32 1.37-0.62 0.7-1.34-0.64-0.64-0.97-1.03-1.49-1.16z"
     fill="#000"
     id="path11" />
  <path
     d="m114.6 62.16c-5.16 3.38-11.06 7.95-19.42 7.95-6.55 0-10.77-4.15-13.99-6.57-1.2-0.92-2.27 0.32-1.33 1.28 4.62 4.33 9.06 6.79 15 6.79 8.42 0 15.26-5 20.42-8.2 1.31-0.86 0.6-2.12-0.68-1.25z"
     fill="#000"
     id="path12" />
  <path
     d="m85.46 42.62c-1.08-0.2-1.83 0.92-1.83 2.33 0 1.06 0.43 1.79 1.39 1.99 1.18 0.19 2.01-0.93 2.01-2.18 0-1.03-0.64-2.01-1.57-2.14z"
     fill="#000"
     id="path13" />
  <path
     d="m111.5 41.91c-1.25-0.2-2.08 0.9-2.08 2.21-0.06 1.22 0.58 2.23 1.72 2.3 1.19 0.13 2.03-0.94 2.09-2.17 0.06-1.17-0.83-2.21-1.73-2.34z"
     fill="#000"
     id="path14" />
  <path
     d="m170.8 151c-1.44-1.33-3.01-1.58-4.71-1.46-2.26 0.13-4.33 0.65-6.28 1.52 1.18-1.26 2.21-2.71 3.17-3.92h3.17c3.92 0 5.19 2.53 5.45 5.68 0.06 0.32 0.06 0.4 0.06 0.72-0.26-0.91-0.45-1.88-0.86-2.54z"
     fill="#F7A548"
     id="path15"
     style="fill:#d2d2d2;fill-opacity:1" />
  <path
     d="m44.76 145.3c-3.92 0-5.81 3.06-7.6 5.32-1.82 2.41-4.1 4.29-9.11 5.43-4.83 1.2-6.53 2.63-7.43 5.38-0.41-4.25 0.96-6.65 5.65-8.02 3.94-1.23 6.85-2.2 9.39-5.93 2.2-3.21 4.15-4.78 7.37-4.97 3.93-0.39 6.32 1.9 9.48 6.11-1.5-1.66-3.79-3.32-7.75-3.32z"
     fill="#F7A548"
     id="path16"
     style="fill:#d2d2d2;fill-opacity:1" />
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
