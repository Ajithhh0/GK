import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ImagePlaceholder from '@/components/ImagePlaceholder'

export const metadata: Metadata = { title: 'About Us' }

const values = [
  { icon: '💚', title: 'Compassion',   desc: 'Every initiative is driven by genuine care for the most vulnerable.' },
  { icon: '🤝', title: 'Integrity',    desc: 'Transparent operations with full accountability to donors and beneficiaries.' },
  { icon: '🌿', title: 'Sustainability', desc: 'Programs designed for long-term impact and community self-reliance.' },
  { icon: '🌍', title: 'Inclusivity',  desc: 'We serve regardless of caste, religion, gender, or background.' },
]

const team = [
  { name: 'Chairman', role: 'Guru Kripa Charitable Trust', icon: '👨‍💼' },
  { name: 'Medical Director', role: 'Medhika Ayurveda Hospital', icon: '👨‍⚕️' },
  { name: 'Program Coordinator', role: 'Tribal Health & Welfare', icon: '👩‍💼' },
  { name: 'Community Officer', role: 'Outreach & Field Operations', icon: '🧑‍🤝‍🧑' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-hero-pattern pt-24 sm:pt-28 pb-14 sm:pb-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-amber-300 font-semibold text-sm uppercase tracking-wider">About Us</span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            Who We Are
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mx-auto">
            A registered charitable trust headquartered in Palakkad, Kerala, dedicated to transforming
            the lives of tribal and backward communities through integrated development programs.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
            <div>
              <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="section-heading mt-2">Decades of Dedicated Service</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Guru Kripa Charitable Trust was established with a singular mission — to bridge the gap in
                healthcare and social services for communities that have been left behind by mainstream
                development. Based at Puthuppariyaram, Palakkad, our work spans across remote tribal regions
                of Kerala.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Since the Covid-19 pandemic, the Trust has been actively working with the objective of
                improving access to affordable healthcare for underserved rural communities in Kerala.
                The Government of India has extended Income Tax Exemption for Social Research under
                Section 35(i)(iii) and for Scientific and Industrial Research under Section 35(i)(iii)
                under the Income Tax Act.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our outpatient health care unit, <strong>Medhika</strong>, has been providing regular and
                affordable medical services to women in the Attappadi tribal region of Palakkad district,
                focusing on maternal care, anaemia management, nutritional support, and gynaecological health.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="bg-primary-50 rounded-xl px-5 py-3 text-center">
                  <p className="text-2xl font-bold text-forest">35(1)(ii)</p>
                  <p className="text-xs text-gray-500">Income Tax Exemption</p>
                </div>
                <div className="bg-amber-50 rounded-xl px-5 py-3 text-center">
                  <p className="text-2xl font-bold text-amber-600">175%</p>
                  <p className="text-xs text-gray-500">Weighted Deduction</p>
                </div>
                <div className="bg-primary-50 rounded-xl px-5 py-3 text-center">
                  <p className="text-2xl font-bold text-forest">CSR</p>
                  <p className="text-xs text-gray-500">Eligible Activities</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-lg" style={{ aspectRatio: '16/9' }}>
                <Image
                  src="/images/medhika.png"
                  alt="Medhika — Ayurvedic outpatient services by Guru Kripa Charitable Trust"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-forest/70 to-transparent px-5 py-4">
                  <p className="text-white font-semibold text-sm">Medhika Outpatient Services</p>
                  <p className="text-green-200 text-xs">Attappadi Tribal Region, Palakkad</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <ImagePlaceholder label="Trust Office" aspectRatio="video" icon="🏛️" />
                <ImagePlaceholder label="Community Work" aspectRatio="video" icon="🌿" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-10 md:py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border-l-4 border-forest">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-forest mb-3">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                A society where every individual — regardless of their tribal, social, or economic background
                — has equal access to quality healthcare, education, and opportunities for a dignified life.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border-l-4 border-amber-500">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold text-forest mb-3">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To improve the health and nutritional status of tribal and other backward communities by
                providing affordable healthcare, empowering women and adolescents, creating sustainable
                livelihoods, and fostering educational opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="section-heading">Our Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card p-6 text-center group hover:-translate-y-1 transition-all duration-300">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-bold text-forest text-lg mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">Our People</span>
            <h2 className="section-heading mt-2">Leadership Team</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m) => (
              <div key={m.name} className="card p-6 text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-primary-50 rounded-full flex items-center justify-center text-4xl">
                  {m.icon}
                </div>
                <ImagePlaceholder label={`Photo — ${m.name}`} aspectRatio="square" className="mb-4" />
                <h4 className="font-bold text-forest">{m.name}</h4>
                <p className="text-gray-500 text-sm mt-1">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registrations */}
      <section className="py-14 bg-forest">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">Legal &amp; Compliance</h2>
          <p className="text-green-200 mb-6">
            The Trust holds approvals under Section 35 of the Income Tax Act 1961 and the project
            qualifies under CSR activities as per prevailing guidelines.
          </p>
          <p className="text-amber-300 font-semibold text-sm">
            Gazette notification attached: Exemptions (175% weighted deduction) under Section 35 1(2) of
            Income Tax Act of 1961 — benefits business income groups &amp; CSR activities.
          </p>
        </div>
      </section>
    </>
  )
}
