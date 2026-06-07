'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/',                label: 'Home' },
  { href: '/about',           label: 'About Us' },
  { href: '/projects',        label: 'Programs' },
  { href: '/activities',      label: 'Activities' },
  { href: '/dream-project',   label: '✨ Dream Project' },
  { href: '/csr',             label: 'Support Us' },
  { href: '/contact',         label: 'Contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-forest to-forest-light flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-lg">GK</span>
            </div>
            <div className="leading-tight">
              <p className={`font-bold text-sm md:text-base transition-colors ${scrolled ? 'text-forest' : 'text-white'}`}>
                Guru Kripa
              </p>
              <p className={`text-xs transition-colors ${scrolled ? 'text-gray-500' : 'text-green-200'}`}>
                Charitable Trust
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pathname === link.href
                    ? 'bg-amber-500 text-white shadow-sm'
                    : scrolled
                    ? 'text-gray-700 hover:text-forest hover:bg-primary-50'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/csr"
              className="ml-2 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-all shadow-md hover:shadow-lg"
            >
              Donate Now
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-0.5 mb-1.5 transition-all ${scrolled ? 'bg-gray-700' : 'bg-white'} ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <div className={`w-6 h-0.5 mb-1.5 transition-all ${scrolled ? 'bg-gray-700' : 'bg-white'} ${menuOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-0.5 transition-all ${scrolled ? 'bg-gray-700' : 'bg-white'} ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl">
          <nav className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'bg-primary-50 text-forest font-semibold'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/csr"
              onClick={() => setMenuOpen(false)}
              className="mt-2 bg-amber-500 text-white text-sm font-semibold px-4 py-3 rounded-lg text-center"
            >
              Donate Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
