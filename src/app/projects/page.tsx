import type { Metadata } from 'next'
import Link from 'next/link'
import ImagePlaceholder from '@/components/ImagePlaceholder'

export const metadata: Metadata = { title: 'Our Programs' }

const currentPrograms = [
  { icon: '🏠', title: 'Old Age Home',               desc: 'Providing dignified shelter, nutrition, and healthcare for destitute elderly individuals who have no family support.' },
  { icon: '👶', title: 'Children Adoption Care',     desc: 'Facilitating adoption and care for orphaned and abandoned children, giving them a chance at a loving home.' },
  { icon: '🩺', title: 'Free Medical Camps',         desc: 'Conducting regular Ayurvedic and general health camps in remote villages targeting women, elderly, and children.' },
  { icon: '🚑', title: 'Ambulance Service',          desc: 'Dedicated ambulance connecting remote tribal villages to healthcare facilities for emergency and routine care.' },
  { icon: '📚', title: 'Career Development Centre',  desc: 'Skill development and career guidance programmes helping youth from backward communities gain employment.' },
  { icon: '🍲', title: 'Community Kitchen',          desc: 'Running community kitchens to provide nutritious meals to the homeless, elderly, and those in need.' },
  { icon: '🌾', title: 'Agriculture Sector',         desc: 'Supporting tribal farmers with modern and organic farming techniques, improving food security and income.' },
  { icon: '🏡', title: '25 Independent Family Cottages', desc: 'The Tree House Village project — 25 independent cottages providing safe, dignified housing for underserved families.' },
  { icon: '🧘', title: 'Yoga Training Centre',       desc: 'Promoting physical and mental wellbeing through Yoga training for communities and individuals.' },
  { icon: '🌿', title: 'Ayurveda Hospital',          desc: 'Medhika Ayurveda Hospital in Attappadi providing affordable holistic healthcare to tribal communities.' },
  { icon: '💊', title: 'Palliative Care Centre',     desc: 'Compassionate end-of-life care for patients with chronic illnesses, providing comfort and dignity.' },
  { icon: '🎓', title: 'Job-Oriented Education',     desc: 'Educational institutions focused on vocational and job-oriented training for better employability.' },
  { icon: '🌲', title: 'Wet Land Afforestation',     desc: 'Waste land management and afforestation initiatives to restore ecological balance and create green cover.' },
  { icon: '🔬', title: 'Medicinal Plants Research',  desc: 'Research, development, and promotion of medicinal plants cultivation — supporting Ayurvedic medicine supply.' },
]

const futureProjects = [
  {
    icon: '🏘️',
    title: 'Housing & Infrastructure Development',
    desc: 'Expanding our work to provide safe and dignified housing for underserved families through the Tree House Village concept.',
    color: 'bg-blue-50 border-blue-200',
    textColor: 'text-blue-700',
  },
  {
    icon: '🐝',
    title: 'Sustainable Livelihood Programs',
    desc: 'Introducing beekeeping, coconut oil production units, horticulture, and vermicomposting projects to create diverse livelihood options.',
    color: 'bg-amber-50 border-amber-200',
    textColor: 'text-amber-700',
  },
  {
    icon: '💉',
    title: 'Food & Medical Support for Vulnerable Groups',
    desc: 'Supplying food kits and medicines to transgender communities and offering economic and medical support for kidney and cancer patients.',
    color: 'bg-rose-50 border-rose-200',
    textColor: 'text-rose-700',
  },
  {
    icon: '♿',
    title: 'Support for Differently-Abled Personnel',
    desc: 'Comprehensive physical and mental support programs designed specifically for differently-abled individuals.',
    color: 'bg-purple-50 border-purple-200',
    textColor: 'text-purple-700',
  },
]

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-pattern pt-24 sm:pt-28 pb-14 sm:pb-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-amber-300 font-semibold text-sm uppercase tracking-wider">Our Programs</span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            Programs &amp; Initiatives
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mx-auto">
            From healthcare to housing, our 14+ programs address the holistic needs of the communities
            we serve across Palakkad, Kerala.
          </p>
        </div>
      </section>

      {/* Current Programs */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">Active Programs</span>
            <h2 className="section-heading mt-2">What We Do Today</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentPrograms.map((p) => (
              <div key={p.title} className="card p-6 group hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
                  {p.icon}
                </div>
                <h3 className="font-bold text-forest text-base mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                <ImagePlaceholder label={p.title} aspectRatio="video" className="mt-4" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-12 md:py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">Flagship Project</span>
            <h2 className="section-heading mt-2">
              Ayurvedic In-Patient Maternal &amp; Women&apos;s Health Facility
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Establishment of a dedicated Ayurvedic In-Patient healthcare facility at Lakkidi, Palakkad
              for tribal communities of Attappadi, Kerala.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-forest text-lg mb-3">Background</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Attappadi, a tribal-dominated region of Palakkad district, faces severe challenges
                  including maternal mortality, nutritional deficiencies, anaemia, and malnutrition.
                  The Trust has been providing outpatient services through Medhika to tribal women —
                  but outpatient care alone is insufficient for pregnant and postnatal mothers.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-forest text-lg mb-3">Project Objective</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  To establish a dedicated Ayurvedic In-Patient (IP) healthcare facility at Lakkidi,
                  Palakkad providing holistic antenatal, postnatal, adolescent and women-centric
                  healthcare services to tribal communities of Attappadi.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-forest text-lg mb-4">Key Objectives</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {[
                    'Provide comprehensive Ayurvedic antenatal and postnatal inpatient care',
                    'Provide culturally sensitive guidance for women and adolescents',
                    'Improve maternal and child health outcomes',
                    'Reduce anaemia and related health complications',
                    'Strengthen access to holistic healthcare in remote tribal areas',
                    'Develop a sustainable healthcare model',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <ImagePlaceholder label="Medhika Ayurveda Hospital" aspectRatio="video" icon="🏥" />
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-forest text-lg mb-4">Major Components</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {[
                    'Construction of Ayurvedic In-Patient Facility',
                    'Procurement of furniture, medical equipment, and medicines',
                    'Ambulance for emergency and referral services',
                    'Antenatal & postnatal care programmes',
                    'Maternal health check-up and counselling',
                    'Seasonal supplementation for tribal mothers',
                    'Community awareness & preventive health programmes',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-forest text-lg mb-4">Beneficiaries</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {[
                    'Tribal women and postnatal tribal women',
                    'Adolescent girls with nutritional deficiencies',
                    'Pregnant mothers needing continuous care',
                    'Tribal families in remote villages of Attappadi',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-amber-500 font-bold mt-0.5 shrink-0">▶</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-forest rounded-xl p-5 text-center text-white">
                  <p className="text-2xl font-bold text-amber-300">₹20 L</p>
                  <p className="text-green-200 text-xs mt-1">Ambulance</p>
                </div>
                <div className="bg-amber-500 rounded-xl p-5 text-center text-white">
                  <p className="text-2xl font-bold">₹5 L</p>
                  <p className="text-amber-100 text-xs mt-1">Medicines</p>
                </div>
              </div>
              <Link href="/csr" className="block text-center btn-primary w-full">
                Support This Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Future Projects */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">Looking Ahead</span>
            <h2 className="section-heading mt-2">Future Project Initiatives</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              We have several impactful projects planned to meet essential needs and further empower
              vulnerable communities.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {futureProjects.map((fp) => (
              <div key={fp.title} className={`rounded-2xl p-6 border-2 ${fp.color}`}>
                <div className="text-4xl mb-4">{fp.icon}</div>
                <h3 className={`font-bold text-lg mb-2 ${fp.textColor}`}>{fp.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{fp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
