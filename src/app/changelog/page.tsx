import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GridBackground from '@/components/GridBackground';

export default function ChangelogPage() {
    return (
        <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
            <GridBackground />
            <Header />

            <div style={{ flex: 1, padding: '8rem 0 4rem' }}>
                <div className="container container-narrow">
                    <div className="animate-fade-in-up">
                        <h1 className="headline-lg" style={{ marginBottom: '1rem' }}>Changelog</h1>
                        <p className="body-lg" style={{ marginBottom: '4rem', maxWidth: '600px' }}>
                            Stay updated with the latest improvements, fixes, and new features in Minmailist.
                        </p>

                        <div style={{ position: 'relative' }}>
                            {/* Vertical Line */}
                            <div style={{
                                position: 'absolute',
                                left: '0',
                                top: '0',
                                bottom: '0',
                                width: '1px',
                                background: 'var(--color-border-medium)',
                                display: 'none', // Hidden for now, maybe enable for multiple entries
                            }} />

                            {/* Release Entry */}
                            <div style={{ marginBottom: '4rem' }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'baseline',
                                    flexWrap: 'wrap',
                                    gap: '1rem',
                                    marginBottom: '1.5rem'
                                }}>
                                    <h2 className="headline-md" style={{ margin: 0 }}>v0.1.0</h2>
                                    <span className="label-caps" style={{
                                        color: 'var(--color-accent-terracotta)', // Specific color for this status
                                        background: 'rgba(193, 124, 116, 0.1)',
                                        padding: '0.25rem 0.75rem',
                                        borderRadius: 'var(--radius-full)',
                                    }}>
                                        Planned
                                    </span>
                                    <span className="body-sm" style={{ color: 'var(--color-text-tertiary)' }}>
                                        Scheduled for February 20, 2026
                                    </span>
                                </div>

                                <div className="glass" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
                                    <p className="body-md" style={{ marginBottom: '1.5rem' }}>
                                        Our initial public release will focus on essential features and achieving full CASA certification for launch in the Chrome Web Store.                                    </p>

                                    <h3 className="headline-sm" style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
                                        Highlights
                                    </h3>
                                    <ul style={{
                                        listStyle: 'none',
                                        padding: 0,
                                        margin: 0,
                                        display: 'grid',
                                        gap: '0.75rem'
                                    }}>
                                        {[
                                            'Core Splits and Bundles feature',
                                            'Initial bug fixes and stability improvements',
                                            'Zen Home experience'
                                        ].map((item, index) => (
                                            <li key={index} style={{
                                                display: 'flex',
                                                gap: '0.75rem',
                                                alignItems: 'start',
                                                color: 'var(--color-text-secondary)',
                                                fontSize: '0.9375rem'
                                            }}>
                                                <span style={{
                                                    color: 'var(--color-accent-sage)',
                                                    marginTop: '0.25em'
                                                }}>•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
