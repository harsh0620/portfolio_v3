import type { Metadata } from 'next'
import { ComingSoonPage } from '@/app/components/ui/coming-soon-page'

export const metadata: Metadata = {
  title: 'Learnings',
  description:
    'Notes on system design, Flutter, and everything I am studying — going deep on LLD and cross-platform mobile.',
}

export default function LearningsPage() {
  return (
    <ComingSoonPage
      icon="📚"
      category="Learning"
      title="Learnings"
      description="Building strong fundamentals in system design and expanding my mobile stack. LLD is making me a better architect; Flutter is unlocking cross-platform indie shipping."
      status="in-progress"
      tags={['Low Level Design', 'Flutter']}
    />
  )
}
