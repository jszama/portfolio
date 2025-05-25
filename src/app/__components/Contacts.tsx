import React from 'react'
import SocialMediaLinks from './footer/SocialMediaLinks';


export default function Contacts() {
    return (
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 w-min z-50 rounded-4xl p-3 backdrop-blur-md bg-[var(--secondary-dark-background)] border-2 border-[var(--primary-dark-background)] shadow-lg">
            <SocialMediaLinks />
        </div>
    );
}
