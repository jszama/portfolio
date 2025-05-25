import Image from 'next/image'

interface ContactCardProps {
    url: string;
    logo: string;
    alt: string;
    row_span: number;
    col_span: number;
}

export default function ContactCard({ url, logo, alt, row_span, col_span }: ContactCardProps) {
    return (
        <a
            href={url}
            className={`bg-[var(--muted-background)] rounded-lg p-4 hover:bg-[var(--hover-magenta)] flex items-center justify-center font-bold transition-all duration-200 col-span-${col_span} row-span-${row_span}`}
        >
            <Image src={logo} alt={alt} className="h-8 w-8" />
        </a>
    )
}
