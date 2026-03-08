import Link from 'next/link'
import { Logo } from '@/components/logo'

const links = [
    { label: 'Home', href: '/' },
    { label: 'Features', href: '#features' },
    { label: 'Best for', href: '#best-for' },
    { label: 'GitHub', href: 'https://github.com/arrifat346afs/Descify', external: true },
    { label: 'Releases', href: 'https://github.com/arrifat346afs/Descify/releases/latest', external: true },
]

export default function Footer() {
    return (
        <footer className="bg-background @container py-12">
            <div className="mx-auto max-w-2xl px-6">
                <div className="border-y py-8">
                    <div className="@xl:flex-row @xl:items-center flex flex-col gap-6">
                        <Link
                            href="/"
                            aria-label="home">
                            <Logo className="h-5 w-fit" />
                        </Link>
                        <nav className="@xl:ml-auto flex flex-wrap gap-x-6 gap-y-2">
                            {links.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    target={link.external ? '_blank' : undefined}
                                    rel={link.external ? 'noreferrer' : undefined}
                                    className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
                <div className="@xl:flex-row @xl:justify-between flex flex-col-reverse gap-4 pt-8">
                    <p className="text-muted-foreground text-sm">&copy; {2026} Descify. AI title, keyword & description generator for images.</p>
                    <div className="flex flex-wrap gap-4">
                        <Link
                            href="https://github.com/arrifat346afs/Descify/blob/main/README.md"
                            target="_blank"
                            rel="noreferrer"
                            className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                            README
                        </Link>
                        <Link
                            href="https://github.com/arrifat346afs/Descify/issues"
                            target="_blank"
                            rel="noreferrer"
                            className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                            Issues
                        </Link>
                        <Link
                            href="https://github.com/arrifat346afs/Descify/releases"
                            target="_blank"
                            rel="noreferrer"
                            className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                            All releases
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
