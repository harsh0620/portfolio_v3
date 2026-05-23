import { skillsData, toolsData } from '@/app/lib/data'
import { AnimateIn } from '@/app/components/ui/animate-in'
import type { Skill } from '@/app/lib/definitions'

const SECTION_ORDER: { category: string; label: string }[] = [
  { category: 'Frontend', label: 'Frontend & Web' },
  { category: 'Mobile', label: 'Mobile' },
  { category: 'Backend', label: 'Backend' },
  { category: 'Database', label: 'Database' },
  { category: 'Language', label: 'Languages' },
  { category: 'CS', label: 'CS Fundamentals' },
  { category: 'Tool', label: 'Tools' },
]

const allSkills: Skill[] = [
  ...skillsData,
  ...toolsData,
]

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 hover:shadow-md dark:hover:shadow-neutral-800/50 transition-all duration-200 hover:-translate-y-0.5 group w-24">
      <div className="w-10 h-10 flex items-center justify-center">
        <img
          src={skill.icon}
          alt={skill.name}
          className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-200"
          loading="lazy"
        />
      </div>
      <span className="text-caption text-neutral-600 dark:text-neutral-400 text-center leading-tight">
        {skill.name}
      </span>
    </div>
  )
}

export function Skills() {
  const grouped = SECTION_ORDER.map(({ category, label }) => ({
    label,
    skills: allSkills.filter((s) => s.category === category),
  })).filter(({ skills }) => skills.length > 0)

  return (
    <section id="skills" className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <AnimateIn direction="up" className="text-center mb-16">
          <p className="text-caption text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-3">
            What I work with
          </p>
          <h2 className="text-display-lg text-neutral-900 dark:text-neutral-50">
            Skills & Technologies
          </h2>
        </AnimateIn>

        <div className="space-y-12">
          {grouped.map(({ label, skills }, i) => (
            <AnimateIn key={label} direction="up" delay={i * 0.05}>
              <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
                {/* Section label — fixed width column on desktop */}
                <div className="sm:w-40 shrink-0 pt-1">
                  <span className="text-caption font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">
                    {label}
                  </span>
                  <div className="mt-2 h-px w-8 bg-neutral-200 dark:bg-neutral-700 hidden sm:block" />
                </div>

                {/* Skill cards */}
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <SkillCard key={skill.id} skill={skill} />
                  ))}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
