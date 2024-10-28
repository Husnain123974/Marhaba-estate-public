import { NextResponse } from 'next/server';
import supabase from '@/config/supabase';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';
const JWT_EXPIRATION = '7d'; // Adjust expiration as needed

export async function POST(req: Request) {
  try {


    const { email, password } = await req.json();
    console.log("EMail Password  ------- ",email );
    console.log("EMail Password  ------- ",password );
    
 

    // Fetch the user from Supabase by name (or by email, depending on your requirements)
    const { data: users, error } = await supabase
      .from('users')
      .select('id, name, email, password')
      .eq('email', email)
      .limit(1);

    if (error) {
      throw new Error('Database error during user lookup');
    }

    console.log("Uswers ------- ", users);

    const user = users?.[0];
    if (!user) {
      return NextResponse.json(
        { message: 'User not found' },
        { status: 404 }
      );
    }



    // Validate the password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { message: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Generate JWT
    const token = jwt.sign(
      { userId: user.id, name: user.name },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRATION }
    );

    // Respond with user data and JWT
    return NextResponse.json(
      {
        message: 'Login successful',
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          // Any additional fields can be included here
        },
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Login error:', error.message);
    return NextResponse.json(
      { message: 'An error occurred. Please try again later.', error: error.message },
      { status: 500 }
    );
  }
}
