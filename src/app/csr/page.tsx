import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = { title: 'Support Us / CSR' }

const csrNeeds = [
  {
    icon: '🚑',
    title: 'New Ambulance',
    amount: '₹30,00,000',
    amountShort: '₹30 Lakhs',
    desc: 'A dedicated ambulance will ensure timely transportation of patients from remote tribal villages to the In-Patient department for emergency and routine medical care.',
    impact: 'Connects remote villages to healthcare',
    color: 'border-blue-300 bg-blue-50',
    btnColor: 'bg-blue-600 hover:bg-blue-700',
    tagColor: 'bg-blue-100 text-blue-700',
  },
  {
    icon: '💊',
    title: 'Medicine Procurement',
    // amount: '₹5,00,000',
    // amountShort: '₹5 Lakhs',
    desc: 'Procurement of essential Ayurvedic and allopathic medicines for the In-Patient facility and outreach medical camps serving tribal communities.',
    impact: 'Medicines for tribal mothers',
    color: 'border-green-300 bg-green-50',
    btnColor: 'bg-forest hover:bg-forest-light',
    tagColor: 'bg-green-100 text-green-700',
  },
  {
    icon: '🏥',
    title: 'Infrastructure Development',
    amount: '₹1,00,00,000',
    amountShort: '₹1 Crore',
    desc: 'Construction and equipping of the Ayurvedic In-Patient Maternal & Women\'s Health Facility at Lakkidi, Palakkad for tribal communities of Attappadi.',
    impact: 'Dedicated tribal maternity facility',
    color: 'border-amber-300 bg-amber-50',
    btnColor: 'bg-amber-500 hover:bg-amber-600',
    tagColor: 'bg-amber-100 text-amber-700',
  },
]

const taxBenefits = [
  {
    title: 'Section 35(1)(ii)',
    desc: 'Income Tax Exemption for donations towards scientific research',
    icon: '📋',
  },
  {
    title: '175% Weighted Deduction',
    desc: 'Under Section 35 1(2) of Income Tax Act 1961 — benefits business income groups',
    icon: '💰',
  },
  {
    title: 'CSR Eligible',
    desc: 'Activities qualify under CSR as per prevailing Corporate Social Responsibility guidelines',
    icon: '🏢',
  },
  {
    title: 'Gazette Notification',
    desc: 'Exemptions confirmed via official Gazette notification — covers CSR activities',
    icon: '📜',
  },
]

const whySupport = [
  'Direct impact on tribal maternal health outcomes',
  'Fully transparent use of funds with reports',
  'No administrative overheads — 100% goes to the field',
  'AYUSH-certified Ayurvedic healthcare delivery',
  'Government-recognized Trust with tax benefits',
  'Experienced team with 30+ years of field work',
]

export default function CsrPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-pattern pt-24 sm:pt-28 pb-14 sm:pb-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-amber-300 font-semibold text-sm uppercase tracking-wider">Support Us</span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            Partner With Us to Change Lives
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mx-auto">
            Your CSR contribution directly funds healthcare, education, and livelihood programs
            for the most vulnerable tribal communities in Kerala.
          </p>
        </div>
      </section>

      {/* CSR Needs */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">CSR Support Requested</span>
            <h2 className="section-heading mt-2">Where Your Money Goes</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {csrNeeds.map((n) => (
              <div key={n.title} className={`card p-7 border-2 ${n.color} flex flex-col`}>
                <div className="text-5xl mb-4">{n.icon}</div>
                <span className={`self-start text-xs font-semibold px-3 py-1 rounded-full mb-3 ${n.tagColor}`}>
                  {n.impact}
                </span>
                <h3 className="font-bold text-forest text-xl mb-1">{n.title}</h3>
                <p className="font-bold text-2xl text-forest mb-3">{n.amountShort}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">{n.desc}</p>
                <Link href="/contact" className={`text-white text-sm font-semibold px-5 py-3 rounded-lg text-center transition-colors ${n.btnColor}`}>
                  Enquire to Contribute
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donate via QR */}
      <section className="py-12 bg-primary-50">
        <div className="max-w-sm mx-auto px-4 text-center">
          <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">Donate Now</span>
          <h2 className="section-heading mt-2 mb-2">Scan & Donate</h2>
          <p className="text-gray-500 text-sm mb-6">
            Scan the QR code below to make a direct donation to Guru Kripa Charitable Trust.
          </p>
          <div className="bg-white rounded-2xl shadow-md p-6 inline-block">
            <Image
              src="/images/qr-code.jpeg"
              alt="Donate via QR Code — Guru Kripa Charitable Trust"
              width={240}
              height={240}
              className="mx-auto rounded-xl"
            />
            <p className="text-forest font-semibold text-sm mt-4">Guru Kripa Charitable Trust</p>
            <p className="text-gray-400 text-xs mt-1">Palakkad, Kerala</p>
          </div>
        </div>
      </section>

      {/* Tax Benefits */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">Tax Benefits</span>
            <h2 className="section-heading mt-2">Your Contribution Has Dual Impact</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Support a worthy cause while maximising your tax advantage under the Income Tax Act.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {taxBenefits.map((b) => (
              <div key={b.title} className="card p-6 text-center">
                <div className="text-4xl mb-3">{b.icon}</div>
                <h3 className="font-bold text-forest mb-2">{b.title}</h3>
                <p className="text-gray-500 text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-forest/5 border border-forest/20 rounded-2xl p-6 max-w-3xl mx-auto">
            <p className="text-forest text-sm text-center leading-relaxed">
              <strong>Statutory Compliance:</strong> The Trust holds approvals under Section 35 of the Income Tax Act 1991,
              and the project qualifies under CSR activities as per prevailing guidelines. Gazette notification pertaining
              to exemptions (175% weighted deduction) under Section 35 1(2) of the Income Tax Act of 1961 is available on request.
            </p>
          </div>
        </div>
      </section>

      {/* Why Support */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">Why Partner With Us</span>
              <h2 className="section-heading mt-2">Your Trust is Our Responsibility</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Guru Kripa Charitable Trust has rich experience in the field of AYUSH Health System and has worked
                vastly in the field of Rural Health care, Education and Environment. We are capable of supplying
                manpower and medicines to ensure effective and efficient implementation of every scheme.
              </p>
              <ul className="space-y-3">
                {whySupport.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                    <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold text-xs shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/contact" className="btn-primary inline-block">
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/devagowda.jpeg"
                  alt="CSR Partner Meeting"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/devagowda3.jpeg"
                    alt="Field Work"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/devagowda2.jpeg"
                    alt="Impact Photo"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expected Outcomes */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="section-heading">Expected Outcomes</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '📉', title: 'Reduced Anaemia', desc: 'Reduction in maternal anaemia and pregnancy-related complications' },
              { icon: '👶', title: 'Healthy Newborns', desc: 'Improved maternal and neonatal health indicators' },
              { icon: '🏘️', title: 'Remote Healthcare', desc: 'Strengthened preventive healthcare in remote tribal areas' },
              { icon: '✅', title: 'Quality Delivery', desc: 'Enhanced access to quality holistic healthcare delivery' },
            ].map((o) => (
              <div key={o.title} className="bg-white rounded-2xl p-6 text-center shadow-sm">
                <div className="text-4xl mb-3">{o.icon}</div>
                <h3 className="font-bold text-forest mb-2">{o.title}</h3>
                <p className="text-gray-500 text-sm">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
