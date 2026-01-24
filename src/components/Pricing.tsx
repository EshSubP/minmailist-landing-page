'use client';

import React, { useState } from 'react';

// Icons
const CheckIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-accent-sage)] shrink-0">
        <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
);

// Comprehensive Perks List
const allFeatures = [
    "Minimalist UI",
    "Split Inbox",
    "Command Centre",
    "Keyboard Shortcuts",
    "Workflow and Workspace",
    "Feed View",
    "Autolabels",
    "Sender Screening",
    "Sender View",
    "Smart Summaries",
    "Bulk Actions",
    "Dedicated support",
    "Starred Collections",
    "Zen Home",
    "Gmail UI Tweaks",
    "Privacy Focused"
];

export default function Pricing() {
    const [isAnnual, setIsAnnual] = useState(false);

    const monthlyPrice = 6;
    const annualPrice = 50;
    const monthlyEquivalent = (annualPrice / 12).toFixed(2);

    return (
        <section
            id="pricing"
            className="relative py-24 bg-gradient-to-b from-[#FCFAF7] to-[#F9F3EC] overflow-hidden"
        >
            {/* Grid Pattern Background */}
            <div
                className="absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-multiply"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
                                      linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                }}
            />

            {/* Radial Gradient for warmth */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-accent-warm)]/5 blur-[120px] rounded-full pointer-events-none"
            />

            <div className="container relative z-10">
                {/* Header */}
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <div className="label-caps mb-4 text-[var(--color-text-secondary)]">Simple Pricing</div>
                    <h2 className="headline-lg text-[var(--color-text-primary)] mb-6">
                        Invest in your <span className="italic font-serif text-[var(--color-accent-terracotta)]">attention</span>.
                    </h2>
                </div>

                {/* Billing Toggle */}
                <div className="flex justify-center items-center gap-4 mb-16">
                    <span className={`text-sm font-medium transition-colors ${!isAnnual ? 'text-[var(--color-text-primary)]' : 'text-[var(--color-text-muted)]'}`}>
                        Monthly
                    </span>
                    <button
                        onClick={() => setIsAnnual(!isAnnual)}
                        className="relative w-14 h-8 rounded-full bg-[var(--color-bg-tertiary)] border border-[var(--color-border-medium)] p-1 transition-colors hover:border-[var(--color-accent-warm)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-warm)]/20"
                    >
                        <div
                            className={`w-5 h-5 rounded-full bg-[var(--color-text-primary)] shadow-sm transition-transform duration-300 ${isAnnual ? 'translate-x-6' : 'translate-x-0'
                                }`}
                        />
                    </button>
                    <span className={`text-sm font-medium transition-colors ${isAnnual ? 'text-[var(--color-text-primary)]' : 'text-[var(--color-text-muted)]'}`}>
                        Annually <span className="text-[var(--color-accent-sage)] text-xs ml-1 font-sans">Save ~30%</span>
                    </span>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20 items-stretch">

                    {/* Free Plan */}
                    <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-[var(--color-border-medium)] flex flex-col hover:shadow-lg transition-shadow duration-300">
                        <div className="mb-6">
                            <h3 className="font-serif text-2xl text-[var(--color-text-primary)] mb-2">Basic</h3>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-serif text-[var(--color-text-primary)]">$0</span>
                                <span className="text-[var(--color-text-secondary)]">/ month</span>
                            </div>
                            <p className="mt-4 text-[var(--color-text-secondary)] text-sm leading-relaxed">
                                The essential experience. Perfect for regaining control of your inbox without cost.
                            </p>
                        </div>

                        <div className="mt-auto">
                            <button className="w-full py-3 px-6 rounded-xl border border-[var(--color-text-primary)] text-[var(--color-text-primary)] font-medium hover:bg-[var(--color-text-primary)] hover:text-white transition-all duration-200">
                                Get Started
                            </button>
                        </div>
                    </div>

                    {/* Pro Plan */}
                    <div className="relative bg-[#F5F0E8] rounded-2xl p-8 border border-[#E6DCC9] flex flex-col shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgba(196,167,125,0.1)] transition-shadow duration-300">
                        <div className="absolute -top-3 right-8 bg-[var(--color-accent-primary)] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                            Recommended
                        </div>

                        <div className="mb-6">
                            <h3 className="font-serif text-2xl text-[var(--color-text-primary)] mb-2 flex items-center gap-2">
                                Minmailist <span className="italic text-[var(--color-accent-terracotta)]">+</span>
                            </h3>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-serif text-[var(--color-text-primary)]">
                                    ${isAnnual ? monthlyEquivalent : monthlyPrice}
                                </span>
                                <span className="text-[var(--color-text-secondary)]">/ month</span>
                            </div>
                            {isAnnual && (
                                <p className="text-xs text-[var(--color-text-muted)] mt-1">
                                    Billed as ${annualPrice} per year
                                </p>
                            )}
                            <p className="mt-4 text-[var(--color-text-secondary)] text-sm leading-relaxed">
                                For power users who want the ultimate zen experience. Early access to experimental features.
                            </p>
                        </div>

                        <div className="mt-auto">
                            <button
                                disabled
                                className="w-full py-3 px-6 rounded-xl bg-[var(--color-text-muted)] text-white font-medium cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                Coming Soon
                            </button>
                        </div>
                    </div>
                </div>

                {/* Features List - Exhaustive */}
                {/* <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-10">
                        <h4 className="font-serif text-xl text-[var(--color-text-primary)]">
                            All Features included
                        </h4>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-4">
                        {allFeatures.map((feature, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="mt-0.5">
                                    <CheckIcon />
                                </div>
                                <span className="text-sm text-[var(--color-text-secondary)] font-medium">
                                    {feature}
                                </span>
                            </div>
                        ))}
                    </div>
                </div> */}
            </div>
        </section>
    );
}
