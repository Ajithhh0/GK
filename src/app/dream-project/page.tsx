'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, FormEvent } from 'react'

const facilities = [
  { icon: '🛏️', label: 'Dormitory & Private Rooms' },
  { icon: '🍽️', label: 'Nutritious Community Kitchen' },
  { icon: '🏥', label: 'Medical Room & First Aid' },
  { icon: '📚', label: 'Library & Reading Room' },
  { icon: '🧘', label: 'Yoga & Meditation Hall' },
  { icon: '🙏', label: 'Prayer & Spiritual Space' },
  { icon: '🌿', label: 'Garden & Walking Paths' },
  { icon: '🎭', label: 'Cultural & Recreational Hall' },
  { icon: '💊', label: 'Pharmacy & Counselling' },
  { icon: '🚑', label: 'Ambulance on Call' },
  { icon: '📺', label: 'Common Lounge & TV Area' },
  { icon: '🛁', label: 'Accessible Sanitation Blocks' },
]

const agriculturalActivities = [
  { icon: '🥥', label: 'Coconut Plantation' },
  { icon: '🌿', label: 'Organic Vegetable Farming' },
  { icon: '🍌', label: 'Banana & Plantain Cultivation' },
  { icon: '🌱', label: 'Medicinal Plants' },
  { icon: '🐟', label: 'Fish Farming / Small Ponds' },
  { icon: '🐐', label: 'Goat Rearing / Poultry Units' },
  { icon: '🌾', label: 'Napier Grass Cultivation' },
  { icon: '🥭', label: 'Mango & Cashew Plantation' },
]

const selfSustainItems = [
  'Daily food requirements for all residents',
  'Medicines and medical consumables',
  'Staff salary and welfare',
  'Utility bills (electricity, water)',
  'Maintenance and upkeep of the facility',
]

const additionalBenefits = [
  { icon: '🌳', text: 'Eco-friendly environment ensuring mental peace and wellbeing for elderly residents' },
  { icon: '🚶', text: 'Natural space for walking, physiotherapy, meditation, and recreation activities' },
  { icon: '🏥', text: 'Scope for future expansion — palliative care ward, dementia care unit, or hospice care' },
  { icon: '🤝', text: 'Space for volunteers and CSR employees to conduct events and community engagements' },
  { icon: '🛡️', text: 'Buffer zone for disaster safety — flood, heatwaves, and urban encroachment protection' },
]

const csrPartners = [
  'EY (Ernst & Young)',
  'GTech — Group of Technology Companies, Kerala',
  'InApp',
  'UST Global',
  'Trenser',
  'Manappuram Finance',
  'KIMS Healthcare Group',
  'KLAP USA',
  'Friends Helping Hands USA',
  'Kairali of Baltimore, USA',
]

const layoutFeatures = [
  { no: '1', label: 'Pharmacy' },
  { no: '2', label: 'Provisional Store' },
  { no: '3', label: 'Yoga & Meditation Centre' },
  { no: '4', label: 'Physiotherapy Room' },
  { no: '5', label: 'Common Kitchen' },
  { no: '6', label: 'Guest House' },
  { no: '7', label: 'Guest Parking' },
  { no: '8', label: 'ATM' },
  { no: '9', label: 'Laundry' },
  { no: '10', label: 'Ambulance Bay' },
  { no: '11', label: 'Car Wash' },
  { no: '12', label: 'Jogging Track' },
  { no: '13', label: 'Saloon & Coffee Shop' },
  { no: '14', label: 'Tennis Court & Swimming Pool' },
  { no: '15', label: 'Gym & Club House' },
  { no: '16', label: 'Garden Area' },
]

export default function DreamProjectPage() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', organisation: '', interest: '', message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/dream-project-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', phone: '', organisation: '', interest: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-hero-pattern pt-24 sm:pt-28 pb-16 sm:pb-24 relative overflow-hidden">
        {/* decorative circles */}
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full bg-white/5 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <span className="inline-block bg-amber-500/20 text-amber-300 font-semibold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 border border-amber-400/30">
            Dream Project
          </span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2 mb-4 leading-tight">
            Guru Kripa Old Age Home
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            A dream of providing safe shelter, compassionate care, and dignified living to the
            elderly who once built our society — now seeking a place to call home.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="#support" className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-lg hover:shadow-xl">
              Support This Dream
            </a>
            <a href="#overview" className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-all border border-white/20">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats Banner ──
      <section className="bg-forest py-8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { value: '8+', label: 'Years of Service' },
              { value: '30–40', label: 'Elderly Beneficiaries' },
              { value: '10–15', label: 'Acres of Land Needed' },
              { value: '11,281', label: 'Sq. Ft. Facility' },
            ].map(s => (
              <div key={s.label}>
                <p className="text-amber-400 font-bold text-2xl sm:text-3xl">{s.value}</p>
                <p className="text-green-200 text-xs sm:text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── Introduction ── */}
      <section id="overview" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">Our Vision</span>
              <h2 className="section-heading mt-2 mb-6">A Home for Those Who Deserve Care</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Guru Kripa Charitable Trust, a registered non-profit organisation with CSR 1 certification
                  and over eight years of dedicated service, has been actively supporting elderly individuals
                  across Kerala through food kit distribution, medical assistance, rental support, and
                  personal care.
                </p>
                <p>
                  Inspired by the growing number of senior citizens living alone or without proper support,
                  the Trust has envisioned a comprehensive <strong className="text-forest">Old Age Home Project</strong> to
                  bring them under one caring roof. The proposed home will provide safe accommodation,
                  nutritious food, regular medical check-ups, emotional support, and recreational facilities
                  for residents.
                </p>
                <p>
                  The project aims to create a model senior living environment in Palakkad District,
                  combining professional care with the warmth of a family atmosphere — with trained staff,
                  visiting doctors, spiritual and cultural programmes, and opportunities for community
                  volunteers to engage with the elderly.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-primary-50 rounded-2xl p-6 border-l-4 border-forest">
                <h3 className="font-bold text-forest text-lg mb-3">Background & Need</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  During our continuous service to elderly people, we realised that many of them live in
                  unsafe, unhygienic, and lonely conditions. Some have no relatives or dependents. Many
                  struggle to buy medicines or get proper food. Hence, it is our dream to build a permanent
                  old age home to bring these elders under one roof, where they can live with dignity,
                  medical care, and emotional support.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-amber-50 rounded-xl p-4 border border-amber-100 text-center">
                  <p className="text-3xl font-bold text-amber-600">75–100</p>
                  <p className="text-gray-600 text-xs mt-1">sq.ft. per resident (indoor)</p>
                </div>
                <div className="bg-green-50 rounded-xl p-4 border border-green-100 text-center">
                  <p className="text-3xl font-bold text-forest">2 Floors</p>
                  <p className="text-gray-600 text-xs mt-1">Planned residential block</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Chairman Profile ── */}
      <section className="py-14 md:py-20 bg-primary-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-5 gap-0">
              {/* Photo */}
              <div className="md:col-span-2 bg-gradient-to-br from-forest to-forest-light flex items-center justify-center p-8 md:p-10">
                <div className="text-center">
                  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl mx-auto mb-4">
                    <Image
                      src="/images/madhu.jpeg"
                      alt="Chairman — Guru Kripa Charitable Trust"
                      width={160}
                      height={160}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <p className="text-white font-bold text-xl">Madhu</p>
                  <p className="text-green-200 text-sm mt-1">Chairman</p>
                  <p className="text-green-300 text-xs mt-0.5">Guru Kripa Charitable Trust</p>
                </div>
              </div>
              {/* Content */}
              <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-center">
                <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">Leadership</span>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-forest mt-2 mb-4">
                  A Vision Rooted in Compassion
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The Chairman of Guru Kripa Charitable Trust leads with a mission to uplift
                  marginalised communities through housing, healthcare, education, and livelihood
                  initiatives. His leadership reflects both compassion and strategic clarity —
                  turning local issues into impactful community solutions.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Having personally witnessed elderly individuals living in unsafe and lonely
                  conditions across Palakkad District, the dream of building a dedicated Old Age Home
                  has become a cornerstone initiative of the Trust — one that will serve as a legacy
                  of dignity and care for generations.
                </p>
                <div className="mt-6 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide">Established</p>
                    <p className="font-semibold text-forest text-sm">Palakkad District, Kerala</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide">Registration</p>
                    <p className="font-semibold text-forest text-sm">CSR 1 Certified NGO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Objectives ── */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">What We Aim For</span>
            <h2 className="section-heading mt-2">Project Objectives</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: '🏠',
                title: 'Safe Shelter & Food',
                desc: 'Provide safe, hygienic shelter and nutritious daily meals for abandoned and economically poor elderly people.',
                color: 'bg-green-50 border-green-200',
                headColor: 'text-forest',
              },
              {
                icon: '🩺',
                title: 'Healthcare & Emotional Care',
                desc: 'Ensure regular medical check-ups, access to doctors, medicines, and compassionate counselling for every resident.',
                color: 'bg-amber-50 border-amber-200',
                headColor: 'text-amber-700',
              },
              {
                icon: '🤝',
                title: 'Compassion & Social Responsibility',
                desc: 'Promote a culture of care by engaging volunteers, CSR partners, and the community in serving the elderly with dignity.',
                color: 'bg-blue-50 border-blue-200',
                headColor: 'text-blue-700',
              },
            ].map(obj => (
              <div key={obj.title} className={`rounded-2xl p-6 border-2 ${obj.color}`}>
                <div className="text-5xl mb-4">{obj.icon}</div>
                <h3 className={`font-bold text-lg mb-2 ${obj.headColor}`}>{obj.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{obj.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Proposed Facilities ── */}
      <section className="py-14 md:py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">Infrastructure</span>
            <h2 className="section-heading mt-2">Proposed Facilities</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              A comprehensive campus designed for comfort, health, and community living — covering
              11,281 sq.ft. across two floors.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {facilities.map(f => (
              <div key={f.label} className="bg-white rounded-xl p-4 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-3xl shrink-0">{f.icon}</span>
                <p className="text-gray-700 text-sm font-medium leading-snug">{f.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Housing Units ── */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">Residential Villas</span>
            <h2 className="section-heading mt-2">Senior Citizen Villas</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Independent villas on the 2-acre campus — separate from the main Old Age Home building —
              designed for dignity, accessibility, and peaceful retirement living. The campus also
              includes a dedicated hall for orphan children as part of this integrated community.
            </p>
          </div>

          {/* Land cost banner */}
          <div className="max-w-2xl mx-auto mb-8 px-2 sm:px-0">
            <div className="bg-amber-50 border border-amber-200 rounded-2xl px-6 py-4 flex items-center justify-between gap-4 flex-wrap">
              <div>
                <p className="text-amber-700 font-semibold text-sm">2-Acre Land for Villa Campus</p>
                <p className="text-gray-500 text-xs mt-0.5">To be purchased — supports villas, orphan hall & green spaces</p>
              </div>
              <p className="font-display text-2xl font-bold text-amber-600">₹1 Crore</p>
            </div>
          </div>

          {/* Pricing cards */}
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12 px-2 sm:px-0">
            <div className="relative bg-gradient-to-br from-forest to-forest-light rounded-2xl p-7 text-white shadow-xl overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/5 -translate-y-8 translate-x-8" />
              <p className="text-green-200 text-sm font-semibold uppercase tracking-wider mb-2">1 BHK Villa Unit</p>
              <p className="font-display text-4xl font-bold text-amber-300 mb-1">₹15 Lakhs</p>
              <p className="text-green-200 text-xs mb-5">All-inclusive pricing</p>
              <ul className="space-y-1.5 text-sm text-green-100">
                {['1 Bedroom + Hall + Kitchen', 'Fully accessible design', 'Common area access', 'Medical support included', 'Meals & housekeeping'].map(f => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="text-amber-400 text-xs">✦</span> {f}
                  </li>
                ))}
              </ul>
              <a href="#support" className="mt-6 block text-center bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold py-2.5 rounded-xl transition-all">
                Enquire Now
              </a>
            </div>
            <div className="relative bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl p-7 text-white shadow-xl overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/10 -translate-y-8 translate-x-8" />
              <span className="absolute top-4 right-4 bg-white/20 text-white text-xs font-bold px-2.5 py-1 rounded-full">Popular</span>
              <p className="text-amber-100 text-sm font-semibold uppercase tracking-wider mb-2">2 BHK Villa Unit</p>
              <p className="font-display text-4xl font-bold text-white mb-1">₹25 Lakhs</p>
              <p className="text-amber-100 text-xs mb-5">All-inclusive pricing</p>
              <ul className="space-y-1.5 text-sm text-amber-100">
                {['2 Bedrooms + Hall + Kitchen', 'Spacious accessible layout', 'Private garden area', 'Dedicated caretaker support', 'Meals, medical & housekeeping'].map(f => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="text-white text-xs">✦</span> {f}
                  </li>
                ))}
              </ul>
              <a href="#support" className="mt-6 block text-center bg-white hover:bg-gray-100 text-amber-600 text-sm font-semibold py-2.5 rounded-xl transition-all">
                Enquire Now
              </a>
            </div>
          </div>

          {/* Image gallery */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: '/images/house1.jpeg', label: 'Villa Exterior View' },
              { src: '/images/house2.jpeg', label: 'Living Space' },
              { src: '/images/house3.jpeg', label: 'Bedroom Layout' },
              { src: '/images/house4.jpeg', label: 'Common Area' },
              { src: '/images/house5.jpeg', label: 'Campus Surroundings' },
            ].map((img, idx) => (
              <div
                key={img.src}
                className={`relative rounded-2xl overflow-hidden shadow-md group ${
                  idx === 4 ? 'col-span-2 md:col-span-1' : ''
                }`}
              >
                <div className="aspect-video relative">
                  <Image
                    src={img.src}
                    alt={img.label}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-xs font-medium">{img.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Campus Layout Highlights ── */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">Campus Plan</span>
              <h2 className="section-heading mt-2 mb-6">Senior Citizen Living Campus Layout</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                The planned campus is designed as a fully self-contained senior living village —
                providing everything a resident could need within a secure, accessible, and
                eco-friendly environment.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {layoutFeatures.map(f => (
                  <div key={f.no} className="flex items-center gap-2.5 bg-gray-50 rounded-lg px-3 py-2.5">
                    <span className="w-6 h-6 bg-forest text-white text-xs font-bold rounded-full flex items-center justify-center shrink-0">
                      {f.no}
                    </span>
                    <span className="text-gray-700 text-sm">{f.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-forest to-green-800 rounded-2xl p-6 text-white">
              <h3 className="font-bold text-xl mb-1 text-amber-300">Old Age Home Building Details</h3>
              <p className="text-green-300 text-xs mb-5">2-floor main building — separate from the villa units</p>
              <div className="space-y-4">
                {[
                  { label: 'Total Built-up Area', value: '11,281 sq.ft.' },
                  { label: 'Ground Floor', value: '6,072 sq.ft.' },
                  { label: 'First Floor', value: '5,209 sq.ft.' },
                  { label: 'Resident Capacity', value: '30–40 Senior Citizens' },
                  { label: 'Villa Campus Land', value: '2 Acres — ₹1 Crore' },
                ].map(d => (
                  <div key={d.label} className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-green-200 text-sm">{d.label}</span>
                    <span className="font-semibold text-amber-300 text-sm">{d.value}</span>
                  </div>
                ))}
              </div>
              <p className="text-green-300 text-xs mt-6 leading-relaxed">
                ✦ Includes future expansion provision — no additional land acquisition required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Land & Agricultural Revenue ── */}
      <section className="py-14 md:py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">Sustainability Model</span>
            <h2 className="section-heading mt-2">Land & Agricultural Revenue</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              The 2 acre model ensures the Old Age Home remains financially self-sufficient —
              agriculture and plantation income covering all operational expenses.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="space-y-5">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-forest text-lg mb-4">Self-Sustainability Model</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Income generated from plantation and agricultural activities will directly support:
                </p>
                <ul className="space-y-2">
                  {selfSustainItems.map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-forest rounded-2xl p-6 text-white">
                <h3 className="font-bold text-amber-300 text-base mb-3">Long-Term Assurance</h3>
                <p className="text-green-200 text-sm leading-relaxed">
                  This land will forever remain the asset of Guru Kripa Charitable Trust, ensuring
                  generational continuity, compliance, and stability — zero dependency on individuals,
                  permanent financial sustainability.
                </p>
              </div>
            </div>
          </div>

          {/* Additional benefits */}
          <div className="mt-10">
            <h3 className="font-bold text-forest text-lg mb-5 text-center">Additional Benefits of a Larger Land Area</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {additionalBenefits.map(b => (
                <div key={b.text} className="bg-white rounded-xl p-4 flex items-start gap-3 shadow-sm">
                  <span className="text-2xl shrink-0">{b.icon}</span>
                  <p className="text-gray-600 text-sm leading-relaxed">{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Proposed Activities ── */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">Action Plan</span>
            <h2 className="section-heading mt-2">Proposed Activities</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: '🏗️', title: 'Build or Rent the Home', desc: 'Construct or rent a suitable building for the old age home with all necessary facilities.' },
              { icon: '👩‍⚕️', title: 'Permanent Staff', desc: 'Arrange permanent caretakers, cook, nurse, and housekeeping staff for round-the-clock care.' },
              { icon: '🛏️', title: 'Furnish & Equip', desc: 'Provide beds, furniture, medicines, and complete kitchen setup for comfortable daily living.' },
              { icon: '🏕️', title: 'Medical Camps', desc: 'Conduct periodic medical check-up camps with visiting doctors and specialists.' },
              { icon: '🌟', title: 'Volunteer & Wellness Programs', desc: 'Organise volunteer visits, spiritual programmes, and mental wellness activities regularly.' },
              { icon: '🌾', title: 'Agricultural Operations', desc: 'Establish and manage the plantation and farming model to generate sustainable income.' },
            ].map(act => (
              <div key={act.title} className="card p-6 group hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
                  {act.icon}
                </div>
                <h3 className="font-bold text-forest text-base mb-2">{act.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{act.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact / Support Form ── */}
      <section id="support" className="py-14 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            {/* Info */}
            <div>
              <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">Get Involved</span>
              <h2 className="section-heading mt-2 mb-4">Support Our Dream</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Your support — whether land, funding, CSR partnership, or volunteering — can directly
                transform this vision into reality. Reach out to us to discuss how you can be part of
                this meaningful journey.
              </p>
              <div className="space-y-5">
                {[
                  { icon: '🏡', title: 'Land Contribution', desc: 'Contribute 10–15 acres to unlock full CSR infrastructure funding and make the project self-sufficient.' },
                  { icon: '💰', title: 'CSR Partnership', desc: 'Partner via your company\'s CSR allocation to fund construction, equipment, or annual operations.' },
                  { icon: '🤲', title: 'Individual Donation', desc: 'Every contribution — big or small — directly supports food, medicines, and care for the elderly.' },
                  { icon: '🙌', title: 'Volunteer Your Time', desc: 'Visit the home, organise programs, or offer professional services to enrich the lives of residents.' },
                ].map(opt => (
                  <div key={opt.title} className="flex items-start gap-4 bg-gray-50 rounded-xl p-4">
                    <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-2xl shrink-0">
                      {opt.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-forest text-sm">{opt.title}</h4>
                      <p className="text-gray-500 text-xs mt-1 leading-relaxed">{opt.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 bg-primary-50 rounded-xl p-5 border border-green-100">
                <p className="text-forest font-semibold text-sm mb-1">Guru Kripa Charitable Trust</p>
                <p className="text-gray-600 text-xs">15/95A, Arathi House, Balu Nagar, Puthuppariyaram, Palakkad – 678731, Kerala</p>
                <p className="text-gray-600 text-xs mt-2">
                  <a href="tel:9746383753" className="hover:text-forest">9746383753</a>
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="card p-6 sm:p-8">
              <h3 className="font-bold text-forest text-2xl mb-1">Express Your Interest</h3>
              <p className="text-gray-500 text-sm mb-6">
                Fill in the form and our team will get back to you within 1–2 business days.
              </p>

              {status === 'success' ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">✅</div>
                  <h4 className="font-bold text-forest text-lg mb-2">Message Sent!</h4>
                  <p className="text-gray-500 text-sm">
                    Thank you for reaching out. We&apos;ll be in touch with you shortly.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-forest text-sm font-medium hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest text-sm"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Organisation / Company</label>
                    <input
                      type="text"
                      name="organisation"
                      value={form.organisation}
                      onChange={handleChange}
                      placeholder="Your organisation (optional)"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">I&apos;m interested in</label>
                    <select
                      name="interest"
                      value={form.interest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest text-sm text-gray-600 bg-white"
                    >
                      <option value="">Select an option</option>
                      <option>Land Contribution</option>
                      <option>CSR Partnership / Corporate Donation</option>
                      <option>Individual Donation</option>
                      <option>Volunteering</option>
                      <option>General Enquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us how you would like to support this dream project..."
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest text-sm resize-none"
                    />
                  </div>
                  {status === 'error' && (
                    <p className="text-red-500 text-sm bg-red-50 px-4 py-3 rounded-lg">
                      Failed to send message. Please try again or call us directly.
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full bg-forest hover:bg-forest-light disabled:opacity-60 text-white font-semibold py-3 rounded-lg transition-colors shadow-md hover:shadow-lg"
                  >
                    {status === 'sending' ? 'Sending…' : 'Send Message'}
                  </button>
                  <p className="text-xs text-gray-400 text-center">
                    We respect your privacy. Your information will never be shared with third parties.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="bg-hero-pattern py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Help Us Give Dignity to Those Who Deserve It Most
          </h2>
          <p className="text-green-100 mb-8 leading-relaxed">
            The elderly — who once cared for society — now deserve our compassion, comfort, and love.
            With your support, Guru Kripa Charitable Trust can make this dream a lasting reality.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#support" className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-xl transition-all shadow-lg">
              Support Now
            </a>
            <Link href="/csr" className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3 rounded-xl transition-all border border-white/30">
              View CSR Details
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
