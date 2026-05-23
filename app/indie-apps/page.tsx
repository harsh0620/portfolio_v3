import type { Metadata } from 'next'
import { ComingSoonPage } from '@/app/components/ui/coming-soon-page'

export const metadata: Metadata = {
  title: 'Indie Apps',
  description:
    'Building indie apps for India — India LifeOS and more. A super-app covering health, finance, productivity, relationships, and daily rituals.',
}

export default function IndieAppsPage() {
  return (
    <ComingSoonPage
      icon="🇮🇳"
      category="Building"
      title="Indie Apps"
      description="A super-app built specifically for India — covering health, finance, productivity, relationships, and daily rituals in one place. The goal: one app to manage every aspect of your life, built for how Indians actually live."
      status="in-progress"
      tags={['Flutter', 'Indie App', 'WIP']}
    />
  )
}
