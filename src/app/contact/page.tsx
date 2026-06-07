'use client'

import { FormEvent, useState } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '', interest: '', organisation: '', message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ firstName: '', lastName: '', email: '', phone: '', interest: '', organisation: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-hero-pattern pt-24 sm:pt-28 pb-14 sm:pb-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-amber-300 font-semibold text-sm uppercase tracking-wider">Get in Touch</span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            Contact Us
          </h1>
          <p className="text-green-100 text-lg max-w-xl mx-auto">
            Whether you want to volunteer, donate, partner for CSR, or simply learn more about our work —
            we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-14">
            {/* Info */}
            <div>
              <h2 className="section-heading">Reach Out To Us</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our team is here to answer your questions, discuss CSR partnerships, or guide you on
                how your contribution will create tangible change in tribal and backward communities.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-2xl shrink-0">
                    📍
                  </div>
                  <div>
                    <h3 className="font-semibold text-forest mb-1">Address</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      15/95A, Arathi House, Balu Nagar,<br />
                      Puthuppariyaram (PO),<br />
                      Palakkad – 678731, Kerala, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-2xl shrink-0">
                    📞
                  </div>
                  <div>
                    <h3 className="font-semibold text-forest mb-1">Phone</h3>
                    <p className="text-gray-600 text-sm">
                      
                      <a href="tel:9746383753" className="hover:text-forest transition-colors">9746383753</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-2xl shrink-0">
                    🏛️
                  </div>
                  <div>
                    <h3 className="font-semibold text-forest mb-1">Trust Registration</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Registered u/s 35(1)(ii) of Income Tax Act 1961<br />
                      CSR Eligible | 175% Weighted Deduction available
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-2xl shrink-0">
                    🌿
                  </div>
                  <div>
                    <h3 className="font-semibold text-forest mb-1">Hospital — Medhika Ayurveda</h3>
                    <p className="text-gray-600 text-sm">
                      Lakkidi, Palakkad District, Kerala
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-2xl overflow-hidden border border-gray-200">
                <iframe
                  src="https://maps.google.com/maps?q=10.801139,76.621222&t=&z=17&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Guru Kripa Charitable Trust Location"
                />
                <div className="p-4 bg-gray-50 text-center">
                  <p className="text-xs text-gray-500">
                    15/95A, Balu Nagar, Puthuppariyaram, Palakkad – 678731
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="card p-5 sm:p-8">
              <h3 className="font-bold text-forest text-2xl mb-2">Send Us a Message</h3>
              <p className="text-gray-500 text-sm mb-6">
                Fill in the form below and we will get back to you within 1–2 business days.
              </p>

              {status === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">✅</div>
                  <h4 className="font-bold text-forest text-lg mb-2">Message Sent!</h4>
                  <p className="text-gray-500 text-sm">Thank you for reaching out. We&apos;ll get back to you within 1–2 business days.</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-forest text-sm font-medium hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        First Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={form.firstName}
                        onChange={handleChange}
                        placeholder="John"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        placeholder="Doe"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email Address <span className="text-red-400">*</span>
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
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
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
                      <option>CSR Partnership / Corporate Donation</option>
                      <option>Individual Donation</option>
                      <option>Volunteering</option>
                      <option>Ambulance Funding</option>
                      <option>Medical Camp Partnership</option>
                      <option>General Enquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Organisation / Company</label>
                    <input
                      type="text"
                      name="organisation"
                      value={form.organisation}
                      onChange={handleChange}
                      placeholder="Your Organisation (optional)"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest text-sm"
                    />
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
                      placeholder="Tell us how you would like to support our work..."
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
                    We respect your privacy. Your information will never be shared.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Quick contact */}
      <section className="py-14 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 gap-6 text-center max-w-xl mx-auto">
            {[
              { icon: '📱', title: 'Phone Us', info: '9746383753', sub: 'For enquiries', href: 'tel:9746383753' },
              { icon: '📍', title: 'Visit Us', info: 'Puthuppariyaram', sub: 'Palakkad – 678731', href: '#' },
            ].map((c) => (
              <a key={c.title} href={c.href} className="card p-6 block hover:-translate-y-1 transition-transform">
                <div className="text-4xl mb-3">{c.icon}</div>
                <h4 className="font-bold text-forest mb-1">{c.title}</h4>
                <p className="text-forest-light font-semibold text-sm">{c.info}</p>
                <p className="text-gray-400 text-xs mt-1">{c.sub}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
