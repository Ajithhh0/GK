import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ImagePlaceholder from '@/components/ImagePlaceholder'

export const metadata: Metadata = {
  title: 'Home',
}

const stats = [
  { value: '30+', label: 'Years of Service' },
  { value: '10K+', label: 'Lives Touched' },
  { value: '50+', label: 'Free Spectacles Distributed' },
  { value: '2', label: 'Medical Camps (2024)' },
]

const highlights = [
  {
    icon: '🏥',
    title: 'Ayurveda & Healthcare',
    desc: 'Running Medhika outpatient services for tribal women in Attappadi with free consultations and medicines.',
  },
  {
    icon: '🌿',
    title: 'Tribal Welfare',
    desc: 'Dedicated programs for tribal communities including maternal care, nutrition support, and preventive health.',
  },
  {
    icon: '📚',
    title: 'Education & Career',
    desc: 'Career development centres and job-oriented educational institutions empowering the youth.',
  },
  {
    icon: '🤝',
    title: 'Community Support',
    desc: 'Old age homes, palliative care, and support for differently-abled, transgender, and cancer patients.',
  },
  {
    icon: '🌱',
    title: 'Sustainable Livelihoods',
    desc: 'Beekeeping, coconut oil production, horticulture, and vermicomposting to create economic independence.',
  },
  {
    icon: '🏡',
    title: 'Housing & Infrastructure',
    desc: 'Safe, dignified housing for underserved families through the Tree House Village initiative.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative min-h-screen flex items-center bg-hero-pattern overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/5" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-amber-400/10" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-12 sm:pb-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <span className="inline-block bg-amber-400/20 text-amber-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-wide uppercase">
                Charitable Trust · Palakkad, Kerala
              </span>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Serving Those <br />
                <span className="text-amber-400">Who Need</span> It Most
              </h1>
              <p className="text-green-100 text-lg leading-relaxed mb-8 max-w-lg">
                Guru Kripa Charitable Trust has been working tirelessly to improve the health, education,
                and livelihood of tribal and backward communities across Palakkad for over three decades.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/projects" className="btn-primary inline-block">
                  Our Programs
                </Link>
                <Link href="/csr" className="btn-outline inline-block">
                  Support Our Work
                </Link>
              </div>
            </div>

            <div className="hidden lg:block">
              <Image
                src="/images/old.png"
                alt="Guru Kripa Charitable Trust community service"
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl shadow-2xl border-2 border-white/20"
                priority
              />
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-10 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
            {stats.map((s) => (
              <div key={s.label} className="bg-white/10 backdrop-blur-sm rounded-xl px-3 sm:px-6 py-4 sm:py-5 text-center border border-white/20">
                <p className="text-xl sm:text-3xl font-bold text-amber-400">{s.value}</p>
                <p className="text-green-200 text-xs sm:text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Mission Strip ─── */}
      <section className="bg-amber-500 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-white text-lg font-medium italic">
            "Committed to improving the health and nutritional status of tribal and other backward communities
            with the objective of improving access to affordable healthcare for all."
          </p>
        </div>
      </section>

      {/* ─── What We Do ─── */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">What We Do</span>
            <h2 className="section-heading mt-2">Holistic Community Development</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              From healthcare and education to sustainable livelihoods, our programs address the multi-dimensional
              needs of underserved communities in Kerala.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((h) => (
              <div key={h.title} className="card p-6 group">
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                  {h.icon}
                </div>
                <h3 className="font-bold text-forest text-lg mb-2">{h.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Featured Project ─── */}
      <section className="py-12 md:py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">Featured Project</span>
              <h2 className="section-heading mt-2 text-3xl">
                Ayurvedic Maternal & Women&apos;s Health Facility — Attappadi
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Attappadi, a tribal-dominated region of Palakkad, faces severe health challenges including
                maternal mortality, anaemia, and malnutrition. Our project at <strong>Medhika Ayurveda Hospital</strong>{' '}
                aims to establish a dedicated Ayurvedic In-Patient facility for tribal mothers.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-gray-600">
                {[
                  'Comprehensive antenatal & postnatal care',
                  'Ambulance service for remote villages',
                  'Nutritional supplementation for adolescent girls',
                  'Community health awareness programs',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-green-500 font-bold mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/projects" className="btn-primary inline-block">
                Learn More
              </Link>
            </div>
            <div className="space-y-4">
              <ImagePlaceholder
                label="Medhika Ayurveda Hospital — Attappadi"
                aspectRatio="video"
                icon="🏥"
              />
              <div className="grid grid-cols-2 gap-4">
                <ImagePlaceholder label="Medical Camp" aspectRatio="video" icon="👩‍⚕️" />
                <ImagePlaceholder label="Tribal Women" aspectRatio="video" icon="👶" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Gallery Preview ─── */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-10">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">Gallery</span>
            <h2 className="section-heading mt-2">Our Work in Action</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { label: 'Free Medical Camp', icon: '🩺' },
              { label: 'Community Kitchen', icon: '🍲' },
              { label: 'Old Age Home', icon: '👴' },
              { label: 'Education Centre', icon: '📖' },
              { label: 'Yoga Training', icon: '🧘' },
              { label: 'Agriculture Sector', icon: '🌾' },
              { label: 'Palliative Care', icon: '💊' },
              { label: 'Ambulance Service', icon: '🚑' },
            ].map((item) => (
              <ImagePlaceholder
                key={item.label}
                label={item.label}
                aspectRatio="square"
                icon={item.icon}
              />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/activities" className="btn-primary inline-block">
              View All Activities
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 bg-forest">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Together We Can Make a Difference
          </h2>
          <p className="text-green-200 text-lg mb-8 max-w-2xl mx-auto">
            Your CSR contribution or donation directly funds healthcare, education, and livelihood programs
            for the most vulnerable communities in Kerala. Contributions qualify for 175% weighted tax deduction.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/csr" className="btn-primary inline-block text-base">
              Support Our Cause
            </Link>
            <Link href="/contact" className="btn-outline inline-block text-base">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
