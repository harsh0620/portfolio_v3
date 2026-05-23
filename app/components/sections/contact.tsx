import { contactInfo } from '@/app/lib/data'
import { AnimateIn } from '@/app/components/ui/animate-in'
import { ContactForm } from './contact-form'
import Link from 'next/link'
import { FiMail, FiMapPin, FiCalendar } from 'react-icons/fi'

const infoItems = [
  {
    icon: FiCalendar,
    label: 'Schedule a meeting with me',
    description: "I'd love to hear from you, and help you.",
    href: contactInfo.calendlyLink,
    text: 'Calendly',
  },
  {
    icon: FiMail,
    label: 'Contact me by email',
    description: 'If you wish to write me an email instead please use',
    href: `mailto:${contactInfo.email}`,
    text: contactInfo.email,
  },
  {
    icon: FiMapPin,
    label: 'Meet me in person',
    description: 'If you want to meet in person please approach me.',
    href: '#',
    text: contactInfo.address,
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <AnimateIn direction="up" className="text-center mb-16">
          <p className="text-caption text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-3">
            Get in touch
          </p>
          <h2 className="text-display-lg text-neutral-900 dark:text-neutral-50">Contact Me</h2>
          <p className="text-body-lg text-neutral-500 dark:text-neutral-400 mt-4 max-w-112 mx-auto">
            I&apos;d love to talk about how I can help you.
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Form */}
          <AnimateIn direction="right" delay={0.1}>
            <ContactForm />
          </AnimateIn>

          {/* Info cards */}
          <AnimateIn direction="left" className="space-y-4">
            {infoItems.map(({ icon: Icon, label, description, href, text }) => (
              <div
                key={label}
                className="flex gap-4 p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800"
              >
                <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-neutral-600 dark:text-neutral-300" />
                </div>
                <div className="min-w-0">
                  <p className="text-body-md-strong text-neutral-900 dark:text-neutral-50">{label}</p>
                  <p className="text-body-sm text-neutral-500 dark:text-neutral-400 mb-1">{description}</p>
                  <Link
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-body-sm text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-50 underline underline-offset-2 transition-colors break-all"
                  >
                    {text}
                  </Link>
                </div>
              </div>
            ))}
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
