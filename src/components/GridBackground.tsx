import React from 'react';

export default function GridBackground() {
    return (
        <div style={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            overflow: 'hidden',
            pointerEvents: 'none'
        }}>
            {/* Square Grid Pattern Layer */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
                                      linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    opacity: 0.5,
                }}
            />

            {/* Radial Spotlight Gradient */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255, 255, 255, 0.8) 0%, transparent 70%)',
                }}
            />
        </div>
    );
}
