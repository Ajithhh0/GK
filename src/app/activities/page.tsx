import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = { title: 'Activities' }

const medicalCampItems = [
  { label: 'Free Consultations', value: '50+', icon: '🩺' },
  { label: 'Spectacles Distributed', value: '50', icon: '👓' },
  { label: 'Eye Check-ups', value: '50+', icon: '👁️' },
  { label: 'Camps Conducted', value: '2', icon: '⛺' },
]

const campDetails = [
  {
    date: '21st August',
    location: 'Lakkidi, Palakkad District',
    highlights: ['Free Ayurvedic consultations', 'Eye check-ups', 'Spectacle distribution', 'Health awareness sessions'],
    icon: '🏕️',
  },
  {
    date: '28th August',
    location: 'Varode, Ottapalam, Palakkad',
    highlights: ['Holistic health screenings', 'Lifestyle management guidance', 'Natural remedies education', 'Beneficiary identification'],
    icon: '🌿',
  },
]

const galleryItems = [
  { label: 'Ayurveda Consultation', icon: '🌿' },
  { label: 'Eye Screening', icon: '👁️' },
  { label: 'Health Awareness Talk', icon: '📢' },
  { label: 'Spectacle Distribution', icon: '👓' },
  { label: 'Community Gathering', icon: '👥' },
  { label: 'Medical Camp Setup', icon: '⛺' },
  { label: 'Old Age Home Visit', icon: '👴' },
  { label: 'Child Care Activities', icon: '👶' },
  { label: 'Nutrition Programme', icon: '🍎' },
  { label: 'Yoga Session', icon: '🧘' },
  { label: 'Agricultural Work', icon: '🌾' },
  { label: 'Palliative Care', icon: '💊' },
]

export default function ActivitiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-pattern pt-24 sm:pt-28 pb-14 sm:pb-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-amber-300 font-semibold text-sm uppercase tracking-wider">Activities</span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            Our Work in the Field
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mx-auto">
            From Ayurveda medical camps to community nutrition programmes, our team works tirelessly
            across Palakkad to reach the most underserved.
          </p>
        </div>
      </section>

      {/* July 2025 Camp */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">12 July 2025</span>
            <h2 className="section-heading mt-2">Free Ayurvedic Medical &amp; Consultation Camp</h2>
            <p className="text-gray-500 max-w-3xl mx-auto">
              Guru Kripa Charitable Trust, in collaboration with Medhika, successfully conducted a free
              Ayurvedic medical and consultation camp on 12 July 2025 as part of its community healthcare initiative.
            </p>
          </div>

          {/* Featured image */}
          <div className="relative w-full rounded-2xl overflow-hidden shadow-xl mb-8" style={{ aspectRatio: '16/7' }}>
            <Image
              src="/images/1.jpeg"
              alt="Ayurvedic medical camp conducted on 12 July 2025"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <p className="text-white font-semibold text-lg">Guru Kripa Charitable Trust × Medhika</p>
              <p className="text-green-200 text-sm">Community Healthcare Initiative — Palakkad</p>
            </div>
          </div>

          {/* Remaining images grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {[2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="relative rounded-xl overflow-hidden shadow-md group" style={{ aspectRatio: '1/1' }}>
                <Image
                  src={`/images/${n}.jpeg`}
                  alt={`Medical camp photo ${n}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Camp Report */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">2024 Report</span>
            <h2 className="section-heading mt-2">Ayurveda Medical Camps</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Organized by Gurukripa Charitable Trust across Palakkad District — Lakkidi &amp; Ottapalam, Varode.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
            {medicalCampItems.map((s) => (
              <div key={s.label} className="card p-6 text-center">
                <div className="text-4xl mb-2">{s.icon}</div>
                <p className="text-3xl font-bold text-forest">{s.value}</p>
                <p className="text-gray-500 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Camp details */}
          <div className="grid md:grid-cols-2 gap-8 mb-14">
            {campDetails.map((camp) => (
              <div key={camp.date} className="card p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center text-3xl shrink-0">
                    {camp.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-forest text-lg">{camp.date}</h3>
                    <p className="text-amber-600 text-sm font-medium">{camp.location}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {camp.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-green-500 font-bold">✓</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Camp Purpose */}
          <div className="bg-primary-50 rounded-2xl p-8 mb-10">
            <h3 className="font-bold text-forest text-xl mb-4">Purpose &amp; Objectives</h3>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-600">
              {[
                '✦ Promote preventive and holistic health practices',
                '✦ Provide free and accessible Ayurvedic consultations',
                '✦ Address medical needs in underserved communities',
                '✦ Identify beneficiaries based on socioeconomic status',
              ].map((obj) => (
                <p key={obj}>{obj}</p>
              ))}
            </div>
          </div>

          {/* Financial Note */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <h3 className="font-bold text-amber-700 mb-2">Financial Transparency</h3>
            <p className="text-amber-700 text-sm leading-relaxed">
              All expenses related to the medical camps — including medical supplies, spectacles, and logistics —
              were fully borne by Gurukripa Charitable Trust. No contributions or grants were received from
              government bodies or external agencies for these events.
            </p>
          </div>
        </div>
      </section>

      {/* Activities & Events */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">Our Work</span>
            <h2 className="section-heading mt-2">Activities &amp; Events</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {galleryItems.map((item) => (
              <span key={item.label} className="flex items-center gap-2 bg-white border border-green-100 text-gray-700 text-sm font-medium px-4 py-2.5 rounded-full shadow-sm">
                <span>{item.icon}</span>
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-20 bg-forest">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-6">Community Impact</h2>
          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {[
              { text: '"Increased awareness of Ayurveda healthcare practices."', name: 'Camp Participant' },
              { text: '"Tangible health benefits and improved well-being for our community."', name: 'Local Resident' },
              { text: '"Beneficiaries expressed deep appreciation for the Trust\'s compassionate efforts."', name: 'Field Report' },
            ].map((q) => (
              <div key={q.name} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <p className="text-green-100 text-sm italic mb-3">{q.text}</p>
                <p className="text-amber-300 text-xs font-semibold">— {q.name}</p>
              </div>
            ))}
          </div>
          <p className="text-green-200 max-w-2xl mx-auto">
            The Ayurveda medical camps demonstrate Gurukripa Charitable Trust&apos;s dedication to community
            health and social service. The Trust continues such initiatives to enhance healthcare and
            well-being for marginalized sections of society.
          </p>
        </div>
      </section>
    </>
  )
}
