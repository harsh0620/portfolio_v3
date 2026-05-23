import { ImageResponse } from 'next/og'

export const alt = 'Harsh Chandravanshi — Software Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          background: '#0a0a0a',
          padding: '72px 80px',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background grid pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Gradient glow top-right */}
        <div
          style={{
            position: 'absolute',
            top: -120,
            right: -120,
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)',
          }}
        />

        {/* Top badge */}
        <div
          style={{
            position: 'absolute',
            top: 64,
            left: 80,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: '8px 18px',
            background: 'rgba(255,255,255,0.06)',
            borderRadius: 9999,
            border: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: '#22c55e',
            }}
          />
          <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, letterSpacing: 2 }}>
            OPEN TO WORK
          </span>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: 80,
            fontWeight: 800,
            color: '#f5f5f5',
            lineHeight: 1,
            letterSpacing: -2,
            marginBottom: 16,
          }}
        >
          Harsh Chandravanshi
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 30,
            fontWeight: 400,
            color: 'rgba(255,255,255,0.45)',
            marginBottom: 40,
          }}
        >
          Software Engineer · React · Next.js · Node.js
        </div>

        {/* Bottom tags */}
        <div style={{ display: 'flex', gap: 12 }}>
          {['React', 'Next.js', 'TypeScript', 'Node.js'].map((tag) => (
            <div
              key={tag}
              style={{
                padding: '8px 20px',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: 9999,
                color: 'rgba(255,255,255,0.5)',
                fontSize: 16,
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* URL bottom right */}
        <div
          style={{
            position: 'absolute',
            bottom: 64,
            right: 80,
            color: 'rgba(255,255,255,0.25)',
            fontSize: 16,
          }}
        >
          harshchandravanshi.com
        </div>
      </div>
    ),
    { ...size }
  )
}
