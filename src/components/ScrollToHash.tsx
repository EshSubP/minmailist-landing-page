'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function ScrollToHash() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        // Get the hash from the URL
        const hash = window.location.hash;
        if (hash) {
            // Small delay to ensure the DOM is ready
            setTimeout(() => {
                const element = document.querySelector(hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }, [pathname, searchParams]);

    return null;
}
