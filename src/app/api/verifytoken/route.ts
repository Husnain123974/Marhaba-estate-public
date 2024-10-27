import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

export async function POST(req: Request) {
  try {

 console.log("Helow verify ----------------- ");

    // Retrieve the token from the request body
    const { token } = await req.json();


    console.log("backend token   ----------------- ");


    if (!token) {
      return NextResponse.json(
        { message: 'Token not provided' },
        { status: 400 }
      );
    }

    // Verify the JWT token
    const decoded = jwt.verify(token, JWT_SECRET);

    console.log("DECODE ------- ",decoded);


    // Token is valid
    return NextResponse.json(
      {
        message: 'Token is valid',
        user: decoded,
      },
      { status: 200 }
    );
  } catch (error: any) {
    // Handle token verification errors

    console.log("Token ------ERRRORR ------ ",error);
    return NextResponse.json(
      {
        message: 'Invalid or expired token',
        error: error.message,
      },
      { status: 401 }
    );
  }
}
