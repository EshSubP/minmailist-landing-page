'use client';

import React from 'react';

export default function ContactPage() {
    return (
        <main
            style={{
                background: 'var(--color-bg-primary)',
                minHeight: '100vh',
                padding: 'var(--space-2xl) 0',
            }}
        >
            <div className="container container-narrow">
                <header style={{ marginBottom: 'var(--space-xl)', textAlign: 'center' }}>
                    <h1
                        style={{
                            fontFamily: 'var(--font-serif)',
                            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                            fontWeight: 500,
                            lineHeight: 1.1,
                            letterSpacing: '-0.02em',
                            color: 'var(--color-text-primary)',
                            marginBottom: 'var(--space-md)',
                        }}
                    >
                        Contact Us
                    </h1>
                    <p className="body-lg" style={{ color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                        We'd love to hear from you. Fill out the form below or send us an email directly.
                    </p>
                </header>

                <div className="contact-container" style={{
                    margin: 0,
                    padding: 0,
                    display: 'block',
                    overflow: 'hidden', // Ensure negative margin doesn't bleed
                }}>
                    <iframe
                        src="https://tally.so/r/ob2kbx?transparentBackground=1&dynamicHeight=1&hideTitle=1"
                        width="100%"
                        height="900"
                        frameBorder="0"
                        title="Contact Form"
                        style={{
                            display: 'block',
                            marginTop: '-100px', // Pull up to remove Tally's default top padding
                        }}
                    ></iframe>
                </div>
            </div>
        </main>
    );
}
