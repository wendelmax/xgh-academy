"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "Início" },
  { href: "/o-que-e-xgh", label: "O que é XGH" },
  { href: "/manifesto", label: "Manifesto" },
  { href: "/principios", label: "Princípios" },
  { href: "/boas-praticas", label: "POC, MVP e Agilidade" },
  { href: "/certificacao", label: "Certificação" },
  { href: "/badges", label: "Badges" },
  { href: "/validar", label: "Validar Certificado" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b border-neutral-200 bg-white/95 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/95">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-white"
        >
          XGH Academy
        </Link>
        <nav className="flex flex-wrap items-center gap-1">
          {nav.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                pathname === href
                  ? "bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900"
                  : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
