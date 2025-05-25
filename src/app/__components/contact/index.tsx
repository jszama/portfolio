import React from 'react'
import ContactCard from './ContactCard'

const ContactInfo = {
    github: {
        url: "https://github.com/jszama",
        logo: "/path/to/github-logo.png",
        alt: "Github",
        row_span: 2,
        col_span: 2,
    },
    linkedin: {
        url: "https://www.linkedin.com/in/jakub-szamotulski/",
        logo: "/path/to/linkedin-logo.png",
        alt: "LinkedIn",
        row_span: 2,
        col_span: 1,
    },
    email: {
        url: "mailto:jmszamotulski@gmail.com",
        logo: "/path/to/email-logo.png",
        alt: "Email",
        row_span: 1,
        col_span: 1,
    },
}

export default function Contact() {
  return (
    <section className='flex flex-col px-4 py-12 sm:mx-24 sm:py-0 sm:pb-12 sm:px-0'>
        <h2 className='text-2xl text-[var(--primary-text)] font-bold'>Contact</h2>
        <h3 className='text-md text-[var(--secondary-text)] mb-4'>Get in touch with me</h3>
        <div className="grid grid-cols-3 grid-rows-3 gap-4 w-[30%] aspect-square">
            {Object.values(ContactInfo).map((contact, index) => (
                <ContactCard
                    key={index}
                    url={contact.url}
                    logo={contact.logo}
                    alt={contact.alt}
                    row_span={contact.row_span}
                    col_span={contact.col_span}
                />
            ))}
        </div>
    </section>
  )
}
