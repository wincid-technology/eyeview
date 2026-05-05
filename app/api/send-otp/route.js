import nodemailer from "nodemailer";

export const runtime = "nodejs"; // ✅ IMPORTANT

export async function POST(req) {
  const { email, otp } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "OTP Code",
    text: `Your OTP is ${otp}`,
  });

  return Response.json({ success: true });
}