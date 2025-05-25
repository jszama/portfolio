'use client'
import type React from 'react'
import type { EmblaOptionsType, EmblaPluginType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

import { MongoDBIcon, NextJsIcon, JavaIcon, PythonIcon, JavascriptIcon, ReactIcon, TypescriptIcon } from '../../TechStackIcons'

const slides = [
  { icon: MongoDBIcon, tooltip: '1 year of experience' },
  { icon: NextJsIcon, tooltip: '1 year of experience' },
  { icon: ReactIcon, tooltip: '2 years of experience' },
  { icon: TypescriptIcon, tooltip: '2 years of experience' },
  { icon: JavaIcon, tooltip: '1 year of experience' },
  { icon: PythonIcon, tooltip: '2 years of experience' },
  { icon: JavascriptIcon, tooltip: '2 years of experience' },
]

type PropType = {
  options?: EmblaOptionsType
  size: number
}

const TechStackCarousel: React.FC<PropType> = (props) => {
  const { options, size } = props
  const [emblaRef] = useEmblaCarousel(options, [
    Autoplay({ delay: 1000, stopOnInteraction: false, stopOnMouseEnter: true }) as EmblaPluginType,
  ])

  return (
    <section
      className="rounded-sm max-w-[8rem]"
      style={{
        '--slide-height': '2rem',
        '--slide-spacing': '1rem',
        '--slide-size': '25%',
      } as React.CSSProperties}
    >
      <div className="overflow-hidden h-auto p-1" ref={emblaRef}>
        <div className="techstack-embla__container flex touch-pinch-zoom touch-pan-y ml-[var(--slide-spacing) * -1]">
          {slides.map((value) => (
            <div
              className="ml-[var(--slide-spacing)] min-w-0"
              key={value.icon}
              style={{ transform: 'translate3d(0, 0, 0)', flex: '0 0 var(--slide-size)' }}
            >
                <div className="rounded-[1.8rem] flex items-center justify-center select-none h-[var(--slide-height)] group relative">
                  <Image title={value.tooltip} src={value.icon.toString()} width={size} height={size} alt="tech" />
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStackCarousel
