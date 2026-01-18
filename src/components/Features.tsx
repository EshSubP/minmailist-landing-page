'use client';

import React, { useState, useEffect, useRef } from 'react';

// Feature data
const features = [
    {
        id: 'gmail-overlay',
        name: 'Gmail Overlay',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 7l-10 7L2 7" />
            </svg>
        ),
        color: '#EA4335',
        headline: 'Works right inside Gmail',
        description: 'Minmailist is a seamless overlay on top of Gmail—no migration, no new apps to learn. Keep your existing setup while enjoying a better experience. A standalone client is on our roadmap.',
        image: '/gmail-overlay.png',
    },
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
        image: '/sender-view.png',
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
        image: '/feed-view.png',
    },
    {
        id: 'autolabel',
        name: 'AI Powered Inbox',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                <path d="M10 2C10 2 12.5 9.5 18 13C12.5 16.5 10 24 10 24C10 24 7.5 16.5 2 13C7.5 9.5 10 2 10 2Z" />
                <path d="M19 2C19 2 20 5 23 6C20 7 19 10 19 10C19 10 18 7 15 6C18 5 19 2 19 2Z" />
            </svg>
        ),
        color: '#8B5CF6',
        headline: 'Smart Labels and Summaries',
        description: 'Intelligent AI automatically tags incoming mail based on simple rules. Understand Your Mail with AI Summaries',
        image: '/autolabels.png',
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
        image: '/zen-home.png',
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
        image: '/star-collection.png',
    },
];

export default function Features() {
    const [activeTab, setActiveTab] = useState(-1);
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

    // Scroll active tab into view
    const tabsContainerRef = useRef<HTMLDivElement>(null);
    const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

    useEffect(() => {
        if (activeTab !== -1 && tabsContainerRef.current && tabRefs.current[activeTab]) {
            const container = tabsContainerRef.current;
            const activeTabElement = tabRefs.current[activeTab];

            if (activeTabElement) {
                const containerWidth = container.offsetWidth;
                const tabLeft = activeTabElement.offsetLeft;
                const tabWidth = activeTabElement.offsetWidth;

                // Center the active tab
                const scrollLeft = tabLeft - (containerWidth / 2) + (tabWidth / 2);

                container.scrollTo({
                    left: scrollLeft,
                    behavior: 'smooth'
                });
            }
        }
    }, [activeTab]);

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
        }
    };

    return (
        <section
            id="features"
            className="relative bg-[#F9F3EC]"
        >
            {/* Grid Pattern Background - Matching Hero */}
            <div
                className="absolute inset-0 z-0 pointer-events-none aria-hidden"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
                                      linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                }}
            />

            {/* Section Header */}
            <div className="container relative z-10">
                <div className="text-center pt-24 mb-12">
                    <div className="label-caps mb-4">
                        Features
                    </div>
                    <h2 className="headline-lg">
                        Everything you need for a
                        <br />
                        <span className="relative inline-block">
                            <span className="italic relative z-10">relaxing inbox</span>
                            <svg
                                width="120%"
                                height="20"
                                viewBox="0 0 100 20"
                                preserveAspectRatio="none"
                                className="absolute -bottom-0.5 -left-[10%] z-0 pointer-events-none stroke-[var(--color-accent-warm)] opacity-60"
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

                    <div className="relative inline-flex items-center justify-center py-6 px-12 mt-4 max-w-fit mx-auto">
                        {/* Rough Brush Circle SVG */}
                        <svg
                            viewBox="0 0 300 100"
                            preserveAspectRatio="none"
                            className="absolute inset-0 w-full h-full z-0 overflow-visible pointer-events-none text-[var(--color-text-secondary)] opacity-40 -rotate-1"
                        >
                            {/* A hand-drawn looking oval loop */}
                            <path
                                d="M20,50 C20,25 80,10 150,12 C220,14 285,30 280,55 C275,80 200,88 140,86 C80,84 25,75 20,50 M30,48 C50,45 100,20 200,45"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>

                        <div className="relative z-10 flex items-center gap-3">
                            <div className="flex items-center justify-center w-6 h-6 bg-[#8B8B99] rounded-full text-white shadow-[0_2px_4px_rgba(139,139,153,0.2)]">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                </svg>
                            </div>
                            <div className="text-left">
                                <div className="font-sans text-sm font-medium text-[var(--color-text-primary)] leading-tight">
                                    Privacy Protected
                                </div>
                                <div className="font-sans text-xs text-[var(--color-text-tertiary)] leading-tight">
                                    No email storage • CASA Accreditation in progress
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sticky Tabs - Naturally full width now, no hacks needed */}
            <div className="sticky top-20 z-40 mb-16 w-full">
                <div className=" bg-[rgba(249,243,236,0.85)] backdrop-blur-md py-4 border-b border-[var(--color-border-light)]">
                    <div className="container">
                        <div
                            ref={tabsContainerRef}
                            className="flex overflow-x-auto p-1 hide-scrollbar relative"
                        >
                            {features.map((feature, index) => (
                                <button
                                    key={feature.id}
                                    ref={(el) => { tabRefs.current[index] = el; }}
                                    onClick={() => scrollToFeature(index)}
                                    className={`
                                    flex items-center gap-2 py-2 px-3 rounded border-none cursor-pointer transition-all duration-200 whitespace-nowrap text-sm
                                    ${activeTab === index
                                            ? 'font-medium opacity-100 text-[var(--color-text-tertiary)]'
                                            : 'font-normal opacity-70 text-[var(--color-text-tertiary)] hover:bg-black/5'
                                        }
                                `}
                                    style={{
                                        background: activeTab === index
                                            ? `repeating-linear-gradient(
                                            -45deg,
                                            #1a1a1a,
                                            transparent 1px,
                                            transparent 16px
                                          )`
                                            : 'transparent'
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
                </div>
            </div>

            {/* Stacked Features List */}
            <div className="container relative z-10 pb-24 flex flex-col gap-24 md:gap-32">
                {features.map((feature, index) => (
                    <div
                        key={feature.id}
                        id={feature.id}
                        ref={(el) => { observerRefs.current[index] = el; }}
                        className={`
                            grid gap-4 md:gap-16 items-center scroll-mt-24
                            grid-cols-1 ${index % 2 === 0 ? 'md:grid-cols-[minmax(0,_1fr)_minmax(0,_3fr)]' :
                                'md:grid-cols-[minmax(0,_3fr)_minmax(0,_1fr)]'}
                        `}
                    >
                        {/* Text Side - Always First on Mobile */}
                        <div className={`relative ${index % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                            <div
                                className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full"
                                style={{
                                    backgroundColor: `${feature.color}15`,
                                }}
                            >
                                <span style={{ color: feature.color }}>{feature.icon}</span>
                                <span className="text-sm font-medium" style={{ color: feature.color }}>
                                    {feature.name}
                                </span>
                            </div>

                            <h3 className="headline-md mb-4">
                                {feature.headline}
                            </h3>

                            <p className="body-md mb-6 max-w-[480px]">
                                {feature.description}
                            </p>
                        </div>

                        {/* Visual Side - Free Floating Image */}
                        <div
                            className={`
                                relative aspect-[4/3] flex items-center md:mt-8 mt-0
                                ${index % 2 === 1 ? 'md:order-1 md:justify-end' : 'md:order-2 md:justify-start'}
                            `}
                        >
                            {(feature as any).image ? (
                                // Free-floating image with drop shadow
                                <img
                                    src={(feature as any).image}
                                    alt={feature.name}
                                    className={`
                                        w-full md:w-[1280px] md:max-w-[1280px] h-auto object-contain 
                                        -rotate-2 drop-shadow-[0_30px_60px_rgba(0,0,0,0.18)] z-10
                                        ${index % 2 === 0 ? 'md:pr-[10%]' : 'md:pl-[10%]'}
                                    `}
                                />
                            ) : (
                                // Simple placeholder with just the icon
                                <div className="flex flex-col items-center justify-center gap-4 w-full">
                                    <div
                                        className="p-8 rounded-2xl"
                                        style={{
                                            backgroundColor: `${feature.color}15`,
                                            color: feature.color,
                                        }}
                                    >
                                        {React.cloneElement(feature.icon as any, { width: 48, height: 48 })}
                                    </div>
                                    <div className="text-[var(--color-text-tertiary)] text-sm italic">
                                        Preview coming soon
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <style jsx>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
}
