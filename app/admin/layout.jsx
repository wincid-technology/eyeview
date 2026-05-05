"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  { name: "Dashboard", path: "/admin" },
  { name: "Books", path: "/admin/books" },
  { name: "E-Books", path: "/admin/ebooks" },
  { name: "Authors", path: "/admin/authors" },
  { name: "Services", path: "/admin/services" },
  { name: "Events", path: "/admin/events" },
  { name: "Gallery", path: "/admin/gallery" },
];

export default function AdminLayout({ children }) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <aside className="w-64 bg-[#122B76] text-white p-6 space-y-6">
        <h2 className="text-xl font-bold">Admin Panel</h2>

        <nav className="space-y-2">
          {menu.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`block px-3 py-2 rounded ${
                pathname === item.path
                  ? "bg-red-600"
                  : "hover:bg-gray-800"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
}