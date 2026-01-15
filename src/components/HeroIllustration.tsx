import React from 'react';

export default function HeroIllustration() {
    return (
        <img
            src="/hero-illustration.png"
            alt="Minmailist workflow sketch"
            style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                // Optional: add a subtle drop shadow or alignment if needed, 
                // but the parent container handles positioning.
            }}
        />
    );
}
