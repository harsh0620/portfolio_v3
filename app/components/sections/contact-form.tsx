'use client'

import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import ReCAPTCHA from 'react-google-recaptcha'
import { FiSend, FiCheck } from 'react-icons/fi'
import { cn } from '@/app/lib/utils'

type FormState = 'idle' | 'loading' | 'success' | 'error'

const inputClass = cn(
  'w-full px-4 py-3 rounded-xl',
  'bg-white dark:bg-neutral-900',
  'border border-neutral-200 dark:border-neutral-800',
  'text-neutral-900 dark:text-neutral-50',
  'placeholder:text-neutral-400 dark:placeholder:text-neutral-600',
  'focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600',
  'transition-colors text-body-md'
)

const publicKey  = process.env.NEXT_PUBLIC_EMAIL_PUBLICKEY  ?? ''
const serviceId  = process.env.NEXT_PUBLIC_EMAIL_SERVICE    ?? ''
const templateId = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE   ?? ''
const recaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? '6LetVl4pAAAAAE6Ac4Dwbz0HEd09eK2sP7r6_oBn'

export function ContactForm() {
  const [state, setState] = useState<FormState>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isHuman, setIsHuman] = useState(false)
  const recaptchaRef = useRef<ReCAPTCHA>(null)

  const validate = (data: FormData) => {
    const errs: Record<string, string> = {}
    const firstName = String(data.get('firstName') ?? '').trim()
    const lastName  = String(data.get('lastName')  ?? '').trim()
    const email     = String(data.get('email')     ?? '').trim()
    const phone     = String(data.get('phone')     ?? '').trim()
    const message   = String(data.get('message')   ?? '').trim()

    if (!firstName || firstName.length < 2) errs.firstName = 'First name must be at least 2 characters'
    if (!lastName  || lastName.length  < 2) errs.lastName  = 'Last name must be at least 2 characters'
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = 'Valid email is required'
    if (!phone || !/^[0-9]{10,}$/.test(phone)) errs.phone = 'Valid phone number is required (min 10 digits)'
    if (!message) errs.message = 'Message is required'

    return errs
  }

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    if (!isHuman) {
      setErrors(prev => ({ ...prev, recaptcha: 'Please complete the reCAPTCHA challenge.' }))
      return
    }

    const errs = validate(data)
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }

    setErrors({})
    setState('loading')

    try {
      emailjs.init(publicKey)
      await emailjs.send(serviceId, templateId, {
        firstName: data.get('firstName'),
        lastName:  data.get('lastName'),
        email:     data.get('email'),
        phone:     data.get('phone'),
        message:   data.get('message'),
      })
      setState('success')
      form.reset()
      setIsHuman(false)
      recaptchaRef.current?.reset()
    } catch {
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-16 text-center rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
        <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center">
          <FiCheck className="w-7 h-7 text-green-600 dark:text-green-400" />
        </div>
        <div>
          <p className="text-display-sm text-neutral-900 dark:text-neutral-50 mb-1">Message sent!</p>
          <p className="text-body-md text-neutral-500 dark:text-neutral-400">
            Email sent successfully! I will get back to you in 1-2 days. Please ensure your email is correct.
          </p>
        </div>
        <button
          onClick={() => setState('idle')}
          className="btn-subtle mt-2 text-body-sm"
        >
          Send another
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900"
      noValidate
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-body-sm-strong text-neutral-700 dark:text-neutral-300 mb-1.5">
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            placeholder="First Name"
            className={inputClass}
            aria-describedby={errors.firstName ? 'firstName-error' : undefined}
          />
          {errors.firstName && (
            <p id="firstName-error" className="mt-1 text-caption text-red-500">{errors.firstName}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName" className="block text-body-sm-strong text-neutral-700 dark:text-neutral-300 mb-1.5">
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Last Name"
            className={inputClass}
            aria-describedby={errors.lastName ? 'lastName-error' : undefined}
          />
          {errors.lastName && (
            <p id="lastName-error" className="mt-1 text-caption text-red-500">{errors.lastName}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-body-sm-strong text-neutral-700 dark:text-neutral-300 mb-1.5">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="your@email.com (Please ensure you enter correct email)"
          className={inputClass}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-caption text-red-500">{errors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-body-sm-strong text-neutral-700 dark:text-neutral-300 mb-1.5">
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          type="number"
          placeholder="Phone Number"
          className={inputClass}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
        />
        {errors.phone && (
          <p id="phone-error" className="mt-1 text-caption text-red-500">{errors.phone}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-body-sm-strong text-neutral-700 dark:text-neutral-300 mb-1.5">
          Details
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Details"
          className={cn(inputClass, 'resize-none')}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-caption text-red-500">{errors.message}</p>
        )}
      </div>

      <div className="flex justify-center">
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={recaptchaKey}
          onChange={(val) => {
            setIsHuman(!!val)
            if (val) setErrors(prev => { const e = { ...prev }; delete e.recaptcha; return e })
          }}
        />
      </div>
      {errors.recaptcha && (
        <p className="text-caption text-red-500 text-center">{errors.recaptcha}</p>
      )}

      {state === 'error' && (
        <p className="text-caption text-red-500 text-center">Error sending email. Please try again later.</p>
      )}

      <button
        type="submit"
        disabled={state === 'loading'}
        className={cn(
          'btn-primary w-full',
          state === 'loading' && 'opacity-60 cursor-not-allowed'
        )}
      >
        {state === 'loading' ? (
          <>
            <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
            Please wait…
          </>
        ) : (
          <>
            Submit <FiSend className="w-4 h-4" />
          </>
        )}
      </button>

      <p className="text-center text-body-sm text-neutral-500 dark:text-neutral-400">
        I&apos;ll get back to you in 1-2 days.
      </p>
    </form>
  )
}
