'use client';

import React from 'react';
import WaitlistForm from './WaitlistForm';


export default function Footer() {
    const footerLinks = {
        Product: [
            { label: 'Features', href: '#features' },
            { label: 'Pricing', href: '#pricing' },
            { label: 'Roadmap', href: '#' },
            // { label: 'Changelog', href: '#' },
        ],
        Company: [
            { label: 'About', href: '#' },
            // { label: 'Blog', href: '#' },
            // { label: 'Careers', href: '#' },
            { label: 'Contact', href: '/contact' },
        ],
        Legal: [
            { label: 'Privacy', href: '/privacy' },
            { label: 'Terms', href: '#' },
            { label: 'Security', href: '#' },
        ],
    };

    return (
        <footer
            id="contact"
            style={{
                background: 'var(--color-bg-primary)',
                borderTop: '1px solid var(--color-border-light)',
                padding: '4rem 0 2rem',
            }}
        >
            <div className="container">
                {/* Waitlist CTA Section */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        paddingBottom: '4rem',
                        marginBottom: '3rem',
                        borderBottom: '1px solid var(--color-border-light)',
                    }}
                >
                    <h2
                        style={{
                            fontFamily: 'var(--font-serif)',
                            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                            fontWeight: 400,
                            lineHeight: 1.2,
                            letterSpacing: '-0.02em',
                            color: 'var(--color-text-primary)',
                            marginBottom: '1.5rem',
                            textAlign: 'center',
                        }}
                    >
                        Transform Gmail with Minmailist
                    </h2>
                    <WaitlistForm />
                </div>

                {/* Main Footer Content */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                        gap: '3rem',
                        marginBottom: '3rem',
                    }}
                >
                    {/* Brand Column */}
                    <div style={{ gridColumn: 'span 2' }}>
                        <a
                            href="/"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                textDecoration: 'none',
                                color: 'inherit',
                                marginBottom: '1rem',
                            }}
                        >
                            <img src="/minmailist-logo.svg" alt="Minmailist Logo" width={32} height={32} />
                            <span style={{
                                fontFamily: 'var(--font-serif)',
                                fontSize: '1.25rem',
                                fontWeight: 500,
                            }}>
                                Minmailist
                            </span>
                        </a>
                        <p style={{
                            color: 'var(--color-text-tertiary)',
                            fontSize: '0.875rem',
                            maxWidth: '280px',
                            lineHeight: 1.6,
                            marginTop: '0.5rem',
                        }}>
                            Transform your inbox chaos into calm productivity. Zen email for the focused mind.
                        </p>

                        {/* Social Links */}
                        <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                            {[
                                {
                                    name: 'Twitter',
                                    href: 'https://x.com/Minmailist',
                                    icon: (
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                        </svg>
                                    ),
                                },
                                {
                                    name: 'GitHub',
                                    href: 'https://github.com/EshSubP',
                                    icon: (
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                                        </svg>
                                    ),
                                },
                            ].map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.name}
                                    style={{
                                        width: '36px',
                                        height: '36px',
                                        borderRadius: 'var(--radius-full)',
                                        background: 'var(--color-bg-tertiary)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'var(--color-text-tertiary)',
                                        transition: 'all 0.2s ease',
                                        textDecoration: 'none',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'var(--color-accent-primary)';
                                        e.currentTarget.style.color = 'white';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'var(--color-bg-tertiary)';
                                        e.currentTarget.style.color = 'var(--color-text-tertiary)';
                                    }}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Link Columns */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h4 style={{
                                fontSize: '0.8125rem',
                                fontWeight: 600,
                                color: 'var(--color-text-primary)',
                                marginBottom: '1rem',
                                letterSpacing: '0.02em',
                            }}>
                                {category}
                            </h4>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {links.map((link) => (
                                    <li key={link.label} style={{ marginBottom: '0.75rem' }}>
                                        <a
                                            href={link.href}
                                            style={{
                                                color: 'var(--color-text-tertiary)',
                                                textDecoration: 'none',
                                                fontSize: '0.875rem',
                                                transition: 'color 0.2s ease',
                                            }}
                                            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-text-primary)'}
                                            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-tertiary)'}
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <div className="divider-line" style={{ marginBottom: '2rem' }} />

                {/* Bottom Bar */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '1rem',
                    }}
                >
                    <p style={{
                        color: 'var(--color-text-muted)',
                        fontSize: '0.8125rem',
                        margin: 0,
                    }}>
                        © {new Date().getFullYear()} Minmailist. All rights reserved.
                    </p>
                    <p style={{
                        color: 'var(--color-text-muted)',
                        fontSize: '0.8125rem',
                        margin: 0,
                    }}>
                        Made with 🧘 for focused minds
                    </p>
                </div>
            </div>
        </footer>
    );
}
