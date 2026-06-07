import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-forest-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-xl">GK</span>
              </div>
              <div>
                <p className="font-bold text-lg text-white">Guru Kripa Charitable Trust</p>
                <p className="text-green-300 text-sm">Serving the Underserved</p>
              </div>
            </div>
            <p className="text-green-200 text-sm leading-relaxed max-w-sm">
              A registered charitable trust committed to improving the health, education, and livelihood
              of tribal and backward communities across Palakkad, Kerala.
            </p>
            <div className="mt-5 flex flex-col gap-2 text-sm text-green-200">
              <p className="flex items-start gap-2">
                <span className="shrink-0">📍</span>
                <span>15/95A, Arathi House, Balu Nagar, Puthuppariyaram (PO), Palakkad – 678731</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="shrink-0">📞</span>
                <span> 9746383753</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-amber-400 mb-4 uppercase tracking-wider text-xs">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Us' },
                { href: '/projects', label: 'Our Programs' },
                { href: '/activities', label: 'Activities' },
                { href: '/csr', label: 'Support / CSR' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-green-200 hover:text-amber-400 text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold text-amber-400 mb-4 uppercase tracking-wider text-xs">Our Programs</h4>
            <ul className="space-y-2">
              {[
                'Old Age Home',
                'Free Medical Camps',
                'Ayurveda Hospital',
                'Children Adoption Care',
                'Ambulance Service',
                'Palliative Care Centre',
                'Yoga Training Centre',
                'Career Development',
              ].map((item) => (
                <li key={item} className="text-green-200 text-sm flex items-start gap-2">
                  <span className="text-amber-400 mt-0.5 text-xs">▶</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 md:mt-12 pt-6 border-t border-forest-light/40 flex flex-col items-center gap-2 text-center md:flex-row md:justify-between md:text-left">
          <p className="text-green-300 text-xs">
            © {new Date().getFullYear()} Guru Kripa Charitable Trust. All rights reserved.
          </p>
          <p className="text-green-300 text-xs">
            Registered u/s 35(1)(ii) of the Income Tax Act, 1961 · 175% Weighted Deduction u/s 35 1(2)
          </p>
        </div>
      </div>
    </footer>
  )
}
