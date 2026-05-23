import type { Metadata } from 'next'
import { ComingSoonPage } from '@/app/components/ui/coming-soon-page'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Writing about systems I build, things I learn from papers and books, and patterns I notice while shipping products.',
}

export default function BlogPage() {
  return (
    <ComingSoonPage
      icon="📝"
      category="Writing"
      title="Blog"
      description="Planning to write about systems I build, things I learn from papers and books, and patterns I notice while shipping products. Writing forces clarity of thought."
      status="coming-soon"
    />
  )
}
