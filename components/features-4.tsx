import { Cpu, Fingerprint, Pencil, Settings2, Sparkles, Zap } from 'lucide-react'

const features = [
    {
        icon: Zap,
        title: 'Batch metadata generation',
        description: 'Process multiple images at once and generate titles, keywords, descriptions, and tags much faster.',
    },
    {
        icon: Cpu,
        title: 'Gemini and OpenRouter support',
        description: 'Connect supported AI providers and generate metadata with the model setup that fits your workflow.',
    },
    {
        icon: Fingerprint,
        title: 'Embed metadata with ExifTool',
        description: 'Write generated metadata into image files when ExifTool is available on your system.',
    },
    {
        icon: Pencil,
        title: 'Preview and edit before saving',
        description: 'Review images and fine-tune generated fields so every result matches your style and quality needs.',
    },
    {
        icon: Settings2,
        title: 'Categories and export tools',
        description: 'Organize assets into categories and export metadata for publishing, archiving, or team handoff.',
    },
    {
        icon: Sparkles,
        title: 'Cross-platform desktop app',
        description: 'Use Descify on Windows, macOS, and Linux from a fast desktop experience built with Tauri.',
    },
]

const bestFor = [
    {
        title: 'Stock photographers',
        description: 'Speed up keywording and description writing for large image batches before uploading to marketplaces.',
    },
    {
        title: 'Content marketers',
        description: 'Keep campaign assets searchable and reusable with cleaner metadata and better organization.',
    },
    {
        title: 'Designers and creators',
        description: 'Maintain a tidy visual library with tags, categories, previews, and editable metadata fields.',
    },
    {
        title: 'Small media teams',
        description: 'Standardize image metadata workflows across Windows, macOS, and Linux without a heavy setup.',
    },
]

export default function Features() {
    return (
        <section id="features" className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-16 px-6 md:space-y-20">
                <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center md:space-y-8">
                    <h2 className="text-balance text-4xl font-medium lg:text-5xl">Everything you need to prepare image metadata faster</h2>
                    <p className="text-muted-foreground">Descify is built for people who need clean, searchable, publish-ready image metadata without doing every title, keyword, and description by hand.</p>
                </div>

                <div className="relative mx-auto grid max-w-4xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature) => {
                        const Icon = feature.icon

                        return (
                            <div key={feature.title} className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <Icon className="size-4" />
                                    <h3 className="text-sm font-medium">{feature.title}</h3>
                                </div>
                                <p className="text-sm text-muted-foreground">{feature.description}</p>
                            </div>
                        )
                    })}
                </div>

                <div id="best-for" className="mx-auto max-w-5xl space-y-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h3 className="text-3xl font-medium text-balance md:text-4xl">Best for teams and creators working with lots of images</h3>
                        <p className="mt-4 text-muted-foreground">If your workflow depends on image titles, keywords, tags, descriptions, or embedded metadata, Descify helps remove repetitive manual work.</p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                        {bestFor.map((item) => (
                            <div key={item.title} className="rounded-2xl border p-6">
                                <h4 className="text-lg font-medium">{item.title}</h4>
                                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
