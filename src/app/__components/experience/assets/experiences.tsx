import { ReactNode } from 'react'
import { Poland20Logo, OutlierLogo, PropecoLogo, Subsea7Logo } from './index'
import { NextJsIcon, PythonIcon, ReactIcon, TypescriptIcon } from '../../TechStackIcons'
import { StaticImageData } from 'next/image'

export type Description = {
    title: string
    description: string[]
}

export type Experience = {
    company: string
    company_icon: StaticImageData
    position: string
    duration: string
    description: Description
    techStack?: string[]
    readMore?: boolean
    modalContent?: ReactNode
}

const ModalContent = {
    PropEco: (
        <div>
            <h2>PropEco</h2>
            <p>My first experience in a professional environment, where I learned about GIS and data management.</p>
            <p>Worked with ArcGIS to manage and analyse geospatial data.</p>
            <p>Automated data handling workflows with Python scripts, improving productivity by 40%.</p>
        </div>
    ),
    Poland20: (
        <div>
            <h2>Poland 2.0</h2>
            <p>My first software engineering role, I am in charge of maintaining and improving the company website.</p>
            <p>Worked with ArcGIS to manage and analyse geospatial data.</p>
            <p>Automated data handling workflows with Python scripts, improving productivity by 40%.</p>
        </div>
    )
};

export const Experiences = [
    {
        company: 'PropEco',
        company_icon: PropecoLogo,
        position: 'Fullstack SWE Intern',
        duration: 'Apr 2025 - Present',
        description: {
            title: 'My first experience in a professional environment, where I learned about GIS and data management.',
            description: [
                'Worked with ArcGIS to manage and analyse geospatial data.',
                'Automated data handling workflows with Python scripts, improving productivity by 40%.',
                'Processed and managed vessel route data using Excel, enhancing data accuracy and accessibility.',
                'Collaborated with a team of engineers and geologists to support offshore projects.',
                'Quickly adapted to new technologies, demonstrating effective problem-solving in a high-paced setting.'
            ]
        },
        techStack: [
            ReactIcon,
            TypescriptIcon,
            PythonIcon
        ],
        readMore: true,
        modalContent: ModalContent.PropEco
    },
    {
        company: 'Poland 2.0',
        company_icon: Poland20Logo,
        position: 'Digital Officer',
        duration: 'Jan 2025 - Present',
        description: {
            title: 'My first software engineering role, I am in charge of maintaining and improving the company website.',
            description: [
                'Worked with ArcGIS to manage and analyse geospatial data.',
                'Automated data handling workflows with Python scripts, improving productivity by 40%.',
                'Processed and managed vessel route data using Excel, enhancing data accuracy and accessibility.',
                'Collaborated with a team of engineers and geologists to support offshore projects.',
                'Quickly adapted to new technologies, demonstrating effective problem-solving in a high-paced setting.'
            ]
        },
        techStack: [
            NextJsIcon,
            ReactIcon,
            TypescriptIcon,
        ],
        readMore: true,
        modalContent: ModalContent.Poland20
    },
    {
        company: 'Outlier',
        company_icon: OutlierLogo,
        position: 'AI Content Reviewer',
        duration: 'Nov 2024 - Present',
        description: {
            title: 'My first experience in a professional environment, where I learned about GIS and data management.',
            description: [
                'Worked with ArcGIS to manage and analyse geospatial data.',
                'Automated data handling workflows with Python scripts, improving productivity by 40%.',
                'Processed and managed vessel route data using Excel, enhancing data accuracy and accessibility.',
                'Collaborated with a team of engineers and geologists to support offshore projects.',
                'Quickly adapted to new technologies, demonstrating effective problem-solving in a high-paced setting.'
            ]
        },
    },
    {
        company: 'Subsea7',
        company_icon: Subsea7Logo,
        position: 'GIS Technician Intern',
        duration: 'Nov 2022 - Mar 2023',
        description: {
            title: 'My first experience in a professional environment, where I learned about GIS and data management.',
            description: [
                'Worked with ArcGIS to manage and analyse geospatial data.',
                'Automated data handling workflows with Python scripts, improving productivity by 40%.',
                'Processed and managed vessel route data using Excel, enhancing data accuracy and accessibility.',
                'Collaborated with a team of engineers and geologists to support offshore projects.',
                'Quickly adapted to new technologies, demonstrating effective problem-solving in a high-paced setting.'
            ]
        },
        techStack: [
            PythonIcon,
        ]
    },
] as Experience[];
