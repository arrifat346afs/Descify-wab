import { NextResponse } from "next/server"

interface Asset {
  name: string
  browser_download_url: string
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

function categorizeAssets(assets: Asset[]): Platforms {
  const platforms: Platforms = {
    macos: [],
    windows: [],
    linux: [],
  }

  const skipExtensions = [".sig", ".json"]

  for (const asset of assets) {
    const name = asset.name.toLowerCase()
    if (skipExtensions.some((ext) => name.endsWith(ext))) continue

    if (name.includes(".dmg") || name.includes(".app.tar.gz")) {
      const displayName = name.includes("aarch64")
        ? "Apple Silicon (M1)"
        : "Intel"
      platforms.macos.push({
        name: displayName,
        url: asset.browser_download_url,
      })
    } else if (name.includes(".exe") || name.includes(".msi")) {
      if (name.includes(".exe")) {
        platforms.windows.push({
          name: "EXE Installer",
          url: asset.browser_download_url,
        })
      } else if (name.includes(".msi")) {
        platforms.windows.push({
          name: "MSI Installer",
          url: asset.browser_download_url,
        })
      }
    } else if (
      name.includes(".appimage") ||
      name.includes(".deb") ||
      name.includes(".rpm") ||
      name.includes(".pkg.tar.zst")
    ) {
      if (name.includes(".appimage")) {
        platforms.linux.push({
          name: "AppImage",
          url: asset.browser_download_url,
        })
      } else if (name.includes(".deb")) {
        platforms.linux.push({
          name: "deb",
          url: asset.browser_download_url,
        })
      } else if (name.includes(".rpm")) {
        platforms.linux.push({
          name: "RPM",
          url: asset.browser_download_url,
        })
      } else if (name.includes(".pkg.tar.zst")) {
        platforms.linux.push({
          name: "Arch Linux",
          url: asset.browser_download_url,
        })
      }
    }
  }

  return platforms
}

export async function GET() {
  try {
    const response = await fetch(
      "https://api.github.com/repos/arrifat346afs/Descify/releases/latest",
      {
        headers: {
          Accept: "application/vnd.github+json",
        },
        next: { revalidate: 3600 },
      }
    )

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch releases" },
        { status: response.status }
      )
    }

    const data = await response.json()

    const platforms = categorizeAssets(data.assets)

    return NextResponse.json({
      version: data.tag_name,
      name: data.name,
      platforms,
    })
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
