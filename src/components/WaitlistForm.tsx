'use client';

import React, { useState } from 'react';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function WaitlistForm() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<FormStatus>('idle');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email) return;

        setStatus('loading');
        setMessage('');

        try {
            const response = await fetch('/api/waitlist', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, source: 'landing_page' }),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setMessage(data.message || 'Thanks for joining!');
                setEmail('');
            } else {
                setStatus('error');
                setMessage(data.error || 'Something went wrong');
            }
        } catch {
            setStatus('error');
            setMessage('Network error. Please try again.');
        }
    };

    return (
        <div id="waitlist" style={{ width: '100%', maxWidth: '480px' }}>
            <form
                onSubmit={handleSubmit}
                style={{
                    display: 'flex',
                    gap: '0.75rem',
                    flexWrap: 'wrap',
                }}
            >
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    disabled={status === 'loading'}
                    style={{
                        flex: '1 1 280px',
                        padding: '1rem 1.25rem',
                        fontSize: '1rem',
                        border: '1px solid var(--color-border-light)',
                        borderRadius: 'var(--radius-lg)',
                        background: 'white',
                        outline: 'none',
                        transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                    }}
                    onFocus={(e) => {
                        e.currentTarget.style.borderColor = 'var(--color-accent-primary)';
                        e.currentTarget.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                    }}
                    onBlur={(e) => {
                        e.currentTarget.style.borderColor = 'var(--color-border-light)';
                        e.currentTarget.style.boxShadow = 'none';
                    }}
                />
                <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn btn-primary"
                    style={{
                        padding: '1rem 2rem',
                        fontSize: '1rem',
                        cursor: status === 'loading' ? 'wait' : 'pointer',
                        opacity: status === 'loading' ? 0.7 : 1,
                    }}
                >
                    {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
                </button>
            </form>

            {/* Status Message */}
            {message && (
                <p
                    style={{
                        marginTop: '1rem',
                        fontSize: '0.9375rem',
                        color: status === 'success'
                            ? 'var(--color-success, #16a34a)'
                            : 'var(--color-error, #dc2626)',
                        fontWeight: 500,
                    }}
                >
                    {status === 'success' ? '✓ ' : ''}{message}
                </p>
            )}
        </div>
    );
}
