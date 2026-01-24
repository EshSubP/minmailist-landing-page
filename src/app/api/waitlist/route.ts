import { NextRequest, NextResponse } from 'next/server';
import { usersCollection } from '@/lib/firebase';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { email, source = 'landing_page' } = body;

        // Validate email
        if (!email || typeof email !== 'string') {
            return NextResponse.json(
                { error: 'Email is required' },
                { status: 400 }
            );
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            );
        }

        // Check for duplicate
        const existingUser = await usersCollection
            .where('email', '==', email.toLowerCase())
            .limit(1)
            .get();

        if (!existingUser.empty) {
            return NextResponse.json(
                { error: 'Email already registered' },
                { status: 409 }
            );
        }

        // Create new user document
        const docRef = usersCollection.doc();
        const newUser = {
            id: docRef.id,
            email: email.toLowerCase(),
            createdAt: new Date(),
            status: 'waitlist',
            source: source,
        };

        await docRef.set(newUser);

        return NextResponse.json(
            { message: 'Successfully joined the waitlist!', id: docRef.id },
            { status: 201 }
        );
    } catch (error) {
        console.error('Waitlist signup error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
