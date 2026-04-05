# Descify - AI Image Metadata Generator

Descify is a cross-platform desktop application that uses AI to generate titles, descriptions, and keywords for your images. Built with Tauri for a fast, native desktop experience.

## Features

- **Batch metadata generation** - Process multiple images at once
- **AI-powered** - Uses Gemini and OpenRouter for intelligent metadata
- **Searchable model selector** - Command palette-style model selection
- **Embed metadata** - Write metadata directly to image files using ExifTool
- **Customizable prompts** - Create and save prompt templates for different use cases
- **Video support** - Preview and process video files
- **Cross-platform** - Works on Windows, macOS, and Linux

## Tech Stack

- **Frontend**: Next.js with shadcn/ui
- **Desktop**: Tauri
- **Database**: Drizzle ORM (SQLite)
- **AI**: Gemini, OpenRouter

## Getting Started

### Prerequisites

- Node.js 18+
- Rust (for Tauri)
- pnpm (recommended)

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build
```

## License

MIT
