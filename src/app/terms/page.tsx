import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GridBackground from '@/components/GridBackground';

export default function TermsOfService() {
    return (
        <main
            style={{
                background: 'var(--color-bg-primary)',
                minHeight: '100vh',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <GridBackground />
            <Header />
            <div style={{ flex: 1, padding: 'var(--space-2xl) 0', position: 'relative', zIndex: 1 }}>
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
                            Terms of Service
                        </h1>
                        <p className="body-lg" style={{ color: 'var(--color-text-secondary)' }}>
                            Effective Date: January 25, 2026
                        </p>
                    </header>

                    <div className="terms-content" style={{ display: 'grid', gap: 'var(--space-xl)' }}>
                        <section>
                            <h2 className="headline-md" style={{ marginBottom: 'var(--space-md)' }}>Introduction</h2>
                            <p className="body-md">
                                Welcome to Minmailist. By accessing or using our Chrome extension and services, you agree to be bound by these Terms of Service.
                                Please read them carefully before using our platform.
                            </p>
                        </section>

                        <section>
                            <h2 className="headline-md" style={{ marginBottom: 'var(--space-md)' }}>User Responsibilities</h2>
                            <p className="body-md" style={{ marginBottom: 'var(--space-sm)' }}>
                                As a user of Minmailist, you agree to:
                            </p>
                            <ul className="body-md" style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--color-text-secondary)' }}>
                                <li>Act responsibly and ethically when using our services.</li>
                                <li>Not use Minmailist for any illegal, harmful, or unauthorized activities.</li>
                                <li>Comply with all applicable laws and regulations in your jurisdiction.</li>
                                <li>Maintain the confidentiality of your account credentials.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="headline-md" style={{ marginBottom: 'var(--space-md)' }}>Account & Subscription</h2>
                            <p className="body-md" style={{ marginBottom: 'var(--space-sm)' }}>
                                To become a Minmailist customer, you must:
                            </p>
                            <ul className="body-md" style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--color-text-secondary)' }}>
                                <li>Create an account with valid information.</li>
                                <li>Subscribe to a paid plan to access premium features.</li>
                                <li>Fees will be incurred based on your selected subscription tier.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="headline-md" style={{ marginBottom: 'var(--space-md)' }}>Cancellation & Refunds</h2>
                            <p className="body-md" style={{ marginBottom: 'var(--space-sm)' }}>
                                You have full control over your subscription:
                            </p>
                            <ul className="body-md" style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--color-text-secondary)' }}>
                                <li>You may cancel or downgrade your subscription at any time.</li>
                                <li>Cancellation takes effect at the end of your current billing cycle.</li>
                                <li><strong>No refunds</strong> will be provided for any unused portion of your subscription.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="headline-md" style={{ marginBottom: 'var(--space-md)' }}>Restrictions on Use</h2>
                            <p className="body-md" style={{ marginBottom: 'var(--space-sm)' }}>
                                You agree not to:
                            </p>
                            <ul className="body-md" style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--color-text-secondary)' }}>
                                <li>Reverse engineer, decompile, or disassemble any part of Minmailist.</li>
                                <li>Use Minmailist to develop a competing product or service.</li>
                                <li>Share, resell, or redistribute access to your account or our services.</li>
                                <li>Use automated systems to access our services in an unauthorized manner.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="headline-md" style={{ marginBottom: 'var(--space-md)' }}>Intellectual Property</h2>
                            <p className="body-md">
                                All content, features, and functionality of Minmailist—including but not limited to text, graphics, logos, and software—are the exclusive property of Minmailist and are protected by copyright, trademark, and other intellectual property laws.
                            </p>
                        </section>

                        <section>
                            <h2 className="headline-md" style={{ marginBottom: 'var(--space-md)' }}>Limitation of Liability</h2>
                            <p className="body-md">
                                To the fullest extent permitted by law, Minmailist shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
                            </p>
                        </section>

                        <section>
                            <h2 className="headline-md" style={{ marginBottom: 'var(--space-md)' }}>Changes to Terms</h2>
                            <p className="body-md">
                                We reserve the right to modify these Terms of Service at any time. We will notify users of any material changes by updating the "Effective Date" at the top of this page. Continued use of Minmailist after changes constitutes acceptance of the new terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="headline-md" style={{ marginBottom: 'var(--space-md)' }}>Contact Us</h2>
                            <p className="body-md">
                                If you have any questions about these Terms of Service, please contact us.
                            </p>
                        </section>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
