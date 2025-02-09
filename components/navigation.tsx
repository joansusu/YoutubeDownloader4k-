import Link from "next/link"

export function Navigation() {
  return (
    <nav className="bg-blue-500 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-white text-2xl font-bold">
          YoutubeDownloader4k
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="#" className="text-white hover:text-gray-200">
              About
            </Link>
            <Link href="#" className="text-white hover:text-gray-200">
              Tools
            </Link>
            <Link href="#" className="text-white hover:text-gray-200">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

