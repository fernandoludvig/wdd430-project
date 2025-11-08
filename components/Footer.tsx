import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-white">
              <Image src="/logo.svg" alt="StudyHub" width={32} height={32} className="rounded-lg" />
              <span className="text-lg font-semibold">StudyHub</span>
            </div>
            <p className="text-sm text-gray-400">Collaborative study platform for teams who want to go further together.</p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Quick links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/dashboard" className="transition hover:text-white">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="#features" className="transition hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#roadmap" className="transition hover:text-white">
                  Roadmap
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Project resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="https://github.com/fernandoludvig/wdd430-project"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-white"
                >
                  Repository
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/users/fernandoludvig/projects/3/views/1"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-white"
                >
                  Project board
                </Link>
              </li>
              <li>
                <a href="mailto:team@studyhub.com" className="transition hover:text-white">
                  Contact the team
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} StudyHub. All rights reserved.</p>
          <p className="mt-2">CSE 430 • BYU-Idaho</p>
        </div>
      </div>
    </footer>
  );
}

