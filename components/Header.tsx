import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const actionBase =
  "inline-flex items-center justify-center rounded-lg border text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.svg" alt="StudyHub" width={36} height={36} />
          <span className="text-xl font-semibold text-gray-900">StudyHub</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-gray-500 md:flex">
          <Link className="hover:text-gray-900" href="/#features">
            Features
          </Link>
          <Link className="hover:text-gray-900" href="/#roadmap">
            Roadmap
          </Link>
          <Link className="hover:text-gray-900" href="/#team">
            Team
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className={cn(actionBase, "h-9 border-gray-200 bg-white px-4 text-gray-700 hover:bg-gray-100")}
          >
            Sign in
          </Link>
          <Link href="/register" className={cn(actionBase, "h-9 border-blue-600 bg-blue-600 px-4 text-white hover:bg-blue-700")}>
            Create account
          </Link>
        </div>
      </div>
    </header>
  );
}

