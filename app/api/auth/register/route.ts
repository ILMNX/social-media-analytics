import { NextResponse } from 'next/server';
import { db } from '@/src/db';
import { authTable } from '@/src/db/schema';
import bcrypt from 'bcryptjs';

export async function POST(req: Request) {
  try {
    const { email, password, username } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);

    await db.insert(authTable).values({
      email,
      password: hashedPassword,
      username,
    });

    return NextResponse.json({ message: 'User created successfully' });
  } catch {
    return NextResponse.json(
      { error: 'Registration failed' },
      { status: 500 }
    );
  }
}