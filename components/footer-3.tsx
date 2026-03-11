import Link from "next/link"
// import { Logo } from '@/components/logo'
import Image from "next/image"
import applogo from "../public/descify.svg"
const links = [
  { label: "Home", href: "/" },
  { label: "Features", href: "#features" },
  { label: "FAQs", href: "#faqs" },
  {
    label: "GitHub",
    href: "https://github.com/arrifat346afs/Descify",
    external: true,
  },
  {
    label: "Releases",
    href: "https://github.com/arrifat346afs/Descify/releases/latest",
    external: true,
  },
]

export default function Footer() {
  return (
    <footer className="@container bg-background py-12">
      <div className="mx-auto px-6">
        <div className="border-y py-8">
          <div className="flex flex-col gap-6 @xl:flex-row @xl:items-center">
            <Link
              href="/"
              aria-label="home"
              className="flex items-center space-x-2"
            >
              <Image src={applogo} alt="Descify Logo" width={24} height={24} />
              <span className="text-lg font-bold">Descify</span>
            </Link>
            <nav className="flex flex-wrap gap-x-6 gap-y-2 @xl:ml-auto">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
        <div className="penguin flex justify-center gap-4 pt-8">
          <p className="text-sm text-muted-foreground">
            &copy; {2026} Descify. AI title, keyword & description generator for
            images.
          </p>
          {/*  */}
        </div>
      </div>
    </footer>
  )
}
