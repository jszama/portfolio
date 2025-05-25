import React from 'react'
import Image from 'next/image'

export interface TechStack {
    name: string
    logo: string
}

interface TechStackListProps {
    techStacks: TechStack[]
}

export default function TechStackList({ techStacks }: TechStackListProps) {
    return (
      <>
        {techStacks.map((tech: TechStack, index) => (
            <Image
                key={index}
                src={tech.logo}
                alt={tech.name}
                width={20}
                height={20}
                quality={60}
            />
        ))}
      </>
    )
}
