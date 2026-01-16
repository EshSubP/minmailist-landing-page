'use client';

import React, { useState, useEffect, useRef } from 'react';

// Feature data
const features = [
    {
        id: 'smart-inbox',
        name: 'Smart Inbox',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18" />
                <path d="M9 21V9" />
            </svg>
        ),
        color: '#4A90D9',
        headline: 'Inbox designed for humans',
        description: 'Use Splits to separate emails and Bundles to group related inboxes together. Pin what matters, stash what can wait, and star emails just like in Gmail.',
        image: '/splits-bundles-preview.png',
    },
    {
        id: 'kanban',
        name: 'Kanban Workspace',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="6" height="18" rx="1" />
                <rect x="9" y="3" width="6" height="12" rx="1" />
                <rect x="15" y="3" width="6" height="8" rx="1" />
            </svg>
        ),
        color: '#8B5CF6',
        headline: 'Your inbox, now a visual workflow',
        description: 'Visualize your tasks. Drag and drop emails into columns like "To Do", "In Progress", and "Done" without leaving Gmail. Turn emails into action items.',
        image: '/workflows.png',
    },
    {
        id: 'command',
        name: 'Command Centre',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
            </svg>
        ),
        color: '#1A1A1A',
        headline: 'Navigate at the speed of thought',
        description: 'Use ⌘K to search, open settings, or switch views instantly. Power users rejoice—keyboard shortcuts for everything.',
        image: '/command-center.png',
    },
    {
        id: 'gatekeeper',
        name: 'Gatekeeper',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
            </svg>
        ),
        color: '#EF4444',
        headline: 'Block the noise before it arrives',
        description: 'Block unwanted senders instantly. Screen first-time emailers before they ever reach your inbox. You control who gets through.',
    },
    {
        id: 'feed',
        name: 'Feed Mode',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 11a9 9 0 0 1 9 9" />
                <path d="M4 4a16 16 0 0 1 16 16" />
                <circle cx="5" cy="19" r="1" />
            </svg>
        ),
        color: '#14B8A6',
        headline: 'Newsletters as a social feed',
        description: 'Read newsletters and updates like a social feed. Skim through content without opening dozens of tabs. The modern way to consume email content.',
    },
    {
        id: 'autolabel',
        name: 'Autolabelling',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
        ),
        color: '#F59E0B',
        headline: 'AI that understands your mail',
        description: 'Intelligent AI automatically tags and sorts incoming mail based on context, sender, and priority. Your inbox learns and adapts to you.',
    },
    {
        id: 'zen-home',
        name: 'Zen Home',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
            </svg>
        ),
        color: '#22C55E',
        headline: 'Start with a blank slate',
        description: 'The Zen Home dashboard shows you only what needs attention now. No clutter, no distraction—just clarity and focus.',
    },
    {
        id: 'collections',
        name: 'Collections',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
        ),
        color: '#EAB308',
        headline: 'Starred items, beautifully organized',
        description: 'Organize your starred items into custom collections for better retrieval later. No more endless scrolling through stars.',
    },
];

export default function Features() {
    const [activeTab, setActiveTab] = useState(0);
    const observerRefs = useRef<(HTMLElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = features.findIndex((f) => f.id === entry.target.id);
                        if (index !== -1) {
                            setActiveTab(index);
                        }
                    }
                });
            },
            {
                rootMargin: '-20% 0px -60% 0px',
                threshold: 0,
            }
        );

        observerRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToFeature = (index: number) => {
        const feature = features[index];
        const element = document.getElementById(feature.id);
        if (element) {
            const headerOffset = 180;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            setActiveTab(index);
        }
    };

    return (
        <section
            id="features"
            style={{
                position: 'relative',
                background: '#F9F3EC', // Warm beige background
                // Note: No overflow:hidden - it breaks sticky positioning
            }}
        >
            {/* Grid Pattern Background - Matching Hero */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 0,
                    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
                                      linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    pointerEvents: 'none',
                    overflow: 'hidden', // Moved overflow here instead
                }}
            />

            <div className="container" style={{ position: 'relative', zIndex: 1, paddingBottom: '6rem' }}>
                {/* Section Header */}
                <div style={{ textAlign: 'center', paddingTop: '6rem', marginBottom: '3rem' }}>
                    <div className="label-caps" style={{ marginBottom: '1rem' }}>
                        Features
                    </div>
                    <h2 className="headline-lg">
                        Everything you need for
                        <br />
                        <span style={{ position: 'relative', display: 'inline-block' }}>
                            <span style={{ fontStyle: 'italic', position: 'relative', zIndex: 1 }}>inbox zen</span>
                            <svg
                                width="120%"
                                height="20"
                                viewBox="0 0 100 20"
                                preserveAspectRatio="none"
                                style={{
                                    position: 'absolute',
                                    bottom: -2,
                                    left: '-10%',
                                    zIndex: 0,
                                    pointerEvents: 'none',
                                    stroke: 'var(--color-accent-warm)',
                                    opacity: 0.6
                                }}
                            >
                                <path
                                    d="M5 12C25 5 75 5 95 12"
                                    fill="none"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </span>
                    </h2>
                </div>

                {/* Sticky Tabs - With original color scheme */}
                <div
                    style={{
                        position: 'sticky',
                        top: '5rem',
                        zIndex: 90,
                        background: 'rgba(249, 243, 236, 0.85)', // Lighter glass overlay
                        backdropFilter: 'blur(12px)',
                        padding: '1rem 0',
                        margin: '0 -100vw',
                        paddingLeft: '100vw',
                        paddingRight: '100vw',
                        borderBottom: '1px solid var(--color-border-light)',
                        marginBottom: '4rem',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            gap: '0.5rem',
                            overflowX: 'auto',
                            padding: '0.25rem',
                            maxWidth: '100%',
                            WebkitOverflowScrolling: 'touch',
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                        }}
                        className="hide-scrollbar"
                    >
                        {features.map((feature, index) => (
                            <button
                                key={feature.id}
                                onClick={() => scrollToFeature(index)}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    padding: '0.625rem 1rem',
                                    borderRadius: '4px',
                                    border: 'none',
                                    background: activeTab === index
                                        ? `repeating-linear-gradient(
                                            -45deg,
                                            #1a1a1a,
                                            transparent 1px,
                                            transparent 16px
                                          )`
                                        : 'transparent',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease',
                                    whiteSpace: 'nowrap',
                                    color: 'var(--color-text-tertiary)',
                                    fontWeight: activeTab === index ? 500 : 400,
                                    fontSize: '0.875rem',
                                    opacity: activeTab === index ? 1 : 0.7,
                                }}
                            >
                                <span style={{ color: feature.color, display: 'flex' }}>
                                    {React.cloneElement(feature.icon as any, { width: 16, height: 16 })}
                                </span>
                                <span>{feature.name}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Stacked Features List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }}>
                    {features.map((feature, index) => (
                        <div
                            key={feature.id}
                            id={feature.id}
                            ref={(el) => { observerRefs.current[index] = el; }}
                            style={{
                                scrollMarginTop: '12rem',
                                display: 'grid',
                                gridTemplateColumns:
                                    index % 2 === 0
                                        ? 'minmax(0, 1fr) minmax(0, 3fr)'
                                        : 'minmax(0, 3fr) minmax(0, 1fr)',
                                gap: '4rem',
                                alignItems: 'center',
                            }}
                        >
                            {/* Text Side */}
                            <div style={{
                                order: index % 2 === 1 ? 2 : 1,
                                position: 'relative',
                            }}>
                                <div
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        marginBottom: '1.5rem',
                                        padding: '0.5rem 1rem',
                                        background: `${feature.color}15`,
                                        borderRadius: 'var(--radius-full)',
                                    }}
                                >
                                    <span style={{ color: feature.color }}>{feature.icon}</span>
                                    <span style={{ fontSize: '0.875rem', fontWeight: 500, color: feature.color }}>
                                        {feature.name}
                                    </span>
                                </div>

                                <h3 className="headline-md" style={{ marginBottom: '1rem' }}>
                                    {feature.headline}
                                </h3>

                                <p className="body-md" style={{ marginBottom: '1.5rem', maxWidth: '480px' }}>
                                    {feature.description}
                                </p>

                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    color: 'var(--color-text-primary)',
                                    fontWeight: 500,
                                    fontSize: '0.9375rem',
                                    cursor: 'pointer',
                                }}>
                                    Learn more
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>

                            {/* Visual Side - Free Floating Image */}
                            <div
                                style={{
                                    order: index % 2 === 1 ? 1 : 2,
                                    aspectRatio: '4/3',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
                                    position: 'relative',
                                }}
                            >
                                {(feature as any).image ? (
                                    // Free-floating image with drop shadow
                                    <img
                                        src={(feature as any).image}
                                        alt={feature.name}
                                        style={{
                                            width: '1280px', // Enlarged to cover more space (approx 150% requested)
                                            maxWidth: '1280px',
                                            height: 'auto',
                                            objectFit: 'contain',
                                            transform: 'rotate(-2deg)',
                                            filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.18))', // Enhanced shadow for depth
                                            zIndex: 10,
                                            // Shift outward from center: Right images -> paddingLeft, Left images -> paddingRight
                                            ...(index % 2 === 0
                                                ? { paddingRight: '10%' }  // Image on right, shift right
                                                : { paddingLeft: '10%' } // Image on left, shift left
                                            ),
                                        }}
                                    />
                                ) : (
                                    // Simple placeholder with just the icon
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '1rem',
                                        }}
                                    >
                                        <div style={{
                                            padding: '2rem',
                                            background: `${feature.color}15`,
                                            borderRadius: 'var(--radius-2xl)',
                                            color: feature.color,
                                        }}>
                                            {React.cloneElement(feature.icon as any, { width: 48, height: 48 })}
                                        </div>
                                        <div style={{
                                            color: 'var(--color-text-tertiary)',
                                            fontSize: '0.875rem',
                                            fontStyle: 'italic',
                                        }}>
                                            Preview coming soon
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
}
