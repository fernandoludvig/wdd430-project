import Link from "next/link";
import Image from "next/image";
import { Sidebar } from "@/components/Sidebar";
import Button from "@/components/ui/Button";

export default function DashboardLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/90 backdrop-blur">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-3">
              <Image src="/logo.svg" alt="StudyHub" width={32} height={32} />
              <nav className="hidden gap-4 text-sm font-medium text-gray-500 md:flex">
                <Link className="hover:text-gray-900" href="/dashboard">
                  Overview
                </Link>
                <Link className="hover:text-gray-900" href="/groups">
                  Groups
                </Link>
                <Link className="hover:text-gray-900" href="/profile">
                  Profile
                </Link>
              </nav>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                New group
              </Button>
              <div className="flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2">
                <span className="h-8 w-8 rounded-full bg-blue-50 text-center text-sm font-semibold leading-8 text-blue-600">
                  FL
                </span>
                <div className="hidden text-right text-sm text-gray-600 sm:block">
                  <p className="font-semibold text-gray-900">Fernando</p>
                  <p className="text-gray-500">Lead</p>
                </div>
              </div>
            </div>
          </div>
        </header>
        <main className="flex-1 px-6 py-8">{children}</main>
      </div>
    </div>
  );
}

