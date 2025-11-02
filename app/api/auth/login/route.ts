// app/api/auth/login/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  if (body.email === "lanre@gmail.com" && body.password === "password") {
    return NextResponse.json(
      { token: "mocked-jwt-token", user: { id: 1, email: body.email } },
      { status: 200 }
    );
  }

  return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
}
