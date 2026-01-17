'use client';

import React, { useState, useEffect } from 'react';
import HeroIllustration from './HeroIllustration';

export default function Hero() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        // Initial call
        handleScroll();

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Animation Parameters
    const ANIMATION_DURATION = 800; // Pixels to complete the transform (Inset -> Full)

    // Progress 0 -> 1 during the animation phase
    const progress = Math.min(1, scrollY / ANIMATION_DURATION);

    // Text: Fades out quickly so focus shifts to image
    const textOpacity = Math.max(0, 1 - progress * 1.5);
    const textTranslateY = scrollY * 0.5;

    // Image Container: Full screen (no inset)
    const insetVal = 0;
    const borderRadius = 0;

    // Image visual properties
    const blurAmount = Math.max(0, 32 * (1 - progress)); // 16px blur -> 0px
    const overlayOpacity = Math.max(0, 0.4 * (1 - progress)); // 0.4 -> 0
    // Zoom continues slightly even after full screen for "alive" feel
    const imageScale = 0.8 + (scrollY * 0.0001);

    return (
        <section
            className="hero-track"
            style={{
                // Critical: Tall track allows user to "scrub" the animation
                // before the next section scrolls into view.
                height: '250vh',
                position: 'relative',
                background: 'var(--color-bg-primary)',
            }}
        >
            {/* Sticky Viewport: Pins the content while user scrolls through the track */}
            <div style={{
                position: 'sticky',
                top: 0,
                height: '100vh',
                width: '100%',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>

                {/* Square Grid Pattern Layer */}
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        zIndex: 1,
                        opacity: Math.max(0, 1 - progress * 1.5), // Fades out with text
                        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
                                          linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)`,
                        backgroundSize: '40px 40px',
                        pointerEvents: 'none',
                    }}
                />

                {/* Hand-Drawn Illustration - Parallaxed */}
                <div
                    style={{
                        position: 'absolute',
                        // Position the illustration in the empty space
                        top: '10%',
                        right: '5%', // Moved left from 0% to avoid clipping
                        width: '60%',
                        maxWidth: '800px',
                        zIndex: 1,
                        opacity: Math.max(0, (1 - progress * 2) * 0.8), // Fades out slightly faster
                        transform: `translateY(${scrollY * -0.2}px) translateX(10%) rotate(2deg)`, // Parallax moves UP as you scroll down
                        pointerEvents: 'none',
                        transition: 'opacity 0.1s ease-out, transform 0.1s ease-out',
                        mixBlendMode: 'multiply', // Helps it blend like ink on paper
                    }}
                >
                    <HeroIllustration />
                </div>

                {/* Radial Spotlight Gradient */}
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        zIndex: 2,
                        opacity: Math.max(0, 1 - progress * 1.5), // Fades out with text
                        background: 'radial-gradient(ellipse 80% 60% at 30% 40%, rgba(255, 255, 255, 0.6) 0%, transparent 70%)',
                        pointerEvents: 'none',
                    }}
                />

                {/* Content Overlay */}




                {/* Content Overlay */}
                <div
                    className="container"
                    style={{
                        position: 'relative',
                        zIndex: 10,
                        textAlign: 'center',
                        opacity: textOpacity,
                        transform: `translateY(${textTranslateY}px)`,
                        transition: 'opacity 0.1s ease-out, transform 0.1s ease-out',
                        pointerEvents: textOpacity > 0.1 ? 'auto' : 'none',
                    }}
                >
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        textAlign: 'left',
                        maxWidth: '700px',
                        paddingTop: '8rem',
                        paddingLeft: '2rem',
                    }}>
                        {/* Label */}
                        <div
                            className="animate-fade-in-down label-caps"
                            style={{
                                marginBottom: '2rem',
                                padding: '0.5rem 1rem',
                                background: 'rgba(255, 255, 255, 0.9)',
                                borderRadius: 'var(--radius-full)',
                                border: '1px solid var(--color-border-light)',
                                backdropFilter: 'blur(8px)',
                            }}
                        >
                            Coming Soon for Gmail
                        </div>

                        {/* Main Headline */}
                        <h1
                            className="animate-fade-in-up"
                            style={{
                                marginBottom: '2rem',
                                fontSize: 'clamp(3rem, 8vw, 5.5rem)',
                                fontFamily: 'var(--font-serif)',
                                fontWeight: 400,
                                lineHeight: 1.05,
                                letterSpacing: '-0.03em',
                                color: 'var(--color-text-primary)',
                            }}
                        >
                            Your Inbox, but Calmer
                        </h1>

                        {/* Subheadline - Prominent */}
                        <p
                            className="animate-fade-in-up delay-200"
                            style={{
                                fontSize: '1.375rem',
                                lineHeight: 1.6,
                                marginBottom: '1rem',
                                color: 'var(--color-text-primary)',
                                fontWeight: 500,
                            }}
                        >
                            The Interface for Deep Work.
                        </p>

                        {/* Supporting Copy */}
                        <p
                            className="animate-fade-in-up delay-200"
                            style={{
                                maxWidth: '540px',
                                marginBottom: '2.5rem',
                                fontSize: '1.125rem',
                                lineHeight: 1.7,
                                color: 'var(--color-text-secondary)',
                            }}
                        >
                            Gmail mixes everything together; Minmailist untangles it. Gate unwanted senders,
                            stream newsletters in a Feed, and visualize tasks on a Board. Finally, a workspace
                            that protects your attention instead of fracturing it.
                        </p>

                        {/* CTA Buttons */}
                        <div
                            className="animate-fade-in-up delay-300"
                            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
                        >
                            <a href="#waitlist" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1rem' }}>
                                Join the Waitlist
                            </a>
                            <a href="#features" className="btn btn-secondary" style={{ padding: '1rem 2rem', fontSize: '1rem', background: 'rgba(255,255,255,0.5)' }}>
                                Explore Features
                            </a>
                        </div>
                    </div>
                </div>

                {/* Background Image Container */}
                <div
                    style={{
                        position: 'absolute',
                        inset: `${insetVal}rem`, // 2rem -> 0rem
                        zIndex: 0,
                        borderRadius: `${borderRadius}px`,
                        overflow: 'hidden',
                        // Smooth out the layout changes
                        transition: 'inset 0.1s linear, border-radius 0.1s linear',
                        boxShadow: 'var(--shadow-2xl)',
                    }}
                >
                    <div
                        style={{
                            width: '100%',
                            height: '100%',
                            backgroundImage: 'url(/hero-dashboard.png)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'top left',
                            transform: `scale(${imageScale})`,
                            filter: `blur(${blurAmount}px)`,
                            // Hardware acceleration for smoother filters
                            willChange: 'transform, filter',
                            transition: 'filter 0.1s linear, transform 0.1s linear',
                        }}
                    />
                    {/* Overlay - Fades out */}
                    <div
                        style={{
                            position: 'absolute',
                            inset: 0,
                            background: `rgba(241, 227, 211, ${overlayOpacity})`,
                            pointerEvents: 'none',
                        }}
                    />
                </div>
            </div>
        </section>
    );
}
