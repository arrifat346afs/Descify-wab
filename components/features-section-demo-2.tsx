import { cn } from "@/lib/utils"
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  // IconHeart,
  // IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
  IconTags,
  IconPhoto,
  IconCategory,
  IconLayersLinked,
  IconListNumbers,
  IconClockHour4,
} from "@tabler/icons-react"

export default function FeaturesSectionDemo() {
  const features = [
    {
      title: "Batch metadata generation",
      description:
        "Process multiple images at once and generate titles, keywords, descriptions, and tags much faster.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Gemini and OpenRouter support",
      description:
        "Connect with Gemini and OpenRouter AI providers to generate intelligent metadata for your images.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Searchable AI model selector",
      description:
        "Find and select AI models quickly using a command palette-style searchable dropdown in settings.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Embed metadata with ExifTool",
      description:
        "Embed generated metadata directly into your image files using ExifTool.",
      icon: <IconCloud />,
    },
    {
      title: "Editable prompt templates",
      description:
        "Customize and save your own prompt templates for Stock Photo, Product Catalog, and Social Media.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "AI-powered tagging",
      description:
        "Automatically generate relevant tags for your images using advanced AI models.",
      icon: <IconTags />,
    },
    {
      title: "Image & video file preview",
      description:
        "Preview your images and videos directly in the app while viewing and editing metadata. Supports PNG, JPEG, SVG, and video files.",
      icon: <IconPhoto />,
    },
    {
      title: "Categories and export",
      description:
        "Organize images into categories and export metadata for publishing, archiving, or team handoff.",
      icon: <IconCategory />,
    },
    {
      title: "Cross-platform",
      description:
        "Use Descify on Windows, macOS, and Linux with a fast desktop experience built with Tauri.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Parallel Processing",
      description:
        "Process multiple images simultaneously with configurable workers (1-5) for faster results with paid APIs.",
      icon: <IconLayersLinked />,
    },
    {
      title: "Sequential Processing",
      description:
        "Process images one at a time to avoid rate limiting when using free or trial AI APIs.",
      icon: <IconListNumbers />,
    },
    {
      title: "Request Delay",
      description:
        "Configure delay between AI requests (0-10 seconds) to prevent rate limiting and optimize API usage.",
      icon: <IconClockHour4 />,
    },
  ]
  return (
    <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-4">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  )
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string
  description: string
  icon: React.ReactNode
  index: number
}) => {
  return (
    <div
      className={cn(
        "group/feature relative flex flex-col py-10 lg:border-r dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="pointer-events-none absolute inset-0 h-full w-full bg-linear-to-t from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-neutral-800" />
      )}
      {index >= 4 && (
        <div className="pointer-events-none absolute inset-0 h-full w-full bg-linear-to-b from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-neutral-800" />
      )}
      <div className="relative z-10 mb-4 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="relative z-10 mb-2 px-10 text-lg font-bold">
        <div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-tr-full rounded-br-full bg-neutral-300 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-blue-500 dark:bg-neutral-700" />
        <span className="inline-block text-neutral-800 transition duration-200 group-hover/feature:translate-x-2 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="relative z-10 max-w-xs px-10 text-sm text-neutral-600 dark:text-neutral-300">
        {description}
      </p>
    </div>
  )
}
