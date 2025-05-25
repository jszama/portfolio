"use client";

import React from 'react'
import ExperienceCard from './ExperienceCard'
import { Experiences } from './assets/experiences'
import { useExpandedItem } from './useExpandedItem'

export default function Experience() {
  const { expandedItem, toggleItem } = useExpandedItem();

  return (
    <section className='flex flex-col px-4 py-12 sm:mx-24 sm:py-0 sm:pb-12 sm:px-0' id='experience'>
        <h2 className='text-3xl text-[var(--primary-text)] font-bold'>Experience</h2>
        <h3 className='text-md text-[var(--secondary-text)] mb-4'>My professional journey so far...</h3>
        <div className="flex flex-row gap-x-6 px-2 py-4 overflow-x-auto snap-x scrollbar-thin scrollbar-thumb-[var(--hover-magenta)] scrollbar-track-[var(--secondary-dark-background)]">
          {Experiences.map((experience) => (
            <ExperienceCard
              key={experience.company}
              {...experience}
              isExpanded={expandedItem === experience.company}
              onToggle={() => toggleItem(experience.company)}
            />
          ))}
        </div>
    </section>
  )
}