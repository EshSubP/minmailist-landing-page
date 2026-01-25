import React from 'react';

export default function PrivacyPolicy() {
    return (
        <main
            style={{
                background: 'var(--color-bg-primary)',
                minHeight: '100vh',
                padding: 'var(--space-2xl) 0',
            }}
        >
            <div className="container container-narrow">
                <header style={{ marginBottom: 'var(--space-2xl)' }}>
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
                        Privacy Policy
                    </h1>
                    <p className="body-lg" style={{ color: 'var(--color-text-secondary)' }}>
                        Effective Date: January 25, 2026
                    </p>
                </header>

                <div className="privacy-content" style={{ display: 'grid', gap: 'var(--space-xl)' }}>
                    <section>
                        <h2 className="headline-md" style={{ marginBottom: 'var(--space-md)' }}>Introduction</h2>
                        <p className="body-md">
                            Minmailist ("we," "our," or "us") is a Chrome extension compliant with Gmail API security laws.
                            We are committed to protecting your privacy and ensuring your data is handled with transparency and care.
                        </p>
                    </section>

                    <section>
                        <h2 className="headline-md" style={{ marginBottom: 'var(--space-md)' }}>Google User Data Access</h2>
                        <p className="body-md" style={{ marginBottom: 'var(--space-sm)' }}>
                            We access and use your Google user data solely to provide the functions of our extension. We request access for the following permissions:
                        </p>
                        <ul className="body-md" style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--color-text-secondary)' }}>
                            <li><strong>Email:</strong> To read, draft, and send messages on your behalf.</li>
                            <li><strong>Contacts:</strong> To help you manage and organize your communications.</li>
                            <li><strong>Calendar Events:</strong> To assist with scheduling and time management.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="headline-md" style={{ marginBottom: 'var(--space-md)' }}>Data Usage</h2>
                        <p className="body-md">
                            We use your Google data exclusively to enable the reading, drafting, and sending of messages directly within the Minmailist extension.
                            This usage is strictly operational and designed to enhance your email productivity.
                        </p>
                    </section>

                    <section>
                        <h2 className="headline-md" style={{ marginBottom: 'var(--space-md)' }}>Data Storage</h2>
                        <p className="body-md">
                            <strong>We do not store your emails, messages, contacts, or calendar events on our servers.</strong>
                            All processing of this data occurs locally within your browser or transiently during operation. We do not maintain a permanent record of your personal communication data.
                        </p>
                    </section>

                    <section>
                        <h2 className="headline-md" style={{ marginBottom: 'var(--space-md)' }}>Third-Party Sharing & Disclosure</h2>
                        <p className="body-md" style={{ marginBottom: 'var(--space-sm)' }}>
                            We are committed to your privacy:
                        </p>
                        <ul className="body-md" style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--color-text-secondary)' }}>
                            <li>We <strong>do not</strong> use your data for advertisement purposes.</li>
                            <li>We <strong>do not</strong> sell your data to third parties.</li>
                            <li>
                                We only disclose data to third-party service providers who assist in operating our platform, such as AI processing services.
                                These providers are bound by strict confidentiality agreements and are prohibited from using your data for any other purpose.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="headline-md" style={{ marginBottom: 'var(--space-md)' }}>Compliance</h2>
                        <p className="body-md">
                            Minmailist is fully compliant with Gmail API security requirements and adheres to Google's Limited Use Policy.
                        </p>
                    </section>

                    <section>
                        <h2 className="headline-md" style={{ marginBottom: 'var(--space-md)' }}>Contact Us</h2>
                        <p className="body-md">
                            If you have any questions or concerns about this Privacy Policy, please contact us.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
